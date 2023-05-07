<template>
    <div class="paint ">
       
        <div class="options">
            <div class="colors">
                <div class="color" v-for="color in colors" v-bind:key="color" :style="{ backgroundColor: color  }" style="display: inline-block;"
                    @click="changeColor(color)"></div>
            </div>
            <div class="brush-sizes">
                <input type="range" min="1" max="10" v-model="brushSize" id="ageInputId"
                    oninput="ageOutputId.value = ageInputId.value">
                <output id="ageOutputId"></output>
            </div>
            <div class="actions">
                <button @click="clearCanvas">Clear</button>
                <button class="save" @click="saveImage">Save</button>
            </div>
        </div>
        <div class="canvas container" >
            <canvas ref="canvas" @mousedown="startDrawing" @mouseup="stopDrawing" @mousemove="draw" :width="canvasWidth"
                :height="canvasHeight">
               
            </canvas>
            
        </div>
    </div>
</template>
  
<script>
export default {
    name: "DrawComponent",
    data() {
        return {
            isDrawing: false,
            lastX: 0,
            lastY: 0,
            brushSize: 5,
            colors: ["#000000", "#FF4136", "#FF851B", "#0074D9", "#B10DC9", "#2ECC40", "#FFDC00", "#FFFFFF"],
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight
        }
    },
    methods: {
        startDrawing(event) {
            this.isDrawing = true;
            this.lastX = event.offsetX;
            this.lastY = event.offsetY;
        },
        stopDrawing() {
            this.isDrawing = false;
        },
        draw(event) {
            if (!this.isDrawing) return;
            const ctx = this.$refs.canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(this.lastX, this.lastY);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.lineWidth = this.brushSize;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            this.lastX = event.offsetX;
            this.lastY = event.offsetY;
        },
        changeColor(color) {
            this.color = color;
        },
        clearCanvas() {
            const ctx = this.$refs.canvas.getContext("2d");
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        },
        saveImage() {
            const image = this.$refs.canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = "paint.png";
            link.href = image; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>
  
<style >
canvas{
    position: absolute;
    width: 93%;
    height:80%;
    margin-top: 60px;
}
.options {


    width: 60%;

    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: opacity .5s;
    background: linear-gradient(to right ,#8557e2,#da82b6);
    padding: 15px;
    border-radius: 10px;
    border: 3px solid white;
    margin-left: 20%;
}

button:hover {
    cursor: pointer;
}

.color {
    height: 35px;
    width: 35px;
    background-color: blue;
    border-radius: 50%;
    border: 3px solid white;
    margin-right: 8px;
    margin-top: 5px;
}



.color:hover {
    transform: scale(1.2);
}

button {
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 3px;
    background-color: #03bb56;
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    margin-right: 8px;
}

.save {
    background-color: #0f65d4;
}

input[type="color"] {
    width: 60px;
    height: 35px;
}

#ageOutputId {
    color: white;
    font-weight: bold;
    font-size: 20px;

    margin-left:5px;
}

#ageInputId {
    background: linear-gradient(to right, #000428 0%, #004e92 100%);
    height: 10px;
    outline: none;
    -webkit-appearance: none;
    cursor: ew-resize;
    border-radius: 5px;
    border: 2px solid white;
    accent-color: white;

}
</style>