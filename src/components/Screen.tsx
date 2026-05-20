type ScreenProps = {
    currentValue: string;
    previousValue: string;
    operator: string;
}

const Screen = ({ currentValue, previousValue, operator }: ScreenProps) => {
    return (
        <div className="bg-calc-display rounded-lg p-4 mb-4 text-right">
            <p className="text-calc-gray text-sm h-5">
                {previousValue && operator ? `${previousValue} ${operator}` : ""}
            </p>
            <p className="text-white text-4xl font-light mt-1">
                {currentValue || "0"}
            </p>
        </div>
    )
}

export default Screen;