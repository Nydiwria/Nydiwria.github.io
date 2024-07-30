let myimage = document.querySelector("img");
myimage.onclick = function () {
    let mysrc = myimage.getAttribute("src");
    if (mysrc === "/images/google.png") {
        myimage.setAttribute("src", "/images/google1.png");
    } else {
        myimage.setAttribute("src", "/images/google.png");
    }
}
let mybutton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myname = prompt("请输入你的名字：");
    if (!myname) {
        setUserName();
    } else {
        localStorage.setItem("name", myname);
        myHeading.textContent = "欢迎来到Google，" + myname;
    }


}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedname = localStorage.getItem("name");
    myHeading.textContent = "欢迎来到Google，" + storedname;
}
mybutton.onclick = function () {
    setUserName();
}