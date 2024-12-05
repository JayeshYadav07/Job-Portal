import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { API_URL } from "../../utils/constant";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

function CompaniesCreate() {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const handleRegister = async () => {
		try {
			const response = await axios.post(
				`${API_URL}/company/register`,
				{ name },
				{ withCredentials: true }
			);

			if (response.data.success) {
				toast.success(response.data.message);
				navigate(`/admin/companies/setup/${response.data.company._id}`);
			} else {
				toast.error(response.data.message);
			}
		} catch (error: any) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto p-4 leading-relaxed">
				<div>
					<h1 className="text-2xl font-bold">Your Company Name</h1>
					<p className="text-gray-600">
						What would you like to call your company? You can always
						change this later.
					</p>
				</div>
				<div className="mt-4">
					<Label>Company Name</Label>
					<Input
						type="text"
						placeholder="Jobify, Microsoft etc."
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex gap-4 mt-4">
					<Button
						variant="outline"
						onClick={() => navigate("/admin/companies")}
					>
						Cancel
					</Button>
					<Button onClick={handleRegister}>Continue</Button>
				</div>
			</div>
		</div>
	);
}

export default CompaniesCreate;
