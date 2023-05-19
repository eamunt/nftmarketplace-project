import { getAddress } from "utils/addressHelpers";
import contracts from "config/constants/contracts";
import multicall from "utils/multicall";
import mysteryBoxAbi from "config/abi/mysteryBox.json"
import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";

export const FetchDataRunBoxIsOpen = (idMysteryBox, chainId: number) => {
    const [ dataBox, setDataBox ] = useState({
        tokenId: 0,
        type: 0
    });
    useEffect(() => {
      const fetchDataBox = async () => {
        try {
            const callBoxId = [
                {
                    address: getAddress(contracts.mysteryBox, chainId),
                    name: 'mysteryBoxNftMap',
                    params: [idMysteryBox]
                }
            ]
            const idRunBox = await multicall(mysteryBoxAbi, callBoxId, chainId);
            const index = new BigNumber(idRunBox.toString()).toNumber();
            const callBoxType = [
                {
                    address: getAddress(contracts.mysteryBox, chainId),
                    name: 'getBoxTypeRunTogether',
                    params: [index]
                }
            ]
            const boxType = await multicall(mysteryBoxAbi, callBoxType, chainId);   
            setDataBox({
                tokenId: new BigNumber(idRunBox.toString()).toNumber(),
                type: new BigNumber(boxType.toString()).toNumber()
            })
        } catch (e) {
          console.log(e)
        }
      }
      fetchDataBox()
    }, [idMysteryBox])
    return { dataBox }
}

export const FetchDataNft = (account: string, chainId: number) => {
    const [ nftBalance, setNftBalance ] = useState(0);
    useEffect(() => {
      const fetchDataBox = async () => {
        try {
            const callBoxId = [
                {
                    address: getAddress(contracts.mysteryBox, chainId),
                    name: 'balanceOf',
                    params: [account]
                }
            ]
            const idRunBox = await multicall(mysteryBoxAbi, callBoxId, chainId);
            const index = new BigNumber(idRunBox.toString()).toNumber();
            
            setNftBalance(index)
        } catch (e) {
          console.log(e)
        }
      }
      fetchDataBox()
    }, [account])
    return { nftBalance }
}