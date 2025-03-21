import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { defaultSystem } from "@chakra-ui/react"

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <ChakraProvider value={defaultSystem}>
        <App />
    </ChakraProvider>
);
