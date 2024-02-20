import express from "express";
import userRouter from "./src/features/users/user.routes.js";
import postRouter from "./src/features/posts/post.routes.js";
const port = 7100;

const app = express();

// Middlewares - Common To The Application
app.use(express.json());
app.use(express.urlencoded());

// Middleware - Routes
app.use("/api/v1", userRouter);
app.use("/api/v1/posts", postRouter);

// Test Route
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome To Postaway API");
// });

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server Running On Port ${port}`);
});
