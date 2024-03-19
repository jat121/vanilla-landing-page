const msgerInput = get("#msger-input");
const msgerChat = get(".chat-area-mobile");
const msgerdeskChat = get(".chat-area-desktop");
const sendMsg = get('.send-message');



const BOT_MSGS = [
  "Hi, how are you?",
  "Let's talk!",
  "I like to play games... But I don't know how to play!",
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
    typeElement.remove();
    typedeskElement.remove();
    const msgHTML = `
      <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div>
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
  
        <div class="msg-bubble-desk">
          <div class="msg-info-desk">
            <div class="msg-info-name-desk">${name}</div>
            <div class="msg-info-time-desk">${formatAMPM(new Date())}</div>
          </div>
  
          <div class="msg-text-desk">${text}</div>
        </div>
      </div>
    `;
  
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerdeskChat.insertAdjacentHTML("beforeend", deskmsgHTML);
    msgerChat.scrollTop += 500;
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
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
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
    msgerChat.scrollTop += 500;
  }


  const startMessaging = () => {
    fetch("https://twitter-data-lp.optinmycash.workers.dev/?chat=Deari492326")
    .then((res) => res.json())
    .then((data) => {
        const { username, name, profile_pic } = data; 
        const r = random(0, BOT_MSGS.length - 1);
        const msgText = BOT_MSGS[r];
        const delay = msgText.split(" ").length * 100;

        appendTyping(profile_pic, "left");
        setTimeout(() => {
            appendMessage(name, profile_pic, "left", msgText)
          }, 4555);
    });
  }

  startMessaging();