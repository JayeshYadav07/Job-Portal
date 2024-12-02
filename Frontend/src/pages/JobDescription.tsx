import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { StepBack } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "../app/jobSlice";
import { toast } from "sonner";
function JobDescription() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { singleJob } = useSelector((state: any) => state.job);
	const { user } = useSelector((state: any) => state.user);
	const [isApplied, setIsApplied] = useState(
		singleJob?.applicants?.includes(user?._id)
	);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await axios.get(`${API_URL}/job/get/${id}`, {
					withCredentials: true,
				});

				if (response.data.success) {
					const jobs = response.data.job;

					dispatch(setSingleJob(jobs));
					setIsApplied(
						jobs?.applications?.some((application: any) => {
							return application.applicant === user?._id;
						})
					);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchJobs();
	}, [id, dispatch, user?._id]);

	const handleApply = async () => {
		try {
			const response = await axios.post(
				`${API_URL}/application/apply/${id}`,
				{},
				{
					withCredentials: true,
				}
			);
			if (response.data.success) {
				toast.success(response.data.message, {
					duration: 2000,
					richColors: true,
				});
				setIsApplied(true);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto">
				<div className="p-4 flex flex-col gap-4">
					<div className="flex justify-between">
						<div className="flex flex-col gap-2">
							<h2 className="text-xl font-semibold">
								{singleJob?.title}
							</h2>

							<div className="flex flex-wrap gap-2">
								<Badge
									variant="outline"
									className="text-blue-500"
								>
									{singleJob?.position} Position
								</Badge>
								<Badge
									variant="outline"
									className="text-red-500"
								>
									{singleJob?.jobType}
								</Badge>
								<Badge
									variant="outline"
									className="text-purple-500"
								>
									{singleJob?.salary} LPA
								</Badge>
							</div>
						</div>
						<div>
							<Button disabled={isApplied} onClick={handleApply}>
								{isApplied ? "Already Applied" : "Apply Now"}
							</Button>
						</div>
					</div>
					<div>
						<h2 className="text-lg mb-2">Job Description</h2>
						<hr />
					</div>
					<div className="leading-relaxed text-md text-gray-800">
						<div>
							<span className="font-medium mr-1 text-black">
								Role:
							</span>
							{singleJob?.title}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Location:
							</span>
							{singleJob?.location}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Description:
							</span>
							{singleJob?.description}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Experience:
							</span>
							{singleJob?.experienceLevel} years
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Salary :
							</span>
							{singleJob?.salary} LPA
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Total Applicants:
							</span>
							{singleJob?.applications.length}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Requirements:
							</span>
							{singleJob?.requirements.join(", ")}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Posted On:
							</span>
							{singleJob?.createdAt.split("T")[0]}
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Link to="/job">
							<Button
								variant="outline"
								className="border-gray-500"
							>
								<StepBack /> Back
							</Button>
						</Link>
						{!isApplied && (
							<Button onClick={handleApply}>Apply Now</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobDescription;
