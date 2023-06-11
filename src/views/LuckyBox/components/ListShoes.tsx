import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Text, Flex, Button } from '@pancakeswap/uikit';
import useActiveWeb3React from 'hooks/useActiveWeb3React';
import CardShoes from './CardShoes';
import {
    FetchNFTBalance,
    GetAllowance,
    GetPriceNft,
    GetTokenBalanceOf,
    ListProduct,
} from '../hook/fetchDataMysteryBox';

import { useApprove } from '../hook/useApprove';
import { useBuyNFT } from '../hook/useBuyNft';

interface Props {
    filter?: number;
    query?: string;
}
const ListShoes: React.FC<Props> = () => {
    const { account, chainId } = useActiveWeb3React();
    const [refresh, setRefresh] = useState(0);
    const { nftBalance } = FetchNFTBalance(account, chainId);
    const { priceArr } = GetPriceNft(chainId);
    // console.log('pri', priceArr);
    const { tokenBalanceOf } = GetTokenBalanceOf(account, chainId);
    // console.log('tokenBalanceOf', tokenBalanceOf);
    function onRefresh(newValue: number) {
        setRefresh(newValue);
    }

    // currentItems.forEach((j) => {
    //     console.log(j);
    // });
    const [tyToken, setTyToken] = useState(-1);
    const [checkApproved, setCheckApproved] = useState(false);

    const { handleApprove, requestedApproval } = useApprove(
        1116,
        '0x585b34473CEac1D60BD9B9381D6aBaF122008504',
        checkApproved,
    );

    const { allowanceVar } = GetAllowance(
        account,
        '0xC24899C146835c6566629652152eae44210A96F6',
        chainId,
        requestedApproval,
    );

    const [currentItems, setCurrentItems] = useState([]);
    const { handleBuy } = useBuyNFT(chainId, onRefresh, tyToken);
    // console.log('baba 0.3');
    const onHandleApprove = () => {
        setCheckApproved(true);
    };

    useEffect(() => {
        const arr = ListProduct(priceArr);
        console.log('arr1', arr);
        setCurrentItems([...arr]);
    }, [checkApproved, requestedApproval, tokenBalanceOf, account]);

    const onHandleBuyItem = ({ nftType }) => {
        console.log('baba 0');
        setTyToken(nftType);
    };

    useEffect(() => {
        handleApprove();
        // set lai ve false
        setCheckApproved(false);
        if (requestedApproval === true) {
            const arr = ListProduct(priceArr);
            setCurrentItems([...arr]);
        }
    }, [checkApproved, requestedApproval]);

    useEffect(() => {
        console.log('baba');
        if (tyToken > -1) {
            handleBuy();
            setTyToken(-1);
        }
    }, [tyToken]);

    return (
        <CsFlexContainer width="100%" flexDirection="column" mt="3rem" height="auto" minHeight="50vh">
            <CsFlex>
                {currentItems?.length !== 0 ? (
                    <>
                        {currentItems.map((item) => {
                            return (
                                <CardShoes
                                    ID={item.token_id}
                                    nftName={item.name}
                                    nftImage={item.image}
                                    nftType={item.nftType}
                                    nftPrice={item.nftPrice}
                                    allowanceVar1={allowanceVar}
                                    tokenBalanceOf1={tokenBalanceOf}
                                    // speed={item.sneaker_config[1].value}
                                    // quantity={item.quantity}
                                    handleApprove1={onHandleApprove}
                                    onBuyItem={onHandleBuyItem}
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
