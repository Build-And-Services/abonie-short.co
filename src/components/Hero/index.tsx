import HeroForm from "./hero-form";

const Jumbotron = () => {
  return (
    <section
      id="jumbotron"
      className="h-dvh md:h-[700px] w-full flex flex-col justify-center items-center px-4 gap-10">
      <h1
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
        Simple and Fast URL Shortener!
      </h1>
      <div
        data-aos="fade-up"
        className="max-w-2xl w-full bg-white rounded-md shadow-2xl p-4 md:p-8 space-y-4">
        <HeroForm />
      </div>
    </section>
  );
};

export default Jumbotron;
