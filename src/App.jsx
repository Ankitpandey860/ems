import { useEffect, useState, useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import "./index.css";

const App = () => {

  const [userRole, setUserRole] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // 🔁 On reload check
useEffect(() => {

  if (!authData) return;

  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!storedUser) return;

  setUserRole(storedUser.role);

  if (storedUser.role === "employee") {
    const employee = authData.employeesData.find(
      (e) => e.email === storedUser.email
    );
    if (employee) setLoggedInUserData(employee);
  }

  if (storedUser.role === "admin") {
    const admin = authData.adminData.find(
      (a) => a.email === storedUser.email
    );
    if (admin) setLoggedInUserData(admin);
  }

}, [authData]);



  const handleLogin = (email, password) => {

    if (!authData) return;

    const { employeesData, adminData } = authData;

    // ✅ Admin check
    const admin = adminData.find(
      (a) => a.email === email && a.password === password
    );

    if (admin) {
      setUserRole("admin");
      setLoggedInUserData(admin);   // ✅ IMPORTANT FIX
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", email: admin.email })
      );
      return;
    }

    // ✅ Employee check
    const employee = employeesData.find(
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

      {userRole === "employee" && (
        <EmployeeDashboard data={loggedInUserData} />
      )}

      {userRole === "admin" && <AdminDashboard  data={loggedInUserData}/>}
    </>
  );
};

export default App;
