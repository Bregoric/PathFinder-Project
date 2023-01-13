export const select = {
    templateOf: {
        finder: '#finder-template',
    },

    containerOf: {
        menu: '#product-list',
        pages: '#pages',
        homePage: '.home-page-wrapper',

    },
    nav: {
        links: '.main-nav a',
        homeLinks: '.home-links a',
    },
};

export const classNames = {
    nav: {
        active: 'active',
    },
    pages: {
        active: 'active',
    },
};

export const settings = {

};
export const templates = {
    finder: Handlebars.compile(document.querySelector(select.templateOf.finder).innerHTML),
};

export default settings;