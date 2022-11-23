import { reactive } from "vue";

export const store = reactive({

    reasons: [
        {
            titolo: 'Entrepreneurship',
            icona: 'fa fa-solid fa-briefcase',
            testo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem rem ducimus architecto blanditiis obcaecati libero! Rerum cupiditate ipsa amet! Facere officia atque odio est itaque sapiente veniam ad fugiat blanditiis repellat, mollitia delectus facilis, ipsam inventore rerum culpa. Earum fuga facere.'
        },
        {
            titolo: 'Accelerated learning',
            icona: 'fa-solid fa-rocket',
            testo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem rem ducimus architecto blanditiis obcaecati libero! Rerum cupiditate ipsa amet! Facere officia atque odio est itaque sapiente veniam ad fugiat blanditiis repellat, mollitia delectus facilis, ipsam inventore rerum culpa. Earum fuga facere.'
        },
        {
            titolo: 'Productivity',
            icona: 'fa fa-thumbs-up',
            testo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem rem ducimus architecto blanditiis obcaecati libero! Rerum cupiditate ipsa amet! Facere officia atque odio est itaque sapiente veniam ad fugiat blanditiis repellat, mollitia delectus facilis, ipsam inventore rerum culpa. Earum fuga facere.'
        },
        {
            titolo: 'Life Coaching',
            icona: 'fa fa-gear',
            testo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora voluptatem rem ducimus architecto blanditiis obcaecati libero! Rerum cupiditate ipsa amet! Facere officia atque odio est itaque sapiente veniam ad fugiat blanditiis repellat, mollitia delectus facilis, ipsam inventore rerum culpa. Earum fuga facere.'
        }
    ],

    corsi: [
        {
            image: 'public/images/photo-1496307042754-b4aa456c4a2d-370x200.jpeg',
            titolo: 'How to be a DJ? Make Electronic Music',
            sottotitolo: 'Electronic',
            tipo: 'Advanced',
            lezioni: 8,
            ore: 6,
            tag: 'SPECIAL',
            prezzo: 49
        },
        {
            image: 'public/images/12345-1-370x200.png',
            titolo: 'Nvidia and UE4 Tecnologies Pratice',
            sottotitolo: 'Nvidia',
            tipo: 'Advanced',
            lezioni: 8,
            ore: 6,
            tag: 'SPECIAL',
            prezzo: 49.50
        },
        {
            image: 'public/images/photo-1491897554428-130a60dd4757-370x200.jpeg',
            titolo: 'Fashion Photography from professional',
            sottotitolo: 'Fashion',
            tipo: 'Advanced',
            lezioni: 6,
            ore: 6,
            tag: '',
            prezzo: 49
        },
        {
            image: 'public/images/photo-1416339134316-0e91dc9ded92-370x200.jpeg',
            titolo: 'Design Instrument for Communication',
            sottotitolo: 'Communication',
            tipo: 'Intermediate',
            lezioni: 6,
            ore: 6,
            tag: 'NEW',
            prezzo: 49
        },
        {
            image: 'public/images/cathryn-lavery-67852-unsplash-370x200.jpg',
            titolo: 'Make your Concept Right and Beautiful',
            sottotitolo: 'Art',
            tipo: 'Intermediate',
            lezioni: 6,
            ore: 6,
            tag: '',
            prezzo: 49
        },
        {
            image: 'public/images/photo-1475452779376-caebfb988090-370x200.jpeg',
            titolo: 'Road Bike Manual or How to Be a Champion',
            sottotitolo: 'Bicycling',
            tipo: 'Beginner',
            lezioni: 6,
            ore: 6,
            tag: 'NEW',
            prezzo: 49

        },

    ],

    numeri: [
        {
            numero: 3195,
        },
        {
            numero: 23,
        },
        {
            numero: 437,
        },
        {
            numero: 1440,
        }
    ],


})