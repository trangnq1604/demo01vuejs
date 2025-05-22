<template>
    <div class="module mod_h2">
      <div class="mod_h2">
 <h2>
{{title}}
    </h2>
      </div>
   
  </div>
</template>
<script>
export default {
  name: 'Modh2Componant',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>