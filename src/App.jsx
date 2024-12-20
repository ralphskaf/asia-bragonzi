import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routing/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { VideoProvider } from "./Layout/VideoContext";
import { Analytics } from "@vercel/analytics/react";
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <Analytics />
      <VideoProvider>
        <RouterProvider router={router} />
      </VideoProvider>
    </>
  );
}

export default App;
