import { readFile } from "node:fs";

class MyFile {
  readFile(path) {
    readFile(path, (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
}

export default MyFile;
