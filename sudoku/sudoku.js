// id board에 9x9 보드박스 넣기


    let binBoardBox = "";
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(j < 3 && i < 3 || j > 5 && i > 5 || j > 5 && i < 3 || j < 3 && i > 5 || j > 2 && j < 6 && i > 2 && i < 6){
                binBoardBox += "<input class='pinkBoard'/>";
            }else{
                binBoardBox += "<input class='grayBoard'/>";
            }
            console.log("j : ",j)
            console.log("i : ",i)
        }
        binBoardBox += "<br>"
    }
    document.getElementById("board").innerHTML = binBoardBox;





