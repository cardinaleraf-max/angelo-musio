import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Rating from "@/components/Rating";
import RoomCards from "@/components/RoomCards";
import Amenities from "@/components/Amenities";
import GalleryStrip from "@/components/GalleryStrip";
import LocationMap from "@/components/LocationMap";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Nav transparent />
    <main>
      <Hero />
      <Intro />
      <Rating />
      <RoomCards />
      <Amenities />
      <GalleryStrip />
      <LocationMap compact />
      <Reviews />
      <CtaBanner />
    </main>
    <Footer />
  </div>
);

export default Index;
