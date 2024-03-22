const msgerInput = get("#msger-input");
const msgerChat = get(".chat-area-mobile");
const msgerdeskChat = get(".chat-area-desktop");
const sendMsg = get('.send-message');
const activeGreen = document.getElementById("active");

let username = "";

var site = {
  endpoint: "",
  city: null,
  country: null,
};

function setCookie(cname, cvalue, msg, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "-" + msg + ";" + expires + ";path=/";
}

// checks if already a cookie exists for the user if not than creates a new cookie
function checkCookie() {
  let user = getCookie(username);
  if (user != "") {
    return;
  }
  setCookie(username, 1, 5);
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


const BOT_MSGS = [
  "Hi, how are you?",
  "Let's talk!",
  "I like to play games, But I don't know how to play!",
  "You are amazing. :))",
  "I feel sleepy! :("
];

// sendMsg.onclick = event => {
//     event.preventDefault();
//     debugger;


//     const msgText = msgerInput.value;
//     if (!msgText) return;

//     appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
//     msgerInput.value = "";

//     botResponse();
//   };


function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const typeElement = get("#type-on");
  const typedeskElement = get("#type-on-desk");
  if(typeElement) typeElement.remove();
  if(typedeskElement) typedeskElement.remove();
  const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="bubble-wrapper">
        <div class="msg-bubble">
        <div class="msg-text">${text}</div>

          <div class="msg-info">
          <!-- <div class="msg-info-name">${name}</div> -->
          
          </div>
  
        </div>
        <div class="msg-info-time">${formatAMPM(new Date())}</div> 
        </div>
      </div>
    `;

  const deskmsgHTML = `
      <div class="msg-desk ${side}-msg-desk">
        <div class="msg-img-desk" style="background-image: url(${img})"></div>
        <div class="bubble-wrapper">
  
        <div class="msg-bubble-desk">
        <div class="msg-text-desk">${text}</div>

          </div>
          <div class="msg-info-time-desk">${formatAMPM(new Date())}</div>
  
        </div>
      </div>
    `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerdeskChat.insertAdjacentHTML("beforeend", deskmsgHTML);
  scroll();
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function appendTyping(img, side) {
  //   Simple solution for small apps
  const msgHTML = `
      <div id="type-on" style="align-items: center" class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
          <div class="typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;

  const msgdeskHTML = `
    <div id="type-on-desk" style="align-items: center" class="msg-desk ${side}-msg-desk">
      <div class="msg-img-desk" style="background-image: url(${img})"></div>
        <div class="typing-desk">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerdeskChat.insertAdjacentHTML("beforeend", msgdeskHTML);
  scroll()
}

function scroll (){
  msgerChat.scrollTop = msgerChat.scrollHeight;
  msgerdeskChat.scrollTop = msgerdeskChat.scrollHeight;
}


const startMessaging = (data) => {
  const { username, name, profile_pic } = data;
  let r = 0;
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;
  setCookie(username, 1, r, 5);
  typeMessages(name, profile_pic, msgText)
  const interval = setInterval(() => {
    r++;
    if (r >= BOT_MSGS.length) {
      clearInterval(interval)
      return;
    }
    const msgText = BOT_MSGS[r];
    setCookie(username, 1, r, 5);
    typeMessages(name, profile_pic, msgText)
  }, 15000);
}

function typeMessages(name, profile_pic, msgText) {
  appendTyping(profile_pic, "left");
  setTimeout(() => {
    appendMessage(name, profile_pic, "left", msgText)
  }, 4555);
}

function spamMessages (count, data) {
  const { username, name, profile_pic } = data;
  for(let i=0;i<=count;i++) {
    if(i >= BOT_MSGS.length) break;
    const msgText = BOT_MSGS[i];
    appendMessage(name, profile_pic, "left", msgText);
  }
}

// let blinking = setInterval(() => {
//   activeGreen.classList.toggle("hide");
// }, 1500);










$(document).ready(function () {

  let url = window.location.search;

  const urlParams = new URLSearchParams(url);
  username = urlParams.get('chat');
  username = !username?.length ? "Deari492326" : username;


  fetch(`https://twitter-data-lp.optinmycash.workers.dev/?chat=${username}`)
    .then((res) => res.json())
    .then((data) => {

      if (username) {
        let currentCookie = getCookie(username);
        if (currentCookie) {
          const cookieArr = currentCookie.split("-");
          const numberOfMsg = cookieArr[1];
          spamMessages(+numberOfMsg, data);

        } else {
          startMessaging(data);
        }
      }
    });


});




