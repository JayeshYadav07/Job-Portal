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
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../../app/companiesSlice";

function CompaniesTable({ companies }: any) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<Table className="mt-4">
			<TableCaption>A list of your recent companies.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Logo</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Date</TableHead>
					<TableHead className="text-right">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{companies?.map((company: any) => (
					<TableRow key={company?._id}>
						<TableCell className="font-medium">
							<Avatar>
								<AvatarImage src={company?.logo} />
								<AvatarFallback>
									{company.name[0].toUpperCase()}
								</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>{company?.name}</TableCell>
						<TableCell>
							{company?.createdAt.split("T")[0]}
						</TableCell>
						<TableCell className="text-right">
							<Popover>
								<PopoverTrigger>
									<MoreHorizontal />
								</PopoverTrigger>
								<PopoverContent className="w-30 p-2 shadow-md rounded z-10 bg-green-600 text-white">
									<div
										className="flex items-center gap-2 cursor-pointer"
										onClick={() => {
											dispatch(setSingleCompany(company));
											navigate(
												`/admin/companies/setup/${company?._id}`
											);
										}}
									>
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

export default CompaniesTable;
