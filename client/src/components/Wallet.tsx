// Wallet.jsx
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
const Wallet = () => {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet({
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
      ]}
    >
      <ConnectWallet
        className=" rounded-full w-[min-content_!important] bg-[rgb(37,99,235)_!important] hover:bg-blue-500 text-[white_!important] border-transparent focus:dark:bg-blue-600 focus:ring focus:ring-offset-2 focus:ring-offset-slate-400 focus:ring-blue-600 dark:focus:ring-offset-slate-400 disabled:bg-blue-200 disabled:cursor-not-allowed disabled:dark:bg-blue-900 disabled:dark:text-slate-400 text-base py-2.5 px-5"
        theme="dark"
        modalSize="wide"
      />
    </ThirdwebProvider>
  );
};

export default Wallet;
