const languageElement = document.querySelector(".language");

languageElement.addEventListener("click", () => {
  const currentLanguage = languageElement.textContent;

  switch (currentLanguage) {
    case "En":
      languageElement.innerHTML = '<a href="#">Es</a>';
      languageElement.parentElement.setAttribute("data-language", "es");
      break;
    case "Es":
      languageElement.innerHTML = '<a href="#">En</a>';
      languageElement.parentElement.setAttribute("data-language", "en");
      break;    
    default:
      break;
  }
});
const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguageText = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();
for( const textToChange of textsToChange){
    console.log(textsToChange)
}

};


languageElement.addEventListener("click", (e) => {
 changeLanguageText(e.currentTarget.parentElement.dataset.language);
});