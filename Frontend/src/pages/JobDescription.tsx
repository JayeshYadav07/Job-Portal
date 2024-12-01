import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { StepBack } from "lucide-react";
import { useSelector } from "react-redux";
function JobDescription() {
	const { id } = useParams();
	const { jobs } = useSelector((state: any) => state.job);
	const job = jobs.find((job: any) => job._id === id);

	const isApplied = true;
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto">
				<div className="p-4 flex flex-col gap-4">
					<div className="flex justify-between">
						<div className="flex flex-col gap-2">
							<h2 className="text-xl font-semibold">
								{job?.title}
							</h2>

							<div className="flex flex-wrap gap-2">
								<Badge
									variant="outline"
									className="text-blue-500"
								>
									{job?.position} Position
								</Badge>
								<Badge
									variant="outline"
									className="text-red-500"
								>
									{job?.jobType}
								</Badge>
								<Badge
									variant="outline"
									className="text-purple-500"
								>
									{job?.salary} LPA
								</Badge>
							</div>
						</div>
						<div>
							<Button disabled={isApplied}>
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
							{job?.title}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Location:
							</span>
							{job?.location}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Description:
							</span>
							{job?.description}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Experience:
							</span>
							{job?.experienceLevel} years
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Salary :
							</span>
							{job?.salary} LPA
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Total Applicants:
							</span>
							20
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Requirements:
							</span>
							{job?.requirements.join(", ")}
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Posted On:
							</span>
							16-09-2024
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
						{!isApplied && <Button>Apply Now</Button>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobDescription;
