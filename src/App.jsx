import { useState } from "react";
import UserForm from "../components/UserForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
