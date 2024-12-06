import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import React, { DOMElement, useState } from "react";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";
import { setAdminJobs } from "../../app/jobSlice";

interface JobDataType {
	title: string;
	description: string;
	requirements: string;
	salary: number;
	experienceLevel: number;
	location: string;
	jobType: string;
	position: number;
	companyId: string;
}

function JobsCreate() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { companies } = useSelector((state: any) => state.companies);
	const [input, setInput] = useState<JobDataType>({
		title: "",
		location: "",
		description: "",
		requirements: "",
		salary: 0,
		experienceLevel: 0,
		jobType: "",
		position: 0,
		companyId: "",
	});
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${API_URL}/job/add`,
				{ ...input },
				{ withCredentials: true }
			);
			if (response.data.success) {
				toast.success(response.data.message);
				navigate(`/admin/jobs`);
			} else {
				toast.error(response.data.message);
			}
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-sm mx-auto p-4 rounded-md shadow-md flex flex-col gap-4">
				<div>
					<h1 className="text-xl font-bold text-center">
						Job Details
					</h1>
				</div>
				<form className="grid gap-4 grid-cols-1 md:grid-cols-2">
					<div>
						<Label>Job Title</Label>
						<Input
							type="text"
							name="title"
							value={input.title}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Job Description</Label>
						<Input
							type="text"
							name="description"
							value={input.description}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Salary</Label>
						<Input
							type="number"
							name="salary"
							placeholder="LPA"
							value={input.salary}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Requirements</Label>
						<Input
							type="text"
							name="requirements"
							value={input.requirements}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Location</Label>
						<Input
							type="text"
							name="location"
							value={input.location}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Job Type</Label>
						<Input
							type="text"
							name="jobType"
							value={input.jobType}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Experience Level</Label>
						<Input
							type="number"
							name="experienceLevel"
							value={input.experienceLevel}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Position</Label>
						<Input
							type="number"
							name="position"
							value={input.position}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Company</Label>
						<Select
							onValueChange={(value) =>
								setInput({ ...input, companyId: value })
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select a company" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{companies.map((company: any) => (
										<SelectItem
											key={company._id}
											value={company._id}
										>
											{company.name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</form>
				<div>
					{companies?.length === 0 && (
						<div className="text-xs">
							<p className="text-red-500">
								*You need to have a company to create a job
							</p>
						</div>
					)}
					<div className="flex gap-4">
						<Button
							variant="destructive"
							onClick={() => navigate("/admin/jobs")}
						>
							<span>Back</span>
						</Button>
						<Button
							onClick={handleSubmit}
							disabled={companies?.length === 0}
						>
							Add
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobsCreate;
