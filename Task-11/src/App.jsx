import React from "react";
import UserDetails from "./UserDetails";

function App() {
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      city: "Chennai",
      role: "Developer",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      city: "Bangalore",
      role: "Designer",
    },
    {
      id: 3,
      name: "Rahul Raj",
      email: "rahul@gmail.com",
      city: "Hyderabad",
      role: "Tester",
    },
    {
      id: 4,
      name: "Divya S",
      email: "divya@gmail.com",
      city: "Chennai",
      role: "Developer",
    },
    {
      id: 5,
      name: "Karthik M",
      email: "karthik@gmail.com",
      city: "Coimbatore",
      role: "Manager",
    },
    {
      id: 6,
      name: "Anjali R",
      email: "anjali@gmail.com",
      city: "Madurai",
      role: "Designer",
    },
    {
      id: 7,
      name: "Vignesh P",
      email: "vignesh@gmail.com",
      city: "Salem",
      role: "Developer",
    },
    {
      id: 8,
      name: "Sneha K",
      email: "sneha@gmail.com",
      city: "Trichy",
      role: "Tester",
    },
    {
      id: 9,
      name: "Suresh B",
      email: "suresh@gmail.com",
      city: "Chennai",
      role: "Developer",
    },
    {
      id: 10,
      name: "Meena S",
      email: "meena@gmail.com",
      city: "Bangalore",
      role: "Manager",
    },
    {
      id: 11,
      name: "Ajay Kumar",
      email: "ajay@gmail.com",
      city: "Pondicherry",
      role: "Developer",
    },
    {
      id: 12,
      name: "Lakshmi P",
      email: "lakshmi@gmail.com",
      city: "Madurai",
      role: "HR",
    },
    {
      id: 13,
      name: "Ramesh V",
      email: "ramesh@gmail.com",
      city: "Coimbatore",
      role: "Tester",
    },
    {
      id: 14,
      name: "Keerthana M",
      email: "keerthana@gmail.com",
      city: "Chennai",
      role: "Designer",
    },
    {
      id: 15,
      name: "Manoj S",
      email: "manoj@gmail.com",
      city: "Salem",
      role: "Developer",
    },
    {
      id: 16,
      name: "Nandhini R",
      email: "nandhini@gmail.com",
      city: "Trichy",
      role: "HR",
    },
    {
      id: 17,
      name: "Surya K",
      email: "surya@gmail.com",
      city: "Hyderabad",
      role: "Developer",
    },
    {
      id: 18,
      name: "Pooja A",
      email: "pooja@gmail.com",
      city: "Bangalore",
      role: "Tester",
    },
    {
      id: 19,
      name: "Gokul R",
      email: "gokul@gmail.com",
      city: "Chennai",
      role: "Manager",
    },
    {
      id: 20,
      name: "Harini S",
      email: "harini@gmail.com",
      city: "Coimbatore",
      role: "Developer",
    },
  ];
  console.log(users)

  return <div>
    <UserDetails users = {users}/>
  </div>;
}

export default App;
