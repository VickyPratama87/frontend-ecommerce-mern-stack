import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaSignInAlt, FaUserPlus, FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
	const user = useSelector((state) => state.userState.user);
	return (
		<>
			<header className="fixed z-10 w-full py-3 px-[103px] bg-neutral text-neutral-content">
				<div className="flex justify-center max-w-6xl px-8 mx-auto sm:justify-end">
					{user ? (
						<div className="flex flex-row items-center py-1 sm:gap-x-8">
							<span className="flex items-center gap-2">
								<FaRegUserCircle />
								<p className="text-xs sm:text-sm">{user.name}</p>
							</span>
						</div>
					) : (
						<div className="flex items-center justify-center gap-x-5">
							<Link
								to="/login"
								className="btn btn-sm btn-outline btn-primary">
								<FaSignInAlt />
								Login
							</Link>
							<Link
								to="/register"
								className="btn btn-sm btn-outline btn-accent">
								<FaUserPlus />
								Register
							</Link>
						</div>
					)}
				</div>
			</header>
		</>
	);
};

export default Header;
