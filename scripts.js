const container = document.getElementById("container");
const timeline = document.getElementById("timeline");
let data_num = 0;

window.addEventListener("scroll", () => {
  if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    getData();
  }
});

function getData() {
  if(data_num < data.length-1) {
    addLifeEventToDOM(data[data_num]);
    data_num++;
  }
  else if(data_num == data.length-1) {
    addNowToDOM(data[data_num]);
    data_num++;
  }
}

function addLifeEventToDOM(data) {
	const eventItem = document.createElement("div");
	eventItem.classList.add("life-event");
  eventItem.innerHTML = `
      <div class="timeline-circle"></div>
      <div class="content">
          <div class="date">${data.date}</div>
          <p>${data.content}</p>
      </div>
  `;
	container.appendChild(eventItem);
}

function addNowToDOM(data) {
  const nowItem = document.createElement("div");
  nowItem.classList.add("now-container");
  nowItem.innerHTML = `
    <div class="now">${data.date}</div>
    <div class="now-content">${data.content}</div>
  `;
  timeline.insertAdjacentElement("afterend", nowItem);
}