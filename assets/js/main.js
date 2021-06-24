const chevron = document.querySelector("#chevron");
const sideText = document.querySelector(".otherhalf");
const PluginImg = document.querySelector(".plugin-right");
const chevron2 = document.querySelector("#chevron2");
const sideText2 = document.querySelector(".otherhalf2");
const PluginImg2 = document.querySelector(".plugin-right2");
const toggle = document.querySelector(".bars");
const links = document.querySelector(".links");
const links2 = document.querySelector(".links2");



toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  links.classList.toggle("active");
  links2.classList.toggle("active");
});

chevron2.addEventListener("click", () => {
  Theme();
});
chevron.addEventListener("click", () => {
  PLLugin();
});

const Theme = () => {
  chevron2.classList.add("online");
  sideText.classList.add("d-none");
  chevron.classList.remove("online");
  PluginImg.classList.add("d-none");
  sideText2.classList.remove("d-none");
  PluginImg2.classList.remove("d-none");
};
const PLLugin = () => {
  chevron2.classList.remove("online");
  sideText.classList.remove("d-none");
  chevron.classList.add("online");
  PluginImg.classList.remove("d-none");
  sideText2.classList.add("d-none");
  PluginImg2.classList.add("d-none");
};
