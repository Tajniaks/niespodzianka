import "./styles.css";

import { ScratchCard, SCRATCH_TYPE } from "scratchcard-js";

const scContainer = document.getElementById("js--sc--container");
// const scInfos = document.querySelector(".sc__infos");
const sc = new ScratchCard("#js--sc--container", {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc:
    "https://masth0.github.io/ScratchCard/images/scratchcard.jpg",
  imageBackgroundSrc: "https://masth0.github.io/ScratchCard/images/result.png",
  htmlBackground: "",
  clearZoneRadius: 20,
  nPoints: 0,
  pointSize: 0,
  callback: function () {
    // alert("Now the window will reload !");
    window.location.reload();
  }
});

// Init
sc.init()
  .then(() => {
    sc.canvas.addEventListener("scratch.move", () => {
      let percent = sc.getPercent().toFixed(0);
      // scInfos.innerHTML = percent + "%";
      console.log(percent);
    });
  })
  .catch((error) => {
    // image not loaded
    alert(error.message);
  });
