<template>
  <div id="app">
    <b-navbar
      toggleable
      type="dark"
      variant="dark"
    >
      <b-container>
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>Ingredient</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-text>Ingredient Matching App</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container
      id="ingredients"
      fluid
      class="mt-0"
    >
      <router-view/>
    </b-container>
    <footer>
      <b-container>
        <b-row class="text-center">
          <b-col
            sm="12"
            md="6"
            offset-md="3"
            class="py-4"
          >
            <h6>Made with <font-awesome-icon class="heart-icon" :icon="['fas', 'heart']" /> by <a href="https://github.com/hedursunoglu" target="_blank">Halil Erkan Dursunoğlu</a></h6>
            <a class="github-icon mr-1" href="https://github.com/hedursunoglu"><font-awesome-icon :icon="['fab', 'github']" size="2x"/></a>
            <a class="github-icon" href="https://twitter.com/hedursunoglu"><font-awesome-icon :icon="['fab', 'twitter']" size="2x"/></a>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ingredients from '../static/js/ingredients'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'App',
  components: {
    FontAwesomeIcon
  },
  created () {
    this.getIngredients(ingredients)
  },
  methods: {
    ...mapActions(['getIngredients'])
  }
}
</script>

<style scoped>
#ingredients {
  background-color: rgba(0, 0, 0, 0.1);
}

footer {
  background-color: #343a40;
}

h6 {
  color: #fff;
}

.github-icon {
  color: #fff;
}

.heart-icon {
  color: #c80707;
}
</style>
