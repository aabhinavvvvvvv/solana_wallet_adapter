import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ConnectionProvider } from "@solana/wallet-adapter-react"
import { WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import Layout from './component/Layout';
// import Home from './component/Home';
import Request from './component/Request';
import Transfer from './component/Transfer';
import Sign from './component/Sign';

function App() {

  return (
    <>
      <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
           <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="request" element={<Request />} />
              <Route path="transfer" element={<Transfer />} />
              <Route path="sign" element={<Sign />} />
            </Route>
          </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
