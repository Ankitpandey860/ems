
  const employees= [
    {
      "id": 1,
      "email": "ankit@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design Landing Page",
          "taskDescription": "Create responsive landing page UI in React.",
          "taskDate": "2026-02-20",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix Navbar Bug",
          "taskDescription": "Resolve responsive navbar collapsing issue.",
          "taskDate": "2026-02-10",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "API Integration",
          "taskDescription": "Integrate payment API with backend.",
          "taskDate": "2026-02-05",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 2,
      "email": "rahul@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Dashboard UI",
          "taskDescription": "Create employee dashboard layout.",
          "taskDate": "2026-02-18",
          "category": "Frontend"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Bug Testing",
          "taskDescription": "Test login and register modules.",
          "taskDate": "2026-02-11",
          "category": "Testing"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Create Form Validation",
          "taskDescription": "Add validation using React Hook Form.",
          "taskDate": "2026-02-22",
          "category": "Frontend"
        }
      ]
    },
    {
      "id": 3,
      "email": "sarthak@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Database Schema",
          "taskDescription": "Design MongoDB schema for tasks.",
          "taskDate": "2026-02-21",
          "category": "Database"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Auth Middleware",
          "taskDescription": "Create JWT authentication middleware.",
          "taskDate": "2026-02-09",
          "category": "Backend"
        }
      ]
    },
    {
      "id": 4,
      "email": "neha@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Logo Design",
          "taskDescription": "Create brand logo variations.",
          "taskDate": "2026-02-23",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Color System",
          "taskDescription": "Define color palette for UI.",
          "taskDate": "2026-02-12",
          "category": "Design"
        }
      ]
    },
    {
      "id": 5,
      "email": "aman@company.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Unit Tests",
          "taskDescription": "Add unit tests for API routes.",
          "taskDate": "2026-02-24",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deploy Project",
          "taskDescription": "Deploy project to production server.",
          "taskDate": "2026-02-14",
          "category": "DevOps"
        }
      ]
    }
  ]

const admin=[{
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
  }
]
export const setlocalstorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}
export const getlocalstorage=()=>{
    const employeesData=JSON.parse(localStorage.getItem("employees"))
    const adminData=JSON.parse(localStorage.getItem("admin"))
    return {employeesData,adminData}
}
