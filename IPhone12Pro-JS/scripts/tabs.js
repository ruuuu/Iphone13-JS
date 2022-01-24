const tabsFunc = () => {

    const tabs = document.querySelectorAll('.card-detail__change '); // [button, button, button]
    const tabTitle = document.querySelector('.card-details__title'); // имя 
    const tabPrice = document.querySelector('.card-details__price'); // цена
    const tabImage = document.querySelector('.card__image_item'); // картинка

    const tabOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: 60000,
            image: 'img/iPhone-graphite.webp'
        },

        {
            name: 'Silver',
            memory: '256',
            price: 65000,
            image: 'img/iPhone-silver.webp'
        },

        {
            name: 'Sierra Blue',
            memory: '512',
            price: 70000,
            image: 'img/iPhone-sierra_blue.webp'

        }
    ];

    const links = '123';


    const changeContent = (index) => { // инлдек нажатого таба

        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOptions[index].memory}GB ${tabOptions[index].name}`; // ``- интерполяция, позволяет писать в кавычках js код
        tabPrice.textContent = `${tabOptions[index].price}P`;
        //tabImage.src = `${tabOptions[index].image}`;
        tabImage.setAttribute('src', `${tabOptions[index].image}`); // устанвливаем значение атрибуту src
    }

    const changeActiveTabs = (indexClickedTab) => { // индекс таба котрый кликнули
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClickedTab) { // если текущий там совпадает с кликнутым
                tab.classList.add('active');
            }
        });

        changeContent(indexClickedTab);
    }



    tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {
            changeActiveTabs(index); // индекс таба котрый кликнули
        });
    });


    changeContent(0); // для первогт пункта чтоб значнеиене подтгяивалаоьс из разметки, а отсюда
}

tabsFunc(); // инкапуслировали код, замкнули код в  фукнцию tabsFunc()
