const chartValues = [
  5,
  8,
  2,
  1,
  15,
  2,
  3,
  5,
  9,
  11,
  10,
  4,
  3,
  14,
  1,
  7,
  10,
  3,
  2,
  13,
];

const barsContainer = document.querySelector(".bars");

function showBarChart(values) {
  const bars = values.forEach((value, id) => {
    const bar = `
    <li>
      <div class="bar" data-percentage="${value}"></div>
      <span>${id}</span>
    </li>
    `;

    const list = document.createElement("li");
    list.innerHTML = bar;
    barsContainer.appendChild(list);
  });
  document.querySelectorAll(".bar").forEach((bar) => {
    const percentage = bar.dataset.percentage;
    bar.style.height = `${percentage}%`;
    if (percentage <= 5) {
      bar.style.background = "green";
    } else if (percentage <= 10) {
      bar.style.background = "yellow";
    } else {
      bar.style.background = "red";
    }
  });
}

showBarChart(chartValues);
