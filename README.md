<!-- @format -->

Figma Link: https://www.figma.com/file/Z6B5xZtTLnrBvRKOeiz1Jt/Landing-test-for-front-end?type=design&t=Zr6SY7DUPgCZDG1P-0

# Description English

# **CONDITIONS**

1. We don't have any connection with the designer, let's assume that he is on vacation / resigned / ... it doesn't matter.
2. The images that the designer directly used in the layout do not necessarily have to be used in full compliance, if necessary or desired, stock images can be used.
3. The layout is provided in width (1440px). In this width, you **can** adhere to the principle of **`PixelPerfect`**. **Individual discrepancies up to 2-5px (if any) should be corrected, based on your own logic.**
4. Since the layout should be adaptive and look equally good on displays from 1200 - 1920px, this creative task needs to be solved independently based on the "base" width (1440px).
5. The search bar in the first section does not have to work during the layout stage, only effects implemented by the developer when the user activates the input and clicks the search button are welcome.
6. The navigation does not lead or redirect anywhere at this stage, we implement only hover effects based on the overall styling. We also implement the dropdown menu based on the overall style, and you can "stuff" it with **`House, Villa, Apartment`** items to show the general view of the dropdown menu and hover effects.
7. The image on the right side of the first section has an overlay in the form of colorful "corners". The corners themselves will be added to the image, so we merge the shapes and photo together in Figma and place them on the page as an image.
8. Tiles with information located on the right side of the first section are a slider. Its logic is quite simple - there are no controls on it, and it automatically shifts the slide every 3 seconds and so on in a circle. To test its performance, we add a couple of slides-tiles at our discretion.
9. The second section is a slider with a filter by type of real estate. There seem to be no questions here, this section must be fully functional - the filter must filter, the arrows - switch slides 😊, the logic of work in general is clear from the visual.
10. Section 3 (Ready To Sell) is also a slider. There are no controls on it, and the slide changes every 5 seconds **IF THERE IS NO CURSOR ON IT**
11. Section 4 (See our Review) fully complies with the layout. A slider with bullets to switch slides and the ability to switch slides by "drag & drop" method.
12. The remaining sections do not have specific functionality and must fully comply with the layout. The subscription form should not send anything, but the implementation of validation of the entered email should still be implemented and triggered when the send button (subscription) is clicked.
13. There is no mobile version layout available, so you will need to "create" it yourself. We are not expecting a perfect result, but at the very least, the content should remain readable, and all elements should be visible on the screen.

W**ith functionality seemingly completed, let's discuss implementation details and what we expect from you:**

- **`Semantic markup`** - in the 21st century, using divs for layout is no longer acceptable. Use semantic tags as much as possible.
- **`Proper grid`** - if margins over 100px can be avoided in the design, please do so! Flexbox and Grid layout are helpful tools 😉
- **`Code is a priority`** - if an element can be implemented using code, we expect that implementation. Preferably, use SVG for icons, CSS properties for gradients, and so on.
- **`Choice of stack is up to you`** - using libraries, preprocessors, and other "accelerators" is welcome, but everything has its price 😊 choose wisely. That is, you can implement this page with pure HTML/CSS/JS or with "dirty" 😂 React/Vue/SCSS/XHTML, and so on.
- **`Accepted result`** - a fully functional page hosted on GitHub Pages (or equivalent). That is, you must provide a link to the code and a link to a **functioning page**.

# Description rus

# УСЛОВИЯ

1. Связи с дизайнером у нас нет, представим, что он в отпуске/уволился/…. не важно
2. Изображения которые дизайнер непосредственно использовал в макете не обязательно использовать в полном соответствии, при необходимости или по желанию можно использовать стоковые
3. Макет предоставлен в ширине (1440px). В данной ширине **можно** придерживаться принципа **`PixelPerfect` . _Отдельные несоответствия до 2-5px (если таковые имеются) необходимо поправить, опираясь на собственную логику._**
4. Поскольку верстка должна быть адаптивной и одинаково хорошо смотреться на дисплях от 1200 - 1920px, данную творческую задачу предстоит решить самостоятельно основываясь на “базовую” ширину (1440px).
5. Строка поиска на первой секции, на этапе верстки не обязана работать, приветствуются лишь эффекты реализованные разработчиком, когда пользователь активирует инпут и нажимает на кнопку поиска.
6. Навигация на данном этапе никуда не ведет и не перенаправляет, на данном этапе реализовываем только ховер эффекты, основываясь на общей стилизации. Выпадающее меню реализовываем так же исходя из общего стиля, предварительно можно “запихнуть” туда пункты `House, Villa, Apartment` чтобы показать общий вид выпадающего меню и ховер эффекты
7. изображение в правой части первой секции имеет наложение в виде разноцветных “углов”, сами углы будут добавлены на изображение, поэтому сливаем фигуры и фото в Figma вместе, размещаем на странице как изображение.
8. Плитки с информацией, расположенные в правой части первой секции - это слайдер. Логика его работы довольно проста - на нем отсутствуют какие либо элементы управления и он автоматически, раз в 3 секунды сдвигает слайд, и так по кругу. Для проверки работоспособности добавляем пару-тройку слайдов-плиток на свое усмотрение.
9. Вторая секция - слайдер с фильтром по виду недвижимости. Тут вроде бы нет вопросов, данная секция должна быть полностью рабочей - фильтр должен фильтровать, стрелки - переключать слайды 😊, логика работы в целом понятна из визуала.
10. Секция 3 (Ready To Sell) - оказывается, тоже слайдер. На нем нет каких либо элементов управления, слайд меняется раз в 5 секунд **ЕСЛИ НА НЕМ НЕТ КУРСОРА**
11. Секция 4 (See our Review) - полностью соответствует макету. Слайдер с булетами для переключения слайдов и возможностью переключать слайды методом “drag & drop”
12. Оставшиеся секции не имеют специфической функциональности и должны полностью соответствовать макету. Форма подписки не должна ничего отправлять, однако реализация валидации введенного email все же должна быть реализована и срабатывать при нажатии на кнопку отправки (подписки)
13. Макет мобильной версии отсутствует специально, его необходимо “создать” самостоятельно. Мы не ждем от тебя идеального результата, но по крайней мере контент должен оставаться читаемым и все элементы должны быть видны на экране.

**С функциональностью вроде бы закончили, давай обговорим детали реализации, чего мы ждем от тебя:**

- `Семантическая верстка` - в 21 веке верстать на div’ах уже не позволительно, используй по максимуму семантические теги
- `Правильная сетка` - если в макете можно избежать margin’ов овер 100px - избегай их! FlexBox и Grid layout в помощь 😉
- `Код в приоритете` - если какой либо элемент возможно реализовать при помощи кода - мы ждем именно такой реализации. Если иконка - то предпочтительно svg, если градиент - то при помощи css свойств… и тому подобное
- `Выбор стека - за тобой` - Использование библиотек, препроцессоров и прочих “ускорителей” приветствуется, однако все имеет свою цену 😊 выбирай мудро. То есть, ты можешь реализовать данную страницу как на чистом HTML/CSS/JS так и на “грязном” 😂 - React/Vue/SCSS/XHTML и прочее
- `Принимаемый результат работы` - полностью функионирующая страница, размещенная на gitHub pages (или аналоги). То есть, необходимо предоставить ссылку на код и ссылку на **функционирующую страниц**у.
