import Banner from "../../components/Banner/Banner";
import ProductSection from "../../components/ProductSection/ProductSection";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Banner />
      <ProductSection />
    </main>
  );
};

export default Home;
