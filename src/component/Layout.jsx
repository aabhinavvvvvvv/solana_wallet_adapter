import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 font-sans">
      <header className="backdrop-blur-lg bg-white/30 shadow-md border-b border-white/40 ">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Wallet Connect Button */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start">
            <WalletMultiButton className="!w-full sm:!w-auto !bg-white !text-black !shadow-md hover:!bg-gray-100" />
          </div>

          {/* App Name and Dropdown */}
          <div className="text-center relative">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition"
            >
              Solana Wallet Adapter
            </Link>

            {isHome && (
              <div className="mt-24 w-48 bg-white border border-gray-300 rounded-xl shadow-xl p-3 space-y-2 absolute left-1/2 transform -translate-x-1/2 z-10 ">
                <Link
                  to="/request"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                >
                  Request Airdrop
                </Link>
                <Link
                  to="/transfer"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                >
                  Transfer SOL
                </Link>
                <Link
                  to="/sign"
                  className="block px-3 py-2 rounded-md text-sm font-medium text-blue-700 hover:bg-blue-100 transition"
                >
                  Sign Message
                </Link>
              </div>
            )}
          </div>

          {/* Wallet Disconnect Button */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <WalletDisconnectButton className="!w-full sm:!w-auto !bg-white !text-black !shadow-md hover:!bg-gray-100" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
