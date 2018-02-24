const links = Array.from(document.getElementsByClassName('link'));
let activeSection = document.querySelector('.home');
const clickFunction = (e) => {
  e.preventDefault();
  activeSection.classList.remove('active');
  activeSection = document.querySelector(`.${e.target.innerText.toLowerCase()}`);
  activeSection.classList.add('active')
};
links.forEach(link => {
  link.onclick = clickFunction;
});
