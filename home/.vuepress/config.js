module.exports = {
    title: "Избираеми ФМИ",
    description: "Избираемите дисциплини във ФМИ, Пловдивски Университет",
    themeConfig: {
        repo: "HaedHutner/izbiraemi-fmi",
        nav: [
        ],
        sidebar: [
            {
                title: "Програмиране",
                children: [
                    "/categories/programming/grafichni-standarti",
                    "/categories/programming/mnogonishkovo-programirane"
                ]
            },
            {
                title: "Математика",
                children: [
                ]
            },
            {
                title: "Бизнес",
                children: [
                    "/categories/business/predpriemachestvo"
                ]
            },
            {
                title: "Други",
                children: [
                    "/categories/other/sigurnost-kiberprostranstvo"
                ]
            }
        ]
    }
}