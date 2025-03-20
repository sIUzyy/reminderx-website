// ---- pages ----
import DownloadPage from "./download-page";
import AboutTeam from "./about-team-page";
import ContactPage from "./contact-page";
import HeroPage from "./hero-page";

export default function LandingPage() {
  return (
    <>
      <HeroPage />
      <DownloadPage />
      <AboutTeam />
      <ContactPage />
    </>
  );
}
