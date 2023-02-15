let dummyList = document.querySelector(".dummy-list");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack"); // 간단소개로 변경
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
    if (positionSelect.value !== '') {tech += positionSelect.value}
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
    console.log(e.target)
    addDeveloper();
    inputReset();
});

const itemsPerPage = 5;
let currentPage = 1;
const pagination = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedData = localData.slice(startIndex, endIndex);

  const fragment = document.createDocumentFragment(); //

  pagedData.forEach(el => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const id = document.createElement("span");
    const name = document.createElement("span");
    const techStack = document.createElement("span");

    img.src = el.imgUrl;
    id.textContent = `ID: ${el.id}`;
    name.textContent = `Name: ${el.name}`;
    techStack.textContent = `Tech Stack: ${el.techStack}`;

    div.appendChild(img);
    div.appendChild(id);
    div.appendChild(name);
    div.appendChild(techStack);

    fragment.appendChild(div);
  });
  dummyList.appendChild(fragment);
};
pagination();

const createPaginationButtons = () => {
  const pagesCount = Math.ceil(JSON.parse(localStorage.getItem("developerGroup")).length / itemsPerPage);
  const pagination = document.querySelector(".pagination");
  
  for (let i = 1; i <= pagesCount; i++) {
    const button = document.createElement("button");
    button.value = i;
    button.textContent = i;
    button.addEventListener("click", () => {
      changePage(i);
    });
    pagination.appendChild(button);
  }
};


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







    // 검색버튼을 만들자?
    // 입력값이 없으면 전체결과
    // 입력값이 있고 결과가 없으면 ? '결과없음' : 결과출력.
    console.log(search.value)
    const searchData = (event) => {
      const searchValue = event.target.value.toLowerCase();
      console.log(searchValue)
      // 검색 유요한 값 : name, techStack(언어), tech(front, back, full)
      };

    
    // 작성시 발생
    search.addEventListener('input', searchData);
    // displayData();




    // 수정 기능: 등록된 개발자의 정보를 수정할 수 있는 기능
    // 삭제 기능: 등록된 개발자의 정보를 삭제할 수 있는 기능
    // 정렬 기능: 등록된 개발자의 정보를 정렬할 수 있는 기능
    // 페이지 번호 보여주기: 현재 보여지는 페이지 번호를 화면에 보여주는 기능
    // 검색 기능 개선 -> 이녀석은 어찌 바꿔야할까..
    // 글 작성시 이미지업로드도 가능하려나?


    // 변경점 - css추가, innerHTML 변경







