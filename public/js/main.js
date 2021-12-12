const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal==""){
        city_name.innerHTML = `Please Enter City`;
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=6e9705c3732e540417ff2b4657c45096`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            const tempMood = arrData[0].weather[0].main;

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            if(tempMood=="Clear") {
                temp_status.innerHTML = " <i class='fas fa-sun' 'style=color: #eccc68'></i>";
            }
            else if(tempMood=="Clouds") {
                temp_status.innerHTML =
                "<i class='fas fa-cloud' style:'color: #f1f2f6;'></i>";
            }
            else if(tempMood=="Rain") {
                temp_status.innerHTML =
                "<i class='fas fa-rain' style:'color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML =
                "<i class='fas fa-sun' style:'color: rgb(236,204,104);'></i>";
            }

            data_hide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = `Enter a Correct City Name`;
            data_hide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click',getInfo);