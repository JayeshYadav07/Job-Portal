import { useNavigate } from "react-router-dom";
import CompaniesTable from "../../components/admin/CompaniesTable";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

function Companies() {
	const navigate = useNavigate();
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-lg mx-auto p-4">
				<div className="flex gap-4 justify-between">
					<Input
						placeholder="Filter by name"
						type="search"
						className="max-w-max"
					/>
					<Button
						variant="default"
						className="w-max"
						onClick={() => navigate("/admin/companies/create")}
					>
						Add Company
					</Button>
				</div>
				<CompaniesTable />
			</div>
		</div>
	);
}

export default Companies;