import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsInfoCircle, BsBoxes, BsCartCheck, BsCash } from 'react-icons/bs';

const links = [
	{
		id: 1,
		url: 'about',
		text: 'about',
		icon: <BsInfoCircle />,
	},
	{
		id: 2,
		url: 'products',
		text: 'products',
		icon: <BsBoxes />,
	},
	{
		id: 3,
		url: 'orders',
		text: 'orders',
		icon: <BsCartCheck />,
	},
	{
		id: 4,
		url: 'checkout',
		text: 'checkout',
		icon: <BsCash />,
	},
];

const NavList = () => {
	const user = useSelector((state) => state.userState.user);

	return (
		<>
			{links.map((link) => {
				const { id, url, text } = link;
				if ((url === 'orders' || url === 'checkout') && !user) {
					return null;
				}
				return (
					<li key={id}>
						<NavLink
							to={url}
							className="capitalize ">
							{link.icon}
							{text}
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default NavList;
