const container = document.querySelector("#buses");

const getBuses = async () => {
  const response = await fetch(
    "https://jnubus.netlify.app/.netlify/functions/api/v1/bus/all"
  );
  const data = await response.json();
  displayBus(data);
  console.log(data);
};
const displayBus = (buses) => {
  buses.map((bus) => {
    const dropPoint =
      bus.route.stoppage[bus.route.stoppage.length - 1].point.name;
    const div = document.createElement("div");
    div.classList.add(
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "justify-between",
      "items-center"
    );
    div.innerHTML = `
    <div class='w-[60%] flex-col gap-5'>
    <p>${bus.name}
    </p>
    <div class='text-xs flex items-center justify-between'>
    <i class="fa-solid fa-clock-rotate-left"></i>
    <p><small class="text-green-600 font-bold"> UP &nbsp;: &nbsp;</small> ${
      bus.UP
    }</p>
    <p><small class='text-red-600 font-bold'>DOWN: </small>
    ${bus.DOWN}
    </p>
    </div>
    <div>
    <p class='text-xs'>
    <small>Last Stoppage: &nbsp;</small> ${dropPoint}
    </p>
    </div>
    </div>
    <div>
     <img src=${
       bus.decktype === "single"
         ? "https://i.ibb.co/Vq83VHg/ec49011b26aa0c712f306aa60b8815d3.png"
         : "https://i.ibb.co/Fb60FM8/d24cc68e858835d3c3224f80cea65f13.png"
     } alt="" class="h-16 w-20" />
    </div>
    
    `;
    div.addEventListener("click", () => {
      window.location.href = `details.html?id=${bus._id}`;
    });
    container.appendChild(div);
  });
};
getBuses();
