// ==========( module tab ) 
var moduleTab = function () {
    function init(tab) {
        if (!tab) return console.log("Element Is Null");
        var links = tab.querySelectorAll(".tabs__nav-link");
        var panes = tab.querySelectorAll(".tabs__pane");
        handleEvent(links, panes);
    }

    function handleEvent(links, panes) {
        links.forEach(function (link) {
            link.addEventListener("click", function () {
                return findPane(link, links, panes);
            });
        });
    }

    function findPane(target, links, panes) {
        var num = target.dataset.tabNum;
        removeClassElements(links, "tabs__nav-link--select");
        removeClassElements(panes, "tabs__pane--select");
        links[num - 1] && links[num - 1].classList.add("tabs__nav-link--select");
        panes[num - 1] && panes[num - 1].classList.add("tabs__pane--select");
    }

    return {
        init: init
    };
}();


// ==========( utils ) 
function removeClassElements(arr, className) {
    arr.forEach(function (cell) {
        cell.classList.remove(className);
    });
}