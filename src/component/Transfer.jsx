import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SystemProgram, Transaction, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react';

const Transfer = () => {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function TransferSOL() {
        const recipientAddress = document.getElementById("recipient").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (!wallet.connected || !wallet.publicKey) {
            alert("Please connect your wallet");
            return;
        }
        if (!recipientAddress) {
            alert("Please enter recipient address");
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }
        try {
            const recipientPubkey = new PublicKey(recipientAddress);
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: recipientPubkey,
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );

            const signature = await wallet.sendTransaction(transaction, connection);
            alert(`Transfer successful! Signature: ${signature}`);
        } catch (error) {
            console.error("Transfer failed:", error);
            alert("Transfer failed. See console for details.");
        }
    }

    return (
        <div className='flex justify-center flex-col w-1/3 mx-auto'>
            <input id="recipient" type="text" placeholder='Recipient' className='border p-2 m-2' />
            <input id="amount" type="text" placeholder='Amount In SOL' className='border p-2 m-2' />
            <button onClick={TransferSOL} className='border p-2 m-2'>Transfer SOL</button>
        </div>
    );
};

export default Transfer;
