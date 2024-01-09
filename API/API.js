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


function Main(obj)
{

let country = document.createElement("h1");
country.innerHTML=chosse();

document.body.appendChild(country);

List(obj);
}



function List(item)
{
   let div = document.createElement("div");
  


   for (ele in item)
   {
    let list = document.createElement("div");
    list.innerHTML += ele;
    list.setAttribute("class","items");
    div.setAttribute("class","list");
    document.body.appendChild(div);
    div.appendChild(list);

   }
  
}


function chosse()
{
  
    return   document.getElementById("country").value;
}


let city = "London";
let bring = document.getElementById("temp");
let key = "92a0d89eb3f6b36376f9240c08922735";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(response => response.json())
   .then (data => {Main(data), console.log(data)} );
  

