let i = 0;
var block = httpGet("http://localhost:5001/blockchain");
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
    document.getElementById("text" + id).innerHTML +=
      block.fivepages.data[id].content[j];
    j++;
  }
}

function changePage() {
  console.log(document.getElementById("newPage").value);
  console.log(httpGet("http://localhost:5001/blockchain"));
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
