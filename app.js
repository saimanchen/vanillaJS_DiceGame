const button = document.querySelector('button');
const outputResult = document.querySelector('.output');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const diceArray = [[5], [3, 7], [3, 5, 7], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];

const roll = num => Math.floor(Math.random() * num) + 1;

const builder = num => {
  const div = document.createElement('div');
  div.setAttribute('class', 'dicer');
  const die = diceArray[num-1];
  for(let i = 1; i < 10; i++) {
    const span = document.createElement('div');
    span.setAttribute('class', 'dot');
    if(die.includes(i)) {
      span.classList.add('black');
    };
    div.appendChild(span);
  }
  return div;
};

const updateOutput = (element, num) => {
  const holder = builder(num);

  if(element.children[0]) {
    element.children[0].remove();
  }
  element.appendChild(holder);
};

button.addEventListener('click', () => {
  const dice = [roll(6), roll(6)];
  let tempValue;

  if(dice[0] === dice[1]) {
    tempValue = 'Draw';
  } else if(dice[0] > dice[1]) {
    tempValue = 'Player wins!';
  } else {
    tempValue = 'Computer wins!';
  }

  outputResult.innerHTML = tempValue;

  updateOutput(player, dice[0]);
  updateOutput(computer, dice[1]);
});