let container = document.getElementById("container")
console.log(data)

let warriors = []
for (const warrior of data.items) {
    warriors.push (warrior)
}
console.log(warriors)

let createCards = function(objeto){
   return `<div>
            <img src="${objeto.image}" alt="">
            <p>name: ${objeto.name} </p>
            <p>Ki: ${objeto.ki}</p>
            <p>MaxKi: ${objeto.maxKi}</p>
            <p>Description: ${objeto.description}</p>
        </div>`
}
for (const warrior of warriors) {
   container.innerHTML+=(createCards(warrior))
}

