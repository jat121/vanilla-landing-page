let countriesFlags = {};
let userCountry = "";
let userCountryCode = "";
var _name = "";
let _username = "";
var _url = ""
var _profile_pic = "";

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

fetch("./flags.json")
    .then((res) => res.json())
    .then((data) => {
        countriesFlags = data;
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                userCountry = data.country_name;
                userCountryCode = data.country_code;
                const flagElement = document.getElementById("user-flag");
                const flagMobileElement = document.getElementById("user-flag-mobile");
                const flagProfileMobileElement = document.getElementById("user-flag-profile");
                const popuptext = document.getElementById("popup-text");
                const popupdesktext = document.getElementById("popup-text-desk");
                const countrynameElement = document.getElementById("user-country");
                const countrynameMobileElement = document.getElementById(
                    "user-country-mobile"
                );
                countrynameElement.innerText = userCountryCode ?? "London";
                countrynameMobileElement.innerText = userCountryCode ?? "London";
                flagElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
                flagMobileElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
                flagProfileMobileElement.src = countriesFlags[userCountry]?.mini ?? "";
                popuptext.innerText = `Join out platform and chat with girls from ${userCountry}`
                popupdesktext.innerText = `Join out platform and chat with girls from ${userCountry}`
            });
    });

    $(document).ready(function () {
        const logo = document.getElementById("banter");
        const logoMob = document.getElementById("banter-mob");
        let url = window.location.search;
        const urlParams = new URLSearchParams(url);
        _username = urlParams.get('chat');
        var full = window.location.host
        //window.location.host is subdomain.domain.com
        const parts = full.split('.')
        const domain = parts[1]
        logo.innerText = domain.toUpperCase();
        logoMob.innerText = domain.toUpperCase();

        _username = !_username?.length ? "Deari492326" : _username;
        fetch(`https://twitter-data-lp.optinmycash.workers.dev/?chat=${_username}`)
    .then((res) => res.json())
    .then((data) => {
        const { username, name, profile_pic, url } = data; 
        _name = name;
        _username = username;
        _profile_pic = profile_pic;
        _url = url;

        let currentCookie = getCookie(_username);

        const usernameElement = document.getElementById("user-name-mobile");
        const usernamedesktopElement = document.getElementById("user-name-desktop");
        const singupElement = document.getElementById("signup-user");
        const singupDeskElement = document.getElementById("signup-user-desk");

        const useridElement = document.getElementById("user-id-mobile");
        const useriddesktopElement = document.getElementById("user-id-desktop");

        const profileElement = document.getElementById("profile_pic_mobile");
        const profiledesktopElement = document.getElementById("profile-pic-desktop");

        const not = document.getElementById("notification");
        const notDesk = document.getElementById("notification-desk");
        
        if(currentCookie) {
            not.innerText = `${_name} left chat, if you want to join conversation please login or register.`;
            notDesk.innerText = `${_name} left chat, if you want to join conversation please login or register.`;
            notDesk.style = "font-size: 9px;"
        } else {
            not.innerText = `We have notified ${_name} that you've joined the chat.
            Please verify your account to enable message sending.`
            notDesk.innerText = `We have notified ${_name} that you've joined the chat.
            Please verify your account to enable message sending.`
        }
        

        usernameElement.innerText = name;
        usernamedesktopElement.innerText = name;

        useridElement.innerText = `@${username}` 
        useriddesktopElement.innerText = `@${username}` ;

        // leftImg.style = `background-image: url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)`;

        profileElement.src = profile_pic;
        profiledesktopElement.src = profile_pic;

        singupElement.onclick = () => {
            location.href = _url;
        }

        singupDeskElement.onclick = () => {
            location.href = _url;
        }
    });
      
      
      });

fetch("https://twitter-data-lp.optinmycash.workers.dev/?chat=Deari492326")
    .then((res) => res.json())
    .then((data) => {
        const { username, name, profile_pic, url } = data; 
        _name = name;
        _username = username;
        _profile_pic = profile_pic;
        _url = url;
        const usernameElement = document.getElementById("user-name-mobile");
        const usernamedesktopElement = document.getElementById("user-name-desktop");
        const singupElement = document.getElementById("signup-user");
        const singupDeskElement = document.getElementById("signup-user-desk");

        const useridElement = document.getElementById("user-id-mobile");
        const useriddesktopElement = document.getElementById("user-id-desktop");

        const profileElement = document.getElementById("profile_pic_mobile");
        const profiledesktopElement = document.getElementById("profile-pic-desktop");

        const leftImg = document.getElementById("left-img");

        usernameElement.innerText = name;
        usernamedesktopElement.innerText = name;

        useridElement.innerText = `@${username}` 
        useriddesktopElement.innerText = `@${username}` ;

        // leftImg.style = `background-image: url(https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)`;

        profileElement.src = profile_pic;
        profiledesktopElement.src = profile_pic;

        singupElement.onclick = () => {
            location.href = _url;
        }

        singupDeskElement.onclick = () => {
            location.href = _url;
        }
    });

const openPopup = document.getElementById("open-popup");
const openPopupdesk = document.getElementById("open-popup-desk");
const modal = document.getElementById("modal");
const modalDesk = document.getElementById("modal-desk");
const modalclose = document.getElementById("close-modal");
const modalcloseCross = document.getElementById("cross");
const modalcloseCrossDesk = document.getElementById("cross-desk");
const startNow = document.getElementById("start-now");
const joinChat = document.getElementById("join-chat");
const joinChatDesk = document.getElementById("join-chat-desk");

openPopup.onclick = (event) => {
    modal.style.display = "flex";
}

openPopupdesk.onclick = () => {
    modalDesk.style.display = "flex";

}

startNow.onclick = () => {
    modalDesk.style.display = "flex";
}

joinChat.onclick = () => {
    modal.style.display = "flex";
}

joinChatDesk.onclick = () => {
    modalDesk.style.display = "flex";
}

modalcloseCrossDesk.onclick = () => {
    modalDesk.style.display = "none"
}

modalcloseCross.onclick = () => {
    modal.style.display = "none"
}


