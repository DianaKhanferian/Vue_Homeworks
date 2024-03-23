Vue.component('article-comp', {
    template: `
    <div class="blog-details__content">
        <article v-for="article in currentArticle" :key="article.id" class="article">
            <div class="article__content">
                <h2 class="article__heading">{{article.firstHeading}}</h2>
                <img class="article__image" :src="article.src" :alt="article.alt">
                <div class="article__sub-content">
                    <p class="article__date">
                    {{article.date}}
                    </p>
                    <div class="breadcrumbs">
                        <ul class="breadcrumbs__ul">
                            <li class="breadcrumbs__li">
                                <a href="#" class="breadcrumbs__link">
                                {{article.firstLink}}
                                </a>
                            </li>
                            <li class="breadcrumbs__li">
                                <a href="#" class="breadcrumbs__link">
                                {{article.secondLink}}
                                </a>
                            </li>
                            <li class="breadcrumbs__li">
                                <a href="#" class="breadcrumbs__link">
                                {{article.thirdLink}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="article__text">{{article.firstParagraph}}</p>
                <p class="article__text">{{article.secondParagraph}}</p>
            </div>
            <div class="quotes">
                <div class="quotes__content">
                    <div class="quotes__marks">
                        <svg
                            width="74"
                            height="56"
                            viewBox="0 0 74 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z" fill="#CDA274"/>
                        </svg>
                    </div>
                    <p class="quotes__text">{{article.quoteText}}</p>
                </div>
            </div>
            <h2 class="article__heading">{{article.secondHeading}}</h2>
            <p class="article__text">{{article.thirdParagraph}}</p>
            <div class=article__notes>
                <div class="article__sub-text-box">
                    <span class="article__sub-text-span">{{article.firstSpan}}</span>
                    <p class="article__sub-text">{{article.firstSubtext}}</p>
                </div>
                <div class="article__sub-text-box">
                    <span class="article__sub-text-span">{{article.secondSpan}}</span>
                    <p class="article__sub-text">{{article.secondSubtext}}</p>
                </div>
                    <div class="article__sub-text-box">
                    <span class="article__sub-text-span">{{article.thirdSpan}}</span>
                    <p class="article__sub-text">{{article.thirdSubtext}}</p>
                </div>
            </div>
            <img class="article__image" :src="article.secondSrc" :alt="article.secondAlt">
            <p class="article__text">{{article.forthParagraph}}</p>
        </article>
        <aside class="sidebar">
            <div class="sidebar__content">
                <h3 class="sidebar__heading">{{sidebarTitle}}</h3>
                <div class="sidebar__buttons-box">
                <button v-for="button in buttons" :key="button.id"
                @click="changeArticle(button.id)" type="button"
                 :class="['sidebar__button', button.id === buttonIsActive ? 'sidebar__button_active' : false]">{{button.title}}
                </button>
                </div>
            </div>
        </aside>
    </div>`,
    methods: {
        changeArticle(id) {
            const buttonId = id;
            this.listOfArticles.forEach((article) => {
                if (buttonId === article.id) {
                    this.currentArticle = [];
                    this.buttonIsActive = id;
                    return this.currentArticle.push(article);
                }
            });
        },
    },

    data() {
        return {
            currentArticle: [
                {
                    id: 'kitchen',
                    firstHeading: 'Let’s Get Solution for Building Construction Work',
                    src: './img/article_kitchen_blue_cabinets.png',
                    alt: 'kitchen',
                    date: '26 December,2022',
                    firstLink: 'Interior',
                    secondLink: 'Home',
                    thirdLink: 'Decore',
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.',
                    secondParagraph: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. They make the design.',
                    secondHeading: 'Design sprints are great',
                    thirdParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    firstSpan: '1',
                    firstSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondSpan: '2',
                    secondSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    thirdSpan: '3',
                    thirdSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondSrc: './img/article-kitchen2.png',
                    secondAlt: 'kitchen image',
                    forthParagraph: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
            ],
            listOfArticles: [
                {
                    id: 'kitchen',
                    firstHeading: 'Let’s Get Solution for Building Construction Work',
                    src: './img/article_kitchen_blue_cabinets.png',
                    alt: 'kitchen',
                    date: '26 December,2022',
                    firstLink: 'Interior',
                    secondLink: 'Home',
                    thirdLink: 'Decore',
                    firstParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour.',
                    secondParagraph: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
                    quoteText: 'The details are not the details. They make the design.',
                    secondHeading: 'Design sprints are great',
                    thirdParagraph: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    firstSpan: '1',
                    firstSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondSpan: '2',
                    secondSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    thirdSpan: '3',
                    thirdSubtext: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                    secondSrc: './img/article-kitchen2.png',
                    secondAlt: 'kitchen image',
                    forthParagraph: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
                },
                {
                    id: "bedroom",
                    firstHeading: "A bedroom or bedchamber is a room situated within a residential or accommodation unit characterised by its usage for sleeping",
                    src: "./img/bedroom_bd.png",
                    alt: "bedroom",
                    date: "26 December,2022",
                    firstLink: "Interior",
                    secondLink: "Home",
                    thirdLink: "Bedroom",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quoteText: "The details are not the details. They make the design.",
                    secondHeading: "Design sprints are great",
                    thirdParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstSpan: "1",
                    firstSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSpan: "2",
                    secondSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdSpan: "3",
                    thirdSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSrc: "./img/bedroom_bd.png",
                    secondAlt: "bedroom image",
                    forthParagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "building",
                    firstHeading: "A building is 'a structure that has a roof and walls and stands more or less permanently in one place",
                    src: "../images/building_bd.png",
                    alt: "building",
                    date: "26 December,2022",
                    firstLink: "Interior",
                    secondLink: "Home",
                    thirdLink: "Building",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quoteText: "The details are not the details. They make the design.",
                    secondHeading: "Design sprints are great",
                    thirdParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstSpan: "1",
                    firstSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSpan: "2",
                    secondSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdSpan: "3",
                    thirdSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSrc: "../images/building_bd.png",
                    secondAlt: "building image",
                    forthParagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "architecture",
                    firstHeading: "Architecture is the art and technique of designing and building, as distinguished from the skills associated with construction",
                    src: "../images/architecture_bd.png",
                    alt: "architecture",
                    date: "26 December,2022",
                    firstLink: "Interior",
                    secondLink: "Home",
                    thirdLink: "Architecture",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quoteText: "The details are not the details. They make the design.",
                    secondHeading: "Design sprints are great",
                    thirdParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstSpan: "1",
                    firstSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSpan: "2",
                    secondSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdSpan: "3",
                    thirdSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSrc: "../images/architecture_bd.png",
                    secondAlt: "architecture image",
                    forthParagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },
                {
                    id: "kitchen-planning",
                    firstHeading: "A kitchen is a room or part of a room used for cooking and food preparation in a dwelling or in a commercial establishment",
                    src: "../images/kitchen_planning_bd.png",
                    alt: "kitchen-planning",
                    date: "26 December,2022",
                    firstLink: "Interior",
                    secondLink: "Home",
                    thirdLink: "Kitchen planning",
                    firstParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
                    secondParagraph: "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quoteText: "The details are not the details. They make the design.",
                    secondHeading: "Design sprints are great",
                    thirdParagraph: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    firstSpan: "1",
                    firstSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSpan: "2",
                    secondSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    thirdSpan: "3",
                    thirdSubtext: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    secondSrc: "../images/kitchen_planning_bd.png",
                    secondAlt: "kitchen-planning image",
                    forthParagraph: "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
                },

            ],
            sidebarTitle: "Tags",
            buttons: [
                { id: "kitchen", title: "Kitchen" },
                { id: "bedroom", title: "Bedroom" },
                { id: "building", title: "Building" },
                { id: "architecture", title: "Architecture" },
                { id: "kitchen-planning", title: "Kitchen Planning" }
            ],
            currentButton: [{ id: "kitchen", title: "Kitchen" }],
            buttonIsActive: 'kitchen',
        };
    },
});
