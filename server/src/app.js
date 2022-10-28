import express from "express";
import dotenv from "dotenv";
import router from "./routes";

// 환경변수 사용
dotenv.config();

// 앱 생성
const app = express();

// 미들웨어(순서 유의)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

export { app };
