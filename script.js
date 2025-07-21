// get the data

let users = [
  {
    profilepic:
      "/Asset/pr1.avif",
    displayPic:
      "/Asset/ds1.avif",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Harshita",
    age: 26,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-code-s-slash-line"></i>`,
        interest: "Coding",
      },
      {
        icon: `<i class="ri-book-open-line"></i>`,
        interest: "Reading",
      },
    ],
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vel molestiae reiciendis esse aliquam vero!",
    isFriend: null,
  },
  {
    profilepic:
      "/Asset/pr2.avif",
    displayPic:
      "/Asset/ds2.avif",
    pendingMessage: 3,
    location: "Bhopal, India",
    name: "Shivangi",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-code-s-slash-line"></i>`,
        interest: "Coding",
      },
      {
        icon: `<i class="ri-book-open-line"></i>`,
        interest: "Reading",
      },
    ],
    bio: "Lorem ipsum dolor sit, amet consectetur  reiciendis esse aliquam vero!",
    isFriend: null,
  },
  {
    profilepic:
      "/Asset/pr3.avif",
    displayPic:
      "/Asset/ds3.avif",
    pendingMessage: 14,
    location: "Mumbai, India",
    name: "Mehak",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-code-s-slash-line"></i>`,
        interest: "Coding",
      },
      {
        icon: `<i class="ri-book-open-line"></i>`,
        interest: "Reading",
      },
    ],
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vel molestiae reiciendis esse aliquam vero!",
    isFriend: null,
  },
  {
    profilepic:
      "/Asset/pr4.avif",
    displayPic:
      "/Asset/ds4.avif",
    pendingMessage: 7,
    location: "Bangalore, India",
    name: "Muskan",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-code-s-slash-line"></i>`,
        interest: "Coding",
      },
      {
        icon: `<i class="ri-book-open-line"></i>`,
        interest: "Reading",
      },
    ],
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita vel molestiae reiciendis esse aliquam vero!",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

function setData(index) {
  select(".prlimg img").src = users[index].profilepic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div
        class="tag flex items-center bg-white/30 py-1 px-3 rounded-full gap-3"
      >${interest.icon}<h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
      </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[curr].bio;
}

let isAnimating = false;
let curr = 0;

(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);
  curr = 2;
})();

function Imagechange() {
  if (!isAnimating) {
    isAnimating = true;

    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main1 = select(".maincard");
        let incoming = select(".incomingcard");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main1.classList.remove("z-[3]");
        main1.classList.add("z-[2]");

        gsap.set(main1, {
          scale: 1,
          opacity: 1,
        });

        if (curr === users.length) {
          curr = 0;
        }
        select(".maincard img").src = users[curr].displayPic;
        curr++;

        main1.classList.remove("maincard");
        incoming.classList.add("maincard");
        main1.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny1");
let accept = select(".accept");

deny.addEventListener("click", function () {
  Imagechange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

accept.addEventListener("click", function () {
  Imagechange();
  setData(curr - 1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`);
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
