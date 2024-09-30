import { NavLink } from 'react-router-dom';
import NavList from './NavList';
import { BsCart3 } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/userSlice';
import { clearCartItem } from '../features/cartSlice';
import customAPI from '../api';

const Nav = () => {
	const user = useSelector((state) => state.userState.user);
	const countInCart = useSelector((state) => state.cartState.numItemsInCart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlingLogout = async () => {
		try {
			await customAPI.get('/auth/logout');
			dispatch(logoutUser());
			dispatch(clearCartItem());
			navigate('/');
		} catch (error) {
			dispatch(logoutUser());
			dispatch(clearCartItem());
			navigate('/');
		}
	};

	return (
		<nav className="fixed z-10 w-full border border-b-2 bg-base-200 top-12 border-neutral">
			<div className="max-w-6xl px-20 mx-auto navbar">
				<div className="navbar-start">
					<NavLink
						to="/"
						className="items-center hidden text-sm lg:flex">
						<img
							src="/images/logo-vicode.png"
							alt="logo-vicode"
							className="w-8 h-8 mr-2"
						/>
					</NavLink>

					{/* View Mobile */}
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-ghost lg:hidden">
							<FaBarsStaggered className="w-6 h-6" />
						</label>

						{/* Dropdown */}
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
							<NavList />
						</ul>
					</div>

					{/* View PC */}
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal">
							<NavList />
						</ul>
					</div>
				</div>

				<div className="gap-3 navbar-end">
					<NavLink
						to="/cart"
						className="btn btn-ghost btn-circle btn-md">
						<div className="indicator">
							<BsCart3 />
							{countInCart > 0 && <span className="badge badge-accent badge-sm indicator-item">{countInCart}</span>}
						</div>
					</NavLink>

					{user && (
						<button
							className="rounded-md btn btn-sm btn-secondary btn-outline"
							onClick={handlingLogout}>
							<FaSignOutAlt />
							Logout
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Nav;
