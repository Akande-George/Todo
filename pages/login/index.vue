<template>
  <div id="login">
      <div class="card align-middle mt-5 col-md-6 pt-3" id="form-container">
          <form>
              <div id="logo" class="mt-4">
                  <Logo />
              </div>
              <h4 class="mt-3">Sign In</h4>
              <div id="form-info">
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email">
                </div>
                <div class="form-group w-75 p-3" id="inputs">
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password">
                </div>
                <div id="button">
                    <button type="button" class="btn btn-warning w-75 p-3">Login</button>
                </div>
                <p>Create an account <nuxt-link id="link" to="/register">Register</nuxt-link></p>
                <p>Go back <nuxt-link id="link" to="/">Home</nuxt-link></p>
              </div>
          </form>
      </div>
  </div>
</template>

<script scoped>
import Logo from '@/components/Logo'
export default {
    components: {
        Logo
    }
}
</script>

<style>
#login {
    width: 100%;
    height: 100vh;
}

#logo {
    text-align: center;
}

form h4 {
    text-align: center;
}

#form-container {
    border: 1px solid #D26637;
    margin: 0 auto;
    background-color: transparent;
    padding-bottom: 5%;
}

#form-info {
    padding-top: 5%;
}

#inputs {
    margin: 0 auto;
    padding-top: 4%;
}

#inputs input {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: #D26637 1px solid;
    color: white;
}

#inputs input:focus {
    border: none;
    border-bottom: #D26637 1px solid;
}

::placeholder {
    color: white;
    opacity: 1;
}

#button {
    text-align: center;
}

#button button {
    background-color: #D26637;
    color: black;
    border: #D26637;
    transition: 0.7s;
}

#button button:hover {
    opacity: 0.5;
    transition: 0.7s;
}

form p {
    text-align: center;
    margin-top: 3%;
}

form p #link {
    color: #D26637;
    transition: 0.5s;
}

form p #link:hover {
    border-bottom: #D26637 1px solid;
    transition: 0.5s;
}
</style>
