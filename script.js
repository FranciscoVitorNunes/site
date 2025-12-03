const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTrailer = document.getElementById("modal-trailer");

const closeBtn = document.querySelector(".close");

const cardData = {
  "Deadpool e Wolverine": {
    img: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
    desc: "Deadpool se une a Wolverine para salvar o multiverso em uma aventura explosiva.",
    trailer: "https://www.youtube.com/embed/73_1biulkYk"
  },
  "Demon Slayer": {
    img: "https://image.tmdb.org/t/p/w500/mFnF8TPvP7VQw3wqb0kkiQ3LDeU.jpg",
    desc: "Tanjiro luta contra demônios enquanto busca a cura para sua irmã Nezuko.",
    trailer: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  "Stranger Things": {
    img: "https://image.tmdb.org/t/p/w500/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
    desc: "Um grupo de amigos enfrenta criaturas de outra dimensão na pequena cidade de Hawkins.",
    trailer: "https://www.youtube.com/embed/mnd7sFt5c3A"
  },
  "Your Name": {
    img: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    desc: "Dois jovens conectados pelo destino trocam de corpo misteriosamente.",
    trailer: "https://www.youtube.com/embed/xU47nhruN-Q"
  }
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;

    modalTitle.textContent = title;
    modalImg.src = cardData[title].img;
    modalDesc.textContent = cardData[title].desc;
    modalTrailer.src = cardData[title].trailer;

    modal.style.display = "flex";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  modalTrailer.src = ""; // para parar o vídeo
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalTrailer.src = "";
  }
};
