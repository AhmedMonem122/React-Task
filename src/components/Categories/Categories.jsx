import axios from "axios";
import Category from "./Category";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Loading/Loading";
import { Fragment } from "react";

const Categories = () => {
  const getAllCategories = () => {
    return axios.get("https://api.escuelajs.co/api/v1/categories");
  };

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-10">
          {categories?.data.map((category) => {
            return <Category key={category.id} {...category} />;
          })}
        </div>
      )}
    </Fragment>
  );
};

export default Categories;
