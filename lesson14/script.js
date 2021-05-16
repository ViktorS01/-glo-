'use strict';

let body = document.querySelector('body');

const DomElement = function (selector, bg, fontSize, height, width){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

const domElement = new DomElement ('#Якласс', '#A32F76', '55px', '200px', '300px');

DomElement.prototype.addElem = function (){
    if (this.selector[0] === '.'){
        let div = document.createElement('div');
        div.classList.add(this.selector.substr(1));
        
        div.style.backgroundColor = this.bg;
        div.textContent = "Здарова, отец!";
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.fontSize = this.fontSize;
        body.append(div);
    }

    else if (this.selector[0] === '#') {
        let p = document.createElement('p');
        p.classList.add(this.selector.substr(1));

        p.style.backgroundColor = this.bg;
        p.textContent = "Че как?";
        p.style.width = this.width;
        p.style.height = this.height;
        p.style.fontSize = this.fontSize;
        body.append(p);
    }
};

domElement.addElem();