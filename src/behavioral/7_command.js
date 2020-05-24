class CopyCommand {
  constructor(doc, from, to) {
    this.doc = doc;
    this.from = from;
    this.to = to;
    this.copiedText = null;
  }
  do() {
    this.copiedText = this.doc.text.slice(this.from, this.to);
  }
  undo() {
    this.copiedText = null;
  }
}

class PasteCommand {
  constructor(doc) {
    this.doc = doc;
  }
  do() {}
  undo() {}
}

class SelectAllCommand {
  constructor(doc) {
    this.doc = doc;
  }
  do() {}
  undo() {}
}

class DeleteAllCommand {
  constructor(doc) {
    this.doc = doc;
  }
  do() {}
  undo() {}
}

class Runtime {
  constructor() {
    this.commands = [];
  }

  do(cmd) {
    cmd.do();
    this.commands.push(cmd);
  }

  undo() {
    const lastCommand = this.commands.pop();
    lastCommand.undo();
  }
}

const runtime = new Runtime();

// plik1.js
selectAllButton.addEventListener('click', () => {
  runtime.execute(new SelectAllCommand());
});

// plik2.js
runtime.execute(new CopyCommand());

runtime.execute(new PasteCommand());
runtime.execute(new PasteCommand());

// plikN.js
deleteAllButton.addEventListener('click', () => {
  runtime.execute(new DeleteAllCommand());
});
