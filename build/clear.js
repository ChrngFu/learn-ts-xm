const fs = require("fs");

const filePath = "../../docs";

if (fs.existsSync(filePath)) {
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
  console.log("删除成功！");
} else {
  console.log("路径不存在或文件已删除！");
}
