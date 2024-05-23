import { NAV_ITEM } from "../../utils/constants/nav-item";

const NavMenu = () => {
  return (
    <nav className="flex items-center gap-4">
      {NAV_ITEM.map((item, index) => (
        <ul key={item.link} className="hidden md:flex gap-4 items-center">
          <li>
            <a
              href={item.link}
              className={`${
                index === NAV_ITEM.length - 1
                  ? "text-white font-bold bg-secondary px-4 py-3 rounded-full shadow-md"
                  : "font-bold text-secondary"
              }`}>
              {item.title}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default NavMenu;
