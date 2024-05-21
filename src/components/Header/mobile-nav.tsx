import { MdOutlineClose } from "react-icons/md";
import { NAV_ITEM } from "../../utils/constants/nav-item";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <nav className={`md:hidden navbar-menu ${isOpen ? "open" : ""}`}>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineClose className="w-6 h-6 text-black absolute top-8 right-8" />
      </button>
      {NAV_ITEM.map((item) => (
        <ul key={item.link} className="grid gap-4">
          <li>
            <a
              href={item.link}
              className="text-xl font-bold text-center text-primary">
              {item.title}
            </a>
          </li>
        </ul>
      ))}
    </nav>
  );
};

export default MobileNav;
