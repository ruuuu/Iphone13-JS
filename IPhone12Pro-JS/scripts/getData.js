const getData = () => {

    fetch('https://jsonplaceholder.typicode.com/todos') // делаем  запрос по заданному урлу, возвращае промис
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
            console.log(data) // массив объектов с котрым можно работать
        })
        .catch((error) => {
            //console.dir(error.message);
            console.error(error.message);
        })
        .finally(() => { // обработате в любом случае, если етсь ошибка или нет
            console.log('finally');
        })



}


getData();

//https://jsonplaceholder.typicode.com/ чтобы куда то делать запросв и получать данные

//метод then() дожидается когда сервре соберет все данные и отдаст нам, и запустится, втрой метод then() дождется когда отрабоатет первый и потом запустится