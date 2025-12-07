"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Carrinho = ({accounts}: DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: 'Banco',
                data: [1000, 100, 2000],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Banco 1', 'Banco 2', 'Banco 3']
    }
    return <Doughnut 
     data={data}
     options={{
        cutout: '60%',
        plugins: {
            legend: {
                display:false
            }
        }
     }} 
    />
}

export default Carrinho