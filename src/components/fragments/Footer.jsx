import { BsLinkedin, BsGithub, BsWhatsapp, BsInstagram } from 'react-icons/bs';

const Footer = () => {
	return (
		<>
			<footer className="p-5 bg-base-300 text-base-content footer footer-center">
				<div className="flex justify-center mt-4 space-x-6">
					<a
						href="https://wa.me/+6282237282128"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-primary">
						<BsWhatsapp size={30} />
					</a>

					<a
						href="https://github.com/VickyPratama87"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-primary">
						<BsGithub size={30} />
					</a>

					<a
						href="https://www.instagram.com/vicky_mahardyka87/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-primary">
						<BsInstagram size={30} />
					</a>

					<a
						href="https://www.linkedin.com/in/vicky-mahardyka/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 hover:text-primary">
						<BsLinkedin size={30} />
					</a>
				</div>

				<div>
					<p className="text-sm text-gray-500">© {new Date().getFullYear()} VicStore. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
