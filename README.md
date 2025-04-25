# Brastlewark Explorer – AXA GO Technical Test

This project was created as part of a technical assessment for an apprenticeship interview in AXA Group Operations.  
It is a simple, fast and user-friendly web application designed to explore the population of the fantasy town of Brastlewark.

Live demo: https://cedroki.github.io/axa-brastlewark/

## Project Objective

To allow players (our heroes) to easily browse, search and explore the details of the inhabitants of Brastlewark using census data retrieved from the following source:

https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json

## Features

- Load and display all inhabitants from the JSON dataset
- Filter inhabitants by:
  - Name (live search)
  - Minimum age
  - Profession(s)
  - Hair color
  - Minimum weight
  - Friend(s) names or "none"
- Display detailed info for each gnome:
  - Name, age, height, weight, hair color
  - List of professions
  - List of friends
- Click on any gnome to view details in a popup
- Responsive layout for desktop and mobile
- Images lazy-loaded for performance
- Error handling if the data cannot be loaded

## Tech Stack

- HTML / CSS / JavaScript (Vanilla)
- No frameworks or external libraries used
- Hosted on GitHub Pages

## Key Test Case (manual)

Main tested behavior:  
The search and filters return the correct gnome(s) in real time without reloading the page.

Other tests considered:
- DOM updates correctly after typing or clearing a filter
- No crash if data is empty or malformed
- Works on both desktop and mobile screen sizes

## Why JavaScript + GitHub Pages?

- GitHub Pages allows quick and free deployment of static apps
- Vanilla JS was chosen to demonstrate core logic and DOM manipulation without frameworks
- Focus was placed on clarity, simplicity, and performance as requested in the instructions

## Bonus Implemented

- Click-to-detail popup with all gnome data
- Fully responsive and compact mobile view
- Clean CSS-only styling
- No use of libraries for basic features

## Possible Improvements

- Use a framework (e.g. React) for better structure and state management
- Add pagination or infinite scroll
- Replace alert popups with custom modal UI
- Implement automated unit tests

## Author

Cédric Gourhant – April 2025  
This project was completed as part of a technical interview for AXA GO.

