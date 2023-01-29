let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let textarea = document.getElementById("toDoContent");
let msg = document.getElementById("msg");
let contentList = document.getElementById("contentList");

form.addEventListener("submit", (e) => { // id"form" 내부 다 가져옴.
    e.preventDefault();
    formValidation();
  });
  
  let formValidation = () => { // 유효성검사 조금 상세하게 하기.
    if (textInput.value === "") {
      console.log("failure");
      msg.innerHTML = "제목, 내용 입력";
    } else {
      dataInLocal();
      }
      };

let localData = [];
let dataInLocal = () => { // 로컬에 데이터 넣기
  localData.push({
    text: textInput.value,
    date: new Date().toLocaleString('kr'),
    description: textarea.value,
  });
  localStorage.setItem("localDataKey", JSON.stringify(localData));
  createContentList();
  console.log("localData : ",localData);
};
let createContentList = () => { // 로컬데이터 html 넣기
  contentList.innerHTML = "";
  localData.map((el, index) => {
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
  };

  // 최상단이 삭제됨. -> 삭제대상 태그에 id값이 없으면 최상단이 디폴트인듯?
  let deleteContentList = (e) => {
    console.log("e값 : ",e)
    e.parentElement.remove();
    localData.splice(e.parentElement.id, 1);
    localStorage.setItem("localDataKey", JSON.stringify(localData));
    console.log("스트링디파이 데이터 : ",localData);
  };

  // 로컬 가져옴.
  (() => {
    localData = JSON.parse(localStorage.getItem("localDataKey")) || [];
    createContentList();
  })();