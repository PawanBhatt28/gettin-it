
let card_container = document.getElementById("card-container");

console.log(card_container);

const card_details = [,  {
    id: 4,
    title: "Java",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/css.png",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Python",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/python.jpg",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Machine Learning",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/ml.png",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Docker",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/computerNetwork4.jpg",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Cyber Security",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/computerNetwork2.jpg",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Deep Learning",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/dataScience.jpg",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Statistics",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/statistics.png",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "Mathematics",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/mathematics.png",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "C++",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/c++.png",
    imageAlt: "playful elephant"
  },  {
    id: 4,
    title: "HTML",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/html.jpg",
    imageAlt: "playful elephant"
  }
 ,  {
    id: 4,
    title: "Javascript",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/javascript2.jpg",
    imageAlt: "playful elephant"
  },
  {
    id: 4,
    title: "Blockchain",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/blockchain.jpg",
    imageAlt: "playful elephant"
  },
  {
    id: 4,
    title: "Data Structures",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/Data-Structure.png",
    imageAlt: "playful elephant"
  }, 
  {
    id: 4,
    title: "Computer Network",
    color: "green",
    age: 8,
    pictureUrl: "/data/images/course/computerNetwork7.jpg",
    imageAlt: "playful elephant"
  }
];



const card_maker = (container, data_list)=>{
    data_list.forEach(detail => {
        const div = document.createElement("div");
        div.classList.add("card");

        var content = `
            <div id="img-div"><img src="${detail.pictureUrl}" style:"border-radius:10px 10px 0 0"> </div>
            <div id="title-div"> <p>${detail.title}</p> </div>
        `;

        div.innerHTML = content;
        container.appendChild(div);
    });
}


card_maker(card_container, card_details);