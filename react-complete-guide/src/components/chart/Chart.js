import ChartBar from "./chart-bar/ChartBar";
import "./Chart.css";

function Chart(props) {
  const dpValues = props.dataPoints.map((dp) => dp.val);
  const totalMaximum = Math.max(...dpValues);
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.val}
          maxValue={totalMaximum}
          label={item.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
