// import helper from '../helper';

export default class History {
  constructor() {
    this.undoItems = [];
    this.redoItems = [];
  }

  add(data) {
    this.undoItems.push(JSON.stringify(data));
    this.redoItems = [];
  }

  canUndo() {
    return this.undoItems.length > 0;
  }

  canRedo() {
    return this.redoItems.length > 0;
  }

  undo(currentd, cb) {
    const { undoItems, redoItems } = this;
    if (this.canUndo()) {
      console.log(JSON.parse(undoItems[undoItems.length - 1]))
      redoItems.push(JSON.stringify(currentd));
      cb(JSON.parse(undoItems.pop()));
    }
  }

  redo(currentd, cb) {
    console.log(this.redoItems)
    const { undoItems, redoItems } = this;
    if (this.canRedo()) {
      undoItems.push(JSON.stringify(currentd));
      cb(JSON.parse(redoItems.pop()));
    }
  }
}
