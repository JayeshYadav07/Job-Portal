import { Mail, Pen, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useSelector } from "react-redux";
import { useState } from "react";
import UpdateProfileDialog from "../components/UpdateProfileDialog";

function Profile() {
	const { user } = useSelector((state: any) => state.user);
	const [open, setOpen] = useState(false);
	return (
		<div>
			<Navbar />
			<div className="max-w-screen-md mx-auto p-4 border rounded-lg flex flex-col gap-4">
				<div className="flex gap-4 justify-between border-b pb-4">
					<div className="flex gap-4 items-center">
						<div>
							<Avatar className="h-20 w-20">
								<AvatarImage
									src={user?.profile?.profilePhoto}
								/>
								<AvatarFallback className="text-3xl">
									{user.fullName[0].toUpperCase()}
								</AvatarFallback>
							</Avatar>
						</div>
						<div>
							<h1 className="text-2xl font-bold">
								{user?.fullName}
							</h1>
							<p className="text-gray-700">{user.profile?.bio}</p>
						</div>
					</div>
					<div>
						<Pen
							className="cursor-pointer hover:text-red-600"
							onClick={() => setOpen(true)}
						/>
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
								{user?.email}
							</p>
						</div>
						<div className="flex gap-2 items-end">
							<Phone className="text-gray-900" />
							<p className="text-gray-700 text-sm">
								{user?.phoneNumber}
							</p>
						</div>
					</div>
				</div>
				<div>
					<h1 className="text-lg font-medium mb-2">Skills</h1>
					<div className="flex gap-4">
						{user?.profile?.skills?.length > 0 ? (
							user?.profile.skills.map((skill: string) => (
								<Badge key={skill} variant="destructive">
									{skill}
								</Badge>
							))
						) : (
							<p className="text-gray-700 text-sm">NA</p>
						)}
					</div>
				</div>
				<div>
					<h1 className="text-lg font-medium">Resume</h1>
					<div>
						{user.profile.resume ? (
							<Button
								variant="link"
								className="p-0 text-blue-700 border-b"
							>
								<a href={user.profile.resume} target="_blank">
									{user.fullName}'s resume
								</a>
							</Button>
						) : (
							<p className="text-gray-700 text-sm">NA</p>
						)}
					</div>
				</div>
			</div>
			<UpdateProfileDialog open={open} setOpen={setOpen} />
		</div>
	);
}

export default Profile;
