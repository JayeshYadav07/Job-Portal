import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup } from "../components/ui/radio-group";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading, setUser } from "../app/userSlice";
import { Loader } from "lucide-react";

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loading } = useSelector((state: any) => state.user);
	const [input, setInput] = useState({
		email: "",
		password: "",
		role: "student",
	});
	const handleInput = (e: any) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e: any) => {
		dispatch(startLoading());
		e.preventDefault();
		try {
			const response: AxiosResponse = await axios.post(
				`${API_URL}/user/login`,
				input,
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			if (response.data.success) {
				toast.success(response.data.message, {
					duration: 2000,
					richColors: true,
				});
				dispatch(setUser(response.data.user));
				navigate("/");
			} else {
				toast.error(response.data.message, {
					duration: 2000,
					richColors: true,
				});
			}
		} catch (error: any) {
			toast.error(error.response.data.message, {
				duration: 2000,
				richColors: true,
			});
		} finally {
			dispatch(stopLoading());
		}
	};
	return (
		<div>
			<Navbar />
			<div className="max-w-lg border border-gray-300 rounded-lg mx-auto p-4 my-3">
				<form onSubmit={handleSubmit}>
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
						<Link to="/signup" className="text-blue-500 mx-1">
							Signup
						</Link>
					</div>
					<div className="my-2">
						<Button className="w-full" disabled={loading}>
							{loading ? (
								<div className="flex items-center">
									<Loader className="mr-2 animate-spin" />
									Loading
								</div>
							) : (
								<p>Submit</p>
							)}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
