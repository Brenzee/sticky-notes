<template>
  <div
    class="note"
    :class="color"
    :style="{ left: `${left}px`, top: `${top}px` }"
  >
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
        @input="updateText(id, $event)"
        :rows="rows"
      ></textarea-autosize>

      <i class="fas fa-paint-brush" @click="changeColor(id)"></i>
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
    changeColor: Function,
    title: String,
    id: String,
    text: String,
    color: String,
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
  min-height: 150px;
  width: 250px;
  position: absolute;
  overflow: hidden;
  border-radius: 10px 30px;
  .note_header {
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
    width: 100%;
    display: flex;
    flex-direction: column;

    textarea,
    textarea:focus {
      width: 100%;
      height: 100%;
      background: none;
      outline: none;
      border: none;
    }
    .fa-paint-brush {
      align-self: flex-end;
    }
  }
}
.yellow {
  background: #ffe96a;
  .note_header {
    background-color: #fff4b5;
  }
}

.red {
  background: red;
  .note_header {
    background-color: rgb(231, 119, 119);
  }
}

.green {
  background: green;
  color: white;
  .note_header {
    background-color: rgb(14, 187, 14);
    input {
      color: white;
    }
  }
  textarea {
    color: white;
  }
}

.blue {
  background: navy;
  color: white;
  .note_header {
    background-color: rgb(9, 9, 207);
    input {
      color: white;
    }
  }
  textarea {
    color: white;
  }
}
</style>
