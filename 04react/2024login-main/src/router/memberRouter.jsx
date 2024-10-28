import { lazy, Suspense } from "react";

const loading = <div className="bg-red-500">loading...</div>;
const Login = lazy(() => import("../pages/member/LoginPage"));

const memberRouter = () => {
  return [
    {
      path: "login",
      element: (
        <Suspense fallback={loading}>
          <Login />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
