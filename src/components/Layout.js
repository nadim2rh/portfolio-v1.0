import style from "../styles/Layout.module.css";
import Footer from "./Footer";
import Nav from "./Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}
