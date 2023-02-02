let dummyTest = dummy;
let dummyList = document.querySelector(".dummy-list");

let developerPosition = document.getElementById("developerPosition");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack");
let localData = JSON.parse(localStorage.getItem("developerGroup")) || [];

// 등록버튼 클릭시 실행
let localBoxFunction = () =>{
    console.log(textName.value)
    localData.push(textName.value = "확인")
    localStorage.setItem("developerGroup", JSON.stringify(localData))
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("버튼 잘 눌려서 들어갑니다~");
    localBoxFunction();
  });

let testFunction = (el) => {
    return (
        `
        <div>
        <img src="${el.imgUrl}" />
        <span>아이디:${el.id}</span>
        <span>이름:${el.name}</span><br>
        <span>기술스택:${el.techStack}</span>
        </div>
        `
    )
}

// 일단 리스트 뿌림.
const displayProducts = () => {
dummyList.innerHTML = dummyTest.map((el) => {
    return testFunction(el);
});
}
displayProducts();

// 필터링.
let btn = document.querySelectorAll(".btn");

btn[0].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.map(el =>{
        return testFunction(el);
    });
});

btn[1].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
        if(el.tech === 'front' || el.tech === 'back'){ return el }
    }).map(el =>{
        return testFunction(el);
    });
});

btn[2].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
        if(el.tech === 'back'){ return el }
    }).map(el =>{
        return testFunction(el);
    });
});

btn[3].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
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
    dummyTest = dummy.filter(el => {
        return el.techStack.toLowerCase().includes(inputValue);
    });
    displayProducts();
  });






