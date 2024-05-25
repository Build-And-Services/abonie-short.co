import { ReactNode, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Accordion = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-aos="fade-up" className="shadow-xl rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex justify-between w-full items-center relative duration-300 bg-primary hover:bg-opacity-90">
        <span className="md:text-lg text-white font-medium">{title}</span>
        <span>
          <RiArrowRightSLine
            className={`${
              isOpen ? "-rotate-90" : "rotate-90"
            } duration-300 text-white w-4 h-4 md:w-6 md:h-6`}
          />
        </span>
      </button>
      <div
        className={`grid overflow-hidden duration-300 border-gray-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}>
        <div className="overflow-hidden">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
