import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//@ts-expect-error
import GlobalStyles from "./styles/GlobalStyles";
//@ts-expect-error
import Layout from "./ui/Layout";
//@ts-expect-error
import Dashboard from "./pages/Dashboard";
//@ts-expect-error
import PageNotFound from "./pages/PageNotFound";
//@ts-expect-error
import Login from "./pages/Login";
//@ts-expect-error
import Bookings from "./pages/Bookings";
//@ts-expect-error
import Rooms from "./pages/Rooms";
//@ts-expect-error
import Users from "./pages/Users";
//@ts-expect-error
import Settings from "./pages/Settings";
//@ts-expect-error
import Account from "./pages/Account";

import { Toaster } from "react-hot-toast";
//@ts-expect-error
import Booking from "./pages/Booking";
//@ts-expect-error
import Checkin from "./pages/CheckIn";
//@ts-expect-error
import ProtectedRoute from "./ui/ProtectedRoute";
//@ts-expect-error
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <Router>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />

              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="rooms" element={<Rooms />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
};

export default App;
