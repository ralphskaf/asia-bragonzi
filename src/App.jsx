import { useEffect } from 'react'
import { RouterProvider } from "react-router-dom";
import router from "./Routing/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
