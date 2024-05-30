import { NAVIGATIONS } from "../../constant/navigation";

const NavMenu = () => {
  return (
    <nav className="flex items-center gap-4">
      {NAVIGATIONS.map((item, index) => (
        <ul key={item.link} className="hidden md:flex gap-4 items-center">
          <li>
            <a
              href={item.link}
              className={`${
                index === NAVIGATIONS.length - 1
                  ? "text-white font-bold bg-secondary px-4 py-3 rounded-full shadow-md hover:bg-opacity-90"
                  : "font-bold text-secondary hover:opacity-80"
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
