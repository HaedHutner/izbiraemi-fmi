# Избираeми Дисциплини за ФМИ, Пловдивски Университет

Това е source-code-а за сайта izbiraemi-fmi.com, където се съдържат
колкото се може най-достоверни описания за избираемите дисциплини във
факултета по математика и информатика в Пловдивси Университет "Паисий Хилендарски".

Ако по случайност сте намерили това repository, заповядайте да допринесете към
информация, която се съдържа тук.

# Структура и технологии

## Технологии

Използваме VuePress за да генерираме статичен HTML сайт, който след това се
deploy-ва на izbiraemi-fmi.com. master branch-a се използва за съхранение
само на това, което в момента се намира на сайта.

Всички останали branch-ове трябва първо да бъдат merge-нати чрез pull request.

Цялата информация в това repository е под формата на Markdown.

## Структура

Сайта е със следната структура:

* /home/ - Това е началната директория на проекта
    * /categories/ - Това е родителската стрничка за всички категории от изибраеми дисциплини
        * /mathematics/ - Директория за категорията Математика
        * /programming/ - Директория за категорията Програмиране
        * /business/ - Директория за категорията Бизнес
        * /other/ - Директорията за категорията Други

В зависимост от категорията в която се намира дадена избираема дисциплина,
всяка си има собствен .md файл, който я описва.

Имената на тези файлове трябва да сa на латиница.

Всеки един трябва да бъде добавен и към README.md файла на своята категория,
заедно с линк към самия файл.

# Допринасяне към проекта

Можете да помогнете за поддържането на истиността на информацията на този сайт
като:

1. Създадете fork на това repository
2. Създадете свой собствен branch от master
3. След като направите своите промени, създавате нов pull request към master ( на това repository ).

От там, аз ще разгледам вашите промени, и ще реша дали те да бъдат поставени на сайта.

Благодаря ви, ако възнамерявате да допренесете, дори и да не го направите! :)