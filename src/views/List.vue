<template>
<div>
  <h1>LIST</h1>
  <hr>
  <table v-if="tasks.length">
    <thead>
    <tr>
      <th>#</th>
      <th>title</th>
      <th>date</th>
      <th>description</th>
      <th>status</th>
      <th>open</th>
    </tr>
    </thead>
    <tbody>
     <tr
         v-for="(task, idx) of tasks"
         :key="task.id"
     >
       <td>{{idx+1}}</td>
       <td>{{task.title}}</td>
       <td>{{new Date(task.date).toLocaleDateString() }}</td>
       <td class="description"><div class="description__text">{{task.description}}</div></td>
       <td v-bind:class="{ 'teal-text': task.status == 'active' }">{{task.status}}</td>
       <td>
         <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
            open
         </router-link>
       </td>
     </tr>
    </tbody>
  </table>
  <p v-else> no tasks</p>

</div>
 
</template>

<script>
export default {
  computed:{
    tasks(){
      return this.$store.getters.tasks
    }
  },

}
</script>

<style scoped lang="scss">
.description{
  max-width: 400px;

  &__text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>