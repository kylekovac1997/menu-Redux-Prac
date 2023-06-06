import axios from "axios";
import { useEffect, useState } from "react";
import { StyledH3, StyledImg, StyledTiles } from "../StyledComponets/Tile";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/Cart";

interface RecipeDataProps {
  idMeal: number;
  strMeal: string;
  strMealThumb: string;
}
interface ApiResponse {
  meals: RecipeDataProps[];
}

export const CategoryApi = () => {
  const [recipes, setRecipes] = useState<RecipeDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get<ApiResponse>( // Define the response type using interfaces
        `https://themealdb.com/api/json/v1/1/filter.php?`, // API endpoint for fetching seafood recipes
        {
          params: {
            apiKey: "1", // Pass the API key as a query parameter, should be stored in a env file
            c: categoryName, //Pass the API Catagory as a search parameter
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        setRecipes(response.data.meals); // Update the state with fetched recipes
        setLoading(false);
      } else {
        console.log("not responding with 200");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [categoryName]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  const addItem = (recipe: any) => {
    dispatch(addToCart(recipe));
  };

  return (
    <StyledTiles>
      {recipes.map((recipe, index) => (
        <div key={index} onClick={() => addItem(recipe)}>
          <StyledImg src={recipe.strMealThumb} alt={recipe.strMeal} />
          <StyledH3>{recipe.strMeal}</StyledH3>
        </div>
      ))}
    </StyledTiles>
  );
};
