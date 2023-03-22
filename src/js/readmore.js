const readMore = document.querySelectorAll('.button-read-more');
const blockSwipe = document.querySelectorAll('.blockSwipe');
i = 0;

const onClick = (e) => {
    readMore.forEach(element => {
        if (e.target == element){
            blockSwipe[i].classList.toggle('height');
            if (element.innerText == 'Показать все') {
                element.innerHTML = 'Скрыть';
            } else element.innerHTML = 'Показать все';
            element.classList.toggle('grow__onwards_vertical');
            i = 0;
            };
        i++
    })
    i = 0;
};

readMore.forEach(e => {
    e.addEventListener('click' , onClick);
})