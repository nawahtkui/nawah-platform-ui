export async function connectWallet() {
  if (typeof window === "undefined") return null;

  const { ethereum } = window as any;

  if (!ethereum) {
    alert("MetaMask غير مثبت");
    return null;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });

  const address = accounts[0];
  localStorage.setItem("nawah_wallet", address);
  localStorage.setItem("nawah_auth", "true");

  return address;
}

export function getConnectedWallet() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("nawah_wallet");
}

export function disconnectWallet() {
  localStorage.removeItem("nawah_wallet");
  localStorage.removeItem("nawah_auth");
}
