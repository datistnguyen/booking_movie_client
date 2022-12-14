import { ethers } from "ethers";

const sendEther = async (ether, address) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(address);
    const tx = await signer.sendTransaction({
      to: address,
      value: ethers.utils.parseEther(ether),
    });
    console.log(tx);
    return { sender: signer._address, transaction_hash: tx.hash };
  } catch (err) {
    console.log(err);
    if (err.code === "INSUFFICIENT_FUNDS") {
      alert("Bạn không đủ ETH để thanh toán");
      return { sender: "undefine", transaction_hash: "undefine" };
    } else {
      alert(err);
      return;
    }
  }
};

export default sendEther;
