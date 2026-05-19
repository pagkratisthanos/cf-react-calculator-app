type CalcButtonProps = {
    label: string;
    onClick: () => void;
    color?: "gray" | "blue" | "red" | "orange";
    wide?: boolean;
}

const colorMap = {
    gray: "bg-calc-gray",
    blue: "bg-calc-blue",
    red: "bg-calc-red",
    orange: "bg-calc-orange",
}

const CalcButton = ({ label, onClick, color = "gray", wide = false }: CalcButtonProps) => {
    return (
        <button
            className={`text-white text-lg py-4 rounded-lg font-medium
                ${colorMap[color]}
                ${wide ? "col-span-2" : ""}
            `}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default CalcButton;