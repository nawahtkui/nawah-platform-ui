export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-nawah-gold border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-sm text-zinc-400">
          جارٍ التحميل...
        </p>
      </div>
    </div>
  );
}
