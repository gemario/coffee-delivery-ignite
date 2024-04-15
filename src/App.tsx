import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
