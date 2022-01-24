const sendForm = () => {

    const btnModalOpen = document.querySelector('.card-details__button_delivery'); // кнпока "Купить с доставкой"
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title'); // title  в модалке
    const cardDetailsTitle = document.querySelector('.card-details__title'); // title на станице
    const modalClose = modal.querySelector('.modal__close'); // кнопка  закртыия Крестик
    const modalForm = modal.querySelector('form'); // форма отправки




    btnModalOpen.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = cardDetailsTitle.textContent;
    });


    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });


    modalForm.addEventListener('submit', (evt) => { // на форму повесили событие submit- событие отправки фрмы
        evt.preventDefault(); // событие по умолчаию(перезагрузка станицы) отменяем

        const labels = modal.querySelectorAll('.modal__label');

        const sendMessage = {}; //  в цикде удем заполнять этот объект

        labels.forEach((label) => {

            const span = label.querySelector('span');
            const input = label.querySelector('input');
            // console.log(span.textContent);
            // console.log(input.value);
            sendMessage[span.textContent] = input.value;

        })

        //console.log('sendMessage ', sendMessage);

        fetch('https://jsonplaceholder.typicode.com/posts', { // отправлем данные на сервер методом POST
            method: 'POST',
            body: JSON.stringify({ sendMessage }), // превращаем объект sendMessage в строку(в JSON формате)!!!
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {

                labels.forEach((label) => {

                    const input = label.querySelector('input');
                    // console.log(input.value);
                    input.value = '';
                })

                modal.style.display = 'none';
            });


    });

}

sendForm();

// Статус 201 - успешная отпрака данных
// Статус 200 - успешное получение данных

// если ОС блокирует обращение к локальным файлам(db.json) и не получается к ним обратиться:
//  для этого есть обланчй сервис Firebase: куда можно импортировать json файл 
// и обращаться уже к файлу по урлу через firebase:
// fetch('./db.json')
//      .then((response) => {response.json()})
// в лок файле db.json поправить: 
//  { "db": <содержиоме файла> }
// переходим на https://console.firebase.google.com/ -> Create roject -> Continue ->  Continue -> Create Project -> Continue
// -> Realtime Database (в левом меню) -> Create Database -> Next -> Test mode(toggler) -> нвжать Троеточие(вверху справа) -> Import JSON ->
// -> копирем урл  к базе и добавляепм в путь /db.json (будет типа https://iphone12-5ed8b-default-rtdb.firebaseio.com/db.json) ->
// -> и всатвляем  этот урл в fetch()

