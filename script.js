const toggle = document.getElementById("theme-toggle");
let dark = true;
toggle.onclick = () => {
dark = !dark;
if (!dark) {
document.documentElement.style.setProperty("--bg", "linear-gradient(135deg, #ffffff, #dfe1ff)");
document.documentElement.style.setProperty("--panel", "rgba(0,0,0,0.08)");
document.documentElement.style.setProperty("--accent", "#4b32ff");
document.documentElement.style.setProperty("--text", "#000000");
} else {
document.documentElement.style.setProperty("--bg", "linear-gradient(135deg, #1e1e2f, #2a2a45)");
document.documentElement.style.setProperty("--panel", "rgba(255,255,255,0.08)");
document.documentElement.style.setProperty("--accent", "#6a5acd");
document.documentElement.style.setProperty("--text", "#ffffff");
}
};
