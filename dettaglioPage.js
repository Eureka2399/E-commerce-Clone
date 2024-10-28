const apiURL = "https://striveschool-api.herokuapp.com/api/product/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2OGU5ODNkYmUxNDAwMTUxNTRkMjEiLCJpYXQiOjE3Mjk2MTcxMjMsImV4cCI6MTczMDgyNjcyM30.6BvmFPs9uy4UcoMjpyJV5jmW7QNHAYgiKlm76LtRtMI"


const prodotto = window.location.href
const placeURL = new URL (prodotto)
const placeID = placeURL.searchParams.get("id")
console.log(placeID) // DEBUG

dataDettaglio(placeID)

async function dataDettaglio(parametroid){
    try{
        const headers = {
            "Authorization" : `Bearer ${token}`,
            "Content-Type" : "application/json"
        }

        const response = await fetch(apiURL, {method: "GET", headers})


        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        var prodotti = await response.json()
        console.log(prodotti) //DEBUG
        var trovaProdotto = prodotti.find(product => product._id === parametroid)
        console.log(trovaProdotto) //DEBUG
    }catch(error){
        console.error("Si è verificato un errore: ", error)
    }

    const singolo = document.getElementById("singolo")
  
    singolo.innerHTML +=`
      <h1>${trovaProdotto.name}</h1>
      <p>${trovaProdotto.description}</p>
      <p>${trovaProdotto.brand}</p>
      <img src="${trovaProdotto.imageUrl}" class="img-fluid">
      <p>${trovaProdotto.price}€</p>`
}