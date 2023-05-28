import Carousel from "@/components/carousel/Carrossel";
import HeaderButtons from "@/components/headerButtons/Index";
import Produts from "@/components/products/Index";

export default function Home() {
  return (
    <div className="relative mobile:top-20 sm:top-32 mb-80">
      <Carousel></Carousel>
      <HeaderButtons></HeaderButtons>
      <Produts></Produts>
    </div>
  );
}
