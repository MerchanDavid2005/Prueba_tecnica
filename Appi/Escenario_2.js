let Formulario = document.getElementById("formulario")
let Busqueda = document.querySelector(".Busqueda")
let habilidades = document.querySelector(".CajaHabilidades1")
let Habilidades2 = document.querySelector(".CajaHabilidades2")

Formulario.addEventListener("submit", (s) => {
    
    s.preventDefault();
    let PokemoName = Busqueda.value;
    HabilidadPokemon(PokemoName);
    console.log(PokemoName);
});


HabilidadPokemon = async(PokemoName) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${PokemoName}/`;

    await fetch(url).then((info) => info.json())
    
        .then((Pokemon) =>{
            Pokemon = {
                Habilidad : Pokemon.abilities
            }
            Habilidades2.innerHTML = '<p></p>'
            Pokemon.Habilidad.forEach(element => {
                Habilidades2.innerHTML += `<p>${element.ability.name}</p>`;
                console.log(element.ability.name);
            });
        }) 
}





