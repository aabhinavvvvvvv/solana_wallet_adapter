import { Route, Routes } from "react-router"
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
      <ConnectionProvider endpoint="https://methodical-wandering-panorama.solana-devnet.quiknode.pro/f4c5a1476b0cd168aae7065c2141e9e8bf879cb6/">
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
