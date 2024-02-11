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
    }              |
| ${
      "Author Enzoo_Kms".red
    }                                                                          |
|-------------------------------------------------------------------------------------------|
*/`
  );
}

module.exports = { load };
