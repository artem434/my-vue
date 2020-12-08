<template>
  <div class="row">
    <div class="col s6 offset-s3" v-if="task">
      <h1>{{ task.title }}</h1>
      <form @submit.prevent="submitHandler">
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea" ></textarea>
          <label for="description" class="active">description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/240</span>
        </div>
        <input type="text" ref="datepicker">
        <button class="btn" type="submit" style="margin-right: 1rem;">update</button>
        <button class="btn blue" type="button">complete task</button>
      </form>
    </div>
    <div v-else>
      <h1>no task</h1>
    </div>
  </div>


</template>

<script>
export default {
  computed:{
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  data:() =>({
    description: "",
    chips: null,
    date: null,
  }),
  mounted(){
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: " Task tag",
      date: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods:{
    submitHandler(){
      debugger
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.task.date,

      })
      this.$router.push('/list')


    }
  },
  destroyed() {
    if(this.date && this.date.destroy){
      this.date.destroy()

    }
    if(this.chips && this.chips.destroy){
      this.chips.destroy()
    }
  }
}
</script>

<style>

</style>