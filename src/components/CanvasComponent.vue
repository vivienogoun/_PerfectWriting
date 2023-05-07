<template>
    <div>
        <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"></canvas>
        <button @click="save">Sauvegarder</button>
    </div>
</template>
  
<script>
export default {
    name: "CanvasComponent",
    data() {
        return {
            drawing: false,
            x: 0,
            y: 0,
            color: "black",
            thickness: 5,
        };
    },
    methods: {
        startDrawing(event) {
            this.drawing = true;
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        draw(event) {
            if (!this.drawing) return;

            const canvas = this.$refs.canvas;
            const context = canvas.getContext("2d");
            const newX = event.offsetX;
            const newY = event.offsetY;

            context.strokeStyle = this.color;
            context.lineWidth = this.thickness;

            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(newX, newY);
            context.stroke();

            this.x = newX;
            this.y = newY;
        },
        stopDrawing() {
            this.drawing = false;
        },
        setColor(color) {
            this.color = color;
        },
        setThickness(thickness) {
            this.thickness = thickness;
        },
        save() {
            this.$emit("save");
        },
    }
}

</script>
<style>
canvas{
    border: 1px solid black;
}
</style>
