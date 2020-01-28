let i = 0;
let block = {
  fivepages: {
    data: [
      {
        content: [
          "Guy de Maupassant ",
          "Bel-Ami ",
          "roman ",
          "La Bibliothèque électronique du Québec ",
          "Collection ",
          "À tous les vents ",
          "Volume 510 %3A version 1.01",
          "2"
        ],
        idPage: "1"
      },
      {
        content: [
          "Du même auteur%2C à la Bibliothèque ",
          "Mademoiselle Fifi ",
          "Contes de la bécasse ",
          "Pierre et Jean ",
          "Sur l’eau ",
          "La mais",
          "on Tellier ",
          "La petite Roque ",
          "Une vie ",
          "Fort comme la mort ",
          "Clair de lune ",
          "Miss Harriet ",
          "La main gauche ",
          "Yvette ",
          "L’inutile beauté ",
          "Monsieur Parent ",
          "Le Horla ",
          "Les soeurs Rondoli",
          "Le docteur Héraclius Gloss et autres contes ",
          "Les dimanches d’un bourgeois de Paris ",
          "Le rosier de Madame Husson ",
          "Contes du jour et de la nuit ",
          "La vie errante ",
          "Notre coeur ",
          "3"
        ],
        idPage: 2
      },
      {
        content: [
          "Bel-Ami ",
          "Édition de référence %3A ",
          "Éditions Rencontre%2C Lausanne. ",
          "Texte établi et présenté par Gilbert Sigaux. ",
          "4"
        ],
        idPage: 3
      },
      {
        content: ["Première partie ", "5"],
        idPage: 4
      }
    ]
  }
};
while (i < block.fivepages.data.length) {
  let active = "";
  let classActive = "";
  if (i == 0) {
    active = "active";
    classActive = 'class="active"';
  }
  document.getElementById("display").innerHTML += `
<div class="carousel-item ${active}">
      <div class="view">
        <img class="d-block img" src="http://iwallpapers2.free.fr/images/Photographie/Black_Collection/Fond_texture_Noir_1920x1080.jpg"
          alt='${i}'>
        <div class="mask rgba-black-light"></div>
      </div>
      <div class="carousel-caption2">
        <p id="text${i}"></p>
      </div>
    </div>`;
  document.getElementById(
    "carouselIndicator"
  ).innerHTML += `<li data-target="#carousel-example-2" data-slide-to="${i}" ${classActive}></li>`;
  displayText(i);
  i++;
}

function displayText(id) {
  let j = 0;
  while (j < block.fivepages.data[id].content.length) {
    document.getElementById("text" + id).innerHTML += block.fivepages.data[id].content[j];
    j++;
  }
}
