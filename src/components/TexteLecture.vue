<template>
    <div class="texte--cont">
        <div class=" container">
            <div class="row">
                <p style="margin-top:20px;" class="text-center">Apprends à mieux lire et plus vite!!</p>
                <div class="ecrivain">
                    <img class="mx-auto d-block img-rounded" src="@/assets/PerfectWriting/smallicons/read.png" alt="">
                    <p class="text-center">L'écrivain</p>
                </div>
                <div style="border-right: 2px solid #ad65c8" class="texte col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum, omnis obcaecati perferendis eum
                    quo impedit quasi dolores deserunt est debitis sit ullam voluptatum quas!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id quae natus ratione? Deleniti natus reprehenderit id delectus quam obcaecati, modi a? Sed iure fugiat quidem quam facere nihil alias.

                </div>
                <div class=" texte col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel perspiciatis est inventore facilis!
                    Omnis, neque quo, officia tempora, delectus iure a in optio eius nulla amet! Nulla, molestiae explicabo!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas tempore possimus consequuntur nihil? Itaque, beatae nam? Dolores ipsa consequatur, deleniti expedita quis nobis sint, dignissimos architecto a accusamus laborum!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TexteLecture",
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
        font-weight:40px;
    }

    .ecrivain {

        margin-bottom: 10px;
        img{
            width:  45px;
            height: 45px;
        }

    }

    .texte {
        padding: 30px;
        line-height: 1.5;
    }
}</style>