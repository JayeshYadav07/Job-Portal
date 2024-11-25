import { Badge } from "./ui/badge";

function LatestJobCard() {
	return (
		<div className="p-4 border shadow-lg border-gray-200 rounded flex flex-col gap-4">
			<div>
				<h2 className="text-md font-semibold">Google</h2>
				<p className="text-gray-600 text-xs">India</p>
			</div>
			<div>
				<h3 className="font-medium">Full Stack Developer</h3>
				<p className="text-gray-600 text-xs">
					Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.  
				</p>
			</div>
			<div className="flex gap-2">
				<Badge variant="outline" className="text-blue-500">
					20 Position
				</Badge>
				<Badge variant="outline" className="text-red-500">
					Full-Time
				</Badge>
				<Badge variant="outline" className="text-purple-500">
					20 LPA
				</Badge>
			</div>
		</div>
	);
}

export default LatestJobCard;
