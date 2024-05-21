import { FAQ_ITEM } from "../../utils/constants/faq";
import Accordion from "./accordion";

const FaQ = () => {
  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 space-y-3 my-20">
      <h2 className="text-center font-bold text-xl md:text-2xl mb-6">
        Frequently Asked Questions
      </h2>
      {FAQ_ITEM.map((item) => (
        <Accordion key={item.question} title={item.question}>
          <p>{item.answer}</p>
        </Accordion>
      ))}
    </section>
  );
};

export default FaQ;
