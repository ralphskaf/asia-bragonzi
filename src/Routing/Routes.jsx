import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MasterLayout from "./../Layout/MasterLayout";
import About from "./../component/About/About";
import Achievement from "./../component/Achievement/Achievement";
import ContactForm from "./../component/ContactForm/ContactForm";
import Photos from "./../component/Photos/Photos";
import Skills from "./../component/Skills/Skills";
import Error from "./../component/Error/Error";
import History from "./../component/History/History";
import  Home  from './../component/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements([
    // MasterLayout لعرض الصفحة الرئيسية أو المكونات الفرعية
    <Route path="/" element={<MasterLayout />}>
      {/* الصفحة الرئيسية تعرض كل المكونات */}
      <Route index element={<Home />} />
      
      {/* الصفحات الفرعية */}
      <Route path="about" element={<About />} />
      <Route path="achievement" element={<Achievement />} />
      <Route path="contact" element={<ContactForm />} />
      <Route path="photos" element={<Photos />} />
      <Route path="skills" element={<Skills />} />
      <Route path="*" element={<Error />} />
    </Route>,
  ])
);

export default router;
