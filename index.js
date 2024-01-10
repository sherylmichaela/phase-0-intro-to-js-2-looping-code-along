const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];

let writeCards = (name, occasion) => {
  for (let i = 0; i < name.length; i++) {
    messages.push(`Thank you, ${name[i]}, for the wonderful ${occasion} gift!`);
  }
  return messages;
};

let countDown = () => {
  let num = 10;
  while (num >= 0) {
    console.log(num);
    num -= 1;
  }
};
