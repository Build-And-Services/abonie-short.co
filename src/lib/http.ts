import axios from "axios";
import { API_VERSION, BASE_URL } from "../constant/api";

export const http = axios.create({
  baseURL: BASE_URL + API_VERSION,
});
