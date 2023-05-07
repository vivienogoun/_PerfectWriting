<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <canvas
        ref="canvas"
        :width="canvasWidth"
        :height="canvasHeight"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>
    </div>
    <button @click="saveImages">Save</button>
  </div>
</template>

<script>
export default {
  name: "CanvasParent",
  data() {
    return {
      items: [{}, {}, {}], // le nombre d'items représente le nombre de composants enfants avec des canvas pour dessiner
      canvasWidth: 400,
      canvasHeight: 300,
      isDrawing: false,
      color: "#000000",
      lineWidth: 5,
      canvases: [] // tableau pour stocker tous les canvas dessinés
    };
  },
  methods: {
    startDrawing(event) {
      const canvas = event.target;
      const context = canvas.getContext("2d");

      this.isDrawing = true;

      context.beginPath();
      context.moveTo(
        event.clientX - canvas.getBoundingClientRect().left,
        event.clientY - canvas.getBoundingClientRect().top
      );
    },
    draw(event) {
      if (!this.isDrawing) return;

      const canvas = event.target;
      const context = canvas.getContext("2d");

      context.lineTo(
        event.clientX - canvas.getBoundingClientRect().left,
        event.clientY - canvas.getBoundingClientRect().top
      );
      context.strokeStyle = this.color;
      context.lineWidth = this.lineWidth;
      context.stroke();
    },
    stopDrawing() {
      this.isDrawing = false;
    },
    saveImages() {
      const canvases = this.$refs.canvas;
      for (let i = 0; i < canvases.length; i++) {
        this.canvases.push(canvases[i].toDataURL());
      }
      console.log(this.canvases);
    }
  }
};
</script>