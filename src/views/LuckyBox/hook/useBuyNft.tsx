import { useTranslation } from '@pancakeswap/localization';
import { useToast } from '@pancakeswap/uikit';
import { ToastDescriptionWithTx } from 'components/Toast';
import contract from 'config/constants/contracts';
import { useCallWithMarketGasPrice } from 'hooks/useCallWithMarketGasPrice';
import { useCoreBuyNFT } from 'hooks/useContract';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAddress } from 'utils/addressHelpers';

export const useBuyNFT = (chainId: number, onRefresh, tyToken) => {
    console.log('tyToken', tyToken);
    const [requestedBuy, setRequestBuy] = useState(false);
    const { toastSuccess, toastError } = useToast();
    const { callWithMarketGasPrice } = useCallWithMarketGasPrice();
    const [isCloseBuy, setClose] = useState(false);
    const { t } = useTranslation();
    const marketPlaceContract = useCoreBuyNFT(getAddress(contract.coreBuyNFT, chainId));
    const [pendingBuy, setPendingBuy] = useState(false);
    console.log('--- buyitem 1', tyToken);
    const handleBuy = useCallback(async () => {
        setPendingBuy(true);
        try {
            // const strValue = new BigNumber(balance).multipliedBy(10 ** 18).toString();
            // console.log(strValue);
            console.log('buyitem 2', tyToken);
            const tx = await callWithMarketGasPrice(marketPlaceContract, 'buyItem', [tyToken]);
            console.log('buyitem 3', tyToken);
            // console.log(tx);
            const receipt = await tx.wait();
            if (receipt.status) {
                toastSuccess(
                    t(`Successfully buy ${tyToken}`),
                    <ToastDescriptionWithTx txHash={receipt.transactionHash} />,
                );
                setClose(true);
                setRequestBuy(true);
                onRefresh(Date.now());
                console.log('buyitem 4', tyToken);
            } else {
                // user rejected tx or didn't go thru
                toastError(
                    t('Error'),
                    t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
                );
                setRequestBuy(false);
            }
        } catch (e) {
            toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
            );
        } finally {
            setPendingBuy(false);
        }
    }, [callWithMarketGasPrice, marketPlaceContract, tyToken, toastSuccess, t, toastError]);

    return { handleBuy, requestedBuy, pendingBuy, isCloseBuy };
};
