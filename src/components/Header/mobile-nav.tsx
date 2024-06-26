import { MdOutlineClose } from "react-icons/md";
import { NAVIGATIONS } from "../../constant/navigation";

const MobileNav = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const handleCloseNav = () => {
    setIsOpen(false);
  };
  return (
    <nav className={`md:hidden navbar-menu ${isOpen ? "open" : ""}`}>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <MdOutlineClose className="w-8 h-8 p-1 text-black absolute top-6 right-8" />
      </button>
      <div className="grid gap-4">
        {NAVIGATIONS.map((item, index) => (
          <ul key={item.link}>
            <li>
              <a
                href={item.link}
                onClick={handleCloseNav}
                className={`text-xl font-bold text-center block uppercase ${
                  index === NAVIGATIONS.length - 1
                    ? "bg-primary text-white px-4 py-2 rounded-full shadow-xl hover:bg-opacity-90"
                    : "text-primary hover:opacity-80"
                }`}>
                {item.title}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
