const editCloseButton = document.querySelector(".popup__button-close");
const editButton = document.querySelector("#buttonEdit");
const addButton = document.querySelector("#buttonAdd");
const popupNewCard = document.querySelector(".popup-card");
const addCloseButton = popupNewCard.querySelector(".popup__button-close");
const popupProfile = document.querySelector(".popup-profile");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector('#name');
const infoInput = document.querySelector('#info');
const profileForm = document.querySelector('#popup-form-edit');
const popupBigCardImage = document.querySelector('.bigImage');
const titleBigCardImage = document.querySelector('.bigImageOpen__title');
const imageBigCardImage = document.querySelector('.bigImageOpen__image');
const card = document.querySelector('.card');
const titleNewCard = document.querySelector('.popup__input_type_place-name');
const urlNewCard = document.querySelector('.popup__input_type_photo');
const newCardForm = document.querySelector('#popup-form-add');
const closeBigCardImage = popupBigCardImage.querySelector('.popup__button-close')

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener("click", () => {
  openPopup(popupProfile);
});

function submitProfileForm(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = infoInput.value;
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', submitProfileForm);

addButton.addEventListener("click", () => {
  openPopup(popupNewCard);
});

editCloseButton.addEventListener("click", () => {
  closePopup(popupProfile);
});
addCloseButton.addEventListener("click", () => {
  closePopup(popupNewCard);
});
closeBigCardImage.addEventListener("click", () => {
  closePopup(popupBigCardImage);
});

function createCard(titleImage, urlImage) {
  const cardTemplate = document.querySelector('.newCard').content;
  const cardItem = cardTemplate.querySelector('.card__item').cloneNode(true);
  cardItem.querySelector('.card__title').textContent = titleImage;
  cardItem.querySelector('.card__image').src = urlImage;
  cardItem.querySelector('.card__button-like').addEventListener('click', function (e) {
    e.target.classList.toggle("card__button-like_active")
});
cardItem.querySelector('.card__button-delete').addEventListener('click', function () {
  cardItem.remove();
});
cardItem.querySelector('.card__image').addEventListener('click', function () {
  openPopup(popupBigCardImage)
  titleBigCardImage.textContent = cardItem.querySelector('.card__title').textContent;
  imageBigCardImage.src = cardItem.querySelector('.card__image').src;
});
return cardItem;
};

function renderCard(name, link) {
  const renderNewCard = createCard(name, link);
  card.prepend(renderNewCard);
}

function submitNewCard (e){
  e.preventDefault();
  renderCard(titleNewCard.value, urlNewCard.value);
  titleNewCard.value = '';
  urlNewCard.value = '';
  closePopup(popupNewCard)
}
newCardForm.addEventListener("submit", submitNewCard);


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];

  for(let i = 0; i < initialCards.length; i++){
    function cards() {
        renderCard(initialCards[i].name, initialCards[i].link);
    }
    cards();
}
