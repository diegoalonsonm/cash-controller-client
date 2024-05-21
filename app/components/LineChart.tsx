"use client"

import { Line } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js" 
import { LineChartProps } from "@/types"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const LineChart = ( {incomeData, expenseData}: LineChartProps ) => {
    const options = {
      responsive: true
    }

    let lineChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Incomes",
          data: incomeData,
          borderColor: "#228B22"
        },
        {
          label: "Expenses",
          data: expenseData,
          borderColor: "#b22222"
        }
      ]
    }    

    return (
        <Line options={options} data={lineChartData} />
    )
}