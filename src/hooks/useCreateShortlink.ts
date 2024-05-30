import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../constant/api";
import { http } from "../lib/http";
import { ShortParams } from "../types/request/short";

export const useCreateShortlink = ({ onSuccess, onError }: any) => {
  return useMutation({
    mutationFn: async ({ original_link, short_name }: ShortParams) => {
      return await http.post(ENDPOINTS.SHORT.POST, {
        original_link,
        short_name,
      });
    },
    onSuccess,
    onError,
  });
};
