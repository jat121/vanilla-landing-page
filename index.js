let countriesFlags = {};
let userCountry = "";
fetch("./flags.json")
    .then((res) => res.json())
    .then((data) => {
        countriesFlags = data;
        console.log(countriesFlags);
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                userCountry = data.country_name;
                const flagElement = document.getElementById("user-flag");
                const flagMobileElement = document.getElementById("user-flag-mobile");
                const countrynameElement = document.getElementById("user-country");
                const countrynameMobileElement = document.getElementById(
                    "user-country-mobile"
                );
                countrynameElement.innerText = userCountry ?? "London";
                countrynameMobileElement.innerText = userCountry ?? "London";
                flagElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
                flagMobileElement.src = countriesFlags[userCountry]?.mini ?? ""; // for small sized flag
            });
    });




fetch(
    "https://twitter-data-lp.optinmycash.workers.dev/?chat=Deari492326"
)
    .then((res) => res.json())
    .then((data) => {
        const { username, name, profile_pic } = data;

        const usernameElement = document.getElementById("user-name-mobile");
        const usernamedesktopElement = document.getElementById("user-name-desktop");

        const useridElement = document.getElementById("user-id-mobile");
        const useriddesktopElement = document.getElementById("user-id-desktop");

        const profileElement = document.getElementById("profile_pic_mobile");
        const profiledesktopElement = document.getElementById("profile-pic-desktop");

        usernameElement.innerText = name;
        usernamedesktopElement.innerText = name;

        useridElement.innerText = `@${username}` 
        useriddesktopElement.innerText = `@${username}` ;

        profileElement.src = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*";
        profiledesktopElement.src = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
    });
