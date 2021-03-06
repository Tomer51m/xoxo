const calculateWinner = (setWinner: React.Dispatch<React.SetStateAction<string>>, boardArray: string[]): void => {
    let rows = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < rows.length; i++) {
        const [ a, b, c ] = rows[i];
        if (boardArray[a] && boardArray[b] === boardArray[a] && boardArray[c] === boardArray[a]) {
            setWinner(boardArray[a]);
            return;
        }
    }
return;
}

export default calculateWinner;