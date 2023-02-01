let dummyTest = dummy;
console.log([...dummyTest]);
let dummyList = document.querySelector(".dummy-list");

// 일단 리스트 뿌림.
dummyList.innerHTML = dummyTest.map((el) => {
    const {id, name, imgUrl, techStack} = el;  // el.id, el.name
    return (
        `
        <div>
        <img src="${imgUrl}" />
        <span>아이디:${id}</span>
        <span>이름:${name}</span><br>
        <span>기술스택:${techStack}</span>
        </div>
        `
    )
}).join('');

{/* <article class="categories">
<button class="btn">전체</button>
<button class="btn">프론트</button>
<button class="btn">백</button>
<button class="btn">풀스택</button>
</article> */}

let btn = document.querySelectorAll(".btn");
let listOut = () => {
    // (btn[0].value === 'all') 전체출력()
    // (btn[0].value === 'all') 전체출력()
    // (btn[0].value === 'all') 전체출력()
    // (btn[0].value === 'all') 전체출력()
}
btn[0].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.map(el =>{
        const {id, name, imgUrl, techStack} = el;
        return (
            `
            <div>
            <img src="${imgUrl}" />
            <span>아이디:${id}</span>
            <span>이름:${name}</span><br>
            <span>기술스택:${techStack}</span>
            </div>
            `
        )
    });
});
btn[1].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
        if(el.tech === 'front'){ return el }
    }).map(el =>{
        const {id, name, imgUrl, techStack} = el;
        return (
            `
            <div>
            <img src="${imgUrl}" />
            <span>아이디:${id}</span>
            <span>이름:${name}</span><br>
            <span>기술스택:${techStack}</span>
            </div>
            `
        )
    });
});
btn[2].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
        if(el.tech === 'back'){ return el }
    }).map(el =>{
        const {id, name, imgUrl, techStack} = el;
        return (
            `
            <div>
            <img src="${imgUrl}" />
            <span>아이디:${id}</span>
            <span>이름:${name}</span><br>
            <span>기술스택:${techStack}</span>
            </div>
            `
        )
    });
});
btn[3].addEventListener("click", () =>{
    dummyList.innerHTML = dummyTest.filter((el) => {
        if(el.tech === 'full'){ return el }
    }).map(el =>{
        const {id, name, imgUrl, techStack} = el;
        return (
            `
            <div>
            <img src="${imgUrl}" />
            <span>아이디:${id}</span>
            <span>이름:${name}</span><br>
            <span>기술스택:${techStack}</span>
            </div>
            `
        )
    });
});



// if(tech === 'front')
// if(tech === 'back')
// return (
//     `
//     <div>
//     <img src="${imgUrl}" />
//     <span>아이디:${id}</span>
//     <span>이름:${name}</span><br>
//     <span>기술스택:${techStack}</span>
//     </div>
//     `
// )





