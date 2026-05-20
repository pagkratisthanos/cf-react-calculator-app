import { useState } from "react";
import Screen from "./Screen.tsx";
import CalcButton from "./CalcButton.tsx";

type CalcState = {
    currentValue: string;
    previousValue: string;
    operator: string;
}

const initialState: CalcState = {
    currentValue: "0",
    previousValue: "",
    operator: "",
}

const Calculator = () => {
    const [state, setState] = useState<CalcState>(initialState);

    const handleNumber = (num: string) => {
        setState(prev => ({
            ...prev,
            currentValue:
                prev.currentValue === "0"
                    ? num
                    : prev.currentValue + num,
        }));
    };

    const handleDecimal = () => {
        if (state.currentValue.includes(".")) return;
        setState(prev => ({
            ...prev,
            currentValue: prev.currentValue + ".",
        }));
    };

    const handleOperator = (op: string) => {
        setState(prev => ({
            currentValue: "",
            previousValue: prev.currentValue,
            operator: op,
        }));
    };

    const handleEquals = () => {
        if (!state.previousValue || !state.operator || !state.currentValue) return;

        const prev = parseFloat(state.previousValue);
        const curr = parseFloat(state.currentValue);
        let result = 0;

        switch (state.operator) {
            case "+": result = prev + curr; break;
            case "-": result = prev - curr; break;
            case "×": result = prev * curr; break;
            case "÷": result = curr !== 0 ? prev / curr : 0; break;
        }

        setState({
            currentValue: String(parseFloat(result.toFixed(10))),
            previousValue: "",
            operator: "",
        });
    };

    const handleClear = () => {
        setState(initialState);
    };

    const handlePercent = () => {
        if (state.currentValue === "0") return;
        setState(prev => ({
            ...prev,
            currentValue: String(parseFloat(prev.currentValue) / 100),
        }));
    };

    return (
        <div className="min-h-screen bg-calc-bg flex items-center justify-center">
            <div className="bg-calc-card p-6 rounded-2xl w-72">
                <Screen
                    currentValue={state.currentValue}
                    previousValue={state.previousValue}
                    operator={state.operator}
                />
                <div className="grid grid-cols-4 gap-2">
                    {/* Row 1 */}
                    <CalcButton label="Clear" onClick={handleClear} color="red" wide />
                    <CalcButton label="%" onClick={() => {handlePercent()}} />
                    <CalcButton label="+" onClick={() => handleOperator("+")} color="blue" />

                    {/* Row 2 */}
                    <CalcButton label="7" onClick={() => handleNumber("7")} />
                    <CalcButton label="8" onClick={() => handleNumber("8")} />
                    <CalcButton label="9" onClick={() => handleNumber("9")} />
                    <CalcButton label="×" onClick={() => handleOperator("×")} color="blue" />

                    {/* Row 3 */}
                    <CalcButton label="4" onClick={() => handleNumber("4")} />
                    <CalcButton label="5" onClick={() => handleNumber("5")} />
                    <CalcButton label="6" onClick={() => handleNumber("6")} />
                    <CalcButton label="-" onClick={() => handleOperator("-")} color="blue" />

                    {/* Row 4 */}
                    <CalcButton label="1" onClick={() => handleNumber("1")} />
                    <CalcButton label="2" onClick={() => handleNumber("2")} />
                    <CalcButton label="3" onClick={() => handleNumber("3")} />
                    <CalcButton label="÷" onClick={() => handleOperator("÷")} color="blue" />

                    {/* Row 5 */}
                    <CalcButton label="0" onClick={() => handleNumber("0")} wide />
                    <CalcButton label="." onClick={handleDecimal} />
                    <CalcButton label="=" onClick={handleEquals} color="orange" />
                </div>
            </div>
        </div>
    )
}

export default Calculator;