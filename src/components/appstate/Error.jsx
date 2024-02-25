/* eslint-disable react/prop-types */
function Error({ errMessage = "An Error occured" }) {
  return <div className="text-2xl text-blue-200">{errMessage}</div>;
}

export default Error;
