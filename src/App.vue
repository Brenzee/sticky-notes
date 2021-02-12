<template>
  <div id="app">
    <Header :addNote="addNote" :notes="notes" :deleteNotes="deleteNotes" />
    <div class="note_background">
      <Note
        v-for="(note, index) in notes"
        :key="note.id"
        :id="note.id"
        :index="index"
        :title="note.title"
        :text="note.text"
        :color="note.color"
        :left="note.left"
        :top="note.top"
        :rows="note.rows"
        :updateTitle="updateTitle"
        :updateText="updateText"
        :deleteNote="deleteOneNote"
        :changeColor="changeColor"
        :mo="mo"
        :captureOff="captureOff"
        :captureOn="captureOn"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Note from "./components/Note.vue"

export default {
  name: "App",
  data() {
    return {
      notes: [],
    }
  },
  mounted() {
    if (localStorage.notes) {
      this.notes = JSON.parse(localStorage.notes)
    }
  },
  watch: {
    notes: function(val) {
      localStorage.notes = JSON.stringify(val)
    },
  },
  methods: {
    addNote() {
      this.notes = [
        ...this.notes,
        {
          title: "New note",
          text: "Text",
          captureDrag: false,
          color: "yellow",
          top: 100,
          left: 100,
          offset: [0, 0],
          rows: 3,
          id: String(new Date().getTime()),
        },
      ]
    },
    deleteNotes() {
      localStorage.notes = []
      return (this.notes = [])
    },
    updateTitle(id, title) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      noteObject.title = title
      this.notes[objectIndex] = noteObject
      localStorage.notes = JSON.stringify(this.notes)
    },
    updateText(id, text) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      console.log(text)
      noteObject.text = text
      this.notes[objectIndex] = noteObject
      localStorage.notes = JSON.stringify(this.notes)
    },
    mo(id, e) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      if (noteObject.captureDrag === true) {
        var mousePosition = {
          x: e.clientX,
          y: e.clientY,
        }
        noteObject.left = mousePosition.x + noteObject.offset[0]
        noteObject.top = mousePosition.y + noteObject.offset[1]
        console.log(noteObject.offset[1])
      }
      this.notes[objectIndex] = noteObject
      localStorage.notes = JSON.stringify(this.notes)
    },
    captureOn(id, el, e) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      noteObject.captureDrag = true
      noteObject.offset = [el.offsetLeft - e.clientX, el.offsetTop - e.clientY]
      this.notes[objectIndex] = noteObject
    },
    captureOff(id) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      noteObject.captureDrag = false
      this.notes[objectIndex] = noteObject
    },
    changeColor(id) {
      const objectIndex = this.notes.findIndex((note) => note.id === id)
      var noteObject = this.notes[objectIndex]
      switch (noteObject.color) {
        case "yellow":
          noteObject.color = "red"
          break
        case "red":
          noteObject.color = "green"
          break
        case "green":
          noteObject.color = "blue"
          break
        case "blue":
          noteObject.color = "yellow"
          break
      }
      this.notes[objectIndex] = noteObject
      localStorage.notes = JSON.stringify(this.notes)
    },
    deleteOneNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id)
    },
  },
  components: {
    Header,
    Note,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.note_background {
  background-color: darkgray;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 100vh;
}
</style>
