export type ButtonProps = {
    type: "submit" | "button" | "reset" | undefined,
    text: string,
    className: string,
    onClick?: () => void,
    icon?: React.JSX.Element
}

export type InputProps = {
    type: string,
    id: string,
    className: string,
    ariaDescribedby?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type LayoutProps = {
    lang: string,
    children: React.ReactNode,
    className: string
}

export type IncomeExpenseProps = {
    amount: number,
    description: string,
    date: string,
    category: number
}

export type BarChartProps = {
    incomeOrExpenses: boolean
}

export type LineChartProps = {
    incomeData: number[],
    expenseData: number[]
}