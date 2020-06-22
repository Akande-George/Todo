<template>
  <nuxt-link id="link" to="/dashboard/todo">
    <div id="todo-card">
      <div class="card shadow rounded" id="card-cover">
          <div id="date-info" class="row mt-5 mx-o">
              <div class="col-md-3">
                  <h1>14</h1>
              </div>
              <div class="col-md-9 align-middle">
                  <div class="align-middle mt-2"><p><b>Wednesday</b></p></div>
                  <div class="align-middle"><p>JUNE, 2020</p></div>
              </div>
          </div>
          <p class="mt-2 p-3"><b>Finish Dad's Website</b> <br> <span>To be shown everyday</span></p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {

}
</script>

<style scoped>
#todo-card div {
    background-color: transparent;
    color: white;
}

#card-cover {
    padding-right: 0%;
    width: 100%;
    transition: 0.5s;
}

#card-cover:hover {
    width: 90%;
    transition: 0.5s;
}

#date-info {
    border-left: #D26637 5px solid;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
}

#date-info div {
    background-color: #302D2D;
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
}

#date-info div h1 {
    font-size: 80px;
    font-weight: 100;
}

#date-info div p {
    text-align: center;
    font-size: 20px;
}

p span {
    font-size: 12px;
}

#link {
    text-decoration: none;
}
</style>
