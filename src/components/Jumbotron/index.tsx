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
        <div>
          <form action="" className="space-y-2">
            <div>
              <label htmlFor="url_target">Shorten a long URL:</label>
              <input
                type="text"
                name="url_target"
                className="w-full border border-gray-300 px-2 py-1 rounded outline-none mt-1"
                placeholder="https://...."
              />
            </div>
            <div>
              <label htmlFor="url_custom">
                Customize your link (optional):
              </label>
              <div className="mt-1 md:flex items-center gap-2">
                <div className="flex items-center border-collapse flex-1 bg-gradient-to-r from-primary to-secondary rounded p-0.5">
                  <span className="px-2 py-1 font-medium text-white">
                    https://short.co.id/
                  </span>
                  <input
                    type="text"
                    name="url_custom"
                    className="w-full px-2 py-1 rounded-r-sm outline-none"
                    placeholder="your-customize-link"
                  />
                </div>
                <button className="bg-primary md:bg-secondary hover:bg-opacity-90 w-full md:w-fit mt-6 md:mt-0 rounded py-1.5 px-2 text-white font-medium duration-150">
                  Shorten!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
