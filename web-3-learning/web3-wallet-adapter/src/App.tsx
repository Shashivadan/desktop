
import {

  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import AirDrop from "./components/air-drop";
function App() {
  return (
    <>
      <div className=" max-w-screen-lg mx-auto flex h-screen justify-center p-6 flex-col items-center gap-3" >
        <div className=" flex gap-3">
          <div>
            <WalletMultiButton />
          </div>
          <div>
            <WalletDisconnectButton />
          </div>
        </div>
        <AirDrop/>
      </div>
    </>
  );
}

export default App;
