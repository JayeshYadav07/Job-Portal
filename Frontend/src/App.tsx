import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Job from "./pages/Job";
import Browse from "./pages/Browse";
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
			path: "/job",
			element: <Job />,
		},
		{
			path: "/browse",
			element: <Browse />,
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
