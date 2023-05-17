import CreateEmployee from "../components/pages/CreateEmployees";
import EmployeesList from "../components/pages/EmployeeList";
import ErrorPage from "../components/pages/ErrorPage";

const routes = [
  {
    path: "/hrnet",
    element: <CreateEmployee />,
    exact: true,
  },
  {
    path: "/usersList",
    element: <EmployeesList />,
    exact: true,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
