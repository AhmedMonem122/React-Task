import { Link } from "react-router-dom";

const Category = ({ id, name, image }) => {
  return (
    <div>
      <Link to={`/categoryProducts/${id}`}>
        <div className=" shadow-lg p-5 rounded-xl">
          <img src={image} alt={name} className="rounded-xl w-72 h-72" />
          <h2 className="text-lg text-center font-semibold mt-3">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Category;
