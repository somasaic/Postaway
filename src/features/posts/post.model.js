export default class PostModel {
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static getAllPosts() {
    return posts;
  }

  static getSinglePostById(postId) {
    const post = posts.find((p) => p.id == postId);
    if (!post) {
      return null;
    } else {
      return post;
    }
  }

  static getAllPostsForUser(userId) {}

  static createNewPost(caption, imageUrl) {}

  static updatePost(postId) {}

  static deletePost(postId) {}
}

var posts = [
  new PostModel(1, "Post Caption", "Post Image URL"),
  new PostModel(2, "Post Caption 2", "Post Image URL 2"),
];
