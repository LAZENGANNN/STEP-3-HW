import React, { useState } from 'react'

function GuessGame() {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100 + 1))
    const [tryes, setTryes] = useState(10)
    const [mes, setMes] = useState('start')

    const makeTry = (event) => {
        let fromUser = event.target.value;

        console.log(fromUser, number, mes, tryes);
        console.log(fromUser == number)

        if (tryes < 1) {
            setMes(mes => mes = 'Проиграл(')
            return
        }
        if (fromUser == number || mes === 'Угадал!') {
            setMes(mes => mes = 'Угадал!')
            return
        }

        setTryes(tryes => tryes - 1)

        if (fromUser > number) {
            setMes(mes => mes = 'меньше')
        }
        else if (fromUser < number) {
            setMes(mes => mes = 'больше')
        }
        else if (fromUser == number) {
            setMes(mes => mes = 'Угадал!')
        }
    }

    const restart = () => {
        setNumber(number => number = Math.floor(Math.random() * 100 + 1));
        setMes(mes => mes = 'start');
        setTryes(tryes => tryes = 10)
    }

    return (
        <div>
            <p>попыток осталось {tryes}</p>
            <input type="text" onBlur={(event) => makeTry(event)} />
            <p>{mes}</p>
            <button onClick={() => { restart() }}>новая игра</button>
        </div>
    )
}

export default GuessGame
