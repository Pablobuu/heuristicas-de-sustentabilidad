const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
