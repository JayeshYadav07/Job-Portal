import axios from "axios";
import { API_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setApplicants } from "../app/applicantsSlice";
import { toast } from "sonner";
import { useEffect } from "react";

function useFetchApplicants(id: string) {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetchApplicants = async () => {
			try {
				const response = await axios.get(
					`${API_URL}/application/getApplicants/${id}`,
					{
						withCredentials: true,
					}
				);
				if (response.data.success) {
					dispatch(setApplicants(response.data.applications));
					toast.success(response.data.message);
				} else {
					toast.error(response.data.message);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchApplicants();
	}, []);
	return null;
}

export default useFetchApplicants;
