import User from "./user.js";
import { checkEmailValue, checkEmptyValue } from "./validation.js";
import { doubleCheckPassword } from "./validation.js";
import { checkPassword } from "./validation.js";
import { checkNoNumber } from "./validation.js";
import { checkIsVietnamesePhoneNumber } from "./validation.js";

const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
registerBtn.addEventListener("click", () => {
  {
    container.classList.add("active");
  }
});
loginBtn.addEventListener("click", () => {
  {
    container.classList.remove("active");
  }
});

// Lấy dữ liệu người dùng
function getValue() {
  let user = new User();
  let arrInput = document.querySelectorAll("#formSignUp input");
  let gender = document.querySelector("input[name='selector']:checked").value;

  arrInput.forEach((item, index) => {
    let { id, value } = item;
    user[id] = value;
    user.gender = gender;
  });
  console.log(user);
  return user;
}

// Hàm check validate
function checkIn() {
  let user = getValue();
  console.log(user);
  let isValid = true;

  //   Check dữ liệu rỗng
  isValid &= checkEmptyValue(user.name, "nameNoti");
  isValid &= checkEmptyValue(user.password, "passwordNoti");
  isValid &= checkEmptyValue(user.phone, "phoneNoti");
  isValid &= checkEmptyValue(user.email, "emailNoti");

  if (checkEmptyValue(user.name, "nameNoti")) {
    //   Check định dạng tên
    isValid &= checkNoNumber(user.name, "nameNoti");
  }
  if (checkEmptyValue(user.email, "emailNoti")) {
    //   Check định dạng email
    isValid &= checkEmailValue(user.email, "emailNoti");
  }

  if (checkEmptyValue(user.password, "passwordNoti")) {
    // Check định dạng password
    isValid &= checkPassword(user.password, "passwordNoti");
    console.log(isValid);
  }
  // if (checkEmptyValue(user.passwordConfirm, "passwordConfirmNoti")) {
  //   isValid &= checkPassword(user.passwordConfirm, "passwordConfirmNoti");

  //   //   Check double passord
  //   isValid &= doubleCheckPassword(
  //     user.password,
  //     user.passwordConfirm,
  //     "passwordConfirmNoti"
  //   );
  // }

  if (checkEmptyValue(user.phone, "phoneNoti")) {
    //   Check định dạng sđt
    isValid &= checkIsVietnamesePhoneNumber(user.phone, "phoneNoti");
  }

  if (isValid) {
    return user;
  }
}

// Hàm resetform
function resetFormSignUp() {
  document.querySelector("#formSignUp").reset();
}
function resetFormSignIn() {
  document.querySelector("#formSignIn").reset();
}
// Hàm thông báo qua toastify
function displayNotification(message, status) {
  var firstLetter = status.toString().split("");
  Toastify({
    text: message,
    duration: 2000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: firstLetter[0] == 2 ? "green" : "red",
      color: "white",
    },
  }).showToast();
}
// Hàm đưa dữ liệu lên API
function addUser() {
  let user = checkIn();
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: user,
  });
  promise
    .then(function (res) {
      console.log(res);
      displayNotification(res.data.message, res.data.statusCode);
      resetFormSignUp();
    })
    .catch(function (err) {
      console.log(err);
      displayNotification(err.message, err.response.status);
    });
}

// Hàm lấy dữ liệu sign in
function getValueSignIn() {
  let user = new User();
  let arrInput = document.querySelectorAll("#formSignIn input");
  arrInput.forEach((item, index) => {
    let { id, value } = item;
    user[id] = value;
  });
  return user;
}
// Hàm check validate sign in
function checkInSignIn() {
  let user = getValueSignIn();
  let isValid = true;
  // Check dữ liệu rỗng
  isValid &= checkEmptyValue(user.email, "emailNotiSignIn");
  isValid &= checkEmptyValue(user.password, "passwordNotiSignIn");
  if (checkEmptyValue(user.email, "emailNotiSignIn")) {
    //   Check định dạng email
    isValid &= checkEmailValue(user.email, "emailNotiSignIn");
  }
  if (isValid) {
    return user;
  }
}
// Hàm sign in api
function signIn() {
  let user = checkInSignIn();
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    method: "POST",
    data: user,
  });
  promise
    .then((res) => {
      displayNotification(res.data.message, res.data.statusCode);
      resetFormSignIn();
    })
    .catch((err) => {
      console.log(err);
      displayNotification(err.message, err.response.status);
    });
}

document.getElementById("btnSubmit").onclick = addUser;
document.getElementById("btnSubmitSignIn").onclick = signIn;
