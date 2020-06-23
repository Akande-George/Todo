<template>
  <div id="add-todo">
      <DashboardNav />
      <div id="add-todo-container">
          <h4 class="p-4">ADD TODO</h4>
          <section class="mx-5 p-3">
              <form class="mx-5">
                <div class="form-group" id="inputs">
                    <input type="text" class="form-control p-4" id="exampleFormControlInput1" placeholder="TITLE">
                </div>
                <div class="form-group" id="inputs">
                    <select class="form-control" id="exampleFormControlSelect1" aria-placeholder="MONTH">
                        <option>JANUARY</option>
                        <option>FEBRUARY</option>
                        <option>MARCH</option>
                        <option>APRIL</option>
                        <option>JUNE</option>
                        <option>JULY</option>
                        <option>AUGUST</option>
                        <option>SEPTEMBER</option>
                        <option>OCTOBER</option>
                        <option>NOVEMBER</option>
                        <option>DECEMBER</option>
                    </select>
                </div>
                <div class="form-group" id="inputs">
                    <select class="form-control" id="exampleFormControlSelect1" aria-placeholder=" DAY OF THE WEEK">
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </div>
                <div class="form-group" id="inputs">
                    <input type="number" class="form-control p-4" id="exampleFormControlInput1" placeholder="DATE">
                </div>
                <div class="form-group" id="inputs">
                    <select class="form-control" id="exampleFormControlSelect1" aria-placeholder="ACTIVE">
                        <option>Blue</option>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Orange</option>
                        <option>Pink</option>
                        <option>White</option>
                        <option>Grey</option>
                    </select>
                </div>
                <div class="form-group" id="inputs">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="TODO CONTENT" rows="3"></textarea>
                </div>
                <div id="add-button" class="mt-4">
                    <button type="submit" class="btn btn-warning">SUBMIT</button>
                </div>
              </form>
          </section>
      </div>
  </div>
</template>

<script>
import DashboardNav from '~/components/DashboardNav'

export default {
    components: {
        DashboardNav
    }
}
</script>

<style scoped>
form #inputs {
    width: 70%;
    margin: 0 auto;
    margin-top: 4%;
}

input, textarea, select {
    border: 1px solid #D26637;
    border-radius: 0;
    background-color: transparent;
}

input:focus, textarea:focus, select:focus {
    border: 1px solid white;
    border-radius: 0;
    background-color: transparent;
}

#add-button button {
    width: 17%;
    height: auto;
    margin-left: 70%;
    border: none;
    background-color: #D26637;
    transition: 0.5s;
}

#add-button button:hover {
    opacity: 0.5s;
    transition: 0.5s;
}

</style>
