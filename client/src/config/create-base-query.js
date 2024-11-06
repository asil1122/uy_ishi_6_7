import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createBaceQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:3600",
    headers: { Autorization: "Beare abrora" },
  });
};
