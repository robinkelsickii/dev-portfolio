<template>
  <div class="home flex flex-col gap-y-8 justify-center min-h-screen items-center font-smooch bg-[url(/assets/ai-portrait.png)] bg-center !bg-blend-multiply bg-[rgba(0,0,0,0.5)]">
    <div class="text-2xl">Hello, I'm</div>
    <div class="text-2xl text-gradient font-press-start lg:text-5xl">Robin Kelsick II</div>
    <div class="text-xl lg:text-2xl">
      A Web Developer with a gamers eye for detail and strategy.
    </div>
    <div class="flex flex-row gap-x-4">
      <a
        href="https://github.com/robinkelsickii"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
        >
        <font-awesome-icon :icon="['fab', 'github']" class="h-6 w-6" />
      </a>
      <a href="https://www.linkedin.com/in/robinkelsickii/" target="_blank" class="btn btn-primary"
        ><font-awesome-icon :icon="['fab', 'linkedin']" class="h-6 w-6" /></a
      >
      <a href="/Robin Kelsick Resume January 2025.pdf" download="Robin_Kelsick_Resume_January_2025" class="btn btn-primary">Download Resume <font-awesome-icon :icon="['fas', 'download']" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}

</script>

<style>
.text-gradient {
  background: linear-gradient(135deg, #8e44ad, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.press-start-2p-regular {
  font-family: 'Press Start 2P', serif;
  font-weight: 400;
  font-style: normal;
}
</style>
