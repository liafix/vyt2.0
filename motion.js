/* Optional visual enhancements: no dependencies, no hidden content without JS. */
(function () {
  "use strict";
  var motion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (motion) { return; }
  document.body.classList.add("motion-ready");
  if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) { return; }
  var cards = document.querySelectorAll('body[data-layout="home"] a.course');
  cards.forEach(function (card) {
    var frame = 0;
    card.addEventListener("pointermove", function (event) {
      if (frame) { cancelAnimationFrame(frame); }
      frame = requestAnimationFrame(function () {
        var rect = card.getBoundingClientRect();
        var x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        var y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
        card.style.setProperty("--rx", ((.5 - y) * 3.5).toFixed(2) + "deg");
        card.style.setProperty("--ry", ((x - .5) * 3.5).toFixed(2) + "deg");
        card.style.setProperty("--px", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--py", (y * 100).toFixed(1) + "%");
        frame = 0;
      });
    }, { passive: true });
    function clear() {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
      card.style.removeProperty("--px");
      card.style.removeProperty("--py");
    }
    card.addEventListener("pointerleave", clear);
    card.addEventListener("blur", clear);
  });
})();
