import CategoriesCarousel from "../components/CategoriesCarousel";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LatestJob from "../components/LatestJob";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<CategoriesCarousel />
			<LatestJob />
			<Footer />
		</div>
	);
}
