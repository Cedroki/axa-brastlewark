const container = document.getElementById('gnomes-container');
const searchInput = document.getElementById('search');
const minAgeInput = document.getElementById('minAge');
const professionInput = document.getElementById('profession');
let gnomes = [];

// Chargement des données JSON locales
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    gnomes = data.Brastlewark;
    renderGnomes(gnomes);
  })
  .catch(err => {
    console.error("Erreur détaillée :", err);
    container.innerHTML = "<p>Erreur de chargement des données.</p>";
  });

// Écoute tous les filtres
[searchInput, minAgeInput, professionInput].forEach(input => {
  input.addEventListener('input', applyFilters);
});

// Application des filtres
function applyFilters() {
  const nameQuery = searchInput.value.toLowerCase();
  const ageQuery = parseInt(minAgeInput.value);
  const professionQuery = professionInput.value.toLowerCase();

  const filtered = gnomes.filter(gnome => {
    const nameMatch = gnome.name.toLowerCase().includes(nameQuery);
    const ageMatch = isNaN(ageQuery) || gnome.age >= ageQuery;
    const professionMatch =
      professionQuery === '' ||
      gnome.professions.some(prof => prof.toLowerCase().includes(professionQuery));

    return nameMatch && ageMatch && professionMatch;
  });

  renderGnomes(filtered);
}

// Affichage des cartes gnomes
function renderGnomes(data) {
  container.innerHTML = '';
  data.forEach(gnome => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${gnome.thumbnail}" alt="${gnome.name}" loading="lazy" />
      <h3>${gnome.name}</h3>
      <p><strong>Âge :</strong> ${gnome.age}</p>
      <p><strong>Taille :</strong> ${gnome.height.toFixed(2)} cm</p>
      <p><strong>Poids :</strong> ${gnome.weight.toFixed(2)} kg</p>
      <p><strong>Cheveux :</strong> ${gnome.hair_color}</p>
      <p><strong>Profession :</strong> ${gnome.professions.join(', ') || 'Aucune'}</p>
      <p><strong>Amis :</strong> ${gnome.friends.join(', ') || 'Aucun'}</p>
    `;

    card.addEventListener('click', () => {
      alert(
        `Nom : ${gnome.name}\n` +
        `Âge : ${gnome.age} ans\n` +
        `Taille : ${gnome.height.toFixed(2)} cm\n` +
        `Poids : ${gnome.weight.toFixed(2)} kg\n` +
        `Cheveux : ${gnome.hair_color}\n` +
        `Profession : ${gnome.professions.join(', ') || 'Aucune'}\n` +
        `Amis : ${gnome.friends.join(', ') || 'Aucun'}`
      );
    });

    container.appendChild(card);
  });
}
