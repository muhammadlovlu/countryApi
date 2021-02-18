document.getElementById("search").addEventListener('click', function (){
    dataLoad();
})

async function dataLoad() {
    const InputValue = document.getElementById("input-Text").value;
    const api = `https://restcountries.eu/rest/v2/name/${InputValue}`;
    console.log(api)
    const res = await fetch(api);
    const data = await res.json();
    const countryNameData = document.getElementById("countryName");
    countryNameData.innerText = data[0].name;
    const populationData = document.getElementById("population");
    populationData.innerText = data[0].population;
    const areaData = document.getElementById("area");
    areaData.innerText = data[0].area;
    const capitalData = document.getElementById("capital");
    capitalData.innerText = data[0].capital;
    const callingCodeData = document.getElementById("callCode");
    callingCodeData.innerText = data[0].callingCodes;
    const regionData = document.getElementById("region");
    regionData.innerText = data[0].region;
    const borderData = document.getElementById("borders");
    borderData.innerText = data[0].borders;
    const timeZoneData = document.getElementById("timezone");
    timeZoneData.innerText = data[0].timezones;
    document.getElementById("flag").style.display = "inline-block";
    const countryFlag = document.getElementById("flag");
    countryFlag.src = data[0].flag;
    document.getElementById("highlights").style.display = "none";
    document.getElementById("results").style.display = "block";

}



// async function dataLoad (){
//     const res = await fetch("https://restcountries.eu/rest/v2/name/Bangladesh");
//     const data = await res.json();
//     const countryNameData = document.getElementById("countryName");
//     countryNameData.innerText = data[0].name;
//     const populationData = document.getElementById("population");
//     populationData.innerText = data[0].population;
//     const areaData =document.getElementById("area");
//     areaData.innerText = data[0].area;
//     const capitalData = document.getElementById("capital");
//     capitalData.innerText = data[0].capital;
//     const callingCodeData = document.getElementById("callCode");
//     callingCodeData.innerText = data[0].callingCodes;
//     const regionData = document.getElementById("region");
//     regionData.innerText = data[0].region;
//     const borderData = document.getElementById("borders");
//     borderData.innerText = data[0].borders;
//     const timeZoneData = document.getElementById("timezone");
//     timeZoneData.innerText = data[0].timezones;
//     const countryFlag = document.getElementById("flag");
//     countryFlag.src = data[0].flag;
// }
