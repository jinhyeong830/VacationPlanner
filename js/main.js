//로그인 창 띄우기
const loginTxt = document.querySelector(".register__login");
const loginWindow = document.querySelector(".login");
const logoImg = document.querySelector(".logo img");
const xMark = document.querySelector(".x");
loginTxt.addEventListener("click", function () {
	console.log("!");
	if (loginWindow.classList.contains("hide")) {
		loginWindow.classList.remove("hide");
	} else {
		loginWindow.classList.add("hide");
	}

	if (logoImg.classList.contains("hide")) {
		logoImg.classList.remove("hide");
	} else {
		logoImg.classList.add("hide");
	}
});
xMark.addEventListener("click", function () {
	loginWindow.classList.add("hide");
	logoImg.classList.remove("hide");
});
