<script setup>
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css",
    },
  ],
});
</script>

<template>
  <div class="wrapper d-flex justify-content-center align-items-center p-5">
    <div class="main-container h-100 w-100 shadow rounded bg-white">
      <div class="logo mb-3">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          width="100"
          height="auto"
          class="mx-2" />
      </div>

      <div
        class="d-flex align-items-center justify-content-around flex-column gap-3 mb-3">
        <div class="content-container m-1 text-center">
          <img
            src="@/assets/images/under-construction-2.png"
            alt="under-construction"
            class="img-fluid content-img" />
        </div>
        <div class="content-container text-center m-1">
          <h4 class="fw-bold">We&rsquo;re Building Something Amazing!</h4>
          <p>
            Our website is currently under construction. Stay tuned for
            something great!
          </p>
        </div>
      </div>

      <div class="center-screen">
        <div class="divider-container d-flex align-items-center">
          <hr class="flex-grow-1" />
          <span class="mx-3 fw-bold" style="color: #000000">Contact Us</span>
          <hr class="flex-grow-1" />
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-center gap-2">
        <!-- <a
          href="https://facebook.com"
          class="btn rounded bg-primary text-white">
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          class="btn rounded bg-danger text-white">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/1234567890"
          class="btn rounded bg-success text-white">
          <i class="fa-brands fa-whatsapp"></i>
        </a> -->
        <a
          href="mailto:info@gtpowersolution.com "
          class="btn rounded bg-secondary text-white">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  height: 100vh;
  width: 100%;
  background-color: rgb(238, 238, 255);
}
.content-container {
  font-family: Arial, sans-serif;
}
.content-img {
  height: auto;
  width: 50%;
  max-width: 1024px;
  max-width: 1024px;
}

.center-screen {
  display: flex;
  justify-content: center;
  align-items: center;
}
.divider-container {
  width: 30%; /* Half the screen width */
}
@media only screen and (max-width: 500px) {
  .divider-container {
    width: 80%; /* Half the screen width */
  }
}
</style>
