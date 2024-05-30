import axios from "axios";
import { API_VERSION, API_BASE_URL } from "../constant/api";

export const http = axios.create({
  baseURL: API_BASE_URL + API_VERSION,
});
