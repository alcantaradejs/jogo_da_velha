import { useState } from "react"
import { Button } from "./Button"

export function Board() {
    
    function createStateObj(initialValue) {
        const [value, set] = useState(initialValue)
        return {value, set}
    }

    const playersTurn = useState("X")
    const playerWin = createStateObj(false)
    const playerWiner = createStateObj(null) // null or 'X' or 'O'
    function winGameVerify() {
        // continuar...
    }

    const boardPositions = [
        [
            createStateObj(""),
            createStateObj(""),
            createStateObj("")
        ],
        [
            createStateObj(""),
            createStateObj(""),
            createStateObj("")
        ],
        [
            createStateObj(""),
            createStateObj(""),
            createStateObj("")
        ]
    ]

    return (
        <>
            <div className="grid grid-cols-3">
                <Button value={boardPositions[0][1].value} set={boardPositions[0][1].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[0][0].value} set={boardPositions[0][0].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[0][2].value} set={boardPositions[0][2].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[1][0].value} set={boardPositions[1][0].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[1][1].value} set={boardPositions[1][1].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[1][2].value} set={boardPositions[1][2].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[2][0].value} set={boardPositions[2][0].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[2][1].value} set={boardPositions[2][1].set} game={{ playersTurn, playerWin, playerWiner }}/>
                <Button value={boardPositions[2][2].value} set={boardPositions[2][2].set} game={{ playersTurn, playerWin, playerWiner }}/>
            </div>
            <span>{ playerWin.value ? `jogador ${playerWiner.value} ganhou` : ""}</span>
        </>
    )
} 