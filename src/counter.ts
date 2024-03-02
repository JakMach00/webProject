import API from "./api"

const storageKey = 'user_data';
let counter = 0;

export function setupCounter(element: HTMLButtonElement) {
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    API.saveData(storageKey, counter);
  }

  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(API.getData(storageKey));
}