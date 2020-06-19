// ENUMS
export var PositionType;
(function (PositionType) {
    PositionType["START"] = "start";
    PositionType["END"] = "end";
})(PositionType || (PositionType = {}));
export class ListTemlate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        h4.innerHTML = heading;
        p.innerHTML = item.format();
        li.append(h4);
        li.append(p);
        if (position === PositionType.START) {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
