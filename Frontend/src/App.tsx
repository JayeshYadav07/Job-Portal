import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDescription from "./pages/JobDescription";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Jobs from "./pages/admin/Jobs";
import Companies from "./pages/admin/Companies";
import CompaniesCreate from "./pages/admin/CompaniesCreate";
import CompaniesSetup from "./pages/admin/CompaniesSetup";
import JobsCreate from "./pages/admin/JobsCreate";
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
			path: "/admin/jobs",
			element: <Jobs />,
		},
		{
			path: "/admin/job/create",
			element: <JobsCreate />,
		},
		{
			path: "/admin/companies",
			element: <Companies />,
		},
		{
			path: "/admin/companies/create",
			element: <CompaniesCreate />,
		},
		{
			path: "/admin/companies/setup/:id",
			element: <CompaniesSetup />,
		},
		{
			path: "*",
			element: <h1>404 Not Found</h1>,
		},
	]);
	return <RouterProvider router={router} />;
}
