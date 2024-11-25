import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";

function CategoriesCarousel() {
	const categories = [
		"front-end developer",
		"back-end developer",
		"full-stack developer",
		"MERN developer",
		"Python developer",
		"Java developer",
	];
	return (
		<Carousel className="w-full mx-auto max-w-[70%] sm:max-w-sm lg:max-w-md mb-12">
			<CarouselContent>
				{categories.map((value, index) => (
					<CarouselItem
						key={index}
						className="pl-1 md:basis-1/2 lg:basis-1/3"
					>
						<div className="text-center text-sm border border-gray-300 rounded-full p-2 cursor-pointer">
							{value}
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="text-red-600" />
			<CarouselNext className="text-red-600" />
		</Carousel>
	);
}

export default CategoriesCarousel;
