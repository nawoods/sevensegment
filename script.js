document.querySelectorAll(".number").forEach(segment => {
  segment.innerHTML = `<div class="segment horiz segment-top"></div>
    <div class="segment vert segment-topleft"></div><div class="segment vert segment-topright"></div>
    <div class="segment horiz segment-mid"></div>
    <div class="segment vert segment-bottomleft"></div><div class="segment vert segment-bottomright"></div>
    <div class="segment horiz segment-bottom"></div>`;
});

document.querySelectorAll(".horiz").forEach(segment => {
  segment.innerHTML = '<div class="horiz-top"></div><div class="horiz-bottom"></div>';
});

document.querySelectorAll(".vert").forEach(segment => {
  segment.innerHTML = '<div class="vert-left"></div><div class="vert-right"></div>';
});

const segments = [
  "top",         // 0
  "topleft",     // 1
  "topright",    // 2
  "mid",         // 3
  "bottomleft",  // 4
  "bottomright", // 5
  "bottom"       // 6
];

const digits = [
  [0, 1, 2, 4, 5, 6],    // 0
  [2, 5],                // 1
  [0, 2, 3, 4, 6],       // 2
  [0, 2, 3, 5, 6],       // 3
  [1, 2, 3, 5],          // 4
  [0, 1, 3, 5, 6],       // 5
  [0, 1, 3, 4, 5, 6],    // 6
  [0, 2, 5],             // 7
  [0, 1, 2, 3, 4, 5, 6], // 8
  [0, 1, 2, 3, 5, 6]     // 9
];

const lightNumber = (digit, targetId) => {
  const litSegments = digits[digit];

  for (let i = 0; i <= 6; i++) {
    const segmentQuery = `#${targetId} .segment-${segments[i]}`;
    const segment = document.querySelector(segmentQuery);
    if (litSegments.includes(i)) {
      segment.classList.add('lit');
    } else {
      segment.classList.remove('lit');
    }
  }
}

let tic = 0;

const changeNumber = () => {
  lightNumber(Math.floor((tic % 100) / 10), 'tens');
  lightNumber(tic % 10, 'ones');
  tic++;
}

setInterval(changeNumber, 1000);