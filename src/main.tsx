import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";

import {Routers} from "@/router";
import {HelmetProvider} from "react-helmet-async";

const container = document.getElementById("root")!;
const root = createRoot(container);

console.log(container.hasChildNodes());

if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container,
        <React.StrictMode>
            <HelmetProvider>
                <Routers />
            </HelmetProvider>
        </React.StrictMode>,
    )
} else {
    root.render(
        <React.StrictMode>
            <HelmetProvider>
                <Routers />
            </HelmetProvider>
        </React.StrictMode>,
    );
}
