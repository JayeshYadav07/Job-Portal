import { ListFilter } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterByJob } from "../app/jobSlice";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

function FilterJob() {
	const filter: any = {
		Location: ["Delhi", "Mumbai", "Bangalore"],
		Role: ["Frontend", "Backend", "Fullstack", "Devops"],
		Type: ["Remote", "Onsite"],
	};
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	const handleChange = (value: string) => {
		setValue(value);
	};
	useEffect(() => {
		dispatch(setFilterByJob(value));
		return () => {
			dispatch(setFilterByJob(""));
		};
	}, [value]);
	return (
		<div className="col-span-1">
			<h1 className="text-xl font-medium flex items-center">
				Filter Jobs <ListFilter className="w-4 h-4 ml-2" />
			</h1>
			<hr className="my-2" />
			<div>
				<RadioGroup onValueChange={handleChange} value={value}>
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
									<RadioGroupItem value={item} id={item} />
									<Label>{item}</Label>
								</div>
							))}
						</div>
					))}
				</RadioGroup>
			</div>
		</div>
	);
}

export default FilterJob;
