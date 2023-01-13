import Finder from "./Components/Finder.js";
const app = {

    init: function() {
        const content = document.querySelector(".content");
        new Finder(content);
    }
}