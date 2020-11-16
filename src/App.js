import Chart from "./chart.js";
import { averageValue } from "./mock_data_supply";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Chart data={averageValue} />
    </div>
  );
}

export default App;
