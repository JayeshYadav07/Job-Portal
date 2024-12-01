import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { StepBack } from "lucide-react";
function JobDescription() {
	const { id } = useParams();
	const isApplied = true;
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto">
				<div className="p-4 flex flex-col gap-4">
					<div className="flex justify-between">
						<div className="flex flex-col gap-2">
							<h2 className="text-xl font-semibold">
								Frontend Developer
							</h2>

							<div className="flex flex-wrap gap-2">
								<Badge
									variant="outline"
									className="text-blue-500"
								>
									20 Position
								</Badge>
								<Badge
									variant="outline"
									className="text-red-500"
								>
									Full-Time
								</Badge>
								<Badge
									variant="outline"
									className="text-purple-500"
								>
									20 LPA
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
							Frontend Developer
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Location:
							</span>
							Mumbai, India
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Description:
							</span>
							We are looking for a Frontend Developer to join our
							team. Who will be responsible for creating and
							maintaining the user interface of our web
							application.
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Experience:
							</span>
							3-5 years
						</div>
						<div>
							<span className="font-medium mr-1 text-black">
								Salary :{" "}
							</span>
							20 LPA
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
							HTML, CSS, JavaScript
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
