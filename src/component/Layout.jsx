import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className='min-h-screen bg-blue-100'>
      <ul className='flex flex-row justify-between p-5 text-center'>
        <li><WalletMultiButton /></li>

        <li className='text-2xl font-bold relative'>
          <Link to='/'>Solana Wallet Adapter</Link>
          {isHome && (
            <div className='flex flex-col p-5 absolute top-16'>
              <Link to="/request" className='border p-1 my-1'>Request Airdrop</Link>
              <Link to="/transfer" className='border p-1 my-1'>Transfer SOL</Link>
              <Link to="/sign" className='border p-1 my-1'>Sign Message</Link>
            </div>
          )}
        </li>

        <li><WalletDisconnectButton /></li>
      </ul>

      <div className='p-5'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
