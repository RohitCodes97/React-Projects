import "./App.css";
import Card from "./components/Card";

function App() {
  //* we can also use array for props
  let myObj = {
    name: "Hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <h className="text-3xl bg-green-500 p-3 rounded-md">Tailwind with Vite</h>
      <Card
        userName="Michele"
        position="Front-end Engineer, London"
        picture="https://images.pexels.com/photos/26201692/pexels-photo-26201692/free-photo-of-a-woman-in-a-wedding-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        myArr={newArr}
      />
      <Card
        userName="Alice"
        position="Manager, Wales"
        picture="https://plus.unsplash.com/premium_photo-1661315514682-e093b4a30af5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}

export default App;
