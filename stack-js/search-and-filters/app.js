let dummyTest = dummy;
let dummyList = document.querySelector(".dummy-list");

let developerPosition = document.getElementById("developerPosition");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack");
let localData = JSON.parse(localStorage.getItem("developerGroup")) || [];
let checkBox = document.getElementById("developerPosition").children;

// 수정필요...
// checkBox.addEventListener("checkbox", () => {
//     console.log("체크박스실행여부")
// })

// 등록버튼 클릭시 실행
let localBoxFunction = () =>{

    localData.push({
        id: localData.length+1,
        name : textName.value, 
        imgUrl : `https://avatars.githubusercontent.com/u/${parseInt(Math.random()*100)}`,
        techStack: skillStack.value,
        tech : "front",
        })
    localStorage.setItem("developerGroup", JSON.stringify(localData))
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    localBoxFunction();
  });
let localMap = () => {
    dummyList.innerHTML = localData.map(el =>{
        return testFunction(el);
    });
}


let testFunction = (el) => {
    return (
        `
        <div>
        <img src="${el.imgUrl}" />
        <span>아이디:${el.id}</span>
        <span>이름:${el.name}</span>
        <span>기술스택:${el.techStack}</span>
        </div>
        `
    )
}

// 일단 리스트 뿌림.
const displayProducts = () => {
dummyList.innerHTML = localData.map((el) => {
    return testFunction(el);
});
}
displayProducts();

// 필터링.
let btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", () =>{
    dummyList.innerHTML = localData.map(el =>{
        return testFunction(el);
    });
});

btn[1].addEventListener("click", () =>{
    dummyList.innerHTML = localData.filter((el) => {
        if(el.tech === 'front' || el.tech === 'back'){ return el }
    }).map(el =>{
        return testFunction(el);
    });
});

btn[2].addEventListener("click", () =>{
    dummyList.innerHTML = localData.filter((el) => {
        if(el.tech === 'back'){ return el }
    }).map(el =>{
        return testFunction(el);
    });
});

btn[3].addEventListener("click", () =>{
    dummyList.innerHTML = localData.filter((el) => {
        if(el.tech === 'full'){ return el }
    }).map(el =>{
        return testFunction(el);
    });
});

// 검색태그
const formInput = document.querySelector('.input-form');
const searchInput = document.querySelector(".search");
formInput.addEventListener('keyup', () => {
    const inputValue = searchInput.value;
    console.log("인풋벨류 잡히나? : ",inputValue);
    localData = localData.filter(el => {
        return el.techStack.toLowerCase().includes(inputValue);
    });
    displayProducts();
  });

  // 구조정렬하기






