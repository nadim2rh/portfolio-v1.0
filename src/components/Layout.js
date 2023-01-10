import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
    </>
  );
}
