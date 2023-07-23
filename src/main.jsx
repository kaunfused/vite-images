import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Concon } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const qc = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Concon>
    <QueryClientProvider client={qc}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </Concon>
);
