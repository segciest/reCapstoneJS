export default function User(
  _email,
  _password,
  _name,
  _gender,
  // _passwordConfirm,
  _phone
) {
  this.email = _email;
  this.password = _password;
  this.name = _name;
  this.gender = _gender;
  this.phone = _phone;
  // this.passwordConfirm = _passwordConfirm;
}
