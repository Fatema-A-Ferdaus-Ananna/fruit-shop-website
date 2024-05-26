const login_btn = document.querySelector(".login");
const register_btn = document.querySelector(".register");
const cancel_btn = document.querySelector(".cancel-btn");

// const showLoginForm = () => {
//   const login_form = document.querySelector(".container-signIn-signUp");
//   login_form.style.display = "block";
// };

const signUp_form = document.querySelector(".container-signIn-signUp");
const showSignupForm = () => {
  signUp_form.style.display = "flex";
};

const cancelSignupForm = () => {
  signUp_form.style.display = "none";
};

// login_btn.addEventListener("click", showLoginForm);
register_btn.addEventListener("click", showSignupForm);
cancel_btn.addEventListener("click", cancelSignupForm);
