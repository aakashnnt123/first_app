import "./App.css";
import Header from './Component/Header.js';
import Body from './Component/Body.js';
import About from "./Component/About.js";
import{createBrowserRouter} from "react-router-dom";




const Applayout = () =>{
  return(
    <div className="app">
      <Header/>
       <Body/>
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Applayout/>,
  },
  {
    path:"/about",
    element: <About/>
  },
]);

export default appRouter;



