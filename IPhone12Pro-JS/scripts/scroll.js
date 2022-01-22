// РЕАЛИЗУЕМ СКРОЛЛ К СЕКЦИЯМ из врехнего меню:
const scrollFunc = () => {

    const links = document.querySelectorAll('.header-menu__item a'); // псевдомамассив, отличие масива и псевдомассива  втом что умассивов методов больше
    //console.log(links); // [a, a, a, a, a]
    const linkCharacteristic = document.querySelectorAll('.card-details__link-characteristics');
    const newArray = [...links, linkCharacteristic]; // получили новый массив, ... - спред оператор


    seamless.polyfill(); // вызываем polyfill() чтобы скролл работал и в сафари

    newArray.forEach((elem) => { // стелчоные функции рабоатю бысрее чем обычные
        // меод forEach работает дольше чем обычный цикл for
        // повесили на все ссылки обработчик клика
        elem.addEventListener('click', (evt) => { // функция применится только тогда когда кликнем, evt- объект самого собтия
            evt.preventDefault(); // отменеям поведение ссылки по умолчанию, т е  редирект на ту станицуукзанной в href
            //console.log(evt.target); // выведет элемен на котрый нажали, т е ссылка a
            const id = elem.getAttribute('href').substring(1); // плучаем значнееи атрибута href, и у него убираем первый символ
            const section = document.getElementById(id); // найдет элемент по указанному id
            console.log(section);

            if (section) {
                //  работае только в хроме, ff и опера
                // section.scrollIntoView({ // скроллим к этой секции  
                //     behavior: 'smooth', // плавный переход
                //     block: 'start' // скроллит к  началу секции
                // });

                seamless.elementScrollIntoView(section, { //код взяли отсюда  https://www.npmjs.com/package/seamless-scroll-polyfill, чтобы и  в сафар работало тоже 
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });

            }
            else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        })


    });

}

scrollFunc(); // перменные/функции ктрые находятся в этой функции замкнуты(те сделали замыкание), т е другим файлам js они не видны. Если в др файле обяъвим пемернную/функцию с таким же именем, то ничего не упадет
// Область видимости функции- это код внутри фигурных скобок, т езамыкаем кодв  какую то функцию
// Инкапсуляция - это когда защищаем один участок кода от другого



//console.log(document.querySelector('.header-menu__logo')); // document-  ОБЪЕКТ котрый создаесся в глоб области виимости, вывдет слепок нашей разметки
// DOM- апи (объектная модель документа), это апи при считывани  тэгов интпретатором, создает на основе тегов объект

//console.dir(document.querySelector('.header-menu__logo')); // выведет элементы в виде объекта img.header-menu__logo

// document.querySelector('.header-menu__logo').style.border = '1px solid black'; //  уэлмента вразметметке добавиться атрибут style с этими свосвами
// document.querySelector('.header-menu__logo').style.background = 'yellow';

// const link = document.querySelector('.header-menu__item a'); //a, можно как и в  css добраться до вложенных элементво
// console.log(link);

//обработчик события- функция, котрая принимает др функцию и она вызывается тогда когда наступит событие
// addEventListener('',)()=>{ позволяет повесить много др событи на один  итот же элемент




