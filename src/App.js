import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [boxes, setBoxes] = useState({
        box1: "",
        box2: "",
        box3: "",
        box4: "",
        box5: "",
        box6: "",
        box7: "",
        box8: "",
        box9: ""
    });

    const [playerNumber, setPlayerNumber] = useState(Math.floor(Math.random() * 2));
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    useEffect(() => {
        checkMatchState();
    }, [boxes]);

    const playerSymbol = playerNumber % 2 === 0 ? 'O' : 'X';

    const checkMatchState = () => {
        const winPatterns = [
            ['box1', 'box2', 'box3'],
            ['box4', 'box5', 'box6'],
            ['box7', 'box8', 'box9'],
            ['box1', 'box4', 'box7'],
            ['box2', 'box5', 'box8'],
            ['box3', 'box6', 'box9'],
            ['box1', 'box5', 'box9'],
            ['box3', 'box5', 'box7']
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                setTimeout(() => {
                    alert("Game is over, " + boxes[a] + " won!");
                    setTimeout(() => {
                        window.location.reload()
                    }, 150);
                }, 150);
                return;
            }
        }

        if (numberOfClicks === 9) {
            setTimeout(() => {
                alert("Game is over, draw!");
                setTimeout(() => {
                    window.location.reload()
                }, 150);
            }, 150);
        }
    };

    const clicked = (id) => {
        console.log(numberOfClicks);
        if (boxes[id] === "") {
            setBoxes((prevBoxes) => ({
                ...prevBoxes,
                [id]: playerSymbol
            }));
            setPlayerNumber(prev => prev + 1);
            setNumberOfClicks(prev => prev + 1);
        }
    };

    return (
        <div>
            <div className='title d-flex justify-content-center align-items-center'>
                Tic Tac Toe
            </div>
            <div className='turns d-flex justify-content-center align-items-center'>
                {playerSymbol}'s Turn
            </div>
            <div className='container'>
                <div>
                    <div className='box' onClick={() => clicked('box1')}>{boxes.box1}</div>
                    <div className='box' onClick={() => clicked('box2')}>{boxes.box2}</div>
                    <div className='box' onClick={() => clicked('box3')}>{boxes.box3}</div>
                </div>
                <div>
                    <div className='box' onClick={() => clicked('box4')}>{boxes.box4}</div>
                    <div className='box' onClick={() => clicked('box5')}>{boxes.box5}</div>
                    <div className='box' onClick={() => clicked('box6')}>{boxes.box6}</div>
                </div>
                <div>
                    <div className='box' onClick={() => clicked('box7')}>{boxes.box7}</div>
                    <div className='box' onClick={() => clicked('box8')}>{boxes.box8}</div>
                    <div className='box' onClick={() => clicked('box9')}>{boxes.box9}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
