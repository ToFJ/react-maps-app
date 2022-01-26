import { BsDot } from "react-icons/bs";

const Loading = () => {
  return (
    <div className="loading">
      <span className="loading-1">
        <BsDot />
      </span>
      <span className="loading-2">
        <BsDot />
      </span>
      <span className="loading-3">
        <BsDot />
      </span>
    </div>
  );
};

export default Loading;
