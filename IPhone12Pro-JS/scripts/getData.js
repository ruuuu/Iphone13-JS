const getData = () => {

    const list = document.querySelector('.cross-sell__list'); // ul список куда будем заносить карточик товарров
    const btn = document.querySelector('.cross-sell__add');  // кнпока Покзать еще
    let stack = 4; // по 4 штуки будет на страницу выводится
    let count = 1; // начальное значение




    // в  js есть арспространенный подход: 1 функция  это 1  действие
    const render = (data) => { // отрисовывает картчоки товаров, data = [{}, {}, {}, {}] - массив карточек
        list.innerHTML = ''; //ul  очищаем контенейр list, чтоы те карточки, котыре есть в верcтке не отображались

        data.forEach(item => { // item = {id, name, price, photo}
            //console.log(item);
            list.insertAdjacentHTML('beforeend', `
            <li>
                <article class="cross-sell__item">
                    <img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
                    <h3 class="cross-sell__title">${item.name}</h3>
                    <p class="cross-sell__price">${item.price}₽</p>
                    <button type="button" class="button button_buy cross-sell__button">Купить</button>
                </article>
            </li>
            `);
        });
    }


    const sliceArray = (data, index) => { //  index- индекс до котрого буде отрезаться массив
        return data.slice(0, index); // возвращает первые 4 элемента
    }


    const changeData = (data) => { // [ {}, {}, {}]
        const newStack = stack * count;
        render(sliceArray(data, newStack)); // array.slice()  отсавляет у массива первые newStack элементов

        if (data.length > newStack) {
            count++;
        }
        else {
            btn.style.display = 'none';
        }
    }


    const getGoods = () => {

        // ВЫПОЛНЕНИЕ КОДА НАЧИАЕТСЯ ОТСЮДА: при каждом нажати на кнпоку "Еще", вызывется fetch()
        fetch('../cross-sell-dbase/dbase.json') // делаем GET - запрос(у fetch он по умолчанию) по заданному урлу, возвращает промис
            .then((response) => { //  then принмиает коллбэк функцию, предаеи в нее response - то что отдал сервер
                console.log(response);
                if (response.ok) {
                    return response.json(); // массив объектов
                }
                else {
                    throw new Error('Данные были получены с ошибкой');
                }

            })
            .then((data) => {
                //console.log(data) // массив объектов с котрым можно работать
                changeData(data);
            })
            .catch((error) => {
                //console.dir(error.message);
                console.error(error.message);
            })
        // .finally(() => { // обработате в любом случае, если етсь ошибка или нет
        //     console.log('finally');
        // })
    }


    btn.addEventListener('click', () => {
        getGoods();
    });


    getGoods();


}


getData();

//https://jsonplaceholder.typicode.com/ чтобы куда то делать запросв и получать данные

//метод then() дожидается когда сервре соберет все данные и отдаст нам, и запустится, втрой метод then() дождется когда отрабоатет первый и потом запустится