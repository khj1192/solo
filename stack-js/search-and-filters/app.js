let dummyList = document.querySelector(".dummy-list");
let form = document.getElementById("form");
let textName = document.getElementById("textName");
let skillStack = document.getElementById("skillStack");
let localData = JSON.parse(localStorage.getItem("developerGroup")) || [];
// 초기 더미 로컬에 등록
const testReturn = (() => {
    if(!localStorage.developerGroup) {
        localStorage.setItem('developerGroup', JSON.stringify(dummy));
    }
})()
// 수정필요...
// checkBox.addEventListener("checkbox", () => {
//     console.log("체크박스실행여부")
// })

// 등록버튼 클릭시 실행
let addDeveloper = () => {
    localData.push({
        id: localData.length + 1,
        name: textName.value, 
        imgUrl: `https://avatars.githubusercontent.com/u/${parseInt(Math.random() * 100)}`,
        techStack: skillStack.value,
        tech: "front"
    });
    localStorage.setItem("developerGroup", JSON.stringify(localData));
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addDeveloper();
});

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

// 필터링.
// let btn = document.querySelectorAll(".btn");
//   btn[0].addEventListener("click", () => displayData('all'));
//   btn[1].addEventListener("click", () => displayData('front'));
//   btn[2].addEventListener("click", () => displayData('back'));
//   btn[3].addEventListener("click", () => displayData('full'));

const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        console.log("실행여부확인")
        let tech = ['all', 'front', 'back', 'full'][index];
        displayData(tech);
    });
});

const formInput = document.querySelector('.input-form');
const searchInput = document.querySelector(".search");
formInput.addEventListener('keyup', () => {
    const inputValue = searchInput.value.toLowerCase();
    localData = localData.filter(el => el.techStack.toLowerCase().includes(inputValue));
    displayData();
});

  // 구조정렬하기






