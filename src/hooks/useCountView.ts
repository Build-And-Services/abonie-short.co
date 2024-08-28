import { useMutation } from "@tanstack/react-query";
import { http } from "../lib/http";
import { ENDPOINTS } from "../constant/api";

const useCountView = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      return await http.post(ENDPOINTS.COUNT.POST, {
        id,
        type: "shortlink",
      });
    },
  });
};

export default useCountView;
