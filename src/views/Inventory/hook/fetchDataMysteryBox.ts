import { getAddress } from 'utils/addressHelpers';
import contracts from 'config/constants/contracts';
import multicall from 'utils/multicall';
import mysteryBoxAbi from 'config/abi/mysteryBox.json';
import BigNumber from 'bignumber.js';
import { useEffect, useState } from 'react';
import { GetPriceNft } from '../../LuckyBox/hook/fetchDataMysteryBox';
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

export const GetDataFromVercel = (account, chainId: number, tokenIdArr) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [arr, setArr] = useState([]);

    console.log('hello6', tokenIdArr);
    useEffect(() => {
        const fetchDataBox = async () => {
            const arrTmp = [];
            console.log('tokenIdArr', tokenIdArr.length);
            for (let i = 0; i < tokenIdArr.length; i++) {
                fetch(`https://nft-marketplace-nextjs-roan.vercel.app/api/nft/${tokenIdArr[i]}`)
                    .then((response) => response.json())
                    .then((data) => {
                        // `data` contains the JSON response from the API
                        // You can perform further processing or use the data here
                        arrTmp.push(data);
                        // console.log('arr', i, arrTmp);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        // Handle any errors that occurred during the request
                    });
            }
            console.log('arrTmp', arrTmp);
            setArr(arrTmp);
            console.log('arr', arr);
            console.log('hello0');
        };

        if (arr.length > 0) {
            const arr1 = [];
            const sorted = arr.sort((a, b) => a.id - b.id);
            console.log('arrLength', arr.length);
            console.log('sortedLength', sorted.length);
            const image = 'image';
            const type = 'nftType';
            const id = 'id';
            const imageValues = sorted.map((obj) => obj[image]);
            const typeValues = sorted.map((obj) => obj[type]);
            const idValues = sorted.map((obj) => obj[id]);

            arr.forEach((number, i) => {
                console.log('ii', i, number);
                const temp = {
                    token_id: number,
                    name: `Box #${idValues[i]}`,
                    image: imageValues[i],
                    comfy: '0',
                    efficiency: '0',
                    luck: '0',
                    sturdence_remain: '0',
                    nftType: typeValues[i],
                    nftPrice: 1,
                };
                arr1.push(temp);
            });
            setCurrentItems(arr1);
        }
        console.log('hello3');
        console.log('arrValue', arr);
        console.log('Arr-lenght', arr.length);

        console.log('hihi', currentItems);
        if (chainId != null && account != null) {
            fetchDataBox();
        } else {
            setCurrentItems([]);
        }
    }, [account, chainId, tokenIdArr]);

    console.log('hello4');

    return { currentItems };
};

// export const GetTypeFromTokenId = (account: string, chainId: number, tokenId: number) => {
//     const [nftTypeVal, setNftTypeVal] = useState(0);
//     useEffect(() => {
//         const fetchDataBox = async () => {
//             try {
//                 const callBoxId = [
//                     {
//                         address: getAddress(contracts.coreBuyNFT, chainId),
//                         name: 'NFT_TYPE',
//                         params: [tokenId],
//                     },
//                 ];
//                 const idRunBox = await multicall(coreBuyNFTAbi, callBoxId, chainId);
//                 const index = new BigNumber(idRunBox.toString()).toNumber();

//                 setNftTypeVal(index);
//             } catch (e) {
//                 console.log(e);
//             }
//         };
//         fetchDataBox();
//     }, [account]);
//     return { nftTypeVal };
// };
