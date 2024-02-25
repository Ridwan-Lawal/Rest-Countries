import { Triangle } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex items-center justify-center mt-40">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#716d91"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loading;
