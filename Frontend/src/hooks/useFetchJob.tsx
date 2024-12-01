import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setJobs } from "../app/jobSlice";
import { API_URL } from "../utils/constant";
import axios from "axios";
function useFetchJob() {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(`${API_URL}/job/get`, {
					withCredentials: true,
				});

				console.log(response.data);

				if (response.data.success) {
					const jobs = response.data.jobs;
					dispatch(setJobs(jobs));
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchJobs();
	}, []);

	return null;
}

export default useFetchJob;
