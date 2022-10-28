import fs from "fs";
import { enlistNewApiInfo } from "../utils/apiFunc";
import { makeFolder } from "../utils/fileFunc";

const create = async (body) => {
  const { method, resJSON, urlPath, name } = body;
  const id = +new Date();
  const dirPath = `src/data/${id}`;
  const strResJSON = JSON.stringify(resJSON);
  // id.json 파일 생성

  makeFolder(dirPath);
  fs.writeFileSync(`${dirPath}/${id}.json`, strResJSON);

  // id.js 파일 생성
  const consoleMsg = `id: ${id}, method: ${method}, urlPath: ${urlPath}`;
  const code = 200;

  const script = `
  (function () {
    console.log("${consoleMsg}");
    res.status(${code}).json(${strResJSON});
  })();
  `;

  fs.writeFileSync(`${dirPath}/${id}.js`, script, { encoding: "utf-8" });

  // list.json에 새로 생성된 api등록
  enlistNewApiInfo(id, name, method, urlPath);

  // resultObj 생성
  const resultObj = { id, code };

  return resultObj;
};

export { create };
