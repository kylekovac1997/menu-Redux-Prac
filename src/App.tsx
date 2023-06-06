import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import { PageContianer } from "./StyledComponets/PageLayout";
import { NavBar } from "./componets/NavBar";
import MealCategoryApi from "./componets/MealCategoryApi";
import { CategoryApi } from "./componets/CategoryApi";
import CartInventory from "./componets/CartInventory";

function App() {
  return (
    <>
      <NavBar />
      <PageContianer>
        <Routes>
          <Route path="/Menu" element={<MealCategoryApi />} />
          <Route path="/" element={<Home />} />
          <Route path="/Category/:categoryName" element={<CategoryApi />} />
          <Route path="/Cart" element={<CartInventory />} />
        </Routes>
      </PageContianer>
    </>
  );
}

export default App;
