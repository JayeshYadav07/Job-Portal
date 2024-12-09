import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../utils/constant";
import { toast } from "sonner";
import { useSelector } from "react-redux";

function CompaniesSetup() {
	const { singleCompany } = useSelector((state: any) => state.companies);
	const navigate = useNavigate();
	const { id } = useParams();
	const [input, setInput] = useState({
		name: singleCompany.name,
		location: singleCompany.location || "",
		description: singleCompany.description || "",
		website: singleCompany.website || "",
		logo: "" as File | "",
	});
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput({ ...input, [e.target.name]: e.target.files?.[0] || "" });
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submit");
		const formData = new FormData();
		formData.append("name", input.name);
		formData.append("location", input.location);
		formData.append("description", input.description);
		formData.append("website", input.website);
		formData.append("logo", input.logo);

		try {
			const response = await axios.patch(
				`${API_URL}/company/update/${id}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
					withCredentials: true,
				}
			);
			if (response.data.success) {
				toast.success(response.data.message);
				navigate("/admin/companies");
			}
		} catch (error: any) {
			console.log(error.response.data.message);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-sm mx-auto p-4">
				<form
					onSubmit={handleSubmit}
					className="grid gap-4 grid-cols-1 md:grid-cols-2"
				>
					<div className="col-span-2">
						<h1 className="text-xl font-bold text-center">
							Update Company
						</h1>
					</div>
					<div>
						<Label>Company Name</Label>
						<Input
							type="text"
							name="name"
							value={input.name}
							readOnly
						/>
					</div>
					<div>
						<Label>Location</Label>
						<Input
							type="text"
							name="location"
							value={input.location}
							onChange={handleInputChange}
						/>
					</div>
					<div className="col-span-2">
						<Label>Company Description</Label>
						<Input
							type="text"
							name="description"
							value={input.description}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Website</Label>
						<Input
							type="text"
							name="website"
							value={input.website}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<Label>Logo</Label>
						<Input
							type="file"
							accept="image/*"
							className="cursor-pointer"
							name="logo"
							onChange={handleFileChange}
						/>
					</div>
					<div className="col-span-2 flex gap-4">
						<Button
							variant="outline"
							onClick={() => navigate("/admin/companies")}
						>
							<ArrowLeft /> <span>Back</span>
						</Button>
						<Button type="submit">Update</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CompaniesSetup;
