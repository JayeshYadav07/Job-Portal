import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function Browse() {
	const randomJob = [1, 2, 3, 4, 6, 7, 8, 9];
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-xl mx-auto px-4">
				<h1 className="text-2xl font-bold my-4">
					Search Result ({randomJob.length})
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{randomJob.map((job, index) => (
						<JobCard />
					))}
				</div>
			</div>
		</div>
	);
}

export default Browse;
