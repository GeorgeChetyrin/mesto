const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.profile__open-popup')
const popupCloseButton = popup.querySelector('.popup__close')


const popupToggle = function (event) {
    popup.classList.toggle('popup_opened')
}


popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)


const profile = document.querySelector('.profile')
const formElement = document.querySelector('.popup__form')

const nameInput = formElement.querySelector('.popup__profile-title')
const jobInput = formElement.querySelector('.popup__profile-subtitle')
const name = profile.querySelector('.profile__title')
const job = profile.querySelector('.profile__subtitle')

nameInput.value = 'Жак-Ив Кусто'
jobInput.value = 'Исследователь океана'


const formCloseButton = popup.querySelector('.popup__submit-button')
formCloseButton.addEventListener('click', popupToggle)


function formSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value
    job.textContent = jobInput.value
}

formElement.addEventListener('submit', formSubmitHandler);