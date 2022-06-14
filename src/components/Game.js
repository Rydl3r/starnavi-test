import { useEffect, useState } from "react";
import Square from "./Square";

const Game = ({ fields }) => {
  const [indexes, setIndexes] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const mapIndexes = () => {
    let newArr = [];
    for (let i = 1; i < fields + 1; i++) {
      newArr.push(i);
    }
    setIndexes(newArr);
  };

  const handleHover = (row_id, square_id) => {
    let newArr = [{ row_id: row_id, square_id: square_id }, ...alerts];
    // check for alerts array length and cutting it so it doesn't become too big for screen
    if (newArr.length > 5) {
      newArr = newArr.splice(0, 5);
    }
    setAlerts(newArr);
  };

  useEffect(() => {
    mapIndexes();
  }, [fields]);

  return (
    <div className="flex flex-wrap p-5">
      <div>
        {indexes.map((row_id, idx) => (
          <div key={idx} className="flex-nowrap flex">
            {indexes.map((square_id, idx) => (
              <Square
                key={idx}
                square_id={square_id}
                row_id={row_id}
                handleHover={handleHover}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="pl-5">
        <div className="font-bold py-3 text-3xl">Hover Squares</div>
        <div className="alerts">
          {alerts && alerts.length > 0
            ? alerts.map((alert, idx) => (
                <div
                  key={idx}
                  className="bg-amber-300 p-3 my-2 font-bold rounded-md"
                >
                  row {alert.row_id} square {alert.square_id}
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Game;
