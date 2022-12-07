import express from "express";
import compressionMiddleware from "compression";
import markoMiddleware from "@marko/express";
import indexPage from "./pages/index";
import usersService from "./services/users";
import routes from './routes';

const port = parseInt(process.env.PORT || 3000, 10);

async function markoRouter(req, res) {
  const { page, data } = await routes.resolve(req.originalUrl);
  res.marko(indexPage, {
          page,
          data,
      });
}

express()
  .use(compressionMiddleware()) // Enable gzip compression for all HTTP responses.
  .use("/assets", express.static("dist/assets")) // Serve assets generated from webpack.
  .use(markoMiddleware()) // Enables res.marko.
  .get("/services/users", usersService)
  .get("/*", markoRouter)
  .listen(port, err => {
    if (err) {
      throw err;
    }

    if (port) {
      console.log(`Listening on port ${port}`);
    }
  });
