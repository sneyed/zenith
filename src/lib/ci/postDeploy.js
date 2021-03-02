import fs from "fs";
import path from "path";
import { projectRoot, fileList } from "./config.js";

function deleteFilesFromRoot(entries) {
  entries.forEach(entry => {
    const source = path.join(projectRoot, "/", entry);
    if (fs.existsSync(source)) {
      fs.unlinkSync(source);
    }
  });
}

deleteFilesFromRoot(fileList);
