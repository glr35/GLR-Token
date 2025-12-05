const contractAddress = "0x303721A47d9E47A6b6491Db50128A75C63673ceC"; // GLR Token
const presaleAddress = "PRESALE_ADRESİNİ_BURAYA_YAZ"; // Bunu deploydan sonra ekle!

// ============== ABI'ler =================

const contractABI = [
  { "inputs": [], "name": "totalSupply", "outputs": [{"type":"uint256"}], "stateMutability": "view", "type": "function" },
  { "inputs": [], "name": "decimals", "outputs": [{"type":"uint8"}], "stateMutability": "view", "type": "function" },
  { "inputs": [{"name":"account","type":"address"}], "name": "balanceOf", "outputs": [{"type":"uint256"}], "stateMutability": "view", "type": "function" },
  { "inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}], "name": "transfer", "outputs":[{"type":"bool"}], "stateMutability": "nonpayable", "type":"function" }
];

const presaleABI = [
  { "inputs": [], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" }
];

// ==========================================

let provider, signer, contract, presale;

// ==========================================

async function connectWallet() {
  try {
    provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    
    contract = new ethers.Contract(contractAddress, contractABI, signer);
    presale  = new ethers.Contract(presaleAddress, presaleABI, signer);

    const addr = await signer.getAddress();
    document.getElementById("walletAddress").innerText = "Bağlandı: " + addr;
    document.getElementById("walletStatus").innerText = "Cüzdan bağlandı ✔";

    loadTokenInfo();

  } catch (err) {
    alert("Bağlantı hatası: " + err.message);
  }
}

document.getElementById("connectBtn").onclick = connectWallet;

// ==========================================
// TOKEN INFO
// ==========================================

async function loadTokenInfo() {
  try {
    const total = await contract.totalSupply();
    const dec   = await contract.decimals();

    const formatted = Number(total) / (10 ** Number(dec));

    document.getElementById("totalSupply").innerText = formatted;
    document.getElementById("contractLink").innerText = contractAddress;
    document.getElementById("contractLink").href = "https://sepolia.etherscan.io/token/" + contractAddress;

  } catch (err) {
    console.log("Token info yüklenemiyor:", err);
  }
}

// ==========================================
// BALANCE
// ==========================================

document.getElementById("balanceBtn").onclick = async () => {
  try {
    const addr = await signer.getAddress();
    const bal  = await contract.balanceOf(addr);
    const dec  = await contract.decimals();

    const formatted = Number(bal) / (10 ** Number(dec));

    document.getElementById("balance").innerText = formatted + " GLR";
  } catch (err) {
    alert("Bakiye hatası: " + err.message);
  }
};

// ==========================================
// TRANSFER
// ==========================================

document.getElementById("transferBtn").onclick = async () => {
  try {
    const to = document.getElementById("toAddress").value;
    const amount = Number(document.getElementById("amount").value);
    const dec = await contract.decimals();

    const raw = BigInt(amount) * BigInt(10 ** Number(dec));

    const tx = await contract.transfer(to, raw);

    document.getElementById("txResult").innerText = "Gönderildi TX: " + tx.hash;

  } catch (err) {
    alert("Transfer hatası: " + err.message);
  }
};

// ==========================================
// PRESALE – BUY TOKENS
// ==========================================

document.getElementById("buyBtn").onclick = async () => {
  try {
    const eth = document.getElementById("ethAmount").value;
    const value = ethers.parseEther(eth);

    const tx = await presale.buyTokens({ value });

    document.getElementById("buyResult").innerText = "Presale TX: " + tx.hash;

  } catch (err) {
    alert("Satın alma hatası: " + err.message);
  }
};