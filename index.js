let countriesFlags = {};
let userCountry = "";
fetch("./flags.json")
  .then((res) => res.json())
  .then((data) => {
    countriesFlags = data;
    fetch("http://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => {
        userCountry = data.country;
        const flagElement = document.getElementById("user-flag");
        const countrynameElement = document.getElementById("user-country");
        countrynameElement.innerText = userCountry;
        flagElement.src = countriesFlags[userCountry].mini;		// for small sized flag
      });
  });
