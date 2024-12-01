import { Badge } from "./ui/badge";

function LatestJobCard({ job }: any) {
	return (
		<div className="p-4 border shadow-lg border-gray-200 rounded flex flex-col gap-4">
			<div>
				<h2 className="text-md font-semibold">
					{job?.companyId?.name}
				</h2>
				<p className="text-gray-600 text-xs">{job?.location}</p>
			</div>
			<div>
				<h3 className="font-medium">{job?.title}</h3>
				<p className="text-gray-600 text-xs">{job?.description}</p>
			</div>
			<div className="flex gap-2">
				<Badge variant="outline" className="text-blue-500">
					{job?.position} position
				</Badge>
				<Badge variant="outline" className="text-red-500">
					{job?.jobType}
				</Badge>
				<Badge variant="outline" className="text-purple-500">
					{job?.salary} LPA
				</Badge>
			</div>
		</div>
	);
}

export default LatestJobCard;
