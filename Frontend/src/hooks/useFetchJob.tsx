import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../utils/constant";
import { setJobs } from "../app/jobSlice";

function useFetchJob() {
	const { searchQuery } = useSelector((state: any) => state.job);
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(
					`${API_URL}/job/get?keyword=${searchQuery}`,
					{
						withCredentials: true,
					}
				);

				if (response.data.success) {
					const jobs = response.data.jobs;
					dispatch(setJobs(jobs));
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchJobs();
	}, [searchQuery]);

	return null;
}

export default useFetchJob;
