import { Mail, Pen, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

function Profile() {
	const isResume = true;
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto p-4 border rounded-lg flex flex-col gap-4">
				<div className="flex gap-4 justify-between border-b pb-4">
					<div className="flex gap-4 items-center">
						<div>
							<Avatar className="h-20 w-20">
								<AvatarImage
									src="https://github.com/shad.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<div>
							<h1 className="text-2xl font-bold">Jayesh Yadav</h1>
							<p className="text-gray-700">
								Upcoming Software Engineer at Google , India. My
								goal is to become a full stack developer and
								work at Google.
							</p>
						</div>
					</div>
					<div>
						<Pen className="cursor-pointer hover:text-red-600" />
					</div>
				</div>
				<div>
					<h1 className="text-lg font-medium mb-2">
						Contact Details
					</h1>
					<div className="flex flex-col gap-4">
						<div className="flex gap-2 items-end">
							<Mail className="text-gray-900" />
							<p className="text-gray-700 text-sm">
								abc@example.com
							</p>
						</div>
						<div className="flex gap-2 items-end">
							<Phone className="text-gray-900" />
							<p className="text-gray-700 text-sm">
								+91 1234567890
							</p>
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-lg font-medium mb-2">Skills</h1>
					<div className="flex gap-4">
						<Badge variant="destructive">React</Badge>
						<Badge variant="destructive">MongoDb</Badge>
						<Badge variant="destructive">Express</Badge>
						<Badge variant="destructive">Node</Badge>
					</div>
				</div>
				<div>
					<h1 className="text-lg font-medium">Resume</h1>
					<div>
						{isResume ? (
							<Button
								variant="link"
								className="p-0 text-blue-700 border-b"
							>
								<a
									href="https://drive.google.com/drive/u/0/my-drive"
									target="_blank"
								>
									Jayesh Yadav's resume
								</a>
							</Button>
						) : (
							<p className="text-gray-700 text-sm">NA</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
