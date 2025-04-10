<template>
  <div class="w3-top">
    <div class="w3-bar" id="myNavbar">
      <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
        href="javascript:void(0);" @click="toggleFunction" title="Toggle Navigation Menu">
        <i class="fa fa-bars"></i>
      </a>
      <a href="#home" class="w3-bar-item w3-button">HOME</a>
      <a href="#about" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> ABOUT</a>
      <a href="#resume" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-file"></i> RÉSUMÉ</a>
      <a href="#contact" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</a>
    </div>

    <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
      <a href="#about" class="w3-bar-item w3-button" @click="toggleFunction">ABOUT</a>
      <a href="#resume" class="w3-bar-item w3-button" @click="toggleFunction">RÉSUMÉ</a>
      <a href="#contact" class="w3-bar-item w3-button" @click="toggleFunction">CONTACT</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleFunction() {
      const x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
      } else {
        x.className = x.className.replace(" w3-show", "");
      }
    }
  }
}
</script>