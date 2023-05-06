type TitleProps = {
    children: React.ReactNode
}

export function Title({ children }: TitleProps) {
    return (
        <h1 className="text-2xl font-bold my-4">{children}</h1>
    )
}