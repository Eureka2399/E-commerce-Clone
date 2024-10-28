const apiURL = "https://striveschool-api.herokuapp.com/api/product/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2OGU5ODNkYmUxNDAwMTUxNTRkMjEiLCJpYXQiOjE3Mjk2MTcxMjMsImV4cCI6MTczMDgyNjcyM30.6BvmFPs9uy4UcoMjpyJV5jmW7QNHAYgiKlm76LtRtMI"

window.onload = async () => {
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
    }catch(error){
        console.error("Si è verificato un errore: ", error)
    }

    
    const product = document.getElementById("articoli")

    prodotti.forEach(element => {
      product.innerHTML +=`
        <div class='col col-3 col-lg-3 col-md-4 col-sm-6 col-sm-12 mb-4'>  
      <div class="card justify-content-between">
        <img src="${element.imageUrl}" class="card-img-top" alt="${element._id}_${element.name}">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <a href="./dettaglio.html?id=${element._id}"class="btn btn-primary">Details</a>
        </div>
      </div> 
    </div>`
  })
}