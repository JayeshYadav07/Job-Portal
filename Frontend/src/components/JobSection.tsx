import JobCard from "./JobCard";

function JobSection() {
	const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="col-span-5">
			<h1 className="text-2xl font-bold mb-4">All Jobs</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[88vh] overflow-y-auto">
				{jobs.map((job, index) => (
					<JobCard key={index} />
				))}
			</div>
		</div>
	);
}

export default JobSection;
