import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setAdminJobs } from "../app/jobSlice";
import { API_URL } from "../utils/constant";

function useFetchAdminJobs() {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(
					`${API_URL}/job/getRecruiterJobs`,
					{
						withCredentials: true,
					}
				);
				if (response.data.success) {
					const jobs = response.data.jobs;
					dispatch(setAdminJobs(jobs));
				} else {
					toast.error(response.data.message);
				}
			} catch (error: any) {
				toast.error(error.response.data.message);
			}
		};
		fetchJobs();
	}, []);

	return null;
}

export default useFetchAdminJobs;
