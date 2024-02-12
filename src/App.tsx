import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import RequireAuth from "./hoc/RequireAuth";
import Auth from "./pages/Auth";
import Blog from "./pages/Blog";
import BlogCreate from "./pages/BlogCreate";
import BlogView from "./pages/BlogView";
import Counter from "./pages/Counter";
import FakeApi from "./pages/FakeApi";

const router = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        // loader: rootLoader,
        // action: rootAction,
        children: [
            {
                path: "",
                element: <Auth />,
            },
            {
                path: "/counter",
                element: (
                    <RequireAuth>
                        <Counter />
                    </RequireAuth>
                ),
            },
            {
                path: "/blogs",
                element: (
                    <RequireAuth>
                        <Blog />
                    </RequireAuth>
                ),
            },
            {
                path: "/blogs/create",
                element: (
                    <RequireAuth>
                        <BlogCreate />
                    </RequireAuth>
                ),
            },
            {
                path: "/blogs/:id",
                element: (
                    <RequireAuth>
                        <BlogView />
                    </RequireAuth>
                ),
            },
            {
                path: "/fake-api",
                element: (
                    <RequireAuth>
                        <FakeApi />
                    </RequireAuth>
                ),
            },
            {
                path: "/auth",
                element: <Auth />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
