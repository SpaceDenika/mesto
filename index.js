let openPopupButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');
let form = popup.querySelector('.form');
let inputName = document.querySelector('.form__input_type_name');
let inputProfession = document.querySelector('.form__input_type_profession');
let profileName = document.querySelector('.profile__info-name');
let profileProfession = document.querySelector('.profile__info-profession');

function togglePopup() {
  popup.classList.toggle('popup_opened');
}


openPopupButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;

  togglePopup();

})

closePopupButton.addEventListener('click', togglePopup);

form.addEventListener('submit', (event) => {
  inputName.value
  inputProfession.value

  profileName.textContent = inputName.value;
  profileProfession.textContent = inputProfession.value;

  togglePopup();

  event.preventDefault();
})

formElement.addEventListener('submit', formSubmitHandler)
