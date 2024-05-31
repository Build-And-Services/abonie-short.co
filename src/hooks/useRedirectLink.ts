import { useMutation } from "@tanstack/react-query";
import { http } from "../lib/http";
import { ENDPOINTS } from "../constant/api";

export const useRedirectLink = () => {
  return useMutation({
    mutationFn: async ({ short_name }: { short_name: string }) => {
      return await http.get(`${ENDPOINTS.SHORT.GET}/${short_name}`);
    },
  });
};
