import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const loading = <div className="bg-red-500">loading...</div>;
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
const Todo = lazy(() => import("../pages/TodoComp"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/todo",
    element: (
      <Suspense fallback={loading}>
        <Todo />
      </Suspense>
    ),
  },
]);

export default root;
