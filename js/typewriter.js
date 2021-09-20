class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

console.log(`Task: https: //github.com/rolling-scopes-school/tasks/blob/master/tasks/cv/html-css.md
    Screenshot:
    ![image](https: //user-images.githubusercontent.com/72902514/134082369-f6ee3312-c349-4b76-ac84-9c05eb103a51.png)
      Deploy: https: //0603anton.github.io/rsschool-cv/
      Done: 21.09 .2021 / deadline 21.09 .21 Score: 150 / 160 Ваша оценка - 150 баллов Отзыв по пунктам ТЗ:
      Не выполненные / не засчитанные пункты:
      1) есть видеорезюме автора CV на английском языке.Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки.Продолжительность видео 3 - 5 минут(±15 секунд).В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке(например, в документе Google Docs).

    Выполненные пункты:
    1) вёрстка валидная.Проверить валидность вёрстки: https: //validator.w3.org/ 

  2) вёрстка семантическая.В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1 - h6.2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1 - h6, но не больше 20 баллов.Заголовок h1 может быть только один

3) для оформления СV используются css - стили.1 балл за каждый стилизованный элемент, но не больше 10 баллов

4) контент размещается в блоке, который горизонтально центрируется на странице.Фоновый цвет, если он есть, тянется во всю ширину страницы

5) вёрстка адаптивная: ни на одном из разрешений экрана до 320 px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется

6) есть адаптивное бургер - меню.Ссылки в пунктах меню ведут на основные разделы CV.При кликах по пунктам меню реализована плавная прокрутка по якорям.При уменьшении ширины экрана меню становится адаптивным.

7) на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt(может быть пустым)

8) контакты для связи и перечень навыков оформлены в виде списка ul > li

9) CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского

10) CV содержит пример вашего кода(например, решение задачи с сайта codewars) с подсветкой кода

11) CV содержит изображения - ссылки на выполненные вами проекты.При клике по изображению страница проекта открывается в новой вкладке.У каждого проекта есть название, небольшое описание, указан перечень используемых технологий

12) CV выполнено на английском языке

13) выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка(самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)

14) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию`);