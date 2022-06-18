import ChartBar from "./chart-bar/ChartBar";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={null}
          label={item.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
