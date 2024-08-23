import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SignUpForm } from "./components/SignUpForm";
import { IndexBaseValidation } from "./components/IndexBaseValidation";
import { ConfirmationPage } from "./components/ConfirmationPage";

const MainLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <SignUpForm />,
        },
        {
          path: "index-base-schema",
          element: <IndexBaseValidation />,
        },

        { path: "submit", element: <ConfirmationPage /> },
        {
          path: "*",
          element: (
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e07a5f",
                fontSize: "66px",
                textAlign: "center",
              }}>
              404
              <br />
              Page Not Found
            </h1>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
