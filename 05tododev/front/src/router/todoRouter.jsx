import { lazy, Suspense } from "react";

const loading = <div className="bg-red-500">loading...</div>;
const TodoList = lazy(() => import("../pages/todo/ListPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={loading}>
          <TodoList />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
