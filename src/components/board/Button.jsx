import { useState } from "react"

export function Button({value, set, playersTurn}) {
    const [wasUsed, setWasUsed] = useState(false)

    function move() {
        if (!wasUsed) {  
            const [playersTurnValue, setPlayersTurn] = playersTurn

            set(playersTurnValue == 0 ? "X" : "O" )
            setPlayersTurn( playersTurnValue == 0 ? 1 : 0 )

            setWasUsed(true)
        }
    } 

    return (
        <button onClick={move} className="w-32 h-32 text-8xl font-mono font-bold border-solid border-4 border-zinc-800 rounded">
            {value}
        </button>
    )
}