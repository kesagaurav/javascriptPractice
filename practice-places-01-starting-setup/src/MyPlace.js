import { Map } from "./UI/Map";

class LoadedPlace{
    constructor(coordinates,address){
        new Map(coordinates);
        const ht=document.querySelector('header h1');
        ht.textContent=address;
    }
}
//creats an obj with this url
const url=new URL(location.href);
const query=url.searchParams;
const coords={
    lat:+query.get('lat'),
    lng:+query.get('lng')
};
const addr=query.get('address');
new LoadedPlace(coords,addr);