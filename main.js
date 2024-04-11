import './style.css';

const memes = [
  {
    img: 'https://c4.wallpaperflare.com/wallpaper/277/354/502/feelsbadman-pepe-meme-memes-wallpaper-preview.jpg',
    topText: 'meme 1 top text',
    bottomText: 'meme 1 bottom text',
  },
  {
    img: 'https://i.insider.com/6011ac2b6dfbe10018e0049f?width=700',
    topText: 'meme 2 top text',
    bottomText: 'meme 2 bottom text',
  },
  {
    img: 'https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=16:9',
    topText: 'meme 3 top text',
    bottomText: 'meme 3 bottom text',
  },
  {
    img: 'https://images.jpost.com/image/upload/q_auto/c_fill,g_faces:center,h_537,w_822/485633',
    topText: 'meme 4 top text',
    bottomText: 'meme 4 bottom text',
  },
  {
    img: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg',
    topText: 'meme 5 top text',
    bottomText: 'meme 5 bottom text',
  },
];

let selectedMemeIdx = 0;
const firstIndex = 0;
const lastIndex = memes.length - 1;

document.querySelector('.next-btn').addEventListener('click', () => {
  if (selectedMemeIdx === lastIndex) {
    selectedMemeIdx = firstIndex;
  } else {
    selectedMemeIdx += 1;
  }

  document.querySelector('.image').src = memes[selectedMemeIdx].img;
  document.querySelector('.top-text').textContent = memes[selectedMemeIdx].topText;
  document.querySelector('.bottom-text').textContent = memes[selectedMemeIdx].bottomText;
});


