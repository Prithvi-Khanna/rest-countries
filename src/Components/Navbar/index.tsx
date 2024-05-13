import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleButton";

type Props = {
  title: string;
};

const Navbar = (props: Props) => {
  const navFlex = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`bg-primary-200 dark:bg-primary-dark-200 ${navFlex} fixed top-0 z-50 w-full py-4`}
      >
        <div className={`mx-auto w-11/12 ${navFlex}`}>
          <Link to="/" className="text-sm sm:text-base md:text-xl font-bold">{props.title}</Link>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
