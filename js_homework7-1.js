const regex = /\b[^Aa\s]{6,}\b/g;
const text = "Wonderful , Joyful , Excited , Mystery , Develop , Happiness , Amazing , Task , Apple , Time";
const matches = text.match(regex);

console.log(matches); // Виведе: [ 'Wonderful', 'Joyful' ]
