import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingSpin } from "../StyledComponets/Loading";
import { StyledH3, StyledImg, StyledTiles } from "../StyledComponets/Tile";
import { useNavigate } from "react-router-dom";

interface MealCategoriesProps {
  strCategory: "string";
  strCategoryThumb: "string";
  strCategoryDescription: "string";
}

export default function MealCategoryApi() {
  const [mealCategories, setMealCategories] = useState<MealCategoriesProps[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response.status === 200) {
        setMealCategories(response.data.categories);
        setLoading(false);
      } else {
        console.log("error response not 200");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function category(categoryName: string) {
    navigate(`/Category/${categoryName}`);
  }

  if (loading) {
    return <LoadingSpin>LOADING...</LoadingSpin>;
  }
  return (
    <>
      <StyledTiles>
        {mealCategories.map((mealCategory, index) => (
          <div
            key={index}
            onClick={() => {
              category(mealCategory.strCategory);
            }}
          >
            <StyledImg
              src={mealCategory.strCategoryThumb}
              alt={mealCategory.strCategory}
            ></StyledImg>
            <StyledH3>{mealCategory.strCategory}</StyledH3>
          </div>
        ))}
      </StyledTiles>
    </>
  );
}
