import Link from "next/link";
import Links from "./links/Links";
import "./nav.css";
import SideBar from "./SideBar";

const Navbar = () => {
  return (
    <div className="navigation">
      <SideBar />
      <Link href="/"></Link>
      <div className="wrapper"></div>
    </div>
  );
};

export default Navbar;
