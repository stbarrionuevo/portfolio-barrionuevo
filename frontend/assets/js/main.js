document.addEventListener("DOMContentLoaded", () => {
  // Inicializa TODOS los carruseles que tengan .project-rows
  document.querySelectorAll(".project-rows").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const btnPrev = carousel.querySelector('[data-carousel="prev"]');
    const btnNext = carousel.querySelector('[data-carousel="next"]');

    if (!track || !btnPrev || !btnNext) return;

    const getStep = () => {
      const card = track.querySelector(".card-proyecto");
      if (!card) return 300;

      const cardWidth = card.getBoundingClientRect().width;
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "14") || 14;

      return Math.round(cardWidth + gap);
    };

    const scrollByStep = (dir) => {
      track.scrollBy({ left: dir * getStep(), behavior: "smooth" });
    };

    btnPrev.addEventListener("click", () => scrollByStep(-1));
    btnNext.addEventListener("click", () => scrollByStep(1));
  });
});



