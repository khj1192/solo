// id board에 9x9 보드박스 넣기
let divIdBoard = document.getElementById("board");

let boardArray = [
                ["3", "", 9, 8, 7, 6, 5, 4, 1],
                [8, 7, 6, 5, 4, 1, 9, "", 2],
                [5, "", 1, 9, 3, 2, 8, 7, 6],
                [9, 5, 8, 7, 6, 0, 2, 1, 3],
                [7, 6, 3, 2, 1, 9, 4, 8, 5],
                [4, 1, 2, 3, 8, 5, "", 6, 9],
                [6, "", 7, "", 5, 3, 1, 2, 8],
                [2, 3, 4, 1, 9, 8, 6, 5, 7],
                [1, 8, 5, 6, 2, 7, "", 9, 4]
                ]

let boardArrat2 = ['1','2','3','4','5','6','7','8','9'];

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            (j < 3 && i < 3) || (j > 5 && i > 5) || (j > 5 && i < 3) || 
            (j < 3 && i > 5) || (j > 2 && j < 6 && i > 2 && i < 6) ?
            divIdBoard.innerHTML += `<input class=pinkBoard value=${boardArrat2[j]} >` :
            divIdBoard.innerHTML += `<input value=${boardArrat2[j]} >`;
        }
        divIdBoard.innerHTML += "<br>"
    }








