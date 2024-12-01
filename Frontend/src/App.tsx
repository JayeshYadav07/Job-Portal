import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Job from "./pages/Job";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import JobDescription from "./pages/JobDescription";
import { Provider } from "react-redux";
import store from "./app/store";
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
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
			<Toaster />
		</Provider>
	);
}
