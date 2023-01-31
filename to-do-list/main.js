let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let toDoContent = document.getElementById("toDoContent");
let contentList = document.getElementById("contentList");
let localData = []

form.addEventListener("submit", (e) => { // id"form" 내부 다 가져옴.
  e.preventDefault();
  formValidation();
});

let formValidation = () => {  // 내용 없으면 알림.
  textInput.value === "" || toDoContent.value === "" ?
  contentMsg.innerHTML = "제목 또는 내용 없음" : dataInLocal();
};

let resetForm = () => { // 작성 후 입력 비우기
  textInput.value = "";
  toDoContent.value = "";
  contentMsg.innerHTML ="";
};

let localMap = () => {  // 호출 한 함수에 따라 맵.
  contentList.innerHTML = "";
    localData.map((el, index) => {
      return (contentList.innerHTML += `
        <div id="${index}">
          <p>${index+1}.제목 : ${el.text}</p>
          <span>${el.date}</span>
          <p>${el.description}</p>
          <button type="submit" id="delete" onclick="deleteContentList(this)">삭제하기</button>
        </div>
        `
)})};

let callCenter = (x, y) => {  // 함수인자 실행
  x(), y();
}

let localSetData = () =>{ // 로컬에 데이터 넣기
  localStorage.setItem("localDataKey", JSON.stringify(localData));
}

let dataInLocal = () => { // data넣기
  localData.unshift({
    text: textInput.value,
    date: new Date().toLocaleString('kr'),
    description: toDoContent.value,
  });
  callCenter(localSetData, createContentList);
};

let deleteContentList = (e) => {  // 삭제하기
  e.parentElement.remove();
  localData.splice(e.parentElement.id, 1);  
  callCenter(localSetData, localMap);
};

let delAllLocalStorage = () => {  // 전체삭제
  localData.splice(0, localData.length);
  callCenter(localSetData, localMap);
}

let createContentList = () => { // 추가하기
  callCenter(localMap, resetForm);
};

localData = JSON.parse(localStorage.getItem("localDataKey")) || []; // 바로 return
localMap(); // 필드실행.


  // 추가 할 기능 생각해보기
  // 함수 기능별로 쪼개기


