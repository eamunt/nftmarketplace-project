/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Flex, Button } from '@pancakeswap/uikit';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { FetchDataNft, GetDataFromVercel } from '../hook/fetchDataMysteryBox';
import CardShoes from './CardShoes';
import { TokenIdArray, FetchNFTBalance, GetPriceNft } from '../../LuckyBox/hook/fetchDataMysteryBox';

interface Props {
    filter?: number;
    query?: string;
}
const ListShoes: React.FC<Props> = () => {
    const { account, chainId } = useActiveWeb3React();
    const { nftBalance } = FetchNFTBalance(account, chainId);
    const { tokenIdArr } = TokenIdArray(account, chainId, nftBalance);
    console.log('hello54');
    const { currentItems } = GetDataFromVercel(account, chainId, tokenIdArr);

    console.log('hello3', nftBalance);
    console.log('hello5', tokenIdArr);

    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ? (
                    <>
                        {currentItems?.map((item) => {
                            return (
                                <CardShoes
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.nftType}
                                />
                            );
                        })}
                    </>
                ) : (
                    <Flex width="100%" justifyContent="center">
                        <Text mt="2rem">No Data</Text>
                    </Flex>
                )}
            </CsFlex>
        </CsFlexContainer>
    );
};
export default ListShoes;

const CustomFlex = styled(Flex)`
    margin-bottom: 1.5rem;
    .pagination {
        display: flex;
        flex-direction: row;
        width: 500px;
        justify-content: space-around;
        align-items: center;
        @media screen and (max-width: 600px) {
            width: 100%;
        }
        * {
            list-style-type: none;
        }
    }
    .page-link {
        background: ${({ theme }) => theme.colors.tertiary};
        padding: 12px;
        border-radius: 5px !important;
        border: none !important;
        color: ${({ theme }) => theme.colors.text};
        &:focus {
            box-shadow: none !important;
        }
        &:hover {
            background: ${({ theme }) => theme.colors.backgroundTab};
        }
    }
    .page-item.disabled .page-link {
        background: ${({ theme }) => theme.colors.disabled};
        cursor: not-allowed !important;
        opacity: 0.7;
        pointer-events: none;
    }
    .page-item.active .page-link {
        background: ${({ theme }) => theme.colors.primaryBright};
        color: #fff;
    }
`;
const CsFlex = styled(Flex)`
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 24px;
    padding: 0px 60px;
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
        justify-content: space-between;
        column-gap: 0px;
        padding: 0px;
    }
    @media screen and (max-width: 768px) {
        justify-content: space-between;
        column-gap: 0px;
        padding: 0px;
    }
    @media screen and (max-width: 600px) {
        justify-content: center;
        gap: 0px;
        padding: 0px 10px;
    }
`;
const CsFlexContainer = styled(Flex)`
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        align-items: center;
    }
`;
