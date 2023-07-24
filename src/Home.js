
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Thapa Store",
  };
  return (
    <>
      <HeroSection myData={data}></HeroSection>
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
