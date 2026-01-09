export function getEthereum() {
  if (typeof window === "undefined") return null;
  return (window as any).ethereum ?? null;
}

export async function connectWallet() {
  const ethereum = getEthereum();

  if (!ethereum) {
    alert("MetaMask غير مثبت");
    return null;
  }

  const accounts = await ethereum.request({
    method: "eth_requestAccounts",
  });

  const address = accounts?.[0];
  if (!address) return null;

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

/* ================= Events ================= */

export function subscribeWalletEvents(
  onDisconnect: () => void,
  onAccountChange: (address: string | null) => void
) {
  const ethereum = getEthereum();
  if (!ethereum?.on) return;

  const handleAccountsChanged = (accounts: string[]) => {
    if (!accounts || accounts.length === 0) {
      disconnectWallet();
      onDisconnect();
    } else {
      localStorage.setItem("nawah_wallet", accounts[0]);
      onAccountChange(accounts[0]);
    }
  };

  const handleChainChanged = () => {
    // أعد تحميل الصفحة لضمان سلامة الحالة
    window.location.reload();
  };

  ethereum.on("accountsChanged", handleAccountsChanged);
  ethereum.on("chainChanged", handleChainChanged);

  return () => {
    ethereum.removeListener("accountsChanged", handleAccountsChanged);
    ethereum.removeListener("chainChanged", handleChainChanged);
  };
}
