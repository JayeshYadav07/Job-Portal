import { ListFilter } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

function FilterJob() {
	const filter: any = {
		Location: ["Remote", "Hybrid", "Onsite"],
		Role: ["Frontend", "Backend", "Fullstack", "Devops"],
		Salary: ["<10k", "10k-20k", "20k-30k", "30k-50k", ">50k"],
	};
	return (
		<div className="col-span-1">
			<h1 className="text-xl font-medium flex items-center">
				Filter Jobs <ListFilter className="w-4 h-4 ml-2" />
			</h1>
			<hr className="my-2" />
			<div>
				{Object.keys(filter).map((key) => (
					<div key={key} className="flex flex-col gap-2 my-3 ">
						<h2 className="text-md font-medium text-red-500">
							{key}
						</h2>
						{filter[key].map((item: string) => (
							<div
								key={item}
								className="flex text-gray-700 items-center gap-2"
							>
								<Checkbox id={item} />
								<Label>{item}</Label>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

export default FilterJob;
