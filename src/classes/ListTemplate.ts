import {HasFormatter} from "../interfaces/HasFormatter.js";

// ENUMS
export enum PositionType {
  START = 'start',
  END = 'end'
}

export class ListTemlate {
  constructor(
    private container: HTMLUListElement
  ) {}

  render(item: HasFormatter, heading: string, position: PositionType) {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerHTML = heading;
    p.innerHTML = item.format();

    li.append(h4);
    li.append(p);

    if (position === PositionType.START) {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}