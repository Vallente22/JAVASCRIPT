function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 0 ) {
     document.querySelector('.js-total-cost')
      .innerHTML = 'Error: cost cannot be less than $0';
      document.querySelector('.js-total-cost').classList.add('cost-error');
  } else if (cost < 40) {
    cost = cost + 10;
    document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
    document.querySelector('.js-total-cost').classList.remove('cost-error');
  } 

}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}