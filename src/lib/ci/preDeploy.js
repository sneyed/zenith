import fs from "fs";
import path from "path";
import { projectRoot, distPath, fileList } from "./config.js";

function copyFilesToRoot(entries) {
  entries.forEach(entry => {
    const source = path.join(distPath, "/", entry);
    const dest = path.join(projectRoot, "/", entry);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
    }
  });
}

copyFilesToRoot(fileList);
