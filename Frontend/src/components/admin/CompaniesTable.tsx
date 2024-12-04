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

function CompaniesTable() {
	const invoices = [
		{
			invoice: "INV001",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
			paymentMethod: "Credit Card",
		},
		{
			invoice: "INV002",
			paymentStatus: "Pending",
			totalAmount: "$150.00",
			paymentMethod: "PayPal",
		},
	];
	return (
		<Table className="mt-4">
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Logo</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Date</TableHead>
					<TableHead className="text-right">Action</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">
							{invoice.invoice}
						</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right cursor-pointer">
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

export default CompaniesTable;
