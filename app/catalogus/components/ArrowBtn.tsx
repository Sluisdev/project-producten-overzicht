import { ArrowBtnProps } from "../lib/types"

export default function ArrowBtn ({direction, handleClick, className, disabled}:ArrowBtnProps) {
    const dir = direction === 'forward' ? "/forward.svg" : "/back.svg"
 return (
        <button 
            disabled={disabled}
            onClick={handleClick}
            className={"arrow-button" + " " + className}
            type="button"
            >
            <img src={dir} alt="arrow" />
        </button>
    )
}