let input1 = document.getElementById("input1");
let nameValue = input1.value
let buttonClick = document.getElementById("button");
let allContent = document.getElementById("allContent")
let sup = document.getElementById("support")
let message = [
   "Уебан, если не извинишься, тебя завтра фура собъет, поэтому сейчас открываешь мою фотографию и стоя на коленях целуешь её 3 три раза произнося \"Дениска не простит, боженька простит\"."
]
let messageAlert = document.getElementById("text")
let confContainer = document.getElementById("confirm-container")
let confButton1 = document.getElementById("confirmButton1")
let confButton2 = document.getElementById("confirmButton2")
getRandomNumber = (arr) => {
   let num = Math.floor(Math.random() * arr.length)
   return num
};

getMessage = () => {
   let num = input1.value.toLowerCase()
   let name = input1.value
   confContainer.className = "classVisible"
   if (num === "") {
      messageAlert.innerHTML = `Ты блять, уебанище, если не извинишься, тебя завтра фура собъет, поэтому сейчас же открываешь мою фотографию и стоя на коленях целуешь её 3 три раза произнося \"Дениска не простит, боженька простит\".`
   } else if (num === "денис" || num === "денчик") {
      messageAlert.innerHTML = `Денис Анатольвеич, святой вы человек, дай бог вам здоровья!!!>`
   } else
      messageAlert.innerHTML = `${name}, если не извинишься, тебя завтра фура собъет, поэтому сейчас же открываешь мою фотографию и стоя на коленях целуешь её 3 три раза произнося \"Дениска не простит, боженька простит\"."`
};

getThanks = () => {
   allContent.className = "classHidden"
   confContainer.className = "classHidden"
   sup.className = "supVisible"
}






buttonClick.addEventListener("click", getMessage)
confButton1.addEventListener("click", getThanks)
confButton2.addEventListener("click", getThanks)
