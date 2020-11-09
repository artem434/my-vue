<template>
    <div class="row">
        
        <div class="col s6 offset-s3">
            <h1>Create Task</h1>
            <form action="">
                <div class="input-field">
                    <input  id="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <span class="helper-text" data-error="title is required" ></span>
                </div>
                 <div class="chips" ref="chips"></div>
            </form>
           
            
        </div>
    </div>
</template> 

<script>
// @ is an alias to /src


export default {
  name: 'Create',
  mounted(){
    M.Chips.init(this.$refs.chips, {
        placeholder: " Task tag"
    })
  }
}
</script>
