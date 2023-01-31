let form = document.getElementById("form");
let titleInput = document.getElementById("textInput");
let toDoContent = document.getElementById("toDoContent");
let contentList = document.getElementById("contentList");
let localData = JSON.parse(localStorage.getItem("localDataKey")) || [];
/** 유효성검사 */
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      titleInput.value === "" || toDoContent.value === "" ?
      contentMsg.innerHTML = "제목 또는 내용 없음" : dataInLocalData();
    });
/** 입력값 초기화 */
    let resetForm = () => {
      titleInput.value = "";
      toDoContent.value = "";
      contentMsg.innerHTML ="";
    };
/** 리스트 불러오기 */
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
/** 로컬에 데이터 넣기 */
    let localDataSet = () =>{
      localStorage.setItem("localDataKey", JSON.stringify(localData));
    }
/** 데이터 넣기 */
    let dataInLocalData = () => {
      localData.unshift({
        title: titleInput.value,
        date: new Date().toLocaleString('kr'),
        content: toDoContent.value,
      });
      callCenter(localDataSet, createContentList);
    };
/** 리스트에 추가하기 */ 
    let createContentList = () => { 
      callCenter(localMap, resetForm);
    };
/** 해당 게시글 삭제 */
    let deleteContentList = (e) => {
      e.parentElement.remove();
      localData.splice(e.parentElement.id, 1);  
      callCenter(localDataSet, localMap);
    };
/** 게시글 전체삭제 */
    let delAllLocalStorage = () => {  
      localData.splice(0, localData.length);
      callCenter(localDataSet, localMap);
    }
/** 함수실행 */
    let callCenter = (func1, func2) => {func1(), func2()}
// 필드실행.
localMap(); 

  // 추가 할 기능 생각해보기
  // 함수 기능별로 쪼개기


