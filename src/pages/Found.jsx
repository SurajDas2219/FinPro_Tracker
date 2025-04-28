import React from "react";
import { ExpenseProvider } from "../context/ExpenseContext";
import DashboardLayout from "../layouts/DashboardLayout";
import DashBoard from "../components/DashBoard";

const Found = () => {
  return (
    <ExpenseProvider>
      <DashboardLayout>
        <DashBoard />
      </DashboardLayout>
    </ExpenseProvider>
  );
};

export default Found;
