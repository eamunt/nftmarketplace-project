import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Text, Flex, Button } from "@pancakeswap/uikit"
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { FetchDataNft } from "../hook/fetchDataMysteryBox"
import CardShoes from "./CardShoes";

interface Props {
    filter?:number
    query?: string
}
const ListShoes:React.FC<Props> = () => {

    const currentItems = [
        {
            token_id: 1,
            name: "FlyingDoge NFT - Testnet",
            image: "https://airdrop.coredoge.xyz/DogeNFT.png",
            comfy: "5",
            efficiency: "5",
            luck: "5",
            sturdence_remain: "5",
            nftType: "5",
            energy_mining: "5",
            mininghydro: "5",
            energy: "5",
            sneaker_config: [
                {
                    value: 100
                },
                {
                    value: 100
                }
            ],
            sturdence: 7,
            quantity: 0,
            type: "3"
        }
    ]
    
    const { account, chainId } = useActiveWeb3React()
    const { nftBalance } = FetchDataNft(account, chainId)
    currentItems[0].quantity = nftBalance;

    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ?
                    <>
                        {currentItems?.map((item) => {
                            return (
                                <CardShoes 
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.type}
                                    speed={item.sneaker_config[1].value}
                                    quantity={item.quantity}
                                /> 
                            )
                        })}
                    </>
                :
                    <Flex width='100%' justifyContent='center'>
                        <Text mt="2rem">No Data</Text>
                    </Flex>
                }
            </CsFlex>
        </CsFlexContainer>
    )
}
export default ListShoes

const CustomFlex = styled(Flex)`
    margin-bottom:1.5rem;
    .pagination{
        display:flex;
        flex-direction: row;
        width:500px;
        justify-content:space-around;
        align-items:center;
        @media screen and (max-width: 600px){
            width: 100%;
        }
        *{
            list-style-type: none;
        }
    }
    .page-link {
        background:${({ theme }) => theme.colors.tertiary};
        padding:12px;
        border-radius:5px !important;
        border:none !important;
        color:${({ theme }) => theme.colors.text};
        &:focus {
            box-shadow:none !important;
        }
        &:hover{
            background:${({ theme }) => theme.colors.backgroundTab};
        }
    }
    .page-item.disabled .page-link{
        background:${({ theme }) => theme.colors.disabled};
        cursor: not-allowed! important;
        opacity: 0.7;
        pointer-events:none;
    }
    .page-item.active .page-link{
        background:${({ theme }) => theme.colors.primaryBright};
        color:#fff;
    }
`
const CsFlex = styled(Flex)`    
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 24px;
    padding: 0px 60px;
@media screen and (min-width: 769px) and (max-width: 1024px){
    width: 80%;
    justify-content: space-between;
    column-gap: 0px;
    padding: 0px;
}
@media screen and (max-width: 768px){
    justify-content: space-between;
    column-gap: 0px;
    padding: 0px;
}
@media screen and (max-width: 600px){
    justify-content: center;
    gap: 0px;
    padding: 0px 10px;
}
`
const CsFlexContainer = styled(Flex)`
    @media screen and (min-width: 769px) and (max-width: 1024px){
        align-items: center;
    }
`