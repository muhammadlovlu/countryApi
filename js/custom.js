async function dataLoad (){
    const res = await fetch("https://restcountries.eu/rest/v2/name/Bangladesh");
    const data = await res.json();
    // const population = document.getElementById("population");
    // population.innerText = data.
    console.log(data)
}
dataLoad()



