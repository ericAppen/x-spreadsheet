// import helper from '../helper';

export default class History {
  constructor(historyConfig) {
    this.maxHistory = historyConfig.maxHistory;
    this.undoItems = [];
    this.redoItems = [];
  }

  add(data) {
    console.log('history add', data)
    this.undoItems.push(JSON.stringify(data));
    if (this.undoItems.length > this.maxHistory) this.undoItems.shift();
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
    const { undoItems, redoItems } = this;
    if (this.canRedo()) {
      undoItems.push(JSON.stringify(currentd));
      cb(JSON.parse(redoItems.pop()));
    }
  }
}
