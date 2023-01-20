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
    finder: {
        grid: '.grid',
        submitBtn: 'button',
    }
};

export const classNames = {
    nav: {
        active: 'active',
    },
    pages: {
        active: 'active',
    },
    finder: {
        field: 'field',
        selected: 'selected',
        start: 'start',
        finish: 'finish',
    }
};

export const settings = {

};
export const templates = {
    finderPage: Handlebars.compile(document.querySelector(select.templateOf.finder).innerHTML),
};

export default settings;