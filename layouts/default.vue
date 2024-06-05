<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>


<style>
main {
  flex: 1;
}

body {
  min-height: 100vh;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
}
</style>