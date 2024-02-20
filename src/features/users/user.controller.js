export default class UserController {
  signUp(req, res, next) {
    res.status(200).send("Inside Signup Route...!");
  }

  signIn(req, res, next) {
    res.status(200).send("Inside Signin Route...!");
  }
}
