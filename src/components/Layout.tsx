export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="p-4 bg-black text-white flex justify-between">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <main className="p-8">{children}</main>
    </>
  );
}
