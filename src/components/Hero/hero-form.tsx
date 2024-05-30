import { AxiosResponse } from "axios";
import { useState } from "react";
import { useCreateShortlink } from "../../hooks/useCreateShortlink";
import { ShortResponse } from "../../types/response/short";

const HeroForm = () => {
  const [url, setUrl] = useState({
    original_link: "",
    short_name: "",
  });

  const [successResult, setSuccessResult] = useState<string | null>(null);
  const [errorResult, setErrorResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUrl({
      ...url,
      [name]: value,
    });
  };

  const { mutate, isPending } = useCreateShortlink({
    onSuccess: (res: AxiosResponse<ShortResponse>) => {
      setSuccessResult(res.data.data.short_name);
      setErrorResult(null);
    },
    onError: (res: AxiosResponse<ShortResponse>) => {
      //@ts-ignore
      setErrorResult(res.response.data.message);
      setSuccessResult(null);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(url);
  };

  const handleClear = () => {
    setSuccessResult(null);
    setErrorResult(null);
  };
  return (
    <>
      {successResult && (
        <div className="p-2 bg-green-100 border border-green-200 rounded flex justify-between items-center">
          <p>
            Shortlink created:{" "}
            <a href={successResult} className="text-blue-500 underline">
              {successResult}
            </a>
          </p>
          <button onClick={handleClear} className="text-gray-600 text-2xl">
            &times;
          </button>
        </div>
      )}
      {errorResult && (
        <div className="p-2 bg-red-100 border border-red-200 rounded flex justify-between items-center">
          <p className="text-red-700">{errorResult}</p>
          <button onClick={handleClear} className="text-gray-600 text-2xl">
            &times;
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="original_link">Shorten a long URL:</label>
          <input
            type="text"
            name="original_link"
            onChange={handleChange}
            value={url.original_link}
            className="w-full border border-gray-300 px-2 py-1 rounded outline-none mt-1"
            placeholder="https://...."
            required
          />
        </div>
        <div>
          <label htmlFor="short_name">Customize your link (optional):</label>
          <div className="mt-1 md:flex items-center gap-2">
            <div className="flex items-center border-collapse flex-1 bg-gradient-to-r from-primary to-secondary rounded p-0.5">
              <span className="px-2 py-1 font-medium text-white">
                https://short.co.id/
              </span>
              <input
                type="text"
                name="short_name"
                onChange={handleChange}
                value={url.short_name}
                className="w-full px-2 py-1 rounded-r-sm outline-none"
                placeholder="your-customize-link"
              />
            </div>
            <button
              type={isPending ? "button" : "submit"}
              className={`bg-primary md:bg-secondary min-w-24 hover:bg-opacity-90 w-full md:w-fit mt-6 md:mt-0 rounded py-1.5 px-2 text-white font-medium duration-150 ${
                isPending ? "bg-opacity-90" : ""
              }`}>
              {isPending ? (
                <div role="status" className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 animate-spin text-white fill-gray-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Shorten!"
              )}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HeroForm;
