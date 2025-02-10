'use strict';

/**
  Наши преимущества
 */

const images = [
  './src/images/advantage_1.png',
  './src/images/advantage_2.png',
  './src/images/advantage_3.png',
  './src/images/advantage_4.png',
  './src/images/advantage_5.png',
  './src/images/advantage_6.png',
  './src/images/advantage_7.png',
  './src/images/advantage_8.png',
  './src/images/advantage_9.png',
];

const title = [
  'Уверенность в завтрашнем дне',
  'Безопасность на рабочем месте – приоритет №1',
  'Стабильная заработная плата',
  'Заботимся о здоровье сотрудников',
  'Предоставление удобной спецодежды и СИЗ для производственного персонала',
  'Обучение: различные программы обучения и профессиональные тренинги',
  'Возможности для реализации творческого потенциала',
  'Мы - семейная компания и любим проводить время вместе',
  'Мы - социально ответственная компания и заботимся об окружающих',
];

const information = [
  'ООО «Conecom», российское подразделение французского концерна DuffBeer. Мы компания, которая честно ведет свой бизнес на территории РФ, соблюдая законодательство и гарантируя стабильность и уверенность в завтрашнем дне.',
  'Вопросам безопасности и качества пищевой продукции в нашей компании уделяется повышенное внимание. Все производства группы DuffBeer в России постоянно работают над улучшением процессов и стремятся сделать все возможное, чтобы рабочий процесс был максимально безопасным и комфортным.',
  'Мы обеспечиваем нашим сотрудникам стабильную заработную плату в соответствии с рынком региона. Средний стаж работы в нашей компании – 7 лет.',
  'Каждый сотрудник в нашей компании обеспечен полисом добровольного медицинского страхования. Кроме того, на каждом заводе есть медицинский пункт для сотрудников. Осуществляется страхование от несчастных случаев с первого дня работы.',
  'Мы предоставляем удобные СИЗ и спецодежду и в случае износа или порчи обмениваются на новые.',
  'Мы уделяем много внимания развитию наших сотрудников. В компании работает Внутренний центр обучений и ежегодно проводится большое количество обучающих мероприятий как локально на заводах, так и в головном офисе DuffBeer во Франции.',
  'Мы ставим перед собой амбициозные и интересные цели, а реализация задач является командной работой сотрудников из различных подразделений.  Мы также принимаем активное участие в работе над кросс-функциональными проектам с коллегами из других стран присутствия DuffBeer.',
  'Ежегодно мы проводим корпоративные мероприятия не только для наших сотрудников, но и для семей наших сотрудников. А корпоративные подарки для детей сотрудников – наша добрая предновогодняя традиция.',
  'Наша миссия лежит в основе социально-корпоративной ответственности. Мы ведем свою деятельность в соответствии с тремя основными правилами:  мы заботимся о людях; наша деятельность устойчива по своей природе; мы заботимся об окружающей среде.',
];

const plus = './src/images/plus.png';
const minus = './src/images/minus.png';

document.addEventListener('DOMContentLoaded', () => {
  let grid = document.querySelector('.advantage__grid');
  images.forEach((name, index) => {
    const card = document.createElement('div'); // карточка 
    card.className = 'advantage__card';

    const cardImage = document.createElement('img'); // изображение карточки
    cardImage.className = 'advantage__image';
    cardImage.src = name;

    const subtitle = document.createElement('p'); // заголовок
    subtitle.className = 'advantage__subtitle';
    subtitle.textContent = title[index];

    const icon = document.createElement('img'); // +
    icon.className = 'advantage__icon';
    icon.src = plus;
    icon.dataset.icon = 'plus';

    const description = document.createElement('p'); // описание 
    description.className = 'advantage__subtitle';
    description.textContent = information[index];
    description.style.display = 'none';

    icon.addEventListener('click', () => {
      if (icon.dataset.icon === 'plus') {
        cardImage.style.display = 'none';
        subtitle.style.display = 'none';
        icon.src = minus;
        icon.dataset.icon = 'minus';
        description.style.display = 'block';
      } else {
        cardImage.style.display = 'block';
        subtitle.style.display = 'block';
        description.style.display = 'none';
        icon.src = plus;
        icon.dataset.icon = 'plus';
      }
    });

    card.appendChild(cardImage);
    card.appendChild(subtitle);
    card.appendChild(description);
    card.appendChild(icon);

    grid.appendChild(card);

  });
});


/**
  Слайдер DuffBeer
 */

let items = document.querySelectorAll('.information__card');

let firstButton = document.querySelector('.slider__button_first'); // кнопки переключения слайдов
let secondButton = document.querySelector('.slider__button_second');
let thirdButton = document.querySelector('.slider__button_third');
let fourthButton = document.querySelector('.slider__button_fourth');
let fifthButton = document.querySelector('.slider__button_fifth');
let sixthButton = document.querySelector('.slider__button_sixth');
let sliderBtn = document.querySelectorAll('.slider__button'); // индикатор 

function itemHandler(currentIndex) { // функция, показывающая нужные изображения
  if (window.innerWidth < 800) { // s, xs
    sliderBtn.forEach((e) => {
      e.classList.remove('active');
      if (sliderBtn[currentIndex].classList.contains('slider__button_first')) {
        firstButton.classList.add('active');
      } else if (sliderBtn[currentIndex].classList.contains('slider__button_second')) {
        secondButton.classList.add('active');
      } else if (sliderBtn[currentIndex].classList.contains('slider__button_third')) {
        thirdButton.classList.add('active');
      } else if (sliderBtn[currentIndex].classList.contains('slider__button_fourth')) {
        fourthButton.classList.add('active');
      } else if (sliderBtn[currentIndex].classList.contains('slider__button_fifth')) {
        fifthButton.classList.add('active');
      } else {
        sixthButton.classList.add('active');
      }
    });
  }

  if (window.innerWidth < 800 & window.innerWidth > 500) { // s
    sliderBtn.forEach((el) => {
      if (el.classList.contains('active')) {
        items.forEach((el) => {
          el.classList.remove('active-s');
        });
        if (currentIndex < 5) {
          items[currentIndex].classList.add('active-s');
          items[currentIndex + 1].classList.add('active-s');
        } else {
          items[0].classList.add('active-s');
          items[currentIndex].classList.add('active-s');
        }
      }
    });
  }

  if (window.innerWidth < 500) { // xs
    sliderBtn.forEach((el) => {
      if (el.classList.contains('active')) {
        items.forEach((el) => {
          el.classList.remove('active-xs');
        });
        items[currentIndex].classList.add('active-xs');
      }
    });
  }
}
