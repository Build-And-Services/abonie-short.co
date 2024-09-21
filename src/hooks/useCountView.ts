import { useMutation } from "@tanstack/react-query";
import { http } from "../lib/http";
import { ENDPOINTS } from "../constant/api";

export const useCountView = () => {
  return useMutation({
    mutationFn: async (short_name: string) => {
      return await http.post(`${ENDPOINTS.COUNT.POST}/${short_name}`, {
        type: "shortlink",
      });
    },
  });
};
