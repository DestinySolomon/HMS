import {
  LayoutDashboard,
  BedDouble,
  Users,
  Receipt,
  Wallet,
  CalendarDays,
  Package,
  UserCog,
  BarChart3,
  Utensils,
  Shirt,
} from "lucide-react";

export const navigation = {
  admin: [
    {
      name: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },

    {
      name: "Reservations",
      path: "/admin/reservations",
      icon: CalendarDays,
    },

    {
      name: "Rooms",
      path: "/admin/rooms",
      icon: BedDouble,
    },

    {
      name: "Guests",
      path: "/admin/guests",
      icon: Users,
    },

    {
      name: "Accounting",
      path: "/admin/accounting",
      icon: Wallet,
    },

    {
      name: "Reports",
      path: "/admin/reports",
      icon: BarChart3,
    },
    {
      name: "Revenue Report",
      path: "/admin/reports/revenue",
      icon: Wallet,
    },

    {
      name: "Employees",
      path: "/admin/employees",
      icon: UserCog,
    },
    {
      name: "Expenses",
      path: "/admin/accounting/expenses",
      icon: Receipt,
    },

    {
      name: "Receipts",
      path: "/admin/accounting/receipts",
      icon: Receipt,
    },
    {
      name: "Occupancy Report",
      path: "/admin/reports/occupancy",
      icon: BedDouble,
    },
    {
      name: "Department Report",
      path: "/admin/reports/departments",
      icon: BarChart3,
    },
  ],

  manager: [
    {
      name: "Dashboard",
      path: "/manager",
      icon: LayoutDashboard,
    },

    {
      name: "Reservations",
      path: "/manager/reservations",
      icon: CalendarDays,
    },

    {
      name: "Reports",
      path: "/manager/reports",
      icon: BarChart3,
    },

    {
      name: "Expenses",
      path: "/manager/expenses",
      icon: Receipt,
    },
  ],

  reception: [
    {
      name: "Dashboard",
      path: "/reception",
      icon: LayoutDashboard,
    },

    {
      name: "Check In",
      path: "/reception/checkin",
      icon: Users,
    },

    {
      name: "Check Out",
      path: "/reception/checkout",
      icon: Receipt,
    },

    {
      name: "Rooms",
      path: "/reception/rooms",
      icon: BedDouble,
    },

    {
      name: "Reservations",
      path: "/reception/reservations",
      icon: CalendarDays,
    },

    {
      name: "New Booking",
      path: "/reception/new-reservation",
      icon: CalendarDays,
    },

    {
      name: "Guest Folio",
      path: "/reception/folio",
      icon: Receipt,
    },

    {
      name: "Receipts",
      path: "/reception/receipt",
      icon: Receipt,
    },
  ],

  hr: [
    {
      name: "Dashboard",
      path: "/hr",
      icon: LayoutDashboard,
    },

    {
      name: "Employees",
      path: "/hr/employees",
      icon: UserCog,
    },
    {
      name: "Attendance",
      path: "/hr/attendance",
      icon: Users,
    },
    {
      name: "Payroll",
      path: "/hr/payroll",
      icon: Wallet,
    },
  ],

  operations: [
    {
      name: "Dashboard",
      path: "/operations",
      icon: LayoutDashboard,
    },

    {
      name: "Inventory",
      path: "/operations/inventory",
      icon: Package,
    },

    {
      name: "Laundry",
      path: "/operations/laundry",
      icon: Shirt,
    },

    {
      name: "Restaurant",
      path: "/operations/restaurant",
      icon: Utensils,
    },
    {
      name: "Inventory Items",
      path: "/operations/inventory/items",
      icon: Package,
    },
    {
      name: "Stock Movement",
      path: "/operations/inventory/movement",
      icon: Package,
    },
    {
      name: "Low Stock",
      path: "/operations/inventory/low-stock",
      icon: Package,
    },
  ],

  supervisor: [
    {
      name: "Dashboard",
      path: "/supervisor",
      icon: LayoutDashboard,
    },
  ],

  accountant: [
    {
      name: "Dashboard",
      path: "/accountant",
      icon: LayoutDashboard,
    },

    {
      name: "Transactions",
      path: "/accountant/transactions",
      icon: Wallet,
    },

    {
      name: "Receipts",
      path: "/accountant/receipts",
      icon: Receipt,
    },
  ],
};
