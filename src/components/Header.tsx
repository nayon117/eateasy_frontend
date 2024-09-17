import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-2 border-b-purple-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-purple-500 text-3xl font-bold tracking-tight">
          EatEasy
        </Link>
      </div>
    </div>
  );
};
export default Header;
