<template>
  <div class="note" :style="{ left: `${left}px`, top: `${top}px` }">
    <div
      class="note_header d-flex justify-content-between align-items-center py-2 px-3"
    >
      <i class="fas fa-ban" @click="deleteNote(id)"></i>
      <input :value="title" @input="updateTitle(id, $event.target.value)" />
      <i
        class="fas fa-arrows-alt"
        @mousedown="captureOn(id, $el, $event)"
        @mousemove="mo(id, $event)"
        @mouseup="captureOff(id)"
      ></i>
    </div>
    <div class="note_body text-left p-2">
      <textarea-autosize
        :value="text"
        @input="
          updateText(
            id,
            $event.target.value,
            $el.children[1].children[0].scrollHeight
          )
        "
        :rows="rows"
      ></textarea-autosize>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    mo: Function,
    captureOn: Function,
    captureOff: Function,
    updateTitle: Function,
    updateText: Function,
    deleteNote: Function,
    title: String,
    id: String,
    text: String,
    top: Number,
    left: Number,
    rows: Number,
    index: Number,
  },
}
</script>

<style lang="scss" scoped>
.note {
  .fas {
    cursor: pointer;
    font-size: 18px;
  }
  background: #ffe96a;
  min-height: 150px;
  width: 250px;
  position: absolute;
  overflow: hidden;
  border-radius: 10px 30px;
  .note_header {
    background-color: #fff4b5;
    input,
    input:focus {
      width: 60%;
      background: none;
      border: none;
      outline: none;
      text-align: center;
    }
    p {
      margin: 0;
    }
  }
  .note_body {
    textarea,
    textarea:focus {
      width: 100%;
      height: 100%;
      background: none;
      outline: none;
      border: none;
    }
  }
}
</style>
