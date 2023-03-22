const btnEl = document.getElementById("btn")
const factEl =document.getElementById("fact")
const apiURL = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e9df4e9e94msh9120b67b489a07fp1358c0jsn991bb06ee2c1',
      'X-RapidAPI-Host': 'facts-by-api-ninjas.p.rapidapi.com'
    }
  };
  


async function getfact(){

    try {
    factEl.innerText = "Updating......";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";

    const response = await fetch(apiURL, options)
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Another Fact";

    factEl.innerText = data[0].fact;
        
} catch (error) {
    factEl.innerText = " ERROR..., Try again later";
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Another Fact";
        
}

    
}
btnEl.addEventListener("click", getfact) 