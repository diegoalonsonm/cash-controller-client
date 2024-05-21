"use client"

import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip, Legend, ArcElement } from "chart.js";

Chart.register(Tooltip, Legend, ArcElement)

export const PieChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          }
        }
    }    

    const pieChartData = {
        labels: ["Facebook", "Instagram", "Twitter", "Youtube", "LinkedIn"],
        datasets: [
            {
                label: "Time Spent",
                data: [120, 100, 60, 80, 40],
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                hoverOffset: 8
            }
        ]
    }

    return <Doughnut options={options} data={pieChartData} /> 
}