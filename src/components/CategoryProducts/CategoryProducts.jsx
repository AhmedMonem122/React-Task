import { useParams } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";

const CategoryProducts = () => {
  const { id } = useParams();

  const getAllCategoryProducts = () => {
    return axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`
    );
  };

  const { data: categoryProducts, isLoading } = useQuery({
    queryKey: ["categoryProducts"],
    queryFn: getAllCategoryProducts,
  });

  return (
    <div className="container mx-auto mt-20">
      <h1 className=" text-4xl font-semibold mt-32 text-center">
        Category Products :
      </h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-10">
          {categoryProducts?.data.map((categoryProduct) => {
            return (
              <CategoryProduct key={categoryProduct.id} {...categoryProduct} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
