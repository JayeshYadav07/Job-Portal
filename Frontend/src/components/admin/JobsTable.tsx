import { PopoverContent } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { Popover, PopoverTrigger } from "../ui/popover";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function JobsTable() {
	const { adminJobs, textFilterJob } = useSelector((state: any) => state.job);
	const [filteredJobs, setFilteredJobs] = useState(adminJobs);

	useEffect(() => {
		setFilteredJobs(
			adminJobs.filter((job: any) => {
				return (
					job.title
						.toLowerCase()
						.includes(textFilterJob.toLowerCase()) ||
					job.description
						.toLowerCase()
						.includes(textFilterJob.toLowerCase())
				);
			})
		);
	}, [adminJobs, textFilterJob]);
	return (
		<Table className="mt-4">
			<TableCaption>A list of your recent jobs.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Role</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Date</TableHead>
					<TableHead className="text-right">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{filteredJobs?.map((job: any) => (
					<TableRow key={job?._id}>
						<TableCell>{job?.title}</TableCell>
						<TableCell>{job?.description}</TableCell>
						<TableCell>{job?.createdAt.split("T")[0]}</TableCell>
						<TableCell className="text-right">
							<Popover>
								<PopoverTrigger>
									<MoreHorizontal />
								</PopoverTrigger>
								<PopoverContent className="w-30 p-2 shadow-md rounded z-10 bg-green-600 text-white">
									<div className="flex items-center gap-2 ">
										<Edit2 className="w-4" />
										<span>Edit</span>
									</div>
								</PopoverContent>
							</Popover>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default JobsTable;
