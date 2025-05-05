export class Map{
    constructor(coords){
       // this.coordinates=coords;
        this.render(coordinates);
    }

    render(coordinates) {
        if(!google){
            alert('could not load maps')
            return;
        }
     const map= new goggle.maps.Map(document.getElementById("map"),{
            center:coordinates,
            zoom:16
        });
        new goole.maps.Marker({
            position:coordinates,
            map:map
        });
    }
}