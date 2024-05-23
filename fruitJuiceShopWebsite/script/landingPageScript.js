const login_btn = document.querySelector(".login");
const register_btn = document.querySelector(".register");

const showLoginForm = () => {
  const login_form = document.querySelector(".container-signIn-signUp");
  login_form.style.display = "block";
};

const showSignupForm = () => {
  const signUp_form = document.querySelector(".container-signIn-signUp .register-container");
  signUp_form.style.display = "block";
};

login_btn.addEventListener("click", showLoginForm);
register_btn_btn.addEventListener("click", showSignupForm);
