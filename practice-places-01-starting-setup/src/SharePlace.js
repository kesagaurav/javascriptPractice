import {Modal} from './UI/Modal';
import {Map} from './UI/Map';
import {getCoordsFromAddress,getAddressFromCoords} from './utility/Location';
class PlaceFinder {
  constructor () {
    const addressForm = document.querySelector ('form');
    const locateUserBtn = document.getElementById ('locate-btn');
    this.shareBtn=document.getElementById("share-btn");

    locateUserBtn.addEventListener (
      'click',
      this.locateUserHandler.bind (this)
    );
    this.shareBtn.addEventListener('click',this.sharePlaceHandler);
    addressForm.addEventListener (
      'submit',
      this.findAddressHandler.bind (this)
    );
  }

  sharePlaceHandler(){
    const sharedLinkInput=document.getElementById("share-link");
        if(!navigator.clipboard){
            sharedLinkInput.select();
            return;
        }
        navigator.clipboard.writeText(sharedLinkInput.value).then(()=>{
            alert('copied to clipboard')
        }).catch(err=>{
            console.log(err);
            sharedLinkInput.select();

        })
  }

  selectPlace (coordinates,addr) {
    if (this.map) {
      this.map.render (coordinates);
    } else {
      this.map = new Map (coordinates);
    }
    this.shareBtn.disabled=false;
    const sharedLinkInput=document.getElementById("share-link");
    sharedLinkInput.value=`${location.origin}/my-place?address=${encodeURI(addr)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
}

  locateUserHandler () {
    if (!navigator.geolocation) {
      alert ('loc feature is not avliable');
      return;
    }
    const modal = new Modal ('loading-modal-content', 'Loading-location');
    modal.show ();
    navigator.geolocation.getCurrentPosition (
      async successResult => {
        console.log (successResult);
        modal.hide ();
        const coordinates = {
          lat: successResult.coords.latitude + Math.random (),
          lng: successResult.coords.longitude + Math.random (),
        };
        const addr=await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace (coordinates);
        console.log (coordinates);
      },
      error => {
        modal.hide ();
        alert ('could not locate u');
      }
    );
  }

  async findAddressHandler (event) {
    event.preventDefault ();
    const add = event.target.querySelector ('input').value;
    if (!add || add.trim ().length === 0) {
      alert ('invalid address');
      return;
    }
    const modal = new Modal ('loading-modal-content', 'Loading-location');
    modal.show ();
    try {
      const cord = await getCoordsFromAddress (address);
      this.selectPlace (cord,addr);
    } catch (error) {
      alert (error.message);
    }
    modal.hide ();
  }
}

const placeFinder = new PlaceFinder ();
