<template>
  <b-container>
    <b-row class="text-center mb-2">
      <b-col
        sm="12"
        md="6"
        lg="4"
        offset-md="3"
        offset-lg="4"
      >
        <b-form-group
          class="mt-3"
          description="Ingredient Selection Area"
          label="Choose An Ingredient"
          label-for="ingredient-select"
        >
          <b-form-select
          id="ingredient-select"
          v-model="selected"
          :options="options"
          plain
          class="mb-3"
        />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="text-center mb-4">
      <b-col sm="12">
        <b-img
          rounded="circle"
          :src=getIngredient.image
          alt="img"
          class="m-1"
        />
        <h1>{{ getIngredient.name }}</h1>
        <h2><i>Value:</i> <b>{{ getIngredient.value }}</b></h2>
        <h2><i>Weight:</i> <b>{{ getIngredient.weight }}</b></h2>
      </b-col>
    </b-row>
    <b-row
      class="text-center"
    >
      <b-col
        class="mb-5"
        sm="12"
        md="6"
        v-for="(effect, i) in selectedIngredientEffects"
        :key=i
      >
        <h3 class="mb-3"><i>#{{ i + 1 }}</i> - <b>{{ effect }}</b></h3>
        <ingredient-details
          :effect=effect
          :selected=selected
        ></ingredient-details>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import IngredientDetails from './IngredientDetails.vue'

export default {
  name: 'IngredientsPage',
  data () {
    return {
      selected: 'Abecean Longfin'
    }
  },
  computed: {
    options () {
      let ingredients = this.$store.state.ingredients
      let options = []
      for (let i = 0; i < ingredients.length; i++) {
        let ingredient = { value: ingredients[i].name, text: ingredients[i].name }
        options.push(ingredient)
      }
      return options
    },
    selectedIngredientEffects () {
      let ingredients = this.$store.state.ingredients
      let effects = []
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].name === this.selected) {
          effects = ingredients[i].effects
        }
      }
      return effects
    },
    getIngredient () {
      let ingredients = this.$store.state.ingredients
      let ingredient = {}
      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].name === this.selected) {
          ingredient = ingredients[i]
        }
      }
      return ingredient
    }
  },
  components: {
    IngredientDetails
  }
}
</script>
