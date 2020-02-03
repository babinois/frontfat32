let i = 1;
constructPage();

function displayText(id, blockchain) {
  var inner = "Page non trouvé dans la BlockChain <br> BiP bip Bip bipppp..";
  blockchain.forEach(block => {
    block.fivePages.data.forEach(page => {
      if (page.idPage == id) {
        inner = concat(page.content);
      }
    });
  });
  document.getElementById("text" + id).innerHTML += inner;
}

function changePage() {
  resetPage();
  i = document.getElementById("newPage").value;
  constructPage();
}

function concat(arrayStr) {
  var strconcat = "";
  arrayStr.forEach(str => {
    strconcat += " " + str + " <br>";
  });
  return strconcat;
}

function resetPage() {
  while (document.getElementById("display").childNodes.length > 0) {
    document.getElementById("display").childNodes[0].remove();
  }
  while (document.getElementById("carouselIndicator").childNodes.length > 0) {
    document.getElementById("carouselIndicator").childNodes[0].remove();
  }
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function constructPage() {
  i -= 1;
  var blockchain = httpGet("http://localhost:5001/blockchain");
  if (blockchain) {
    for (let j = 0; j < 5; j++) {
      let active = "";
      let classActive = "";
      if (j === 0) {
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
      displayText(i, blockchain);
      i++;
    }
  }
}
