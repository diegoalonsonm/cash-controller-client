"use client"

import { Bar } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js" 
import { BarChartProps } from "@/types"

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart = ( {incomeOrExpenses}: BarChartProps ) => {
    const options = {
        responsive: true
    }

    let barChartData = {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
          }
        ]
    }
    
    if (incomeOrExpenses) {
        barChartData.labels = ["Rent", "Groceries", "Bills", "Entertainment", "Other"] as string[];
        barChartData.datasets[0].label = "Expenses";
        barChartData.datasets[0].data = [1200, 500, 200, 300, 100] as number[];
        barChartData.datasets[0].backgroundColor = ["rgba(255, 99, 132, 0.2"] as string[];
        barChartData.datasets[0].borderColor = ["rgba(54, 162, 235, 1)"] as string[];
    } else {
        barChartData.labels = ["Salary", "investment", "gift", "savings", "loans"] as string[];
        barChartData.datasets[0].label = "Incomes";
        barChartData.datasets[0].data = [148, 1300, 200, 300, 100] as number[];
        barChartData.datasets[0].backgroundColor = ["lightBlue"] as string[];
    }    

    return (
        <Bar options={options} data={barChartData} />
    )
}