<template>
  <b-list-group>
    <b-list-group-item
      v-for="(ingredient, i) in ingredientsByEffect"
      :key=i
    >
      <b-img
        rounded="circle"
        :src=ingredient.image
        alt="img"
        class="m-1"
      />
      <b id="b-ingredient">{{ ingredient.name }}</b> : <i>Value:</i> <b>{{ ingredient.value }}</b>, <i>Weight:</i> <b>{{ ingredient.weight }}</b>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'IngredientDetails',
  props: ['effect', 'selected'],
  computed: {
    ingredientsByEffect () {
      let ingredients = this.$store.state.ingredients
      let matchingIngredients = []
      for (let i = 0; i < ingredients.length; i++) {
        let effects = ingredients[i].effects
        if (effects[0] === this.effect) {
          if (ingredients[i].name !== this.selected) {
            matchingIngredients.push(ingredients[i])
          }
        } else if (effects[1] === this.effect) {
          if (ingredients[i].name !== this.selected) {
            matchingIngredients.push(ingredients[i])
          }
        } else if (effects[2] === this.effect) {
          if (ingredients[i].name !== this.selected) {
            matchingIngredients.push(ingredients[i])
          }
        } else if (effects[3] === this.effect) {
          if (ingredients[i].name !== this.selected) {
            matchingIngredients.push(ingredients[i])
          }
        }
      }
      return matchingIngredients
    }
  }
}
</script>

<style scoped>
#b-ingredient {
  color: #212529ec;
}
</style>
