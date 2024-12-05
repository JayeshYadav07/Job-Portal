import { useEffect } from "react";
import CategoriesCarousel from "../components/CategoriesCarousel";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import LatestJob from "../components/LatestJob";
import Navbar from "../components/Navbar";
import useFetchJob from "../hooks/useFetchJob";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
	const navigate = useNavigate();
	const { user } = useSelector((state: any) => state.user);
	useEffect(() => {
		if (user?.role === "recruiter") {
			navigate("/admin/companies");
		}
	}, []);
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
