import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../constant/api";
import { http } from "../lib/http";
import { ShortParams } from "../types/request/short";
import { AxiosResponse } from "axios";
import { ShortResponse } from "../types/response/short";

export const useCreateShortlink = (
  options: UseMutationOptions<
    AxiosResponse<ShortResponse>,
    AxiosResponse,
    ShortParams
  >
) => {
  return useMutation({
    mutationFn: async ({ original_link, short_name }: ShortParams) => {
      return await http.post(ENDPOINTS.SHORT.POST, {
        original_link,
        short_name,
      });
    },
    ...options,
  });
};
