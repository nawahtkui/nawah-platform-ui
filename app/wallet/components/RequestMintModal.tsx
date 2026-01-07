"use client";

import { useState } from "react";

type Props = {
  nftName: string;
};

export default function RequestMintModal({ nftName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs rounded-lg bg-black text-white px-3 py-1 dark:bg-white dark:text-black"
      >
        Request Mint
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm rounded-2xl bg-white dark:bg-zinc-900 p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              Request Mint
            </h3>

            <p className="text-sm text-zinc-500">
              You are requesting access to:
              <br />
              <strong>{nftName}</strong>
            </p>

            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border px-3 py-2 text-sm dark:bg-zinc-800"
            />

            <div className="flex gap-2 pt-2">
              <button
                className="flex-1 rounded-lg bg-black text-white py-2 text-sm dark:bg-white dark:text-black"
                onClick={() => setOpen(false)}
              >
                Submit
              </button>

              <button
                className="flex-1 rounded-lg border py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
