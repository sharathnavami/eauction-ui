import 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import DashboardSearchAction from './dashboardSearchAction';


export default function TrendChart(props) {
    return (
        <div>
            <Line data={props.data} />
        </div>
    );
}