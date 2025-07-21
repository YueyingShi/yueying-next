export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-4 text-white flex justify-between z-20">
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
      <main className="p-0">{children}</main>
    </>
  );
}
