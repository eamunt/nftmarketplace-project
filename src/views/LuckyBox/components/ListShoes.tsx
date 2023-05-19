import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Flex, Button } from '@pancakeswap/uikit';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import { FetchDataNft } from '../hook/fetchDataMysteryBox';
import CardShoes from './CardShoes';

interface Props {
    filter?: number;
    query?: string;
}
const ListShoes: React.FC<Props> = () => {
    // const currentItems = [
    //     {
    //         token_id: 1,
    //         name: "FlyingDoge NFT - Testnet",
    //
    //         image: "/images/luckybox/box0.png",
    //         comfy: "5",
    //         efficiency: "5",
    //         luck: "5",
    //         sturdence_remain: "5",
    //         nftType: "5",
    //         energy_mining: "5",
    //         mininghydro: "5",
    //         energy: "5",
    //         sneaker_config: [
    //             {
    //                 value: 100
    //             },
    //             {
    //                 value: 100
    //             }
    //         ],
    //         sturdence: 7,
    //         quantity: 0,
    //         type: "3"
    //     },
    // ]

    // const { account, chainId } = useActiveWeb3React()
    // How to get data from blockchain <<<<
    // const { nftBalance } = FetchDataNft(account, chainId)
    // currentItems[0].quantity = nftBalance;

    const Items = [
        {
            token_id: 1,
            name: 'FlyingDoge NFT - Testnet',
            image: '/images/luckybox/box4.png',
            comfy: '5',
            efficiency: '5',
            luck: '5',
            sturdence_remain: '5',
            nftType: '5',
            energy_mining: '5',
            mininghydro: '5',
            energy: '5',
            sneaker_config: [
                {
                    value: 100,
                },
                {
                    value: 100,
                },
            ],
            sturdence: 7,
            quantity: 0,
            type: '3',
        },
        {
            token_id: 2,
            name: 'FlyingDoge NFT - Testnet',
            image: '/images/luckybox/box5.png',
            comfy: '5',
            efficiency: '5',
            luck: '5',
            sturdence_remain: '5',
            nftType: '5',
            energy_mining: '5',
            mininghydro: '5',
            energy: '5',
            sneaker_config: [
                {
                    value: 100,
                },
                {
                    value: 100,
                },
            ],
            sturdence: 7,
            quantity: 0,
            type: '3',
        },
        {
            token_id: 3,
            name: 'FlyingDoge NFT - Testnet',
            image: '/images/luckybox/box6.png',
            comfy: '5',
            efficiency: '5',
            luck: '5',
            sturdence_remain: '5',
            nftType: '5',
            energy_mining: '5',
            mininghydro: '5',
            energy: '5',
            sneaker_config: [
                {
                    value: 100,
                },
                {
                    value: 100,
                },
            ],
            sturdence: 7,
            quantity: 0,
            type: '3',
        },
        {
            token_id: 4,
            name: 'FlyingDoge NFT - Testnet',
            image: '/images/luckybox/box0.png',
            comfy: '5',
            efficiency: '5',
            luck: '5',
            sturdence_remain: '5',
            nftType: '5',
            energy_mining: '5',
            mininghydro: '5',
            energy: '5',
            sneaker_config: [
                {
                    value: 100,
                },
                {
                    value: 100,
                },
            ],
            sturdence: 7,
            quantity: 0,
            type: '3',
        },
    ];

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

    const randomBoxItem = (props) => {
        console.log(props);
        const { nftName, nftType, nftImage } = props;
        const itemId = Math.floor(Math.random() * 4) + 1;
        console.log(nftType);

        console.log(nftName);
        console.log(itemId);
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
                                    randomBoxItem={randomBoxItem}
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
