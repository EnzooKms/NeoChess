require("colors");
function load() {
  console.clear();

  console.log(
    `/*
|-------------------------------------------------------------------------------------------|
| ${config.name.yellow} -- ${
      config.version.green
    } // Server run at current url : ${
      `https://${config.url}:${config.port}`.blue
    }             |
| ${
      "Author Enzoo_Kms".red
    }                                                                          |
|-------------------------------------------------------------------------------------------|
*/\n`
  );
}

class Event {
  constructor(Name, size = 60) {
    this.name = Name;
    this.size = size;
    this.output = "";

    this.#header();
  }

  #header() {
    this.output += `|`;
    for (let i = 0; i < this.size; i++) {
      this.output += "-";
    }
    this.output += `|\n| ${this.name.green}`;
    if (this.name.length > this.size)
      throw new Error("name of event is to long");

    for (let i = 0; i < this.size - 1 - this.name.length; i++) {
      this.output += " ";
    }
    this.output += `|\n| `;

    const currentDate = new Date();
    const date =
      `[ ${currentDate.getDate()}/${15}/${currentDate.getUTCFullYear()} ${this.#format(
        currentDate.getHours()
      )}:${this.#format(currentDate.getMinutes())}:${this.#format(
        currentDate.getSeconds()
      )} ]`.magenta;
    this.output += date;
    for (let i = 0; i < this.size + 9 - date.length; i++) {
      this.output += " ";
    }
    this.output += `|\n|`;
    for (let i = 0; i < this.size; i++) {
      this.output += "-";
    }
    this.output += "|";
  }

  insertLine(name, value) {
    this.output += "\n| ";
    this.output += `${name} : ${value}`;

    const max = this.size - name.length - value.length - 4;
    for (let i = 0; i < max; i++) {
      this.output += " ";
    }

    this.output += "|";
    return this;
  }

  run() {
    this.output += "\n|";
    for (let i = 0; i < this.size; i++) {
      this.output += "-";
    }
    this.output += "|\n";

    console.log(this.output);
  }

  #format(n) {
    if (n < 10) {
      return `0${n}`;
    }

    return n;
  }
}

module.exports = { load, Event };
