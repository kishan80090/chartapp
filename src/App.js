 import "./App.css";
import LineChart from "./component/LineChart";
function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    title:"My Line"
  };
  return (
    <div className="App">
      <LineChart data={data} />
    </div>
  );
}

export default App;