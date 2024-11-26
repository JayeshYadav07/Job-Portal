import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobCard() {
	return (
		<div className="p-4 border shadow-lg border-gray-200 rounded flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h2 className="text-gray-600 text-xs">2 days ago</h2>
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
					<h2 className="text-md font-semibold">Google</h2>
					<p className="text-gray-600 text-xs">India</p>
				</div>
			</div>
			<div>
				<h3 className="font-medium mb-2">Full Stack Developer</h3>
				<p className="text-gray-600 text-xs">
					Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Cumque, velit!
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
			<div className="flex gap-2">
				<Button className="bg-black hover:bg-blue-500">Details</Button>
				<Button className="bg-red-600 hover:bg-blue-500">
					Save for later
				</Button>
			</div>
		</div>
	);
}

export default JobCard;
