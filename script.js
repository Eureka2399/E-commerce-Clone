const apiURL = "https://striveschool-api.herokuapp.com/api/product/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2OGU5ODNkYmUxNDAwMTUxNTRkMjEiLCJpYXQiOjE3Mjk2MTcxMjMsImV4cCI6MTczMDgyNjcyM30.6BvmFPs9uy4UcoMjpyJV5jmW7QNHAYgiKlm76LtRtMI"


async function postData(){
    const payload= {
        name : document.getElementById("nome").value,
        description: document.getElementById("descrizione").value,
        brand : document.getElementById("marca").value,
        imageUrl : document.getElementById("immagine").value,
        price : document.getElementById("prezzo").value
    }
    try{
        const response = await fetch(apiURL, {
            method:"POST",
            headers:{
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if(!response.ok){
            throw new Error(`Errore: ${response.status}`);
        }

        const data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.error('Errore nella fetch:', error);
    }
}

async function dataPut(){

    let univoco = document.getElementById("id").value
    console.log(univoco) // DEBUG

    const payload= {
        name : document.getElementById("nome").value,
        description: document.getElementById("descrizione").value,
        brand : document.getElementById("marca").value,
        imageUrl : document.getElementById("immagine").value,
        price : document.getElementById("prezzo").value,
        id : document.getElementById("id").value
    }

    try{
        const response = await fetch(apiURL + univoco, {
            method:"PUT",
            headers:{
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if(!response.ok){
            throw new Error(`Errore: ${response.status}`);
        }
        else if(response.ok){
            alert("Prodotto modificato")
        }
    }
    catch (error) {
        console.error('Errore nella fetch:', error);
    }
}

async function dataDelete(){
    let univoco = document.getElementById("id").value
    console.log(univoco) // DEBUG
    try{
        const response = await fetch(apiURL + univoco, {
            method:"DELETE",
            headers:{
                "Authorization" : `Bearer ${token}`
            },
        })

        if(!response.ok){
            throw new Error(`Errore: ${response.status}`);
        }
        else if(response.ok){
            alert("Prodotto eliminato")
        }
    }
    catch (error) {
        console.error('Errore nella fetch:', error);
    }
}