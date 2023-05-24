/* eslint-disable no-await-in-loop */
import { getAddress } from 'utils/addressHelpers';
import contracts from 'config/constants/contracts';
import multicall from 'utils/multicall';
import mysteryBoxAbi from 'config/abi/mysteryBox.json';
import BigNumber from 'bignumber.js';
import { useEffect, useState } from 'react';
import coreBuyNFTAbi from '../../../config/abi/coreBuyNFTAbi.json';

export const FetchDataRunBoxIsOpen = (idMysteryBox, chainId: number) => {
    const [dataBox, setDataBox] = useState({
        tokenId: 0,
        type: 0,
    });
    useEffect(() => {
        const fetchDataBox = async () => {
            try {
                const callBoxId = [
                    {
                        address: getAddress(contracts.mysteryBox, chainId),
                        name: 'mysteryBoxNftMap',
                        params: [idMysteryBox],
                    },
                ];
                const idRunBox = await multicall(mysteryBoxAbi, callBoxId, chainId);
                const index = new BigNumber(idRunBox.toString()).toNumber();
                const callBoxType = [
                    {
                        address: getAddress(contracts.mysteryBox, chainId),
                        name: 'getBoxTypeRunTogether',
                        params: [index],
                    },
                ];
                const boxType = await multicall(mysteryBoxAbi, callBoxType, chainId);
                setDataBox({
                    tokenId: new BigNumber(idRunBox.toString()).toNumber(),
                    type: new BigNumber(boxType.toString()).toNumber(),
                });
            } catch (e) {
                console.log(e);
            }
        };
        fetchDataBox();
    }, [idMysteryBox]);
    return { dataBox };
};

export const FetchDataNft = (account: string, chainId: number) => {
    const [nftBalance, setNftBalance] = useState(0);
    useEffect(() => {
        const fetchDataBox = async () => {
            try {
                const callBoxId = [
                    {
                        address: getAddress(contracts.mysteryBox, chainId),
                        name: 'balanceOf',
                        params: [account],
                    },
                ];
                const idRunBox = await multicall(mysteryBoxAbi, callBoxId, chainId);
                const index = new BigNumber(idRunBox.toString()).toNumber();

                setNftBalance(index);
            } catch (e) {
                console.log(e);
            }
        };
        fetchDataBox();
    }, [account]);
    return { nftBalance };
};

export const FetchNFTBalance = (account: string, chainId: number) => {
    const [nftBalance, setNftBalance] = useState(0);
    useEffect(() => {
        const fetchDataBox = async () => {
            try {
                const callBoxId = [
                    {
                        address: getAddress(contracts.coreBuyNFT, chainId),
                        name: 'balanceOf',
                        params: [account],
                    },
                ];
                const idRunBox = await multicall(coreBuyNFTAbi, callBoxId, chainId);
                const index = new BigNumber(idRunBox.toString()).toNumber();

                setNftBalance(index);
            } catch (e) {
                console.log(e);
            }
        };
        fetchDataBox();
    }, [account]);

    return { nftBalance };
};

export const TokenIdArray = (account: string, chainId: number, nftBalance: number) => {
    const [tokenIdArr, setTokenId] = useState([]);
    const arr = [];
    useEffect(() => {
        const fetchDataBox = async () => {
            for (let i = 0; i < nftBalance; i++) {
                const callBoxId = [
                    {
                        address: getAddress(contracts.coreBuyNFT, chainId),
                        name: 'tokenOfOwnerByIndex',
                        params: [account, i],
                    },
                ];
                const idRunBox = await multicall(coreBuyNFTAbi, callBoxId, chainId);
                const index = new BigNumber(idRunBox.toString()).toNumber();
                // setTokenId(index);
                arr.push(index);
                // console.log('arr', arr);
            }
            setTokenId(arr);
        };
        fetchDataBox();
    }, [account, chainId, nftBalance]);

    return { tokenIdArr };
};

export const GetPriceNft = (chainId: number) => {
    const [priceArr, setPriceArr] = useState([]);
    const arr = [];
    useEffect(() => {
        const fetchDataBox = async () => {
            for (let i = 0; i < 3; i++) {
                const callBoxId = [
                    {
                        address: getAddress(contracts.coreBuyNFT, chainId),
                        name: 'NFT_PRICE',
                        params: [i],
                    },
                ];
                const idRunBox = await multicall(coreBuyNFTAbi, callBoxId, chainId);
                const index = new BigNumber(idRunBox.toString()).toNumber();
                // setTokenId(index);
                arr.push(index / 1e18);
                console.log(i, arr);
            }

            setPriceArr(arr);
        };
        fetchDataBox();
    }, []);

    return { priceArr };
};
