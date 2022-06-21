import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import DashboardSearchAction from './dashboardSearchAction';


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
};

export default function TrendChart() {
    return (
        <div>
            <Line data={data} />
        </div>
    );
}