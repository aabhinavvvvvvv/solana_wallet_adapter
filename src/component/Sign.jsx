import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export default function Sign() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        try {
            if (!publicKey) throw new Error('Wallet not connected!');
            if (!signMessage) throw new Error('Wallet does not support message signing!');
            
            const message = document.getElementById("message").value;
            const encodedMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodedMessage);

            const isValid = ed25519.verify(
                signature,
                encodedMessage,
                new Uint8Array(publicKey.toBytes())
            );

            if (!isValid) throw new Error('Message signature invalid!');
            
            alert(`Success!\nMessage signature: ${bs58.encode(signature)}`);
        } catch (err) {
            console.error(err);
            alert(`Error: ${err.message}`);
        }
    }

    return (
        <div className='flex justify-center flex-col items-center p-6'>
            <input id="message" type="text" placeholder="Enter message" className='border p-2 m-2 w-1/2' />
            <button onClick={onClick} className='bg-blue-500 text-white px-4 py-2 rounded'>
                Sign Message
            </button>
        </div>
    );
}
