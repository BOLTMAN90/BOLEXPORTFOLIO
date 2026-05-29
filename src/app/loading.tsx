export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0F19]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-[#00E5FF]" />
        <p className="text-sm text-muted-foreground">Loading experience...</p>
      </div>
    </div>
  );
}
