<template>
  <div>
    <div id="wrap">
      <div class="w3-sidebar w3-light-grey w3-bar-block" style="width:25%">
        <h3 class="w3-bar-item">Menu</h3>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar"
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#wrap {
  width: 250px;
  height: 100vh;
  padding: 20px;
  background-color: rgba(192, 192, 192, 0.5);
  border: 1px solid #ccc;
  color: white;
  position: fixed;
}
</style>