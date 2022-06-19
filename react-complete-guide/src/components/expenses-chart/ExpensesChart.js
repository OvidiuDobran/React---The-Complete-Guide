import Chart from "../chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", val: 0 },
    { label: "Feb", val: 0 },
    { label: "Mar", val: 0 },
    { label: "Apr", val: 0 },
    { label: "May", val: 0 },
    { label: "Jun", val: 0 },
    { label: "Jul", val: 0 },
    { label: "Aug", val: 0 },
    { label: "Sep", val: 0 },
    { label: "Oct", val: 0 },
    { label: "Nov", val: 0 },
    { label: "Dec", val: 0 },
  ];

  for (let expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].val += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints}></Chart>;
}

export default ExpensesChart;
