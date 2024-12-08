import { useParams } from "react-router-dom";
import ApplicantsTable from "../../components/admin/ApplicantsTable";
import Navbar from "../../components/Navbar";
import useFetchApplicants from "../../hooks/useFetchApplicants";

function Applicants() {
	const { id } = useParams();
	useFetchApplicants(id!);
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-lg mx-auto p-4">
				<div>
					<h1 className="text-2xl font-bold">Applicants</h1>
				</div>
				<ApplicantsTable />
			</div>
		</div>
	);
}

export default Applicants;
