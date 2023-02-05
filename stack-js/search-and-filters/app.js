let dummyList = document.querySelector(".dummy-list");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack");
let localData = JSON.parse(localStorage.getItem("developerGroup")) || [];
// 초기 더미 로컬에 등록
const addLocalStorage = (() => {
    if(!localStorage.developerGroup) {
        localStorage.setItem('developerGroup', JSON.stringify(dummy));
    }
})()

let addDeveloper = () => {
    let tech = "";
    if (front.checked) tech += front.value
    if (back.checked) tech += back.value
    if (full.checked) tech += full.value
    console.log("tech : ",tech)
    localData.push({
        id: localData.length + 1,
        name: textName.value, 
        imgUrl: `https://avatars.githubusercontent.com/u/${parseInt(Math.random() * 100)}`,
        techStack: skillStack.value,
        tech: tech,
    });
    localStorage.setItem("developerGroup", JSON.stringify(localData));
};

// 등록버튼 클릭시 실행
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addDeveloper();
});

/** 인자가 전달되지 않으면 'all'할당 -> filter조건 프리패스권. */
const displayData = (tech = 'all') => {
    dummyList.innerHTML = localData
    .filter((el) => tech === 'all' || el.tech === tech)
    .map(el => `
        <div>
        <img src="${el.imgUrl}" />
        <span>ID: ${el.id}</span>
        <span>Name: ${el.name}</span>
        <span>Tech Stack: ${el.techStack}</span>
        </div>
        `)
    .join('');
};
displayData();

// 필터클릭시 디스플레이함수에 전달.
const btn = document.querySelector(".categories");
    btn.addEventListener("click", (e)=>{
        let tech = e.target.value;
        console.log(tech)
        displayData(tech);
    });

const formInput = document.querySelector('.input-form');
const searchInput = document.querySelector(".search");
formInput.addEventListener('keyup', () => {
    const inputValue = searchInput.value.toLowerCase();
    localData = localData.filter(el => el.techStack.toLowerCase().includes(inputValue));
    displayData();
});

  // 구조정렬하기







