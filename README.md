🐱‍👤 Pokémon Finder – API Fetch & Display Project

A simple web app that allows users to search for any Pokémon and display key information about it using the PokeAPI
. This project demonstrates how to fetch data using the JavaScript Fetch API, parse JSON responses, and dynamically update the DOM.

🔧 Features

✅ Search for any Pokémon by name

✅ Fetches data asynchronously from PokeAPI

✅ Displays:

Pokémon name

Official image

Height

Weight

Type(s)

✅ Error handling for invalid names

✅ Clean and responsive user interface

📁 File Structure
/pokemon-finder
├── index.html       # Main structure
├── style.css        # Styling for layout and elements
└── script.js        # Fetch API and dynamic rendering logic

🚀 Getting Started
1. Clone or Download
git clone https://github.com/your-username/pokemon-finder.git


Or just download the ZIP.

2. Open in Browser

Open index.html in any modern browser.

🧠 How It Works

User types a Pokémon name into the input box.

Clicks the Search button.

JavaScript sends a fetch() request to the PokeAPI endpoint:

https://pokeapi.co/api/v2/pokemon/{pokemon-name}


If the Pokémon exists, JSON data is returned.

The script extracts:

name

sprites.front_default

height

weight

types[]

The info is displayed dynamically in the page.

If not found, a friendly error message is shown.

🖼️ Example

Searching for pikachu will return:

Image of Pikachu

Name: Pikachu

Height: 4

Weight: 60

Type(s): electric

🌐 API Used

PokeAPI

URL: https://pokeapi.co/

Free and open Pokémon data

📦 Dependencies

None – uses vanilla HTML, CSS, and JavaScript

📄 License

This project is open-source and free to use under the MIT License
.

💡 Future Improvements

Add keyboard support (Enter to search)

Show Pokémon abilities or stats

Add loading spinner while fetching data

Improve mobile responsiveness
