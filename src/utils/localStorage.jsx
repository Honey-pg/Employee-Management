
const employees = [
    {
      "id": 1,
      "firstname": "Amit",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Project Report",
          "taskDescription": "Complete the project report for Q1.",
          "taskDate": "2025-02-07",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Client Meeting",
          "taskDescription": "Meet with the client to discuss requirements.",
          "taskDate": "2025-02-08",
          "category": "Meeting",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review the latest PRs and provide feedback.",
          "taskDate": "2025-02-09",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "firstname": "Neha",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database Optimization",
          "taskDescription": "Optimize database queries for performance.",
          "taskDate": "2025-02-07",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix reported bugs from the testing team.",
          "taskDate": "2025-02-08",
          "category": "Bug Fixing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Standup",
          "taskDescription": "Attend the daily standup meeting.",
          "taskDate": "2025-02-09",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCounts": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "firstname": "Rajesh",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "UI Design Review",
          "taskDescription": "Review the new UI designs and provide feedback.",
          "taskDate": "2025-02-07",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "API Integration",
          "taskDescription": "Integrate the new API with the frontend.",
          "taskDate": "2025-02-08",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Deployment",
          "taskDescription": "Deploy the latest version to production.",
          "taskDate": "2025-02-09",
          "category": "DevOps",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstname": "Priya",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Content Creation",
          "taskDescription": "Write content for the company blog.",
          "taskDate": "2025-02-07",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Social Media Campaign",
          "taskDescription": "Launch a new social media campaign.",
          "taskDate": "2025-02-08",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Performance Report",
          "taskDescription": "Generate a performance report for Q1.",
          "taskDate": "2025-02-09",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 5,
      "firstname": "Vikram",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Security Audit",
          "taskDescription": "Perform a security audit on the new app.",
          "taskDate": "2025-02-07",
          "category": "Security",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Incident Response",
          "taskDescription": "Investigate recent security incidents.",
          "taskDate": "2025-02-08",
          "category": "Security",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Policy Update",
          "taskDescription": "Update company security policies.",
          "taskDate": "2025-02-09",
          "category": "Security",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ],
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    }
  ];
  
  
  const admin = [
    {
      "id": 100,
      "firstname":"admin",
      "email": "admin@example.com",
      "password": "123"
    }
  ];
 export const setLocalStorage=async()=>{
  localStorage.setItem('employees', JSON.stringify(employees)) 
  localStorage.setItem('admin',JSON.stringify(admin))
 }
 export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  
  return {employees,admin}
 }
