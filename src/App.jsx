import { useEffect, useState, useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [userRole, setUserRole] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);

  useEffect(() => {

    if (!userData) return;

    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!storedUser) return;

    setUserRole(storedUser.role);

    if (storedUser.role === "employee") {
      const employee = userData.employees?.find(
        (e) => e.email === storedUser.email
      );
      if (employee) setLoggedInUserData(employee);
    }

    if (storedUser.role === "admin") {
      const admin = userData.admin?.find(
        (a) => a.email === storedUser.email
      );
      if (admin) setLoggedInUserData(admin);
    }

  }, [userData]);

  const handleLogin = (email, password) => {

    if (!userData) return;

    const admin = userData.admin?.find(
      (a) => a.email === email && a.password === password
    );

    if (admin) {
      setUserRole("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", email: admin.email })
      );
      return;
    }

    const employee = userData.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      setUserRole("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", email: employee.email })
      );
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}

      {userRole === "employee" &&
        <EmployeeDashboard data={loggedInUserData} />
      }

      {userRole === "admin" &&
        <AdminDashboard data={loggedInUserData} />
      }
    </>
  );
};

export default App;