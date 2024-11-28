import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../app/userSlice";

export default function Navbar() {
	const { user } = useSelector((state: any) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div className="flex mx-auto justify-between p-4 max-w-screen-xl">
			<div>
				<h1 className="text-2xl font-bold">
					Find<span className="text-red-600">JOB</span>
				</h1>
			</div>
			<div className="flex gap-4">
				<ul className="flex gap-4 items-center">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/job">Job</Link>
					</li>
					<li>
						<Link to="/browse">Browse</Link>
					</li>
				</ul>
				{!user ? (
					<div className="flex gap-2">
						<Link to="/login">
							<Button className="bg-black hover:bg-blue-500">
								Login
							</Button>
						</Link>
						<Link to="/signup">
							<Button className="bg-red-600 hover:bg-blue-500">
								SignUp
							</Button>
						</Link>
					</div>
				) : (
					<div>
						<Popover>
							<PopoverTrigger>
								<Avatar>
									<AvatarImage
										src={user.profile?.profilePhoto}
									/>
									<AvatarFallback>
										{user.fullName[0].toUpperCase()}
									</AvatarFallback>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent>
								<div className="flex gap-3 items-center">
									<div>
										<Avatar>
											<AvatarImage
												src={user.profile?.profilePhoto}
											/>
											<AvatarFallback>
												{user.fullName[0].toUpperCase()}
											</AvatarFallback>
										</Avatar>
									</div>
									<div>
										<p className="font-bold">
											{user.fullName}
										</p>
										<p className="text-xs">
											{user.profile?.bio}
										</p>
									</div>
								</div>
								<div>
									<div className="flex gap-2 items-center">
										<User />
										<Link to="/profile">
											<Button variant="link">
												Profile
											</Button>
										</Link>
									</div>
									<div className="flex gap-2 items-center">
										<LogOut />
										<Button
											variant="link"
											onClick={() => {
												dispatch(removeUser());
												navigate("/");
											}}
										>
											Logout
										</Button>
									</div>
								</div>
							</PopoverContent>
						</Popover>
					</div>
				)}
			</div>
		</div>
	);
}
