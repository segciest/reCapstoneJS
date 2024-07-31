// import user from "./user.js";
// Kiểm tra không cho nhập rỗng
export function checkEmptyValue(value, idSpan) {
  // Xử lí dữ liệu value để kiểm tra xem có rỗng hay không
  let eleSpan = document.getElementById(idSpan);
  if (value == "") {
    // Thực hiện đưa lên giao diện một đoạn thông báo cho người dùng
    eleSpan.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    eleSpan.innerHTML = "";
    return true;
  }
}

// Kiểm tra phải là email
export function checkEmailValue(value, idSpan) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isValid = regexEmail.test(value);
  let eleSpan = document.getElementById(idSpan);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.innerHTML = "Email không đúng định dạng";
    return false;
  }
}

// function password check
export function checkPassword(value, idSpan) {
  const regexPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
  let isValid = regexPassword.test(value);
  let eleSpan = document.getElementById(idSpan);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.innerHTML =
      "Mật khẩu cần có độ dài từ 8-16 và ít nhất 1 số, 1 ký tự in hoa, 1 kí tự đặc biệt";
    return false;
  }
}

//   function doubleCheck password
export function doubleCheckPassword(value, value2, idSpan) {
  let eleSpan = document.getElementById(idSpan);
  if (value === value2) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.innerHTML = "Vui lòng nhập lại mật khẩu tương tự";
  }
}

export function checkNoNumber(value, idSpan) {
  const regexNoNumber = /^[^\d]*$/;
  let isValid = regexNoNumber.test(value);
  let eleSpan = document.getElementById(idSpan);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.innerHTML = "Vui lòng chỉ nhập ký tự không kèm số";
    return false;
  }
}

export function checkIsVietnamesePhoneNumber(value, idSpan) {
  const regexPhoneNumber =
    /^(?:\+84|0)(?:3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])\d{7}$/;
  let isValid = regexPhoneNumber.test(value);
  let eleSpan = document.getElementById(idSpan);
  if (isValid) {
    eleSpan.innerHTML = "";
    return true;
  } else {
    eleSpan.innerHTML = "Vui lòng nhập số điện thoại với đầu số (+84)";
    return false;
  }
}
