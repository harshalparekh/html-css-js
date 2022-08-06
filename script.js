window.onload = function(){
  const passLogo = document.getElementById("passwordlogo");
  passLogo.onclick = function() {
    if(passLogo.classList.contains("passLogoHidden")){
      document.getElementById("password").type="text";
      passLogo.classList.remove("passLogoHidden");
      passLogo.classList.add("passLogoVisible");
    }
    else{
      document.getElementById("password").type="password";
      passwordlogo.classList.remove("passLogoVisible");
      passLogo.classList.add("passLogoHidden");
    }
  }
  document.getElementById("createAccountLink").onclick = function() {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");
    const image = document.getElementById("image");
    image.classList.remove("imageAnimRight");
    signup.classList.remove("signupAnimLeft");
    login.classList.remove("loginAnimLeft");
    image.classList.add("imageAnimation");
    image.classList.remove("imageRight");
    login.classList.add("loginAnimation");
    login.classList.remove("loginLeft");
    signup.classList.add("signupAnimation");
    signup.classList.remove("signupLeft");
    setTimeout(function(){
      signup.classList.remove("signupINVisible");
      signup.classList.add("signupVisible");
    },300)
    setTimeout(function(){
      signup.classList.add("signupRight");
      image.classList.add("imageLeft");
      login.classList.add("loginRight");
    },1000);
  }
  document.getElementById("back2loginButton").onclick = function() {
    const signup = document.getElementById("signup");
    const login = document.getElementById("login");
    const image = document.getElementById("image");
    login.classList.remove("loginRight");
    signup.classList.remove("signupRight");
    image.classList.remove("imageLeft");
    login.classList.remove("loginLeft");
    login.classList.add("loginAnimLeft");
    signup.classList.remove("signupRight");
    signup.classList.add("signupAnimLeft");
    image.classList.remove("imageLeft");
    image.classList.add("imageAnimRight");
    setTimeout(function(){
      signup.classList.remove("signupVisible");
      signup.classList.add("signupINVisible");
    },300)
    signup.classList.add("signupLeft");
    image.classList.add("imageRight");
    login.classList.add("loginLeft");
  }
}
