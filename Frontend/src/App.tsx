import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDescription from "./pages/JobDescription";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Applicants from "./pages/admin/Applicants";
import Companies from "./pages/admin/Companies";
import CompaniesCreate from "./pages/admin/CompaniesCreate";
import CompaniesSetup from "./pages/admin/CompaniesSetup";
import Jobs from "./pages/admin/Jobs";
import JobsCreate from "./pages/admin/JobsCreate";
import ProtectedRoute from "./components/admin/ProtectedRoute";
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
			path: "/admin/companies",
			element: (
				<ProtectedRoute>
					<Companies />
				</ProtectedRoute>
			),
		},
		{
			path: "/admin/companies/create",
			element: (
				<ProtectedRoute>
					<CompaniesCreate />
				</ProtectedRoute>
			),
		},
		{
			path: "/admin/companies/setup/:id",
			element: (
				<ProtectedRoute>
					<CompaniesSetup />
				</ProtectedRoute>
			),
		},
		{
			path: "/admin/jobs",
			element: (
				<ProtectedRoute>
					<Jobs />
				</ProtectedRoute>
			),
		},
		{
			path: "/admin/job/create",
			element: (
				<ProtectedRoute>
					<JobsCreate />
				</ProtectedRoute>
			),
		},
		{
			path: "/admin/job/applicants/:id",
			element: (
				<ProtectedRoute>
					<Applicants />
				</ProtectedRoute>
			),
		},
		{
			path: "*",
			element: <h1>404 Not Found</h1>,
		},
	]);
	return <RouterProvider router={router} />;
}
