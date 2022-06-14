import { useEffect, useState } from "react";
import Game from "./components/Game";

function App() {
  const [fetchedData, setFetchedData] = useState({});
  const [mode, setMode] = useState("");
  const [playing, setPlaying] = useState(false);

  const fetchData = async () => {
    const res = await fetch("https://demo1030918.mockable.io/");
    const data = await res.json();
    setFetchedData(data);
  };

  const startGame = () => {
    if (mode !== "") {
      setPlaying(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App p-5">
      <div>
        <h2 className="font-bold py-3 text-3xl">
          Please, select a mode and click "Start"!{" "}
        </h2>
        <div className="flex">
          <select
            className="border border-black p-2"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="" disabled>
              Select game mode
            </option>
            {Object.keys(fetchedData).map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
          <button
            className="bg-sky-500 uppercase text-white rounded-md px-3 py-1 mx-2 font-bold"
            onClick={() => startGame()}
          >
            Start
          </button>
        </div>
      </div>
      {playing ? <Game fields={fetchedData[mode].field} /> : ""}
    </div>
  );
}

export default App;
