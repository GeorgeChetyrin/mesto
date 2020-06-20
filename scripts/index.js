const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

const profile = document.querySelector('.profile');
const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__profile-title');
const jobInput = formElement.querySelector('.popup__profile-subtitle');
const name = profile.querySelector('.profile__title');
const job = profile.querySelector('.profile__subtitle');


function popupToggle() {
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = name.textContent;
        jobInput.value = job.textContent;
    }
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
