import { useDispatch, useSelector } from "react-redux";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { setSearchQuery } from "../app/jobSlice";
import useFetchJob from "../hooks/useFetchJob";

function Browse() {
	useFetchJob();
	const dispatch = useDispatch();
	const { jobs } = useSelector((state: any) => state.job);

	useEffect(() => {
		return () => {
			dispatch(setSearchQuery(""));
		};
	}, []);
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-xl mx-auto px-4">
				<h1 className="text-2xl font-bold my-4">
					Search Result ({jobs.length})
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{jobs?.length > 0 ? (
						jobs?.map((job: any) => (
							<JobCard key={job._id} job={job} />
						))
					) : (
						<h1 className="text-2xl col-span-3 mt-4 items-center font-bold text-gray-600">
							No Jobs Found
						</h1>
					)}
				</div>
			</div>
		</div>
	);
}

export default Browse;
