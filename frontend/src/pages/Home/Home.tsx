import Banner from "../../components/Banner/Banner";
import ProductSection from "../../components/ProductSection/ProductSection";
import FeaturedCategories from "../../components/FeaturedCategories/FeaturedCategories";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-page">
      <Banner />
      <ProductSection />
      <FeaturedCategories />
    </main>
  );
};

export default Home;
