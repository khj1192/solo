let dummyList = document.querySelector(".dummy-list");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack");
let localData = JSON.parse(localStorage.getItem("developerGroup")) || [];
let search = document.getElementById("search");
// 초기 더미 로컬에 등록
const addLocalStorage = (() => {
    if(!localStorage.developerGroup) {
        localStorage.setItem('developerGroup', JSON.stringify(dummy));
    }
})()

let addDeveloper = () => {
    let tech = "";
    if (front.checked) tech += front.value;
    if (back.checked) tech += back.value;
    if (full.checked) tech += full.value;
    localData.push({
        id: localData.length + 1,
        name: textName.value, 
        imgUrl: `https://avatars.githubusercontent.com/u/${parseInt(Math.random() * 100)}`,
        techStack: skillStack.value,
        tech: tech,
    });
    localStorage.setItem("developerGroup", JSON.stringify(localData));
};
let inputReset = () => {
  search.value = '';
  textName.value = '';
  skillStack.value = '';
};

// 등록버튼 클릭시 실행
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addDeveloper();
    inputReset();
});

const itemsPerPage = 5;
let currentPage = 1;
const pagination = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedData = localData.slice(startIndex, endIndex);
  dummyList.innerHTML = pagedData
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
pagination();

const createPaginationButtons = () => {
  const pagesCount = Math.ceil(JSON.parse(localStorage.getItem("developerGroup")).length / itemsPerPage);
  let buttons = "";
  for (let i = 1; i <= pagesCount; i++) {
    buttons += `<button value="${i}" onClick="changePage(${i})">${i}</button>`;
  }
  document.querySelector(".pagination").innerHTML = buttons;
};
createPaginationButtons();

const displayData = (tech = 'all') => {
  localData = JSON.parse(localStorage.getItem("developerGroup"))
    .filter((el) => tech === 'all' || el.tech === tech);
  createPaginationButtons();
  pagination();
};
displayData();

const changePage = (page) => {
  currentPage = page;
  pagination();
};

// 필터클릭시 디스플레이함수에 전달.
const btn = document.querySelector(".categories");
    btn.addEventListener("click", (e)=>{
        let tech = e.target.value;
        displayData(tech);
    });

    // 수정 기능: 등록된 개발자의 정보를 수정할 수 있는 기능
    // 삭제 기능: 등록된 개발자의 정보를 삭제할 수 있는 기능
    // 정렬 기능: 등록된 개발자의 정보를 정렬할 수 있는 기능
    // 페이지 번호 보여주기: 현재 보여지는 페이지 번호를 화면에 보여주는 기능
    // 검색 기능 개선







