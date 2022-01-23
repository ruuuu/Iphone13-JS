const accordeon = () => {


    const chItems = document.querySelectorAll('.characteristics__item'); // [li, li, li, li]
    //console.log(chItems);

    chItems.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title'); // button
        const chContent = item.querySelector('.characteristics__description'); // descripton
        // console.log(chButton);
        // console.log(chContent);
        chButton.addEventListener('click', () => {

            if (chContent.classList.contains('open')) { // если у элкмента chContent етсь класс open
                chContent.style.height = '';
            }
            else {
                chContent.style.height = chContent.scrollHeight + 'px';
            }
            chContent.classList.toggle('open');
            chButton.classList.toggle('active');

            //console.dir(chContent); //тем самыс узнали что у него есть свойство scrollHeight
        });

    });
}

accordeon(); 