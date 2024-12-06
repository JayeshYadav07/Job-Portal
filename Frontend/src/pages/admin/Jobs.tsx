import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useState } from "react";
import useFetchAdminJobs from "../../hooks/useFetchAdminJobs";
import JobsTable from "../../components/admin/JobsTable";
import { useDispatch } from "react-redux";
import { setTextFilterJob } from "../../app/jobSlice";
function Jobs() {
	useFetchAdminJobs();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [filter, setFilter] = useState("");

	const handleInput = (e: any) => {
		setFilter(e.target.value);
		dispatch(setTextFilterJob(e.target.value));
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-lg mx-auto p-4">
				<div className="flex gap-4 justify-between">
					<Input
						placeholder="Filter by name & role"
						type="search"
						className="max-w-max"
						value={filter}
						onChange={handleInput}
					/>
					<Button
						variant="default"
						className="w-max"
						onClick={() => navigate("/admin/job/create")}
					>
						Add Job
					</Button>
				</div>
				<JobsTable />
			</div>
		</div>
	);
}

export default Jobs;
