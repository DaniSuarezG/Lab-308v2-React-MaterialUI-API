import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export function Root() {
  return (
    <>
      <Link to='/'>
        <Header/>
      </Link>
      <Outlet/>
      <Footer/>
    </>
  )
}