import './style.css';

let memes = [
  {
    img: "https://ac.goit.global/meme-generator/1.jpg",
    top: "Коли після вихідних намагаєшся налаштуватися на роботу",
    bottom: "Ненько, куди ж я тут тицяв?",
  },
  {
    img: "https://ac.goit.global/meme-generator/2.jpg",
    top: "Коли вже пів години читаєш про програмування",
    bottom: "Але так і не вийшов на дохід у $2000+",
  },
  {
    img: "https://ac.goit.global/meme-generator/3.jpg",
    top: "Автомеханік: єдина професія, де платять за те, що ти налажав у попередньому замовленні.",
    bottom: "Програмісти:",
  },
  {
    img: "https://ac.goit.global/meme-generator/4.jpg",
    top: "А коли ви почали працювати у цій компанії?",
    bottom: "Коли мені пригрозили звільненням",
  },
  {
    img: "https://ac.goit.global/meme-generator/5.jpg",
    top: "В нас в сім’ї немає програмістів",
    bottom: "Закодований Дід",
  },
  {
    img: "https://ac.goit.global/meme-generator/6.jpg",
    top: "Дедлайни",
    bottom: "Я: сильніше",
  },
  {
    img: "https://ac.goit.global/meme-generator/7.jpg",
    top: "В тебе хіба не горить важливий дедлайн?",
    bottom: "Я: так, а що?",
  },
  {
    img: "https://ac.goit.global/meme-generator/8.jpg",
    top: "Я спокійно дивлюсь на імейл про терміновий звіт",
    bottom: "бо знаю, що на нього піде як мінімум 2-3 тижні",
  },
  {
    img: "https://ac.goit.global/meme-generator/9.jpg",
    top: "Коли збрехав у резюме",
    bottom: "але ти швидко все схоплюєш на льоту",
  },
  {
    img: "https://ac.goit.global/meme-generator/10.jpg",
    top: "Тім лід не може вигоріти",
    bottom: "бо лід не горить, а тане",
  }
];


let image = document.querySelector('.image');
let topText = document.querySelector('.top-text');
let bottomText = document.querySelector('.bottom-text');
let button = document.querySelector('.next-btn');

let memeIndex = 0;

button.addEventListener('click', () => {
  if (memeIndex === memes.length - 1) {
    memeIndex = 0;
  } else {
    memeIndex += 1;
  }

  image.src = memes[memeIndex].img;
  topText.textContent = memes[memeIndex].top;
  bottomText.textContent = memes[memeIndex].bottom;
});

