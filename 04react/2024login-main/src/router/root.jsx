import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import memberRouter from "./memberRouter";

const loading = <div className="bg-red-500">loading...</div>;
const Main = lazy(() => import("../pages/MainComp"));
const About = lazy(() => import("../pages/AboutComp"));
const Test = lazy(() => import("../pages/TestPage"));

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
    path: "/test",
    element: (
      <Suspense fallback={loading}>
        <Test />
      </Suspense>
    ),
  },
  {
    path: "/member",
    children: memberRouter(),
  },
]);

export default root;
