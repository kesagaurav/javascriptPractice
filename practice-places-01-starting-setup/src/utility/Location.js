const GOOGLE_API_KEY="AIzaSyCueuEMBmaAK6XUl6pfsL0J5NTF6HwpjtY";

export async function getAddressFromCoords(coords){
    const res=  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);
    if(!res.ok){
        throw new error('failed to fetch');
    }
    const data=await res.json();
    if(data.error_message){
        throw new Error(data.error_message);
    }

    const addr=data.results[0].formatted_address;
    return addr;

}




export async function getCoordsFromAddress(address){
    const urlAddress=encodeURI(address);
 const res=  await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);
    if(!res.ok){
        throw new error('failed to fetch');
    }
    const data=await res.json();
    if(data.error_message){
        throw new Error(data.error_message);
    }

    console.log(data);

    const coordinates=data.results[0].geometry.location;
    return coordinates;
    
}