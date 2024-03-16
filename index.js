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
                const countrynameElement = document.getElementById("user-country");
                countrynameElement.innerText = userCountry ?? "London";
                flagElement.src = countriesFlags[userCountry]?.mini ?? "";		// for small sized flag
            });
    });




