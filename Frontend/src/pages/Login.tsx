import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { RadioGroup } from "../components/ui/radio-group";
import { useState } from "react";
function Login() {
	const [input, setInput] = useState({
		email: "",
		password: "",
		role: "student",
	});
	const handleInput = (e: any) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(input);
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
						<Button className="w-full">Submit</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
