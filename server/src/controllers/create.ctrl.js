import asyncWrapper from "../utils/asyncWrapper";

const createCtrl = asyncWrapper(async (req, res) => {
  // const { tableName } = req.query;
  const result = "test";

  res.status(200).json({ message: "SUCCESS", result });
});

export { createCtrl };
