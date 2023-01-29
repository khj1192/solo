let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textarea = document.getElementById("toDoContent");
let contentList = document.getElementById("contentList");

form.addEventListener("submit", (e) => { // id"form" 내부 다 가져옴.
    e.preventDefault();
    formValidation();
  });
  
  // 유효성검사 가볍게 하기
let formValidation = () => { 
    textInput.value === "" || textarea.value === "" ?
    contentMsg.innerHTML = "제목 또는 내용 없음" : dataInLocal();
};

let localData = [];
let dataInLocal = () => { // 로컬에 데이터 넣기
  localData.push({
    text: textInput.value,
    date: new Date().toLocaleString('kr'),
    description: textarea.value,
  });
  localStorage.setItem("localDataKey", JSON.stringify(localData)); // key, value
  createContentList();
  console.log("localData : ",localData);
};
let createContentList = () => { // 로컬데이터 html 넣기
  contentList.innerHTML = "";
  localData.map((el, index) => { // el, index가 사용되는건 배열의 구조상 필요함. 규칙임
      return (contentList.innerHTML += `
              <div id="${index}">
                <p>${index+1}.제목 : ${el.text}</p>
                <span>${el.date}</span>
                <p>${el.description}</p>
                <button type="submit" id="delete" onclick="deleteContentList(this)">삭제하기</button>
              </div>
            `);
          });
    resetForm();
  };
  let resetForm = () => {
    textInput.value = "";
    textarea.value = "";
    contentMsg.innerHTML ="";
  };

  // 최상단이 삭제됨. -> 삭제대상 태그에 id값이 없으면 최상단이 디폴트인듯?
  // 모두 삭제해도 로컬상 몇몇 데이터 남아있음.
  // 나중에 추가 한 데이터부터 지우면 다 지워짐.
  let deleteContentList = (e) => {
    e.parentElement.remove();
    localData.splice(e.parentElement.id, 1);  // 스플라이스로 지우고, 
    localStorage.setItem("localDataKey", JSON.stringify(localData));  // 로컬에 스트링으로 셋.

  };
// 로컬 가져옴.
  (() => {
    localData = JSON.parse(localStorage.getItem("localDataKey")) || []; // json형식으로 겟.
    createContentList();
  })();

  // 삭제누르면 일부가 로컬에서 삭제되지 않고 남아있는지 현상 잡기.
  // 콘솔에서 직접 삭제하기버튼 누른 상황 만들어서 확인해야 할 듯...ㅠㅠ