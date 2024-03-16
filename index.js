let countriesFlags = {};
let userCountry = "";
fetch("./flags.json")
    .then((res) => res.json())
    .then((data) => {
        countriesFlags = data;
        console.log(countriesFlags)
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                userCountry = data.country_name;
                const flagElement = document.getElementById("user-flag");
                const flagMobileElement = document.getElementById("user-flag-mobile");
                const countrynameElement = document.getElementById("user-country");
                const countrynameMobileElement = document.getElementById("user-country-mobile");
                countrynameElement.innerText = userCountry ?? "London";
                countrynameMobileElement.innerText = userCountry ?? "London";
                flagElement.src = countriesFlags[userCountry]?.mini ?? "";		// for small sized flag
                flagMobileElement.src = countriesFlags[userCountry]?.mini ?? "";		// for small sized flag
            });
    });




