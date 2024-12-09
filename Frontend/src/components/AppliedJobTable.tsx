import { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../components/ui/table";
import axios from "axios";
import { API_URL } from "../utils/constant";
function AppliedJobTable() {
	const [appliedJobs, setAppliedJobs] = useState([]);

	useEffect(() => {
		const fetchAppliedJobs = async () => {
			try {
				const response = await axios.get(
					`${API_URL}/application/get/`,
					{
						withCredentials: true,
					}
				);

				if (response.data.success) {
					setAppliedJobs(response.data.applications);
				} else {
					console.log(response.data.message);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchAppliedJobs();
	}, []);

	return (
		<div className="mt-4">
			<h1 className="text-lg font-bold">Applied Job</h1>
			<Table>
				<TableCaption>A list of your recent applied jobs.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Date</TableHead>
						<TableHead>Job Role</TableHead>
						<TableHead>Company</TableHead>
						<TableHead className="text-right">Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appliedJobs?.map((job: any) => (
						<TableRow key={job?._id}>
							<TableCell>
								{job?.createdAt.split("T")[0]}
							</TableCell>
							<TableCell>{job?.job.title}</TableCell>
							<TableCell>{job?.job?.companyId?.name}</TableCell>
							<TableCell className="text-right font-medium">
								{job.status}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default AppliedJobTable;
