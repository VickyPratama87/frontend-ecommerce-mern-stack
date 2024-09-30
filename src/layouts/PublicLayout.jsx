import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const PublicLayout = () => {
	const navigation = useNavigation();
	const isPageLoading = navigation.state === 'loading';

	return (
		<>
			<Header />
			<Nav />
			{isPageLoading ? (
				<Loading />
			) : (
				<main className="max-w-6xl min-h-screen px-20 py-10 mx-auto">
					<Outlet />
				</main>
			)}
			<Footer />
		</>
	);
};

export default PublicLayout;
