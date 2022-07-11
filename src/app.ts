import axios from 'axios';
import { GOOGLE_API_KEY, URL } from '../config';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  type GoogleGeocodingResponse = {
    results: { geometry: { location: { lat: number; lng: number } } }[];
    status: 'OK' | 'ZERO_RESULTS';
  };

  axios
    .get<GoogleGeocodingResponse>(
      `${URL}?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
    )
    .then(response => {
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinates = response.data.results[0].geometry.location;
      
    })
    .catch(err => {
      alert(err.mesage);
      console.log(err);
    });
}

form.addEventListener('submit', searchAddressHandler);
