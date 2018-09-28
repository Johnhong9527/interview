var pkg = require("./package.json");

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: "./docs/",
    title: "interview",

    // Enforce use of GitBook v3
    gitbook: "3.1.1",

    // Use the "official" theme
    plugins: [
        "theme-official@2.1.1",
        "-sharing",
        "-fontsettings",
        "sitemap",
        "-search",
        "styles-less",
        "search-pro",
    ],

    variables: {
        version: pkg.version,
    },
    "styles": {
        "website": "./styles/website.less",
        "ebook": "/styles/ebook.css",
        "pdf": "/styles/pdf.css",
        "mobi": "/styles/mobi.css",
        "epub": "/styles/epub.css"
    },
    pluginsConfig: {
        sitemap: {
            hostname: "https://blog.honghaitao.net/",
        },
        "search-pro": {
            cutWordLib: "nodejieba",
            defineWord: ["小需求", "基础建设"],
        },
    },
};
