import PostModel from "./post.model.js";

export default class PostController {
  all(req, res, next) {
    const allposts = PostModel.getAllPosts();
    return res.status(200).json({
      status: "success",
      message: {
        allposts,
      },
    });
  }

  single(req, res, next) {
    const postid = req.params.id;
    //For Testing
    console.log(postid);
    const singlePost = PostModel.getSinglePostById(postid);
    if (!singlePost) {
      return res.status(404).json({
        status: "failed",
        message: "Invalid Post Id",
      });
    } else {
      return res.status(200).json({
        status: "success",
        message: {
          singlePost,
        },
      });
    }
  }
}
