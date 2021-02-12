<template>
  <b-navbar type="light">
    <b-navbar-brand>Stickies</b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          ><i class="far fa-sticky-note"></i> {{ notes.length }}</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav @click="addNote">
        <b-nav-item><i class="fas fa-plus-square"></i> Add note</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav @click="deleteNotes">
        <b-nav-item
          ><i class="fas fa-trash-alt"></i> Delete all notes</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  props: {
    addNote: Function,
    notes: Array,
    deleteNotes: Function,
  },
}
</script>
