Country Info App 🌍
https://nascotech-countries.vercel.app
## Overview

The Country web App is a simple web application that allows users to search for countries and view essential details like name, flag, region, and population. The app fetches data from the REST Countries API and dynamically displays relevant information based on user input.

## Features 🚀

🔍 Search Functionality: Users can search for countries by name.

📌 Detailed Country Information: Displays country flag, name, region, and population.

🌎 Real-Time Filtering: Updates results dynamically as the user types.

🎨 Responsive Design: Works well on all screen sizes.

Tech Stack 🛠️

Frontend: React + TypeScript + Tailwind CSS

API: REST Countries API

Installation & Setup ⚙️

Prerequisites

Ensure you have Node.js and npm installed.

Steps to Run Locally

# Clone the repository

git clone https://github.com/Nanasark/nascotech-countries.git
# Navigate into the project directory

cd country-search-app

# Install dependencies

npm install

# Start the development server

npm run dev

The app will be available at http://localhost:5173/.

API Usage 🌐 

The app fetches country data from:

https://restcountries.com/v3.1/all

Each country object contains useful properties like:

{
"name": { "common": "France" },
"flags": { "svg": "https://flagcdn.com/fr.svg" },
"region": "Europe",
"population": 67081000
}

## Contributing 🤝

Feel free to fork the repository and submit pull requests!

Fork the repo.

Create a new branch (git checkout -b feature-name).

Make your changes and commit (git commit -m 'Added new feature').

Push to your branch (git push origin feature-name).

Open a Pull Request.

License 📜MIT

This project is licensed under the MIT License.

Made with ❤️ by  Daniel
