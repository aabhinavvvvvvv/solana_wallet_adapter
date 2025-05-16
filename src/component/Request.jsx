import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

const Request = () => {
    const Wallet = useWallet()
    const { connection } = useConnection();
    async function RequestSOL(){
        const publicKey = Wallet.publicKey;
        if(!publicKey){
            alert("Please connect wallet")
            return;
        }
        const amount = document.getElementById("amount").value;
        await connection.requestAirdrop(publicKey,amount*LAMPORTS_PER_SOL);
    }
  return (
    <div className='flex justify-center'>
        <input type="text" id="amount" placeholder='Amount In SOL' className='border p-2 m-2'/>
        <button onClick={RequestSOL} className='border p-2 m-2'>Request SOL</button>
    </div>
  )
}

export default Request
