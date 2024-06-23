window.onload = function () {
  const url = "https://ihatov08.github.io/kimetsu_api/api/all.json";
  apiFetch(url);
};

async function apiFetch(url) {
  const spinner = document.getElementById("loading");
  spinner.classList.remove("loaded");

  try {
    initDeleteChildren("name");
    initDeleteChildren("image");
    initDeleteChildren("category");

    const res = await fetch(url);
    const json = await res.json();
    for(const char of json) {
      let divTagName = document.createElement("div");
      divTagName.textContent = char.name;
      divTagName.className = "item";
      let nameTag = document.getElementById("name");
      nameTag.appendChild(divTagName);

      let divTagImage = document.createElement("img");
      divTagImage.src = "." + char.image;
      divTagImage.alt = char.name;
      divTagImage.className = "item";
      let imageTag = document.getElementById("image");
      let divTagImageWrap = document.createElement("div");
      imageTag.appendChild(divTagImageWrap);
      divTagImageWrap.appendChild(divTagImage);

      let divTagCategory = document.createElement("div");
      let categoryTag = document.getElementById("category");
      divTagCategory.textContent = char.category;
      divTagCategory.className = "item";
      categoryTag.appendChild(divTagCategory);
    }
  } catch (error) {
    console.log(error);
  } finally {
    spinner.classList.add("loaded");
  }
}

function initDeleteChildren(targetItem) {
  const parentName = document.getElementById(targetItem);
  while (parentName.firstChild) {
    parentName.removeChild(parentName.firstChild);
  }
}

function radioFunc() {
  const data = document.character_form.kimetsu;
  let selectedButton;
  for (let i = 0; i < data.length; i++) {
    if (data[i].checked) {
      selectedButton = data[i].value;
    }
  }

  apiFetch(`https://ihatov08.github.io/kimetsu_api/api/${selectedButton}.json`);
}