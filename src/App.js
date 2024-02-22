import Login from "./Pages/Login";
import Signup from "./Pages/signup";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import AddCategory from "./Pages/AddCategory";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <div>
        {/* <Category></Category>   */}
        <Login></Login>
      {/* <Signup></Signup> */}
        {/* <Product></Product> */}
        {/* <AddCategory></AddCategory> */}
        {/* <AddProduct></AddProduct> */}
         {/* <Category></Category> */}
        {/* <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      
    </div>
  );
}

export default App;
