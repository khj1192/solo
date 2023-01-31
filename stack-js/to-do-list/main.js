let form = document.getElementById("form");
let titleInput = document.getElementById("textInput");
let toDoContent = document.getElementById("toDoContent");
let contentList = document.getElementById("contentList");
let localData = JSON.parse(localStorage.getItem("localDataKey")) || [];

/** 유효성검사 */
form.addEventListener("submit", (e) => {
  e.preventDefault();
  titleInput.value === "" || toDoContent.value === "" ?
  contentMsg.innerHTML = "제목 또는 내용 없음" : dataInLocal();
});

/** 입력값 초기화 */
let resetForm = () => { 
  titleInput.value = "";
  toDoContent.value = "";
  contentMsg.innerHTML ="";
};

let localMap = () => {
  contentList.innerHTML = "";
    localData.map((el, index) => {
      return (contentList.innerHTML += `
        <div id="${index}">
          <p>${index+1}.제목 : ${el.title}</p>
          <span>${el.date}</span>
          <p>${el.content}</p>
          <button type="submit" id="delete" onclick="deleteContentList(this)">삭제하기</button>
        </div>
        `
)})};

/** 함수실행 */
let callCenter = (x, y) => {
  x(), y();
}

/** 로컬에 데이터 넣기 */
let localSetData = () =>{
  localStorage.setItem("localDataKey", JSON.stringify(localData));
}

/** 데이터 넣기 */
let dataInLocal = () => {
  localData.unshift({
    title: titleInput.value,
    date: new Date().toLocaleString('kr'),
    content: toDoContent.value,
  });
  callCenter(localSetData, createContentList);
};

/** 해당 게시글 삭제 */
let deleteContentList = (e) => {
  e.parentElement.remove();
  localData.splice(e.parentElement.id, 1);  
  callCenter(localSetData, localMap);
};

/** 게시글 전체삭제 */
let delAllLocalStorage = () => {  
  localData.splice(0, localData.length);
  callCenter(localSetData, localMap);
}

/** 리스트에 추가하기 */ 
let createContentList = () => { 
  callCenter(localMap, resetForm);
};

localMap(); // 필드실행.

  // 추가 할 기능 생각해보기
  // 함수 기능별로 쪼개기


