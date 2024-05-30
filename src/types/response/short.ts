import { CommonResponse } from "../common";

interface ShortData {
  id: number;
  id_user: number;
  original_link: string;
  short_name: string;
  result: string;
  status: boolean;
}

export type ShortResponse = CommonResponse<ShortData>;
