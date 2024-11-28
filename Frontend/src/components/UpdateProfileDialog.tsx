import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import React, { useState } from "react";
import { API_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../app/userSlice";
import { toast } from "sonner";
function UpdateProfileDialog({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { user } = useSelector((state: any) => state.user);
	const [input, setInput] = useState({
		fullName: user.fullName || "",
		phoneNumber: user.phoneNumber || "",
		email: user.email || "",
		bio: user.profile?.bio || "",
		skills: user.profile?.skills.join(", ") || "",
		profilePhoto: null as File | null,
		resume: null as File | null,
	});
	const dispatch = useDispatch();
	function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setInput((prevInput) => ({ ...prevInput, [name]: value }));
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		setInput((prevInput) => ({
			...prevInput,
			[e.target.name]: file || null,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("fullName", input.fullName);
		formData.append("phoneNumber", input.phoneNumber);
		formData.append("email", input.email);
		formData.append("bio", input.bio);
		formData.append("skills", input.skills);
		formData.append("profilePhoto", input.profilePhoto || "");
		formData.append("resume", input.resume || "");

		try {
			const response = await axios.patch(
				`${API_URL}/user/profile/update`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
					withCredentials: true,
				}
			);

			if (response.data.success) {
				dispatch(setUser(response.data.user));
				toast.success(response.data.message, {
					duration: 2000,
					richColors: true,
				});
				setOpen(false);
			} else {
				toast.error(response.data.message, {
					duration: 2000,
					richColors: true,
				});
			}
		} catch (error) {
			toast.error("Failed to update profile", {
				duration: 2000,
				richColors: true,
			});
		}
	};

	return (
		<div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when
							you're done.
						</DialogDescription>
					</DialogHeader>
					<form onSubmit={handleSubmit}>
						<div className="grid gap-4 py-4">
							<div className="flex justify-center">
								<label
									htmlFor="profilePhoto"
									className="flex justify-center items-center w-20 h-20 border-2 rounded-full overflow-hidden cursor-pointer"
								>
									{input.profilePhoto ? (
										<img
											src={URL.createObjectURL(
												input.profilePhoto
											)}
											alt=""
											className="w-full h-full object-cover object-top"
										/>
									) : (
										<span className="text-gray-500">
											upload
										</span>
									)}
								</label>

								<Input
									id="profilePhoto"
									name="profilePhoto"
									type="file"
									accept="image/*"
									className="hidden"
									onChange={(e) => handleFileChange(e)}
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="fullName"
									className="text-right"
								>
									Name
								</Label>
								<Input
									id="fullName"
									name="fullName"
									value={input.fullName}
									onChange={handleChanges}
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="email" className="text-right">
									Email
								</Label>
								<Input
									id="email"
									name="email"
									value={input.email}
									onChange={handleChanges}
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label
									htmlFor="phoneNumber"
									className="text-right"
								>
									Phone
								</Label>
								<Input
									id="phoneNumber"
									name="phoneNumber"
									value={input.phoneNumber}
									onChange={handleChanges}
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="bio" className="text-right">
									Bio
								</Label>
								<Input
									id="bio"
									name="bio"
									value={input.bio}
									onChange={handleChanges}
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="skills" className="text-right">
									Skills
								</Label>
								<Input
									id="skills"
									name="skills"
									value={input.skills}
									onChange={handleChanges}
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="resume" className="text-right">
									Resume
								</Label>
								<Input
									type="file"
									id="resume"
									name="resume"
									onChange={(e) => handleFileChange(e)}
									className="col-span-3 cursor-pointer"
									accept="application/pdf"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default UpdateProfileDialog;
