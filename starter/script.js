'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

// xml http request for ajax calls.
const req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/name/deutschland',true);
req.send();
req.addEventListener('load',()=>{
   const [data]=JSON.parse(this.responseText);
   console.log(data);
   const data2=` <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
        countriesContainer.insertAdjacentElement('beforeend',data2);
        countriesContainer.style.opacity=1;
    
})
console.log(req);
