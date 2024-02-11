require("colors");
console.clear();

console.log(
  `/*
|-------------------------------------------------------------------------------------------|
| ${config.name.yellow} -- ${
    config.version.green
  } // Server run at current url : ${
    `http://${config.url}:${config.port}`.blue
  }              |
| ${
    "Author Enzoo_Kms".red
  }                                                                          |
|-------------------------------------------------------------------------------------------|
*/`
);
