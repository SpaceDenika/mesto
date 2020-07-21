let openPopupProfileButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closePopupProfileButton = document.querySelector('.popup__close-button');
let form = popup.querySelector('.form');
let inputName = document.querySelector('.form__input_type_name');
let inputProfession = document.querySelector('.form__input_type_profession');
let profileName = document.querySelector('.profile__info-name');
let profileProfession = document.querySelector('.profile__info-profession');
let inputTitle = document.querySelector('.form__input_type_title');
let inputLink = document.querySelector('.form__input_type_link');
let elementText = document.querySelector('.element__text');
let elementImage = document.querySelector('./element__image');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function openPopup() {

  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;

  togglePopup();

}

openPopupProfileButton.addEventListener('click', openPopup);

closePopupProfileButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {

  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  togglePopup();

}

form.addEventListener('submit', formSubmitHandler);

function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function openPopup() {

  inputName.value = elementText.textContent;
  inputProfession.value = elementImage.textContent;

  togglePopup();

}

openPopupButton.addEventListener('click', openPopup);

closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {

  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  togglePopup();

}

form.addEventListener('submit', formSubmitHandler);
