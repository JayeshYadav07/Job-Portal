import { useNavigate } from "react-router-dom";
import CompaniesTable from "../../components/admin/CompaniesTable";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetchCompanies from "../../hooks/useFetchCompanies";

function Companies() {
	useFetchCompanies();
	const navigate = useNavigate();
	const { companies } = useSelector((state: any) => state.companies);
	const [filter, setFilter] = useState("");
	const [filteredCompanies, setFilteredCompanies] = useState(companies || []);

	// filter by name
	useEffect(() => {
		setFilteredCompanies(
			companies.filter((company: any) => {
				if (filter === "") return true;
				return company.name
					.toLowerCase()
					.includes(filter.toLowerCase());
			})
		);
	}, [companies, filter]);

	return (
		<div>
			<Navbar />
			<div className="max-w-screen-lg mx-auto p-4">
				<div className="flex gap-4 justify-between">
					<Input
						placeholder="Filter by name"
						type="search"
						className="max-w-max"
						onChange={(e) => setFilter(e.target.value)}
					/>
					<Button
						variant="default"
						className="w-max"
						onClick={() => navigate("/admin/companies/create")}
					>
						Add Company
					</Button>
				</div>
				<CompaniesTable companies={filteredCompanies} />
			</div>
		</div>
	);
}

export default Companies;
