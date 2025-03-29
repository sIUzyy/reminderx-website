// ---- react ----
import { useState, useEffect } from "react";

// ---- react-router-dom ----
import { RouterProvider } from "react-router-dom";

// ---- routing ----
import router from "./routing/routing";

// ---- components ----
import LoadingScreen from "./components/loading/loading-screen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with real loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return <RouterProvider router={router} />;
}
