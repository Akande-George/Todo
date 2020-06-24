<template>
  <div id="home">
    <AppNavbar />
    <div id="section-container">
      <div class="row">
      <section class="col-md-7" id="section-one-a">
        <h1>A-BETTER<br>WAY</h1>
        <p>Let's define productivity. Productivity is a measure of efficiency of a person completing a task. We often assume that productivity means getting more things done each day. Wrong. Productivity is getting important things done consistently. And no matter what you are working on, there are only a few things that are truly important.
        </p>
        <div id="buttons-container">
          <span>
            <button type="button" id="button-one" class="btn btn-warning"><nuxt-link id="button-one-link" to="/register">Get Started</nuxt-link></button>
          </span>
          <span>
            <button type="button" id="button-two" class="btn btn-warning"><nuxt-link id="button-two-link" to="/login">Login</nuxt-link></button>
          </span>
        </div>
      </section>
      <section class="col-md-5" id="section-one-b">
        <img src="../assets/home2.png" alt="">
      </section>
      </div>
    </div>
    <div id="section-two-container">
      <div class="row">
        <section class="col-md-4" id="column-container">
          <div id="column">
            <img src="../assets/clock.svg" alt="clock image">
            <h5>Productivity</h5>
            <p>Let's define productivity. Productivity is a measure of efficiency of a person completing a task. We often assume that productivity means getting more things done each day. Wrong. Productivity is getting important things done consistently.</p>
          </div>
        </section>
        <section class="col-md-4" id="column-container">
          <div id="column">
            <img src="../assets/schedule.svg" alt="clock image">
            <h5>Productivity</h5>
            <p>Let's define productivity. Productivity is a measure of efficiency of a person completing a task. We often assume that productivity means getting more things done each day. Wrong. Productivity is getting important things done consistently.</p>
          </div>
        </section>
        <section class="col-md-4" id="column-container">
          <div id="column">
            <img src="../assets/tasks.svg" alt="clock image">
            <h5>Productivity</h5>
            <p>Let's define productivity. Productivity is a measure of efficiency of a person completing a task. We often assume that productivity means getting more things done each day. Wrong. Productivity is getting important things done consistently.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }

  #section-container {
    margin-top: 6%;
    width: 100%;
    padding: 0 3%;
  }

  h1 {
    font-size: 3em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  #buttons-container {
    width: 90%;
    display: flex;
  }

  span {
    margin: 2%;
    width: 100%;
  }

  button {
    width: 90%;
    color: white;
    padding: 6%;
    border: none;
    border-radius: 0;
  }

  span #button-one {
    background-color: #D26637;
    color: white;
    transition: 0.5s;
  }

  span #button-one:hover {
    width: 100%;
    transition: 0.5s;
  }

  #button-one-link {
    color: white;
  }

  span #button-two {
    background-color: white;
    color: #333030;
    transition: 0.5s;
  }

  span #button-two:hover {
    width: 100%;
    transition: 0.5s;
  }

  #button-two-link {
    color: #333030;
  }

  img {
    width: 75%;
    padding-left: 30%;
  }

  #section-two-container {
    margin-top: 10%;
    width: 100%;
    padding: 0 3%;
  }

  #column-container {
    width: 80%;
    margin: 0 auto;
  }

  #column img {
    width: 50%;
    margin: 0 auto;
    display: flex;
  }

  #column h5 {
    text-align: center;
    margin-top: 5%;
  }

  #column p {
    text-align: center;
    margin-top: 5%;
  }

  hr {
    background-color: #D26637;
    width: 30%;
  }
</style>
