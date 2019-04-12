module.exports = {
    title: "Избираеми ФМИ",
    description: "Избираемите дисциплини във ФМИ, Пловдивски Университет",
    themeConfig: {
        nav: [
            {
                text: 'Home', link: '/'
            }
        ],
        sidebar: [
            {
                title: 'Категории',
                children: [
                    '/categories/mathematics/',
                    '/categories/programming/',
                    '/categories/business/',
                    '/categories/other/'
                ]
            }
        ]
    }
}