import { apiServ } from "../services";

const create = async (req, res) => {
  // console.log("컨트롤러", req.body);
  const { code, id } = await apiServ.create(req.body);

  const resObj = {
    status: "",
    message: "",
    id,
  };

  switch (code) {
    case 200:
      console.log("api 생성 성공");
      resObj.status = "SUCCESS";
      resObj.message = "API생성에 성공하였습니다.";
      break;

    default:
      break;
  }

  res.status(code).json(resObj);
};

export { create };
