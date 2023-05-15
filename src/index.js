import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store, Container } from "./redux/container";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </StrictMode>
);
