import { useState } from "react";
import "./App.css";


import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
});


function App() {

  const [balance , setBalance] = useState<bigint>(0n)


  async function getBalance() {
const balance = await client.getBalance({address:"0x5FbDB2315678afecb367f032d93F642f64180aa3"})
console.log(balance)
setBalance(balance)
  }

  return (
    <>
      <div>
        {" "}
        <button onClick={getBalance}>adfadfa</button>
        <p>{balance.toString()w}</p>
      </div>{" "}
    </>
  );
}

export default App;
