const info = [
    {
        image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvecteurs-premium%2Fdessin-anime-mignon-hamster_29190-1466.jpg%3Fw%3D2000&tbnid=m1okccsuGsRvwM&vet=12ahUKEwjj5deH3b7-AhXxrycCHVksAUUQMygLegUIARDrAQ..i&imgrefurl=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fdessin-anime-mignon-hamster_2637664.htm&docid=oGVst_M839vhNM&w=2000&h=2000&q=image%20mignonne%20dessin%20anim%C3%A9&ved=2ahUKEwjj5deH3b7-AhXxrycCHVksAUUQMygLegUIARDrAQ',
        name:'Les trois petits cochons',
        texte:'2'
    },
    {
        image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fhermandesign2015%2Fhermandesign20151607%2Fhermandesign2015160700142%2F60764114-mignon-dessin-anim%25C3%25A9-oiseau-jaune.jpg&tbnid=cGQ1XwfNoBrj7M&vet=12ahUKEwjj5deH3b7-AhXxrycCHVksAUUQMyg9egQIARBj..i&imgrefurl=https%3A%2F%2Ffr.123rf.com%2Fphoto_60764114_mignon-dessin-anim%25C3%25A9-oiseau-jaune.html&docid=JSPXDJcSmz7_AM&w=1300&h=1258&q=image%20mignonne%20dessin%20anim%C3%A9&ved=2ahUKEwjj5deH3b7-AhXxrycCHVksAUUQMyg9egQIARBj',
        name:"L'histoire de la petite citouille",
        texte:'2'
    },
    {
        image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc8.alamy.com%2Fcompfr%2F2gceax1%2Ftrick-or-treat-mignon-dessin-anime-shiba-inu-avec-la-citrouille-d-halloween-dessin-de-chien-kawaii-illustration-vectorielle-amusante-2gceax1.jpg&tbnid=Rxocdcxes5clpM&vet=10CA8QMyhuahcKEwiw25qJ3b7-AhUAAAAAHQAAAAAQAw..i&imgrefurl=https%3A%2F%2Fwww.alamyimages.fr%2Ftrick-or-treat-mignon-dessin-anime-shiba-inu-avec-la-citrouille-d-halloween-dessin-de-chien-kawaii-illustration-vectorielle-amusante-image437950969.html&docid=oxh0BdMPp7SipM&w=1300&h=1390&q=image%20mignonne%20dessin%20anim%C3%A9&ved=0CA8QMyhuahcKEwiw25qJ3b7-AhUAAAAAHQAAAAAQAw',
        name:"La petite sirène",
        texte:'2'
    },
    {
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.vecteezy.com%2Fart-vectoriel%2F22425577-mignonne-bebe-panda-dessin-anime-personnage-vecteur-icone-illustration-les-enfants-illustration-animal-la-nature-concept-plat-dessin-anime-style&psig=AOvVaw26xdl03PZ58dLfMkXVURKf&ust=1682295451636000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDbmondvv4CFQAAAAAdAAAAABAF',
        name:"Le chat Botté",
        texte:'2'
    },
    {
        image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvecteurs-premium%2Fsouris-mignonne-dessin-anime-tenant-coeur-amour-illustration-pour-saint-valentin_6996-1425.jpg&tbnid=hCSHDebezS0p2M&vet=10CM0BEDMouAFqFwoTCLDbmondvv4CFQAAAAAdAAAAABAD..i&imgrefurl=https%3A%2F%2Ffr.freepik.com%2Fvecteurs-premium%2Fsouris-mignonne-dessin-anime-tenant-coeur-amour-illustration-pour-saint-valentin_7129040.htm&docid=fagF2ksYBzI1WM&w=626&h=626&q=image%20mignonne%20dessin%20anim%C3%A9&ved=0CM0BEDMouAFqFwoTCLDbmondvv4CFQAAAAAdAAAAABAD',
        name:"Le petit Chaperon Rouge",
        texte:'2'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyy35HcnyYvndgy4p_K7WteqJ5Mt0SA_b3Og&usqp=CAU',
        name:"Hercule",
        texte:'2'
    },
    {
        image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvecteur-libre%2Fp1%2F4247412-dessin-anime-de-mignonne-perle-jouant-un-yoyo-vectoriel.jpg&tbnid=pze_DA7UYqt1RM&vet=10CHUQMyj7AWoXChMIsNuaid2-_gIVAAAAAB0AAAAAEAk..i&imgrefurl=https%3A%2F%2Ffr.vecteezy.com%2Fart-vectoriel%2F4247412-dessin-anime-de-mignonne-perle-jouant-un-yoyo&docid=qC0NDNfgf7kMeM&w=1225&h=980&itg=1&q=image%20mignonne%20dessin%20anim%C3%A9&ved=0CHUQMyj7AWoXChMIsNuaid2-_gIVAAAAAB0AAAAAEAk',
        name:"La belle au Bois dormant",
        texte:'2'
    },
    {
        image:' https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fvecteur-libre%2Fp1%2F21329929-mignonne-dessin-anime-peu-jaune-poussin-fille-princesse-avec-d-or-brillant-couronne-vectoriel.jpg&tbnid=7yXJjUfHDcptpM&vet=10CBQQMyjAAmoXChMIsNuaid2-_gIVAAAAAB0AAAAAEAo..i&imgrefurl=https%3A%2F%2Ffr.vecteezy.com%2Fart-vectoriel%2F21329929-mignonne-dessin-anime-peu-jaune-poussin-fille-princesse-avec-d-or-brillant-couronne&docid=EKqzQIGTPewelM&w=784&h=980&q=image%20mignonne%20dessin%20anim%C3%A9&ved=0CBQQMyjAAmoXChMIsNuaid2-_gIVAAAAAB0AAAAAEAo',
        name:"PeterPan",
        texte:'2'
    }       
]
module.exports = info;