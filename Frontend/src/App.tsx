import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDescription from "./pages/JobDescription";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
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
			path: "/profile",
			element: <Profile />,
		},
		{
			path: "/description/:id",
			element: <JobDescription />,
		},
		{
			path: "*",
			element: <h1>404 Not Found</h1>,
		},
	]);
	return <RouterProvider router={router} />;
}
