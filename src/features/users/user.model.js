let id = 0;
export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getAllUsers() {
    return users;
  }
}

var users = [
  new UserModel(1, "Neeraj Jain", "njcoder@code.com", "mypassword"),
  new UserModel(2, "Nelly Futardo", "nel@bashcoder.com", "bashcodenelly"),
];
