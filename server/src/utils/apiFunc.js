import fs from "fs";

export const enlistNewApiInfo = (id, name, method, urlPath) => {
  const tempPath = "src/config/list.temp.json";
  const originPath = "src/config/list.json";
  // temp 파일 생성
  fs.copyFileSync(originPath, tempPath);

  // 리스트 추가작업
  try {
    const json = fs.readFileSync(tempPath, { encoding: "utf-8" });
    const obj = JSON.parse(json);
    const newInfo = {
      id,
      name,
      method,
      urlPath,
      path: `src/data/${id}/${id}.js`,
    };

    obj.lists.push(newInfo);

    const newJson = JSON.stringify(obj);
    fs.writeFileSync(tempPath, newJson, { encoding: "utf-8" });
  } catch (e) {
    console.error(e);
  }

  // origin 파일에 적용
  fs.unlinkSync(originPath);
  fs.copyFileSync(tempPath, originPath);
  fs.unlinkSync(tempPath);
};
