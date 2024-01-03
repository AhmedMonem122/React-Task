import Spinner from "../../assets/spinner.svg";

const Loading = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <img src={Spinner} alt="spinner" />
    </div>
  );
};

export default Loading;
