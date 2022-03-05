const buttonEditClose = document.querySelector(".popup__button-close");
const buttonEdit = document.querySelector("#buttonEdit");
const buttonAdd = document.querySelector("#buttonAdd");
const popupNewCard = document.querySelector(".popup-card");
const buttonAddClose = popupNewCard.querySelector(".popup__button-close");
const popupProfile = document.querySelector(".popup-profile");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector("#name");
const infoInput = document.querySelector("#info");
const profileForm = document.querySelector("#popup-form-edit");
const popupBigCardImage = document.querySelector(".bigImage");
const titleBigCardImage = document.querySelector(".bigImageOpen__title");
const imageBigCardImage = document.querySelector(".bigImageOpen__image");
const card = document.querySelector(".card");
const titleNewCard = document.querySelector(".popup__input_type_place-name");
const urlNewCard = document.querySelector(".popup__input_type_photo");
const cardFormNew = document.querySelector("#popup-form-add");
const cardBigImageClose = popupBigCardImage.querySelector(
  ".popup__button-close"
);
const cardTemplate = document.querySelector(".newCard").content;
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

buttonEdit.addEventListener("click", () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  infoInput.value = profileSubtitle.textContent;
});

function submitProfileForm(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopup(popupProfile);
}

profileForm.addEventListener("submit", submitProfileForm);

buttonAdd.addEventListener("click", () => {
  openPopup(popupNewCard);
});

buttonEditClose.addEventListener("click", () => {
  closePopup(popupProfile);
});
buttonAddClose.addEventListener("click", () => {
  closePopup(popupNewCard);
});
cardBigImageClose.addEventListener("click", () => {
  closePopup(popupBigCardImage);
});

function createCard(titleImage, urlImage) {
  const cardItem = cardTemplate.querySelector(".card__item").cloneNode(true);
  cardItem.querySelector(".card__title").textContent = titleImage;
  cardItem.querySelector(".card__image").src = urlImage;
  cardItem.querySelector(".card__image").alt = titleImage;
  cardItem
    .querySelector(".card__button-like")
    .addEventListener("click", function (e) {
      e.target.classList.toggle("card__button-like_active");
    });
  cardItem
    .querySelector(".card__button-delete")
    .addEventListener("click", function () {
      cardItem.remove();
    });
  cardItem.querySelector(".card__image").addEventListener("click", function () {
    openPopup(popupBigCardImage);
    popupBigCardImage.style.backgroundColor = "rgb(0, 0, 0, .9)";
    titleBigCardImage.textContent = titleImage;
    imageBigCardImage.src = urlImage;
    imageBigCardImage.alt = titleImage;
  });
  return cardItem;
}

function renderCard(name, link) {
  const renderNewCard = createCard(name, link);
  card.prepend(renderNewCard);
}

function submitNewCard(e) {
  e.preventDefault();
  renderCard(titleNewCard.value, urlNewCard.value);
  titleNewCard.value = "";
  urlNewCard.value = "";
  closePopup(popupNewCard);
}
cardFormNew.addEventListener("submit", submitNewCard);

initialCards.forEach(item => renderCard(item.name, item.link));
