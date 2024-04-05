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