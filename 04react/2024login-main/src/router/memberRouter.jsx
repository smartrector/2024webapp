import { lazy, Suspense } from "react";

const loading = <div className="bg-red-500">loading...</div>;
const Login = lazy(() => import("../pages/member/LoginPage"));
const Logout = lazy(() => import("../pages/member/LogoutPage"));

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
    {
      path: "logout",
      element: (
        <Suspense fallback={loading}>
          <Logout />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
