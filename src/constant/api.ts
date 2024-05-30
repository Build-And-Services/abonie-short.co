export const SITE_URL = import.meta.env.VITE_SITE_URL || "";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
export const API_VERSION = import.meta.env.VITE_API_VERSION || "";

export const ENDPOINTS = {
  SHORT: {
    GET: "/short",
    POST: "/short/create",
  },
};
