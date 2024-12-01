import { useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function Browse() {
	const { jobs } = useSelector((state: any) => state.job);
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-xl mx-auto px-4">
				<h1 className="text-2xl font-bold my-4">
					Search Result ({jobs.length})
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{jobs.map((job: any) => (
						<JobCard key={job._id} job={job} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Browse;
