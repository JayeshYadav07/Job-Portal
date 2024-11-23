import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup } from "../components/ui/radio-group";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../utils/constant";
import { toast } from "sonner";
function Signup() {
	const [input, setInput] = useState({
		fullName: "",
		phoneNumber: "",
		email: "",
		password: "",
		role: "student",
	});
	const handleInput = (e: any) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response: AxiosResponse = await axios.post(
				`${API_URL}/user/register`,
				input,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			toast.success(response.data.message, {
				duration: 2000,
				richColors: true,
			});
		} catch (error: any) {
			toast.error(error.response.data.message, {
				duration: 2000,
				richColors: true,
			});
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-lg border border-gray-300 rounded-lg mx-auto p-4 my-3">
				<form onSubmit={handleSubmit}>
					<div className="my-2">
						<Label>Fullname</Label>
						<Input
							type="text"
							name="fullName"
							value={input.fullName}
							placeholder="John Doe"
							onChange={handleInput}
						/>
					</div>
					<div className="my-2">
						<Label>Phone Number</Label>
						<Input
							type="number"
							name="phoneNumber"
							value={input.phoneNumber}
							placeholder="1234567890"
							onChange={handleInput}
						/>
					</div>
					<div className="my-2">
						<Label>Email</Label>
						<Input
							type="email"
							name="email"
							value={input.email}
							placeholder="JhonDoe@example.com"
							onChange={handleInput}
						/>
					</div>
					<div className="my-2">
						<Label>Password</Label>
						<Input
							type="password"
							name="password"
							value={input.password}
							placeholder="password"
							onChange={handleInput}
						/>
					</div>
					<RadioGroup className="gap-4 my-2 flex">
						<div className="flex items-center space-x-2">
							<Input
								type="radio"
								name="role"
								value="student"
								checked={input.role === "student"}
								onChange={handleInput}
							/>
							<Label>Student</Label>
						</div>
						<div className="flex items-center space-x-2">
							<Input
								type="radio"
								name="role"
								value="recruiter"
								checked={input.role === "recruiter"}
								onChange={handleInput}
							/>
							<Label>Recruiter</Label>
						</div>
					</RadioGroup>
					<div className="my-2 text-sm text-gray-500">
						Have an account?
						<Link to="/login" className="text-blue-500 mx-1">
							Login
						</Link>
					</div>
					<div className="my-2 flex justify-center">
						<Button className="w-full">Submit</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
