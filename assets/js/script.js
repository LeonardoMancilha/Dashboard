const ctx = document.querySelector(".myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Vendas em 2025 (R$)",
        data: [1200, 1900, 3000, 2500, 3200, 4000],

        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: 2000,
      easing: "easeInOutQuart",
      loop: false,
    },
  },
});

document.querySelector(".open-btn").addEventListener("click", function () {
  const sidebar = document.querySelector(".sidebar");
  const button = this;
  const isOpen = sidebar.classList.contains("open-sidebar");

  sidebar.classList.toggle("open-sidebar");
  button.setAttribute("aria-expanded", !isOpen);

  if (isOpen) {
    button.setAttribute("aria-label", "Abrir menu");
  } else {
    button.setAttribute("aria-label", "Fechar menu");
  }
});

const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");

  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

    darkModeToggle.setAttribute("aria-label", "Ativar modo claro");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

    darkModeToggle.setAttribute("aria-label", "Ativar modo escuro");
  }
});
