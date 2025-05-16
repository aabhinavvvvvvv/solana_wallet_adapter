import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { WalletDisconnectButton } from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { Link } from 'react-router';
const Home = () => {
  return (
    <div className=''>
        <ul className='flex flex-row justify-between p-5 min-h-screen bg-blue-100  text-center'>
            <li>
                <WalletMultiButton/>
            </li>
            <li className='text-2xl font-bold relative'>
                Solana Wallet Adapter
                <div className='flex flex-col p-5 absolute top-50'>
                  <Link to="/request" className='border '>Request Airdrop</Link>
                  <Link to="/transfer" className='border '>Transfer SOL</Link>
                  <Link to="/sign" className='border '>Sign Message</Link>
                </div>
            </li>
            <li>
                <WalletDisconnectButton/>
            </li>
        </ul>
    </div>
  )
}

export default Home
