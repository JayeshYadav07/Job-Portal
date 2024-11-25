import LatestJobCard from "./LatestJobCard";

function LatestJob() {
	const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className="max-w-screen-lg mx-auto m-4 p-4">
			<h2 className="text-2xl font-bold mb-4">
				<span className="text-red-600">Latest and Top</span> opening
				Jobs
			</h2>
			<div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
					{jobs.slice(0, 6).map((job, index) => (
						<LatestJobCard key={index} />
					))}
				</div>
			</div>
		</div>
	);
}

export default LatestJob;
