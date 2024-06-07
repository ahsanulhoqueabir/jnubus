const container = document.querySelector("#bus-details");
let busInfo;
let down = true;
let up = false;
let loading = true;
const handleupdown = (e) => {
  const timeline = document.querySelector(".timeline");
  if (e.target.id === "up") {
    const cards = document.querySelectorAll(".card");
    const titles = document.querySelectorAll(".title");
    up = true;
    down = false;
    const newData = busInfo.slice().reverse();
    displayBus(newData);
    timeline.classList.remove("left");
    timeline.classList.add("right");
    cards.forEach((card) => {
      card.style.setProperty("--timelineborder-color", "red");
    });
    titles.forEach((title) => {
      title.style.setProperty("--border-color", "#22c55e");
    });
  }
  if (e.target.id === "down") {
    const cards = document.querySelectorAll(".card");
    const titles = document.querySelectorAll(".title");
    up = false;
    down = true;
    timeline.classList.remove("right");
    timeline.classList.add("left");
    cards.forEach((card) => {
      card.style.setProperty("--timelineborder-color", "#22c55e");
    });
    titles.forEach((title) => {
      title.style.setProperty("--border-color", "red");
    });
    displayBus(busInfo);
  }
};
document.querySelectorAll(".udbtn").forEach((button) => {
  button.addEventListener("click", handleupdown);
});
const getBus = async () => {
  const id = window.location.search.split("=")[1];
  loader.classList.add("visible");
  const response = await fetch(
    `https://jnubus.netlify.app/.netlify/functions/api/v1/bus/find/${id}`
  );
  const data = await response.json();
  busInfo = data.route.stoppage;
  loading = false;
  displayBus(busInfo);
  loader.classList.remove("visible");
};
getBus();
const displayBus = (data) => {
  container.innerHTML = "";
  data.map((stoppage) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = ` <div class="info">
                    <h3 class="title">${stoppage.point.name} at ${
      stoppage.upTime || stoppage.downTime || "06:40(approx)"
    } </h3>
                  
                </div>
        `;

    container.appendChild(div);
  });
};
