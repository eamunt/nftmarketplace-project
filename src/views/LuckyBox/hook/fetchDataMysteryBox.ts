/* eslint-disable no-await-in-loop */
import { getAddress } from 'utils/addressHelpers';
import contracts from 'config/constants/contracts';
import multicall from 'utils/multicall';
import mysteryBoxAbi from 'config/abi/mysteryBox.json';
import BigNumber from 'bignumber.js';
import { useEffect, useState } from 'react';
import coreBuyNFTAbi from '../../../config/abi/coreBuyNFTAbi.json';
import coreTokenAbi from '../../../config/abi/coreTokenAbi.json';

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
        if (account != null) {
            fetchDataBox();
        } else {
            setNftBalance(0);
        }
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
        if (account != null) {
            fetchDataBox();
        } else {
            setNftBalance(0);
        }
    }, [account]);

    return { nftBalance };
};

export const TokenIdArray = (account: string, chainId: number, nftBalance: number) => {
    const [tokenIdArr, setTokenId] = useState([]);
    useEffect(() => {
        const fetchDataBox = async () => {
            const arr = [];
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
        if (account != null) {
            fetchDataBox();
        } else {
            setTokenId([]);
        }
    }, [account, chainId, nftBalance]);

    return { tokenIdArr };
};

export const GetPriceNft = (chainId: number) => {
    const [priceArr, setPriceArr] = useState([]);
    useEffect(() => {
        const fetchDataBox = async () => {
            const arr1 = [];
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
                arr1.push(index / 1e18);
            }

            setPriceArr(arr1);
        };
        if (chainId != null) {
            fetchDataBox();
        } else {
            setPriceArr([]);
        }
    }, [chainId]);

    return { priceArr };
};

export const ListProduct = (priceArr: any) => {
    const nameArray = ['Silver', 'Gold', 'Ruby'];
    const arr = [];
    if (priceArr) {
        priceArr.forEach((price, i) => {
            arr.push({
                ID: i,
                name: `${nameArray[i]} box`,
                image: `/images/luckybox/box${i}.png`,
                comfy: '0',
                efficiency: '0',
                luck: '0',
                sturdence_remain: '0',
                nftType: i,
                nftPrice: price,
            });
        });
    }
    return arr;
};

export const GetAllowance = (account: string, spender: string, chainId: number, getRequestApproval: any) => {
    const [allowanceVar, setAllowanceVar] = useState(0);
    useEffect(() => {
        // get Allowance
        const fetchDataBox = async () => {
            const callBoxId = [
                {
                    address: getAddress(contracts.coreToken, chainId),
                    name: 'allowance',
                    params: [account, spender],
                },
            ];
            const idRunBox = await multicall(coreTokenAbi, callBoxId, chainId);
            const index = new BigNumber(idRunBox.toString()).toNumber();
            // setTokenId(index);
            setAllowanceVar(index / 1e18);
        };

        // da connect wallet nhung chua approve
        if (account != null && !getRequestApproval) {
            fetchDataBox();
        } else {
            setAllowanceVar(0);
        }
        /// approved
        if (getRequestApproval) {
            fetchDataBox();
        } else {
            setAllowanceVar(0);
        }
    }, [account, chainId, getRequestApproval]);

    return { allowanceVar };
};

export const GetTokenBalanceOf = (account: string, chainId: number) => {
    const [tokenBalanceOf, setTokenBalanceOf] = useState(0);
    // get balanceOf
    useEffect(() => {
        const fetchDataBox = async () => {
            const callBoxId = [
                {
                    address: getAddress(contracts.coreToken, chainId),
                    name: 'balanceOf',
                    params: [account],
                },
            ];
            const idRunBox = await multicall(coreTokenAbi, callBoxId, chainId);
            const index = new BigNumber(idRunBox.toString()).toNumber();
            // setTokenId(index);
            setTokenBalanceOf(index / 1e18);
        };
        if (account != null) {
            fetchDataBox();
        } else {
            setTokenBalanceOf(0);
        }
    }, [account]);

    return { tokenBalanceOf };
};
