const form = document.getElementById("form");
const delAllLocalStorage = document.getElementById("delAllLocalStorage");
const titleInput = document.getElementById("titleInput");
const toDoContent = document.getElementById("toDoContent");
const contentList = document.getElementById("contentList");
const contentMsg = document.getElementById("contentMsg");
let localData = JSON.parse(localStorage.getItem("localDataKey")) || [];
/** 유효성검사 */
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      !titleInput.value || !toDoContent.value ?
      contentMsg.innerHTML = "제목 또는 내용 없음" : storeData();
    });
/** 입력값 초기화 */
    let resetForm = () => {
      titleInput.value = "";
      toDoContent.value = "";
      contentMsg.innerHTML ="";
    };
/** 리스트 불러오기 */
    const renderData = () => {
      contentList.innerHTML = "";
      localData.forEach((el, index) => {
        contentList.innerHTML += `
          <div id="${index}">
            <p>${index + 1}. Title: ${el.title}</p>
            <span>${el.date}</span>
            <p>${el.content}</p>
            <button type="submit" id="delete" onclick="deleteData(event, ${index})">삭제</button>
          </div>
        `;
      });
    };
/** 로컬에 데이터 넣기 */
    let localDataSet = () =>{
      localStorage.setItem("localDataKey", JSON.stringify(localData));
    }
/** 데이터 넣기 */
    const storeData = () => {
      localData.unshift({
        title: titleInput.value,
        date: new Date().toLocaleString('kr'),
        content: toDoContent.value,
      });
      localDataSet();
      renderData();
      resetForm();
    };
/** 해당 게시글 삭제 */
    const deleteData = (event, index) => {
      console.log(event.target)
      event.target.parentElement.remove();
      localData.splice(index, 1);
      localDataSet();
    };
/** 게시글 전체삭제 */
    delAllLocalStorage.addEventListener("click", () => {
      localData.splice(0, localData.length);
      localDataSet();
      renderData();
    });
renderData();
  // 추가 할 기능 생각해보기
  // 함수 기능별로 쪼개기
















