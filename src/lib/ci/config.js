import path from "path";

export const pathname = new URL(import.meta.url).pathname.slice(1);
export const projectRoot = path.join(pathname, "../../../../");
export const distPath = path.join(projectRoot, "dist");
export const fileList = ["zenith.css"];
