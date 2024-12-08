import { PopoverContent } from "@radix-ui/react-popover";
import { MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
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
import axios from "axios";
import { API_URL } from "../../utils/constant";
import { toast } from "sonner";
import { updateStatus } from "../../app/applicantsSlice";

const ApplicationStatus = ["Accepted", "Rejected", "Pending"];

function ApplicantsTable() {
	const { applicants } = useSelector((state: any) => state.applicants);
	const dispatch = useDispatch();

	const handleUpdateStatus = async (id: string, status: string) => {
		try {
			const response = await axios.patch(
				`${API_URL}/application/update/${id}`,
				{ status },
				{
					withCredentials: true,
				}
			);
			if (response.data.success) {
				dispatch(updateStatus({ id, status }));
				toast.success(response.data.message);
			}
		} catch (error) {}
	};

	return (
		<Table className="mt-4">
			<TableCaption>A list of your Applicants.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Contact</TableHead>
					<TableHead>Resume</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-right">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{applicants?.map((item: any) => (
					<TableRow key={item?._id}>
						<TableCell>{item?.applicant?.fullName}</TableCell>
						<TableCell>{item?.applicant.email}</TableCell>
						<TableCell>{item?.applicant.phoneNumber}</TableCell>
						<TableCell>
							{item?.applicant?.profile?.resume ? (
								<a
									href={item?.applicant?.profile?.resume}
									target="_blank"
									className="text-blue-600 hover:underline"
								>
									Resume
								</a>
							) : (
								<span className="text-red-600">No Resume</span>
							)}
						</TableCell>
						<TableCell>
							{item?.applicant?.createdAt.split("T")[0]}
						</TableCell>
						<TableCell>{item?.status}</TableCell>
						<TableCell className="text-right">
							<Popover>
								<PopoverTrigger>
									<MoreHorizontal />
								</PopoverTrigger>
								<PopoverContent className="w-30 p-2 shadow-md rounded z-10 bg-white leading-relaxed flex flex-col gap-2">
									{ApplicationStatus.map((status: any) => (
										<div
											key={status}
											className="hover:text-red-600 cursor-pointer"
											onClick={() =>
												handleUpdateStatus(
													item._id,
													status
												)
											}
										>
											{status}
										</div>
									))}
								</PopoverContent>
							</Popover>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default ApplicantsTable;
