import { useEffect, useState, useContext } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import "./index.css";

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // 🔁 Check localStorage on reload
  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {

    // ✅ Admin check
    if (email === "admin@company.com" && password === "123") {
      setUser({role:'admin'});
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
    }

    // ✅ Employee check
    else if (authData ) {
      const employee = authData.employees.find(
                          (e) => e.email === email && e.password === password
                        )
      if (employee) {
            setUser("employee");
            setLoggedInUserData(employee)
            localStorage.setItem(
              "loggedInUser",
              JSON.stringify({ role: "employee" })
            );
          }
    }

    else {
      alert("Invalid Credentials");
    }
  };
 
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "employee" && <EmployeeDashboard data={loggedInUserData}/>}

      {user === "admin" && <AdminDashboard />}
    </>
  );
};

export default App;
