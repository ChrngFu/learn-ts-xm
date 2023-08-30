import * as fs from "node:fs";

const filePath = "docs";

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.log("路径不存在或文件已删除！");
  } else {
    deleteFolder(filePath);
    console.log("删除成功！");
  }
});

function deleteFolder(filePath) {
  const files = fs.readdirSync(filePath);
  files.forEach(file => {
    const nextFilePath = `${filePath}/${file}`;
    const states = fs.statSync(nextFilePath);
    if (states.isDirectory()) {
      //recurse
      deleteFolder(nextFilePath);
    } else {
      //delete file
      fs.unlinkSync(nextFilePath);
    }
  });
  fs.rmdirSync(filePath);
}
