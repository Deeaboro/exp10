const searchBtn = document.getElementById('searchBtn');
const input = document.getElementById('pokemonInput');
const infoBox = document.getElementById('pokemonInfo');

searchBtn.addEventListener('click', () => {
  const name = input.value.toLowerCase().trim();
  if (!name) {
    alert("Please enter a Pokémon name.");
    return;
  }

  fetchPokemon(name);
});

async function fetchPokemon(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Pokémon not found.");
    }

    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    infoBox.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}

function displayPokemon(pokemon) {
  const { name, sprites, height, weight, types } = pokemon;

  const typeNames = types.map(t => t.type.name).join(', ');

  infoBox.innerHTML = `
    <img src="${sprites.front_default}" alt="${name}" />
    <h2>${capitalize(name)}</h2>
    <p><strong>Height:</strong> ${height}</p>
    <p><strong>Weight:</strong> ${weight}</p>
    <p><strong>Type(s):</strong> ${typeNames}</p>
  `;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
