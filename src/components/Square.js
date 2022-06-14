import { useState } from "react";

const Square = ({ square_id, row_id, handleHover }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      key={square_id}
      onMouseEnter={() => {
        setHovered(!hovered);
        handleHover(row_id, square_id);
      }}
      className={`square p-5 border border-black cursor-pointer ${
        hovered ? "bg-sky-500" : ""
      }`}
    ></div>
  );
};

export default Square;
