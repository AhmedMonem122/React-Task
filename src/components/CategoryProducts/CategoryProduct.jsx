const CategoryProduct = ({ images, price, title }) => {
  return (
    <div className=" shadow-lg p-5 rounded-xl">
      <img
        className="rounded-xl w-72 h-72"
        src={images.join(",")}
        alt={title}
      />
      <div className=" flex justify-between items-center mt-3">
        <h2 className="text-sm text-center font-semibold ">{title}</h2>
        <p className=" text-red-500">Price: ${price}</p>
      </div>
    </div>
  );
};

export default CategoryProduct;
