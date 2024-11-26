const Footer = () => {
	return (
		<footer className="bg-gray-100 text-gray-700 py-10 px-4">
			<div className="max-w-screen-lg mx-auto">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h2 className="text-lg font-semibold mb-4 text-red-500">
							About Us
						</h2>
						<p className="text-sm">
							We are dedicated to providing the best services to
							our clients. Our focus is on quality and innovation.
						</p>
					</div>
					<div>
						<h2 className="text-lg font-semibold mb-4 text-red-500">
							Quick Links
						</h2>
						<ul>
							<li className="mb-2">
								<a href="#" className="hover:text-gray-900">
									Home
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:text-gray-900">
									Services
								</a>
							</li>
							<li className="mb-2">
								<a href="#" className="hover:text-gray-900">
									Contact
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-900">
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-lg font-semibold mb-4 text-red-500">
							Contact Us
						</h2>
						<p className="text-sm">
							Email: support@yourcompany.com
						</p>
						<p className="text-sm">Phone: +1 234 567 890</p>
						<p className="text-sm">
							Address: 123 Main St, Your City, Country
						</p>
					</div>
				</div>
				<div className="border-t border-gray-300 mt-8 pt-4 text-center">
					<p className="text-sm">
						&copy; {new Date().getFullYear()} Your Company. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
