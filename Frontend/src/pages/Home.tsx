import CategoriesCarousel from "../components/CategoriesCarousel";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LatestJob from "../components/LatestJob";
import Navbar from "../components/Navbar";
import useFetchJob from "../hooks/useFetchJob";

export default function Home() {
	useFetchJob();
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
