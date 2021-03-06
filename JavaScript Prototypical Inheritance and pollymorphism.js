//1//HtmlElement class(baseClass) (different from java, c class)
function HtmlElement() {
    this.click = function () {
        console.log('HtmlElement clicked');
    }
    this.render = function () {
        console.log('HtmlElement default render method');
    }
}
HtmlElement.prototype.focus = function () {
    console.log('HtmlElement focused');
}

//2//HtmlSelectElement class (different from java, c class)
function HtmlSelectElement(items = []) {
    // HtmlElement.call(this);
    this.items = items;
    this.addItem = function (items) {
        this.items.push(...items);
    }
    this.removeItem = function (itemToRemove) {
        this.items.splice(this.items.indexOf(itemToRemove), 1);
    }
}
//inheriting HtmlElement in HtmlSelectElement (both ownElement and prototype Element)
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;
//overriding render() method in HtmlSelectElement class
HtmlSelectElement.prototype.render = function () {
    let optionTag = ``;

    this.items.map((item) => {
        optionTag = optionTag + `<option>${item}</option>
        `
    });

    const renderedElement = `<select>

    ${optionTag}
    </select>`;
    return renderedElement;
}

//3//ImageElement class (different from java, c class)
function ImageElement(src = '',) {
    this.src = src;
}
//inheriting HtmlElement in ImageElement (both ownElement and prototype Element)
ImageElement.prototype = new HtmlElement();
ImageElement.prototype.constructor = ImageElement;

//overriding render() method in ImageElement class
ImageElement.prototype.render = function () {
    return `<img src="${this.src}" />`;
}




/*
CALLING THIS CLASSES
*/
const elements = [
    new HtmlSelectElement([1,2,3,4]),
    new ImageElement('https//')
];

for (const element of elements) {
    console.log(element.render());
}
