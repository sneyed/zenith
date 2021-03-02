const fs = require("fs");
const path = require("path");
const projectRoot = path.resolve(__dirname + "/../../");
const distPath = projectRoot + "/dist";
const packageJsonPath = projectRoot + "/package.json";
const packageJsonDest = distPath + "/package.json";
const versionDest = distPath + "/version.txt";

function sliceDist(entries, sourceObj) {
  entries.forEach(entry => {
    if (sourceObj[entry].startsWith("dist/")) {
      sourceObj[entry] = sourceObj[entry].slice(5);
    }
  });
}

function deleteEntries(entries, sourceObj) {
  entries.forEach(entry => {
    delete sourceObj[entry];
  });
}

function copyFilesToDist(entries) {
  entries.forEach(entry => {
    if (fs.existsSync(projectRoot + "/" + entry)) {
      fs.copyFileSync(projectRoot + "/" + entry, distPath + "/" + entry);
    }
  });
}

function copyPackageJson() {
  const source = fs.readFileSync(packageJsonPath).toString("utf-8");
  const sourceObj = JSON.parse(source);
  deleteEntries(["files", "source", "devDependencies"], sourceObj);
  sliceDist(["main", "module"], sourceObj);

  const sourceString = JSON.stringify(sourceObj, null, 2);
  fs.writeFileSync(packageJsonDest, Buffer.from(sourceString, "utf-8"));
  fs.writeFileSync(versionDest, Buffer.from(sourceObj.version, "utf-8"));
}

copyPackageJson();
copyFilesToDist([".npmignore"]);
