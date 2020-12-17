import ToggleItem from './toggle_item';

export default class Autofilter extends ToggleItem {
  constructor() {
    super('autofilter');
  }

  setState(active) {
    this.el.active(active);
  }
}
