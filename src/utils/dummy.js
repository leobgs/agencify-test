import images from "../assets/images/index.js";

const dummy = {
    text: [
        {
            text1: "Transformez votre vision en réalité numérique !",
            text2: "L’agence digital dédié aux entreprises",
            text3: "AGENCIFY  est une agence française spécialisée dans le Développement Web, qui identifie vos besoins pour vous accompagner dans la création de votre site sur-mesure et dans vos projets digitaux."
        }
    ],
    testi: [
        {
            name: "Thibault Ernout",
            img: images.pic_testi_user,
            message: "Une expérience parfaite pour obtenir mon site internet! Le processus a été rapide et efficace.",
            stars: 4.5,
            date: "Client du 9 Juin 2024"
        }
    ],
    expertise: [
        {
            img: images.ic_magento,
            name: "Magento",
            desc: "Le CMS incontournable"
        },
        {
            img: images.ic_wordpress,
            name: "Wordpress",
            desc: "Le CMS le plus connu"
        }, {
            img: images.ic_laravel,
            name: "Laravel",
            desc: "Le Framework compétant"
        }, {
            img: images.ic_woo,
            name: "Woo Commerce",
            desc: "Création de commerce"
        },
    ],
    services: [
        {
            img: images.ic_dev_web,
            name: "Optimisation",
            desc: "Web"
        },
        {
            img: images.ic_desain_graphics,
            name: "Design graphique",
            desc: "Web & print"
        }, {
            img: images.ic_optimization,
            name: "Developpement Web",
            desc: "Deskstop & Mobile"
        }, {
            img: images.ic_support,
            name: "Suivi et support",
            desc: "Dans votre projet"
        },
    ]
}

export default dummy;