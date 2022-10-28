import { app } from "./app";

const PORT = "8080";

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`서버가 ${PORT}번에 열렸어요~`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
