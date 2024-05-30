import { BENEFITS } from "../../constant/benefit";

const Benefit = () => {
  return (
    <section
      id="benefits"
      className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 pt-20 md:pt-0 md:-mt-20 px-4 duration-300">
      {BENEFITS.map((item) => (
        <div
          key={item.title}
          data-aos="fade-up"
          className="bg-gradient-to-tr from-primary to-secondary rounded-md p-1 shadow-xl">
          <div className="flex flex-col justify-start items-center bg-white rounded-md p-4 max-w-80 w-full h-full">
            <div className="bg-gradient-to-tr from-primary to-secondary rounded-full p-1">
              <div className="p-2 bg-white rounded-full">
                <item.icon className="w-12 h-12 text-black" />
              </div>
            </div>
            <h3 className="font-bold text-lg md:text-xl mt-2">{item.title}</h3>
            <p className="text-center text-charcoal">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Benefit;
