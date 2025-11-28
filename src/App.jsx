import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { toast } from 'react-toastify';
import Login from "./components/Login";

function App() {

  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
