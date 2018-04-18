document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
});

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();
  request.addEventListener('load', callback);
};

const requestComplete = function(){
  if (this.status !== 200 ) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  populateInfo(beers);
};

const populateInfo = function(beers) {
  const ul = document.querySelector('#beer-list');
  beers.forEach((beer) => {
    const li = document.createElement('li');
    li.textContent = beer.name;
    const img = document.createElement('img')
    img.src = beer.image_url;
    ul.appendChild(li);
    ul.appendChild(img)
  });
};
