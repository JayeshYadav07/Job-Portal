import { useSelector } from "react-redux";
import JobCard from "./JobCard";

function JobSection() {
	const { jobs } = useSelector((state: any) => state.job);
	return (
		<div className="col-span-5">
			<h1 className="text-2xl font-bold mb-4">All Jobs</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[88vh] overflow-y-scroll">
				{jobs?.length > 0 ? (
					jobs?.map((job: any) => <JobCard key={job._id} job={job} />)
				) : (
					<h1 className="text-2xl col-span-3 mt-4 items-center font-bold text-gray-600">
						No Jobs Found
					</h1>
				)}
			</div>
		</div>
	);
}

export default JobSection;
