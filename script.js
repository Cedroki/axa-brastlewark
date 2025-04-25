const container = document.getElementById('gnomes-container');
const searchInput = document.getElementById('search');
const minAgeInput = document.getElementById('minAge');
const professionInput = document.getElementById('profession');
const hairColorInput = document.getElementById('hairColor');
const minWeightInput = document.getElementById('minWeight');
const friendNamesInput = document.getElementById('friendNames');

let gnomes = [];

fetch("data.json")
.then(res => res.json())
.then(data => {
    gnomes = data.Brastlewark;
    renderGnomes(gnomes);
  })
  .catch(err => {
    console.error("Erreur détaillée :", err);
    container.innerHTML = "<p>Erreur pdt le chargement des données.</p>";
  });


  
[searchInput, minAgeInput, professionInput, hairColorInput, minWeightInput, friendNamesInput].forEach(input => {
  input.addEventListener('input', applyFilters);
});

function applyFilters() {
  const nameQuery = searchInput.value.toLowerCase();
  const ageQuery = parseFloat(minAgeInput.value);
  const professionQueries = professionInput.value.toLowerCase().split(',').map(p => p.trim()).filter(Boolean);
  
  const hairQuery = hairColorInput.value.toLowerCase();
  const weightQuery = parseFloat(minWeightInput.value);
  const friendQueriesRaw = friendNamesInput.value.toLowerCase().split(',').map(f => f.trim()).filter(Boolean);

  const filtered = gnomes.filter(gnome => {
    const nameMatch = gnome.name.toLowerCase().includes(nameQuery);
    const ageMatch = isNaN(ageQuery) || gnome.age >= ageQuery;
    const professionMatch = professionQueries.length === 0 || professionQueries.every(profession =>
      gnome.professions.some(p => p.toLowerCase().includes(profession))
    );
    const hairMatch = hairQuery === '' || gnome.hair_color.toLowerCase().includes(hairQuery);
    const weightMatch = isNaN(weightQuery) || gnome.weight >= weightQuery;

    const friendsMatch = (() => {
    if (friendQueriesRaw.length === 0) return true;
  if (friendQueriesRaw.includes('none')) {
        return gnome.friends.length === 0;
      }
      return friendQueriesRaw.every(friend =>
        gnome.friends.some(f => f.toLowerCase().includes(friend))
      );
    })();



    return nameMatch && ageMatch && professionMatch && hairMatch && weightMatch && friendsMatch;
  });



  renderGnomes(filtered);
}

function renderGnomes(data) {
  container.innerHTML = '';
  data.forEach(gnome => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${gnome.thumbnail}" alt="${gnome.name}" loading="lazy" />
      <h3>${gnome.name}</h3>
      <p><strong>Age:</strong> ${gnome.age}</p>
      <p><strong>Height:</strong> ${gnome.height.toFixed(2)} cm</p>
      <p><strong>Weight:</strong> ${gnome.weight.toFixed(2)} kg</p>
      <p><strong>Hair:</strong> ${gnome.hair_color}</p>
      <p><strong>Professions:</strong> ${gnome.professions.join(', ') || 'None'}</p>
      <p><strong>Friends:</strong> ${gnome.friends.join(', ') || 'None'}</p>
    `;

    card.addEventListener('click', () => {
      alert(
     `Name: ${gnome.name}\n` +
        `Age: ${gnome.age} years\n` +
        `Height: ${gnome.height.toFixed(2)} cm\n` +
        `Weight: ${gnome.weight.toFixed(2)} kg\n` +
        `Hair color: ${gnome.hair_color}\n` +
        `Professions: ${gnome.professions.join(', ') || 'None'}\n` +
        `Friends: ${gnome.friends.join(', ') || 'None'}`
      );
    });



    container.appendChild(card);
  });


}
