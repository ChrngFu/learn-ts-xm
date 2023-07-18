// 鼠标点击冒泡

const mouseClickBubble = (event: MouseEvent): void => {
  const text = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
  const index = Math.floor(Math.random() * text.length);
  const { pageX, pageY } = event;

  const span = document.createElement("span");
  span.textContent = `♥ ${text[index]} ♥`;
  span.style.cssText = `
    color: #FF4545;
    font-size: 12px;
    position: absolute;
    left: ${pageX}px;
    top: ${pageY}px;
    translate: -50% -50%;
    user-select: none;
    z-index: 9999;
  `;

  document.body.appendChild(span);
  drawAnimation(span);

  setTimeout(() => {
    span.remove();
  }, 1000);
};

// 绘画动画效果
const drawAnimation = (el: Element) => {
  el.animate(
    [
      { transform: "scale(0.8)" },
      { transform: "scale(1.2)", opacity: 1 },
      { transform: "scale(0.8)" },
      { translate: "-50% -100px", opacity: 0.1 },
    ],
    {
      duration: 1000,
      easing: "linear",
      fill: "forwards",
    },
  );
};

window.addEventListener("click", mouseClickBubble);
