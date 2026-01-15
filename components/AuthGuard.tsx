"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated =
      localStorage.getItem("nawah_auth") &&
      localStorage.getItem("nawah_wallet");

    if (!isAuthenticated) {
      router.replace("/");
    }
  }, [router]);

  return <>{children}</>;
}
