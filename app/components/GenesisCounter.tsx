type Props = {
  soldEarly: number; // عدد المحجوزين بسعر 25
};

export default function GenesisCounter({ soldEarly }: Props) {
  const EARLY_LIMIT = 10;
  const remaining = Math.max(EARLY_LIMIT - soldEarly, 0);

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center space-y-1">
      {remaining > 0 ? (
        <>
          <p className="text-sm text-zinc-400">
            Remaining at <strong>25 USDT</strong>
          </p>
          <p className="text-2xl font-bold">
            {remaining} / {EARLY_LIMIT}
          </p>
        </>
      ) : (
        <>
          <p className="text-sm text-zinc-400">
            Early price ended
          </p>
          <p className="text-2xl font-bold">
            Current price: <strong>50 USDT</strong>
          </p>
        </>
      )}
    </div>
  );
}

