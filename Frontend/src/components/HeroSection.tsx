import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function HeroSection() {
	return (
		<div className="max-w-screen-lg mx-auto my-4 flex flex-col gap-4">
			<div className="flex justify-center">
				<span className="font-bold border border-gray-100 rounded-full py-2 px-4 text-black ">
					India's <span className="text-red-600">Number 1</span> Job
					Portal
				</span>
			</div>
			<div className="flex justify-center md:justify-evenly items-center">
				<div className="m-4 flex flex-col gap-6 max-w-md">
					<h1 className="leading-tight text-4xl md:text-5xl font-sans font-medium text-red-500">
						Find A Job That Suits Your Interests and Skills.
					</h1>
					<div>
						<p className="text-gray-600 mb-2">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quos, officiis
						</p>
						<div className="flex gap-1">
							<Input placeholder="Search Jobs" />
							<Button>
								<SearchIcon />
							</Button>
						</div>
					</div>
				</div>
				<div className="hidden md:block">
					<img src="/hero.png" alt="" className="h-[350px]" />
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
