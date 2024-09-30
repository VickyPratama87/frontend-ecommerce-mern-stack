import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutView from './pages/AboutView';
import HomeView from './pages/HomeView';
import CartView from './pages/CartView';
import ProductView from './pages/ProductView';
import OrderView from './pages/OrderView';
import LoginView from './pages/auth/LoginView';
import RegisterView from './pages/auth/RegisterView';
import PublicLayout from './layouts/PublicLayout';
import DetailProduct from './pages/DetailProduct';
import CheckoutView from './pages/CheckoutView';
import CreateProductView from './pages/CreateProductView';
import EditProductView from './pages/EditProductView';

// Loader
import { loader as HomeLoader } from './pages/HomeView';
import { loader as ProductLoader } from './pages/ProductView';
import { loader as CheckoutLoader } from './pages/CheckoutView';
import { loader as OrderLoader } from './pages/OrderView';
import { loader as CreateProductLoader } from './pages/CreateProductView';
import { loader as EditProductLoader } from './pages/EditProductView';

// Action
import { action as LoginAction } from './pages/auth/LoginView';
import { action as RegisterAction } from './pages/auth/RegisterView';

// Storage
import { store } from './store';

// Error View
import ErrorView from './pages/ErrorView';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicLayout />,
		errorElement: <ErrorView />,
		children: [
			{
				index: true,
				element: <HomeView />,
				loader: HomeLoader,
			},
			{
				path: 'products',
				element: <ProductView />,
				loader: ProductLoader,
			},
			{
				path: 'product/create',
				element: <CreateProductView />,
				loader: CreateProductLoader(store),
			},
			{
				path: 'product/:id/edit',
				element: <EditProductView />,
				loader: EditProductLoader(store),
			},
			{
				path: 'product/:id',
				element: <DetailProduct />,
			},
			{
				path: 'cart',
				element: <CartView />,
			},
			{
				path: 'orders',
				element: <OrderView />,
				loader: OrderLoader(store),
			},
			{
				path: 'checkout',
				element: <CheckoutView />,
				loader: CheckoutLoader(store),
			},
			{
				path: 'about',
				element: <AboutView />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginView />,
		action: LoginAction(store),
	},
	{
		path: '/register',
		element: <RegisterView />,
		action: RegisterAction(store),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
