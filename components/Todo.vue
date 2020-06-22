<template>
  <section id="todo">
    <div id="info" :class="active" class="row mt-5">
        <div class="col-md-2">
            <h1>16</h1>
        </div>
        <div class="col-md-3">
            <p class="mt-3">{{ day }}</p>
            <p>{{ month }}, 2020</p>
        </div>
        <div class="mt-4 col-md-7">
            <h4>{{ title }}</h4>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ['month', 'day', 'active', 'title']
}
</script>

<style scoped>
#info {
    width: 80%;
    margin: 0 auto;
    background-color: #302D2D;
}

.blue {
    border-left: blue 10px solid;
}

.green {
    border-left: green 10px solid;
}

.purple {
    border-left: purple 10px solid;
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
