import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
export default function AirDrop() {
  const wallet = useWallet()
  const  { connection} = useConnection()
  const [value, setValue] = React.useState<number>(0);

  const airdrop = async () => {
    if (!wallet.publicKey) throw new Error("Wallet not connected!");

    connection.requestAirdrop(wallet.publicKey, value * 1e9);
    alert("Airdrop successful!")

  };

  return (
    <div>
      <div className=" flex justify-center gap-2 ">
        <Input type="text" placeholder="Enter address" value={value} onChange={(e) => setValue(Number(e.target.value))}  className="w-96"/>
        <Button onClick={airdrop}>Airdrop</Button>
        {}
      </div>
    </div>
  );
}
