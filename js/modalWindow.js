const container = document.querySelector("#modalWindow"),
      showWindow = document.querySelector("#showWindow"),
      sendButton = document.querySelector("#sendButton"),
      info = document.querySelector("#infoForm"),
      textArea = document.querySelector("#text");

container.style.display = "none";

function sendTo(text) {
  const json = JSON.stringify(text);
  const request = new XMLHttpRequest();
  request.open('GET','YOUIP.COM'); //Rewrite
  request.onload = function(){
    console.log("Hey!Info fly!");
      console.log(request.response);
  }
  request.send();
}

function setHide(element){
  element.style.width = "10px";
  element.style.height = "10px";
  element.style.minWidth = "10px";
  element.style.minHeight = "10px";
  element.style.borderRadius = "50%";
  info.textContent = "THANK YOU!";

  sendTo(text.value);
  text.value = "";

  setTimeout(()=>element.style.filter = "opacity(0)",400);
}
function setShow(element){
  info.textContent = "GIVE ME YOU MIND!";
  element.style.filter = "opacity(1)";
  element.className = "showed";
  element.style.display = "block";
  function resize(element){
    element.style.width = "300px";
    element.style.height = "330px";
    element.style.minWidth = "300px";
    element.style.minHeight = "330px";
    element.style.borderRadius = "0";
  }
  setTimeout(()=>resize(element),1);
}


setHide(container);

showWindow.addEventListener("click",()=>setShow(container));
sendButton.addEventListener("click",()=>setHide(container));
