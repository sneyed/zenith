const fs = require("fs");
const path = require("path");
const fileList = require("./predeploy.js").fileList;

const projectRoot = path.resolve(__dirname + "/../../");
const distPath = projectRoot + "/dist";

function deleteFilesFromRoot(entries) {
  entries.forEach(entry => {
    if (fs.existsSync(distPath + "/" + entry)) {
      fs.copyFileSync(distPath + "/" + entry, projectRoot + "/" + entry);
    }
  });
}

copyFilesToRoot(fileList);
