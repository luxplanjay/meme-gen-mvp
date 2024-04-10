import './style.css';

const memes = [
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/277/354/502/feelsbadman-pepe-meme-memes-wallpaper-preview.jpg',
    text: 'meme 1 text',
  },
  {
    img: 'https://i.insider.com/6011ac2b6dfbe10018e0049f?width=700',
    text: 'meme 2 text',
  },
  {
    img: 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=16:9',
    text: 'meme 3 text',
  },
  {
    img: 'https://images.jpost.com/image/upload/q_auto/c_fill,g_faces:center,h_537,w_822/485633',
    text: 'meme 4 text',
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg',
    text: 'meme 5 text',
  },
];

let selectedMemeIdx = 0;
const firstIndex = 0;
const lastIndex = memes.length - 1;
const image = document.querySelector('.image');
const text = document.querySelector('.text');

image.src = memes[selectedMemeIdx].img;
text.textContent = memes[selectedMemeIdx].text;

document.querySelector('.prev-btn').addEventListener('click', () => {
  if (selectedMemeIdx === firstIndex) {
    selectedMemeIdx = lastIndex;
  } else {
    selectedMemeIdx -= 1;
  }

  image.src = memes[selectedMemeIdx].img;
  text.textContent = memes[selectedMemeIdx].text;
});

document.querySelector('.next-btn').addEventListener('click', () => {
  if (selectedMemeIdx === lastIndex) {
    selectedMemeIdx = firstIndex;
  } else {
    selectedMemeIdx += 1;
  }

  image.src = memes[selectedMemeIdx].img;
  text.textContent = memes[selectedMemeIdx].text;
});
