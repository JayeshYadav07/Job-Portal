import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Navbar() {
	const user = true;
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
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Jobs</a>
					</li>
					<li>
						<a href="">Browse</a>
					</li>
				</ul>
				{!user ? (
					<div className="flex gap-2">
						<Button className="bg-black hover:bg-blue-500">
							Login
						</Button>
						<Button className="bg-red-600 hover:bg-blue-500">
							SignUp
						</Button>
					</div>
				) : (
					<div>
						<Popover>
							<PopoverTrigger>
								<Avatar>
									<AvatarImage src="https://github.com/shad.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent>
								<div className="flex gap-3 items-center">
									<div>
										<Avatar>
											<AvatarImage src="https://github.com/shad.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</div>
									<div>
										<p className="font-bold">
											Jayesh Yadav
										</p>
										<p className="text-xs">
											Lorem ipsum dolor sit amet cons
											ectetur adip isicing elit.
										</p>
									</div>
								</div>
								<div>
									<div className="flex gap-2 items-center">
										<User />
										<Button variant="link">Profile</Button>
									</div>
									<div className="flex gap-2 items-center">
										<LogOut />
										<Button variant="link">Logout</Button>
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
