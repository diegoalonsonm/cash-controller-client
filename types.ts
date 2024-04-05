export type ButtonProps = {
    type: "submit" | "button" | "reset" | undefined,
    text: string,
    className: string,
    onClick?: () => void
}

export type InputProps = {
    type: string,
    id: string,
    className: string,
    ariaDescribedby?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}