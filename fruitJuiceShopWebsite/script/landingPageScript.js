const login_btn = document.querySelector(".login");
const register_btn = document.querySelector(".register");

const cancel_signUp_btn = document.querySelector("#cancel-signUp");
const cancel_signIn_btn = document.querySelector("#cancel-signIn");

const menubar_btn = document.querySelector("#menubar-btn");
const hide_menubar_btn = document.querySelector("#hide-menubar-btn");
const hide_menubar = document.querySelector(".nav-menu");

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

menubar_btn.addEventListener("click", () => {
  menubar_btn.style.display = "none";
  hide_menubar.style.display = "flex";
});
hide_menubar_btn.addEventListener("click", () => {
  menubar_btn.style.display = "flex";
  hide_menubar.style.display = "none";
});
