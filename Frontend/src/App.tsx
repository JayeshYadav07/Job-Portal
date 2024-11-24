import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "./components/ui/sonner";
export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "*",
			element: <h1>404 Not Found</h1>,
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
			<Toaster />
		</div>
	);
}
