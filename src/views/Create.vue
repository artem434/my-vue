<template>
    <div class="row">
        
        <div class="col s6 offset-s3">
            <h1>Create Task</h1>
            <form action="">
                <div class="input-field">
                    <input  id="title" v-model="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <span class="helper-text" data-error="title is required" ></span>
                   
                </div>
                <div class="chips" ref="chips"></div>
                <div class="input-field">
                    <textarea v-model="description" id="description" class="materialize-textarea" ></textarea>
                    <label for="description">Textarea</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/240</span>
                </div>
                <input type="text" ref="datepicker">
            </form>
        </div>
    </div>
</template> 

<script>
// @ is an alias to /src


export default {
  name: 'Create',
  data:() =>({
       description: "",
       tite: " ",
  }),
  mounted(){
    M.Chips.init(this.$refs.chips, {
        placeholder: " Task tag"
    })
    M.Datepicker.init(this.$refs.datepicker, {
        format: "dd.mm.yyyy",
        defaultDate: new Date(),
        setDefaultDate: true

    })
  }
}
</script>
