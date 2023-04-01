<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace " >
          Noteballs
        </div>

            <a role="button" @click.prevent="showMobileNav = !showMobileNav" class="navbar-burger " :class="{ 'is-active' : showMobileNav }" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu " :class="{ 'is-active' : showMobileNav }"
      ref="navbarMenuRef">
       

        <div class="navbar-end">
          <RouterLink to="/stats" @click="showMobileNav = false" active-class="is-active" class="navbar-item">
            Stats
          </RouterLink>

          <RouterLink to="/" @click="showMobileNav = false" active-class="is-active" class="navbar-item">
            Notes 
          </RouterLink>
        </div>
      </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
import  { onClickOutside } from '@vueuse/core'
import { PatchFlagNames } from '@vue/shared';
/**
 * mobile nav
 */
const showMobileNav = ref(false)
/**
 * click outside to close
 */
  const navbarMenuRef = ref(null) 
  const navbarBurgerRef = ref(null)

  onClickOutside(navbarMenuRef,(event) => {
    showMobileNav.value = false
  },{
    ignore: [navbarBurgerRef]
  })
</script>




<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>  