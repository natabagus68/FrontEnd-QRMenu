import { Line } from "react-chartjs-2";
import Chart from "../Chart";
Chart.register();
export const LineChart = () => {
  const labels = ["monday", "sunday", "rabu"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <>
      <Line data={data} height={100} />
    </>
  );
};
