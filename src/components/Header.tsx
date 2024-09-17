import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-teal-500 py-6">
      <div className="container mx-auto flex justify-between items-center px-5 sm:px-10">
        <Link to="/" className="text-teal-500 text-3xl font-bold tracking-tight">
          EatEasy
        </Link>
        <div className="md:hidden">
            <MobileNav />
        </div>
        <div className="hidden md:block">
            <MainNav />
        </div>
      </div>
    </div>
  );
};
export default Header;
