import { useSelector } from "react-redux";
import LatestJobCard from "./LatestJobCard";

function LatestJob() {
	const { jobs } = useSelector((state: any) => state.job);

	return (
		<div className="max-w-screen-lg mx-auto m-4 p-4">
			<h2 className="text-2xl font-bold mb-4">
				<span className="text-red-600">Latest and Top</span> opening
				Jobs
			</h2>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
					{jobs?.length > 0 ? (
						jobs
							.slice(0, 6)
							.map((job: any) => (
								<LatestJobCard key={job._id} job={job} />
							))
					) : (
						<h1 className="text-xl col-span-3 font-bold text-gray-600">
							No Jobs Found!
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default LatestJob;
