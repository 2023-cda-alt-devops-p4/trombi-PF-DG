import { MainSection } from "../components/MainSection";
import { Map } from "../components/Map";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Dashboard = () => {
  return (
    <div className="main-container">
      <Header />
      <MainSection />
      <Map />
      <Footer />
    </div>
  );
};
