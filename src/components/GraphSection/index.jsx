import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Number of Employees Registered",
      data: [300, 650, 940, 1000, 1270],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

// Options to configure the chart
const options = {
  responsive: true, // Ensures responsiveness
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "No. of Employees registered",
    },
  },
};

const GraphSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div style={{ width: "100%", height: "350px" }} className="bg-white p-4 rounded shadow-lg">
        <Bar data={data} options={options} />
      </div>
      <div style={{ width: "100%", height: "350px" }} className="bg-white p-4 rounded shadow-lg">
      <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphSection;
