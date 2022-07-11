import { GOOGLE_API_KEY } from '../config';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  console.log(enteredAddress, GOOGLE_API_KEY);
  // send
}

form.addEventListener('submit', searchAddressHandler);