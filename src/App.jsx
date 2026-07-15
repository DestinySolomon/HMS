import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import ProtectedRoute from "./routes/ProtectedRoute";

import AdminDashboard from "./dashboards/AdminDashboard";
import ManagerDashboard from "./dashboards/ManagerDashboard";
import ReceptionDashboard from "./dashboards/ReceptionDashboard";
import HrDashboard from "./dashboards/HrDashboard";
import AccountantDashboard from "./dashboards/AccountantDashboard";
import Rooms from "./pages/Rooms";
import CheckIn from "./pages/reception/CheckIn";
import Folio from "./pages/reception/Folio";
import Receipt from "./pages/reception/Receipt";
import Reservations from "./pages/reception/Reservations";
import NewReservation from "./pages/reception/NewReservation";
import Checkout from "./pages/reception/Checkout";
import Guests from "./pages/Guests";
import AccountingDashboard from "./pages/accounting/AccountingDashboard";
import Transactions from "./pages/accounting/Transactions";
import Expenses from "./pages/accounting/Expenses";
import Receipts from "./pages/accounting/Receipts";
import Inventory from "./pages/operations/Inventory";
import InventoryList from "./pages/operations/InventoryList";
import StockMovement from "./pages/operations/StockMovement";
import LowStock from "./pages/operations/LowStock";
import HRDashboard from "./pages/hr/HRDashboard";
import Employees from "./pages/hr/Employees";
import EmployeeProfile from "./pages/hr/EmployeeProfile";
import Attendance from "./pages/hr/Attendance";
import Payroll from "./pages/hr/Payroll";
import OperationsDashboard from "./pages/operations/OperationsDashboard";
import Laundry from "./pages/operations/Laundry";
import Restaurant from "./pages/operations/Restaurant";
import ReportsDashboard from "./pages/reports/ReportsDashboard";
import RevenueReport from "./pages/reports/RevenueReport";
import OccupancyReport from "./pages/reports/OccupancyReport";
import DepartmentReport from "./pages/reports/DepartmentReport";
import SupervisorDashboard from "./pages/supervisor/SupervisorDashboard";
import Tasks from "./pages/supervisor/Tasks";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manager"
            element={
              <ProtectedRoute>
                <ManagerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception"
            element={
              <ProtectedRoute>
                <ReceptionDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr"
            element={
              <ProtectedRoute>
                <HrDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations"
            element={
              <ProtectedRoute>
                <OperationsDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/supervisor"
            element={
              <ProtectedRoute>
                <SupervisorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/accountant"
            element={
              <ProtectedRoute>
                <AccountantDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/rooms"
            element={
              <ProtectedRoute>
                <Rooms />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/checkin"
            element={
              <ProtectedRoute>
                <CheckIn />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/folio"
            element={
              <ProtectedRoute>
                <Folio />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/receipt"
            element={
              <ProtectedRoute>
                <Receipt />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/new-reservation"
            element={
              <ProtectedRoute>
                <NewReservation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/reception/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/guests"
            element={
              <ProtectedRoute>
                <Guests />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/accounting"
            element={
              <ProtectedRoute>
                <AccountingDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/accounting/transactions"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/accounting/expenses"
            element={
              <ProtectedRoute>
                <Expenses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/accounting/receipts"
            element={
              <ProtectedRoute>
                <Receipts />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations/inventory"
            element={
              <ProtectedRoute>
                <Inventory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations/inventory/items"
            element={
              <ProtectedRoute>
                <InventoryList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations/inventory/movement"
            element={
              <ProtectedRoute>
                <StockMovement />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations/inventory/low-stock"
            element={
              <ProtectedRoute>
                <LowStock />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr"
            element={
              <ProtectedRoute>
                <HRDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr/employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr/employees/profile"
            element={
              <ProtectedRoute>
                <EmployeeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hr/attendance"
            element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hr/payroll"
            element={
              <ProtectedRoute>
                <Payroll />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations"
            element={
              <ProtectedRoute>
                <OperationsDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/operations/laundry"
            element={
              <ProtectedRoute>
                <Laundry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/operations/restaurant"
            element={
              <ProtectedRoute>
                <Restaurant />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute>
                <ReportsDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reports/revenue"
            element={
              <ProtectedRoute>
                <RevenueReport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reports/occupancy"
            element={
              <ProtectedRoute>
                <OccupancyReport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/reports/departments"
            element={
              <ProtectedRoute>
                <DepartmentReport />
              </ProtectedRoute>
            }
          />

          <Route
            path="/supervisor"
            element={
              <ProtectedRoute>
                <SupervisorDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/supervisor/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
