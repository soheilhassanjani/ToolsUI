export function createNode({ tagName = 'div', att, child }) {
    let node = undefined;
    if (typeof (tagName) === "string") node = document.createElement(tagName);
    else return undefined;
    if (typeof (att) !== 'undefined' && typeof (att) === "object") forEach(att, (value, key) => node.setAttribute(kababCase(key), arrToStr(value)));
    if (typeof (child) !== 'undefined') appendChild(node, child);
    return node;
}

export function appendChild(element, children) {
    if (typeof (children) === "object")
        for (const child of children) {
            element.append(child);
        }
    else element.append(children);
    return element;
}

export function forEach(collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (var prop in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                callback.call(scope, collection[prop], prop, collection);
            }
        }
    } else {
        for (var i = 0, len = collection.length; i < len; i++) {
            callback.call(scope, collection[i], i, collection);
        }
    }
};

export function camelCase(string) {
    string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function (match) {
        return match.charAt(match.length - 1).toUpperCase();
    });
    return string.charAt(0).toLowerCase() + string.substring(1);
}

export function kababCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

export function arrToStr(arr) {
    return arr.toString().replace(/,/g, " ");
}

export function removeClassElements(arr, className) {
    arr.forEach(function (cell) {
        cell.classList.remove(className);
    });
}