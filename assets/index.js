const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "Cumplimiento",
        data: [1, 2, 3, 4, 5],
      },
    ],
  },
  options: {
    responsive: true,
    angle: 90,
  },
});
