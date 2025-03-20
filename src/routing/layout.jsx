import { Outlet } from "react-router-dom";

// ---- react router dom ----
import NavigationBar from "../components/header/navigation-bar";
import Footer from "../components/header/footer";
export default function Layout() {
  return (
    <main className="">
      {/* <NavigationBar /> */}
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
}
