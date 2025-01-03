import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className=" p-4 max-w-7xl mx-auto">{children}</main>
    </>
  );
}
