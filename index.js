let countriesFlags = {};
let userCountry = "";
let userCountryCode = "";
var _name = "";
var _username = "";
var _url = ""
var _profile_pic = "";
fetch("./flags.json")
    .then((res) => res.json())
    .then((data) => {
        countriesFlags = data;
        console.log(countriesFlags);
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                userCountry = data.country_name;
                userCountryCode = data.country_code;
                const flagElement = document.getElementById("user-flag");
                const flagMobileElement = document.getElementById("user-flag-mobile");
                const flagProfileMobileElement = document.getElementById("user-flag-profile");
                const countrynameElement = document.getElementById("user-country");
                const countrynameMobileElement = document.getElementById(
                    "user-country-mobile"
                );
                countrynameElement.innerText = userCountryCode ?? "London";
                countrynameMobileElement.innerText = userCountryCode ?? "London";
                flagElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
                flagMobileElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
                flagProfileMobileElement.src = countriesFlags[userCountry]?.mini ?? "";
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
    });

const openPopup = document.getElementById("open-popup");
const openPopupdesk = document.getElementById("open-popup-desktop");
const modal = document.getElementById("modal");
const modalclose = document.getElementById("close-modal");
const modalcloseCross = document.getElementById("cross");

openPopup.onclick = (event) => {
    modal.style.display = "flex";
}

openPopupdesk.onclick = () => {
    modal.style.display = "flex";

}

modalcloseCross.onclick = () => {
    modal.style.display = "none"
}


