import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Flex, Button } from '@pancakeswap/uikit';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { FetchDataNft } from '../hook/fetchDataMysteryBox';
import CardShoes from './CardShoes';

// import { useBuyNFT } from '../hook/useBuyNFT';
import { useApprove } from '../hook/useApprove';

interface Props {
    filter?: number;
    query?: string;
}
const ListShoes: React.FC<Props> = () => {
    const { handleApprove } = useApprove(1116, '0x585b34473CEac1D60BD9B9381D6aBaF122008504');
    const currentItems = [
        {
            token_id: 0,
            name: 'FlyingDoge NFT - Testnet 1',
            image: '/images/luckybox/box0.png',
            comfy: '0',
            efficiency: '0',
            luck: '0',
            sturdence_remain: '0',
            nftType: 'haha',
            energy_mining: '0',
            mininghydro: '0',
            energy: '0',
            sneaker_config: [
                {
                    value: 0,
                },
                {
                    value: 0,
                },
            ],
            sturdence: 0,
            quantity: 0,
            type: '',
        },
        {
            token_id: 1,
            name: 'FlyingDoge NFT - Testnet 2',
            image: '/images/luckybox/box1.png',
            comfy: '0',
            efficiency: '0',
            luck: '0',
            sturdence_remain: '0',
            nftType: '0',
            energy_mining: '0',
            mininghydro: '0',
            energy: '0',
            sneaker_config: [
                {
                    value: 0,
                },
                {
                    value: 0,
                },
            ],
            sturdence: 0,
            quantity: 0,
            type: '',
        },
        {
            token_id: 2,
            name: 'FlyingDoge NFT - Testnet 3',
            image: '/images/luckybox/box2.png',
            comfy: '0',
            efficiency: '0',
            luck: '0',
            sturdence_remain: '0',
            nftType: '0',
            energy_mining: '0',
            mininghydro: '0',
            energy: '0',
            sneaker_config: [
                {
                    value: 0,
                },
                {
                    value: 0,
                },
            ],
            sturdence: 0,
            quantity: 0,
            type: '',
        },
    ];

    const onHandleApprove = () => {
        handleApprove();
    };

    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ? (
                    <>
                        {currentItems.map((item, index) => {
                            return (
                                <CardShoes
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.nftType}
                                    speed={item.sneaker_config[1].value}
                                    quantity={item.quantity}
                                    handleApprove1={onHandleApprove}
                                />
                            );
                        })}
                    </>
                ) : (
                    <h1>NO DATA</h1>
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
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
        justify-content: space-evenly;
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
