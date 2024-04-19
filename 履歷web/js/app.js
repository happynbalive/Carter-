//設定 nav bar 下拉會有陰影，往上到頂則陰影會不見。
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});
