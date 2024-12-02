import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function JobCard({ job }: any) {
	const createdAt = Math.floor(
		(new Date().getTime() - new Date(job.createdAt).getTime()) /
			(1000 * 60 * 60 * 24)
	);
	return (
		<div className="p-4 border shadow-lg border-gray-200 rounded flex flex-col gap-4 max-h-[300px]">
			<div className="flex justify-between items-center">
				<h2 className="text-gray-600 text-xs">
					{createdAt > 1 ? createdAt : null}
					{createdAt == 0
						? "today"
						: createdAt == 1
						? "yesterday"
						: " days ago"}
				</h2>
				<Bookmark className="cursor-pointer" />
			</div>
			<div className="flex gap-4 items-center">
				<div className="border p-2 rounded">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
						alt=""
						className="w-8 h-8"
					/>
				</div>
				<div>
					<h2 className="text-md font-semibold">
						{job?.companyId?.name}
					</h2>
					<p className="text-gray-600 text-xs">{job?.location}</p>
				</div>
			</div>
			<div>
				<h3 className="font-medium mb-2">{job?.title}</h3>
				<p className="text-gray-600 text-xs">{job?.description}</p>
			</div>
			<div className="flex gap-2">
				<Badge variant="outline" className="text-blue-500">
					{job?.position} Position
				</Badge>
				<Badge variant="outline" className="text-red-500">
					{job?.jobType}
				</Badge>
				<Badge variant="outline" className="text-purple-500">
					{job?.salary} LPA
				</Badge>
			</div>
			<div className="flex gap-2">
				<Link to={`/description/${job._id}`}>
					<Button className="bg-black hover:bg-blue-500">
						Details
					</Button>
				</Link>
				<Button className="bg-red-600 hover:bg-blue-500">
					Save for later
				</Button>
			</div>
		</div>
	);
}

export default JobCard;
