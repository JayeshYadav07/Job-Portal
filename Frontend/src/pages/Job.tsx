import FilterJob from "../components/FilterJob";
import JobSection from "../components/JobSection";
import Navbar from "../components/Navbar";
import useFetchJob from "../hooks/useFetchJob";

function Job() {
	useFetchJob();
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-xl p-4 mx-auto grid grid-cols-6 gap-8">
				<FilterJob />
				<JobSection />
			</div>
		</div>
	);
}

export default Job;
