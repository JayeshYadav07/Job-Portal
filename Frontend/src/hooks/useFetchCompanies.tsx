import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../utils/constant";
import { setCompanies } from "../app/companiesSlice";

function useFetchCompanies() {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCompanies = async () => {
			try {
				const response = await axios.get(`${API_URL}/company/get`, {
					withCredentials: true,
				});

				if (response.data.success) {
					dispatch(setCompanies(response.data.company));
				} else {
					console.log(response.data.message);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchCompanies();
	});

	return null;
}

export default useFetchCompanies;
