// react-router-dom
import { RouterProvider } from "react-router-dom";

import router from "./routing/routing";

export default function App() {
  return <RouterProvider router={router} />;
}
