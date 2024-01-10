// fetch("api/gtfs-regional-realtime")
// .then(Catch => Catch.json())

// .then(Data => 
//     {  
//         console.log(Data);
// //     for(get of Data.quotes)
// //     {
// // document.getElementById("cit").innerHTML += `${get.id} . ${get.quote} - ${get.author} <br>`; 
// //     }
//     }
//     );




//
let list = document.createElement("div");
list.setAttribute("class","list");
document.body.appendChild(list); 





//function Hearder()


let country = document.createElement("h1"); 
country.setAttribute("id","countryTitle");
list.appendChild(country);
country.innerHTML = "Country";








let countries = [
    "Afghanistan",
    "Ć…land Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of The",
    "Cook Islands",
    "Costa Rica",
    "Cote D'ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-bissau",
    "Guyana",
    "Haiti",
    "Heard Island and Mcdonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and The Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and The South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

 let SelectedCountry;
let CreateList;
let CreateOptions;



CreateItemsList(countries);

function CreateItemsList(countries) {
    CreateList = document.createElement("select");
    list.appendChild(CreateList);

    for (let i = 0; i < countries.length; i++) {
        CreateOptions = document.createElement("option");
        CreateOptions.value = countries[i];
        CreateOptions.innerHTML = countries[i];
        CreateList.appendChild(CreateOptions);
    }
    CreateList.addEventListener("change", function () {
        choose(this.value);
    });
}





 


function choose(item) {
    SelectedCountry = item;
 
    country.innerHTML=SelectedCountry;
    
   
    

    console.log(SelectedCountry);
   let key = "92a0d89eb3f6b36376f9240c08922735";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${SelectedCountry}&appid=${key}`)
    .then(response => response.json())
   .then (data => {Main(data)});
}
let bring = document.getElementById("temp");

  



function Main(obj)
{
  
  // Filter item to get just wind and waether
  weather(obj.weather);
   Wind(obj.wind); 


}


function MakeList()
{
  
}


console.log(list);




function Wind(items)
{
    //console.log(items);
}

function weather(items)
{
    //console.log(items);
}




























// let items = document.getElementById("country");

// for (let i = 0; i < items.children.length; i++) {
//     countries.push(items.children[i].value);
// }

// console.log(countries);

// console.log(items.children.length);

















// let d = document.getElementById("country");
// let selectedValue;

// d.addEventListener("change", function () {
//     selectedValue = d.value;
//     processSelectedValue(); // Call a function or execute additional code here
// });

// function processSelectedValue() {
//     console.log(selectedValue);
// }
// console.log(selectedValue);
// // You can also access selectedValue after the change event has occurred
// // However, keep in mind that it might still be undefined if the user hasn't triggered the change event yet.
// // console.log(selectedValue);






// function choose(item)
// {
   
//     SelectedCountry = item;
//     //console.log(SelectedCountry);
// }

// console.log(SelectedCountry);















