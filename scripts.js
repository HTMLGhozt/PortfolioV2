const links = Array.from(document.getElementsByClassName('link'));
let activeSection = document.querySelector('.home');
const clickFunction = (e) => {
  e.preventDefault();
  activeSection.classList.remove('active');
  console.log(e.target.innerText)
  activeSection = document.querySelector(`.${e.target.innerText.toLowerCase()}`);
  console.log(activeSection)
  activeSection.classList.add('active')
};
console.log(links);
links.forEach(link => {
  link.onclick = clickFunction;
});
