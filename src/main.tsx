import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RedirectLink from "./pages/RedirectLink.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":short_name" element={<RedirectLink />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
