const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname + "/../../");
const distPath = projectRoot + "/dist";

function copyFilesToRoot(entries) {
  entries.forEach(entry => {
    if (fs.existsSync(distPath + "/" + entry)) {
      fs.copyFileSync(distPath + "/" + entry, projectRoot + "/" + entry);
    }
  });
}

copyFilesToRoot(fileList);

module.exports = {
  fileList: ["zenith.css"],
};
