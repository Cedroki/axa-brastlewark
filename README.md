# Brastlewark Explorer – AXA GO Technical Test

This project was created as part of a technical assessment for an apprenticeship interview in AXA Group Operations.  
It is a simple, fast and user-friendly web application designed to explore the population of the fantasy town of Brastlewark.

Live demo: [https://cedroki.github.io/axa-brastlewark/](https://cedroki.github.io/axa-brastlewark/)

---

##  Project Objective

To allow players (our heroes) to easily browse, search and explore the details of the inhabitants of Brastlewark using census data retrieved from the following source:

> https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json

⚠️ Due to CORS limitations when fetching directly from that URL, a local copy (`data.json`) was used in this web-based solution.

---

##  Features

- Load and display all inhabitants from the JSON dataset
- Filter inhabitants by:
  - Name (live search)
  - Minimum age
  - Profession (partial match)
- Display detailed info for each gnome:
  - Name, age, height, weight, hair color
  - List of professions
  - List of friends
- Click on any gnome to view details in a popup
- Responsive layout (desktop + mobile)
- Images lazy-loaded for performance
- Error handling if the data cannot be loaded

---

##  Tech Stack

- HTML / CSS / JavaScript (Vanilla)
- No frameworks or external libraries were used (as requested)
- Hosted with GitHub Pages

---

##  Key Test Case (manual)

**Main tested behavior:**  
> The search and filters return the correct gnome(s) in real time without reloading the page.

💬 Other tests considered:
- DOM updates correctly after typing or clearing a filter
- No crash if data is empty or malformed
- Works on both desktop and mobile screen sizes



##  Why JavaScript + GitHub Pages?

- GitHub Pages allows a quick deployment of static apps for free
- Vanilla JS was chosen to demonstrate logic and DOM control without relying on external frameworks
- Focus was placed on simplicity, clarity, and speed, as requested in the exercise instructions



##  Bonus implemented

- Lazy loading of images
- Click-to-detail popup with all gnome data
- CORS issue handled by working with a local `data.json` file
- Fully responsive cards
- CSS-only styling, no libraries
- Basic hover animations



## 🚀 Possible improvements

- Use a framework (like React) for better state management
- Add pagination or infinite scroll
- Replace alert popups with modal UI (e.g. SweetAlert2)
- Implement unit tests with Jest
- Auto-detect data from online source via CORS proxy


## 👤 Author

Cédric Gourhant – April 2025  
This project was completed as part of a technical interview for AXA GO.
