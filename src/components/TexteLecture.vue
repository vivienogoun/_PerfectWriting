<template>
    <div class="texte--cont">
        <div class=" container">
            <div class="row">
                <p style="margin-top:20px;" class="text-center">Apprends à mieux lire et plus vite!!</p>
                <div class="ecrivain">
                    <img class="mx-auto d-block img-rounded" :src="text.image" alt="">
                    <p class="text-center"> {{ text.name }}</p>
                </div>
                <div style="border-right: 2px solid #ad65c8" class="texte col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    {{ text.texte }}
                </div>
                <div class=" texte col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel perspiciatis est inventore facilis!
                    Omnis, neque quo, officia tempora, delectus iure a in optio eius nulla amet! Nulla, molestiae explicabo!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas tempore possimus consequuntur
                    nihil? Itaque, beatae nam? Dolores ipsa consequatur, deleniti expedita quis nobis sint, dignissimos
                    architecto a accusamus laborum!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// IMPORT
import texte_info from "../texte_info.js";
import { onMounted } from "vue";
export default {
    name: "TexteLecture",
    setup() {
        class Texte {
            constructor(image, name, texte) {
                this.image = image,
                    this.name = name,
                    this.texte = texte
            }
        }
        let all_info_text = [];
        const makeDataTexte = () => {
        for (const text of texte_info) {
            const info_texte = Texte(
                text.name,
                text.image,
                text.texte);
            all_info_text.push(info_texte)
            console.log(all_info_text);
        }
    }
    onMounted(makeDataTexte);
    return{
        all_info_text,
    };
    }
}
</script>

<style lang="scss">
.texte--cont {

    width: 85%;
    background: #fbfafa;
    color: black;
    border-radius: 10px;
    font-weight: normal;
    font-size: 1rem;


    p {
        font-weight: 40px;
    }

    .ecrivain {

        margin-bottom: 10px;

        img {
            width: 45px;
            height: 45px;
        }

    }

    .texte {
        padding: 30px;
        line-height: 1.5;
    }
}</style>