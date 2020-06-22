<template>
  <div id="todo">
      <DashboardNav />
      <div id="todo-container" class="mt-5">
          <div id="info" class="row">
              <div class="col-md-2">
                  <h1>16</h1>
              </div>
              <div class="col-md-6">
                  <p class="mt-3">Wednesday</p>
                  <p>JUNE, 2020</p>
              </div>
              <div class="col-md-2 mt-3">
                  <button type="button" id="button1" class="btn btn-warning">Edit</button>
              </div>
              <div class="col-md-2 mt-3">
                  <button type="button" id="button2" class="btn btn-warning">Delete</button>
              </div>
          </div>
          <article class="pt-5">
              <div id="heading">
                  <h4>FINSH DAD'S WEBSITE</h4>
                  <p>Created By <span>Akande George</span></p>
              </div>
              <div id="todo-content">
                  <p>
                      Writer Charles Duhigg defines productivity as “making certain choices in certain ways” that moves us from being “merely busy” to “genuinely productive” in his book Smarter Faster Better. Tony Robbins’ approach to productivity focuses on ways people can systematize and better manage their lives so they have more time to do what they want.
                      Writer Charles Duhigg defines productivity as “making certain choices in certain ways” that moves us from being “merely busy” to “genuinely productive” in his book Smarter Faster Better. Tony Robbins’ approach to productivity focuses on ways people can systematize and better manage their lives so they have more time to do what they want.
                  </p>
              </div>
          </article>
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
#info {
    width: 80%;
    margin: 0 auto;
    border-left: #D26637 10px solid;
    background-color: #302D2D;
}

article {
    width: 80%;
    margin: 0 auto;
}

#info div h1 {
    font-size: 80px;
    font-weight: 100;
    margin-left: 30%;
}

#info div p:first-child {
    font-size: 20px;
    font-weight: bold;
}

div button {
    width: 90%;
    height: 80%;
    border-radius: 0%;
}

div #button1 {
    background-color: #D26637;
    border: none;
    color: white;
    transition: 0.5s;
}

div #button1:hover {
    opacity: 0.5;
    transition: 0.5s;
}

div #button2 {
    background-color: white;
    border: none;
    color: black;
    transition: 0.5s;
}

div #button2:hover {
    background-color: gray;
    opacity: 0.5s;
    transition: 0.5s;
}

article #heading p {
    color: #D26637;
}

</style>
