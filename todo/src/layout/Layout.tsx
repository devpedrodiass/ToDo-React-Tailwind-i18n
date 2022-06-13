import { useContext } from "react";
import useAppData from "../hooks/useAppData";
import Todo from "../pages/Todo";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Layout() {
  const { theme } = useAppData();
  return (
    <div className={`${theme} layout h-full w-full relative`}>
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
