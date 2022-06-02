
const apikey = "e1f2be0e794f9d6714e9e47e6790bec6";

//var text= documet.getElementById("display");
const main = document.getElementById("main");
const form= document.getElementById("form");
const search = document.getElementById("search");
//https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=e1f2be0e794f9d6714e9e47e6790bec6
const url = (city) =>
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;

async function getWeather(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();

   
    addWeatherToPage(respData);
}

//getWeather('dehradun');
function addWeatherToPage(data){
    console.log(data);
    
    let today=new Date(data.list[0].dt_txt)
    const forecast=data.list[0].weather[0].main;
    const temp= KtoC(data.list[0].main.temp);//
    console.log(today)
    
    let today1=new Date(data.list[3].dt_txt)
    const forecast1=data.list[3].weather[0].main
    const temp1= KtoC(data.list[3].main.temp);
    
    let today2=new Date(data.list[11].dt_txt)
    const forecast2=data.list[11].weather[0].main;//
    const temp2= KtoC(data.list[11].main.temp);
    

    let today3=new Date(data.list[19].dt_txt)
    const forecast3=data.list[19].weather[0].main;//
    const temp3= KtoC(data.list[19].main.temp);
    

    let today4=new Date(data.list[27].dt_txt)
    const forecast4=data.list[27].weather[0].main;//
    const temp4= KtoC(data.list[27].main.temp)
    


    const weather=document.createElement("div");
    weather.classList.add('weather');
    weather.innerHTML=`
    
    <h4 id='headline'>Weather in ${search.value}<h4>
    <small><img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png">
    </small>
    <h2>${temp}&#176C 
    <small>${forecast}</small> 
    </h2>
    
    
    
     
    <small id='time'>${today}</small></small>
     
    </br></br></br>
          
     
    <!--1nd row-->
    </br>
    <small>
     <img src="https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png">
     </small>
    
    <h2>${temp1}&#176C 
    <small>${forecast1}</small></h2>
     <small id='time'>${today1}</small>
     </br></br></br></br>
    
     <!--2nd row-->
     </br></br></br></br>
     
     <small><img src="https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png">
     </small>
     <h2>${temp2}&#176C 
     <small>${forecast2}</small></h2>
     <small id='time'>${today2}</small>
    </br></br></br></br>

     <!--3nd row-->
    
     </br></br></br></br>
     <small><img src="https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png">
     </small>
     <h2>${temp3}&#176C 
    <small>${forecast3}</small></h2>
    </br>
    <small id='time'>${today3}</small>
     </br></br></br></br>

     <!--4nd row-->
     
     </br></br></br>
    <small><img src="https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png">
     </small>
    <h2>${temp4}&#176C 
    <small>${forecast4}</small></h2>
    </br>
    <small id='time'>${today4}</small>
     </br></br></br>
    `;

    
    //cleanup
    main.innerHTML="";
    main.appendChild(weather);
  
   
   
}

function KtoC(K){
    return (K-273).toFixed(2);


}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const city=search.value;
    if(city){
        getWeather(city)
    }
}) 
