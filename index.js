const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const addCardPopup = document.querySelector('.popup_type_add-card');
const imagePopup = document.querySelector('.popup_type_image');
const containerPopup = document.querySelector('.popup__container');

//buttons
const editProfilePopupButton = document.querySelector('.profile__button-edit');
const editProfileClosePopupButton = editProfilePopup.querySelector('.popup__close-button');
const addCardClosePopupButton = addCardPopup.querySelector('.popup__close-button');
const imageClosePopupButton = imagePopup.querySelector('.popup__close-button');
const addCardPopupButton = document.querySelector('.profile__button-add');

//form
const editProfileForm = editProfilePopup.querySelector('.form');
const addCardForm = addCardPopup.querySelector('.form');

const profileName = document.querySelector('.profile__info-name');
const profileProfession = document.querySelector('.profile__info-profession');

//input
const inputName = editProfileForm.querySelector('.form__input_type_name');
const inputProfession = editProfileForm.querySelector('.form__input_type_profession');
const inputTitle = addCardForm.querySelector('.form__input_type_title');
const inputLink = addCardForm.querySelector('.form__input_type_link');





function togglePopup(editProfilePopup) {
  editProfilePopup.classList.toggle('popup_opened');
  containerPopup.classList.toggle('popup__container_opened');
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;
  togglePopup(editProfilePopup);
}

function addCardFormSubmitHandler(evt) {
  evt.preventDefault();

  renderCard({name: inputTitle.value, link: inputLink.value});

  togglePopup(addCardPopup);

  inputTitle.value = '';
  inputLink.value = '';
}

editProfileForm.addEventListener('submit', editProfileFormSubmitHandler);

addCardForm.addEventListener('submit', addCardFormSubmitHandler);

editProfilePopupButton.addEventListener('click', () => {
  if (!editProfilePopup.classList.contains('.popup_opened')) {
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
  }
  togglePopup(editProfilePopup);
})

editProfileClosePopupButton.addEventListener('click', () => {

  togglePopup(editProfilePopup);
})

addCardPopupButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
})

addCardClosePopupButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
  inputTitle.value = '';
  inputLink.value = '';
})


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

const cardTemplate = document.querySelector('.template-card').content.querySelector('.element__cell');
const list = document.querySelector('.element');

function renderCard(data) {

  list.prepend(createCard(data));

}

initialCards.forEach((data) => {
  renderCard(data);
});

function handleLikeClick(evt) {
  evt.target.classList.toggle('element__button-like_active');

}

function handleDeleteClick(evt) {
  evt.target.closest(".element__cell").remove();
}

function handleImageClick(data) {

  const imagePopupFigure = imagePopup.querySelector('.figure__image');
  const imagePopupCaption = imagePopup.querySelector('.figure__caption');

  imagePopupCaption.textContent = data.name;
  imagePopupFigure.src = data.link
  imagePopupFigure.alt = data.name;

  togglePopup(imagePopup);

}

imageClosePopupButton.addEventListener('click', () => {
  togglePopup(imagePopup);
})

function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__text');
  const cardButtonLike = cardElement.querySelector('.element__button-like');
  const cardButtonTrash = cardElement.querySelector('.element__button-trash');


  cardButtonLike.addEventListener('click', (evt) => {
    handleLikeClick(evt)
  })

  cardButtonTrash.addEventListener('click', (evt) => {
    handleDeleteClick(evt);
  })

  cardImage.addEventListener('click', () => {

    handleImageClick(data);
  })

  cardImage.style.backgroundImage = `url(${data.link})`;
  cardTitle.textContent = data.name;

  return cardElement;
}
