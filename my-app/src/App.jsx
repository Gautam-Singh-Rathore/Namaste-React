import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      {/* {Outlet} */}
      <Outlet/>
      <Footer />
    </>
  );
};
export default App;
