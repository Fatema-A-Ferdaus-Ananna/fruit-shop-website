const login_btn = document.querySelector(".login");
const register_btn = document.querySelector(".register");

const cancel_signUp_btn = document.querySelector("#cancel-signUp");
const cancel_signIn_btn = document.querySelector("#cancel-signIn");

const login_form = document.querySelector(".container-signIn");
const signUp_form = document.querySelector(".container-signUp");

const showLoginForm = () => {
  signUp_form.style.display = "none";
  login_form.style.display = "flex";
};

const showSignupForm = () => {
  login_form.style.display = "none";
  signUp_form.style.display = "flex";
};

const cancel_signIn = () => {
  login_form.style.display = "none";
};

const cancel_signUp = () => {
  signUp_form.style.display = "none";
};

login_btn.addEventListener("click", showLoginForm);
cancel_signIn_btn.addEventListener("click", cancel_signIn);

register_btn.addEventListener("click", showSignupForm);
cancel_signUp_btn.addEventListener("click", cancel_signUp);
