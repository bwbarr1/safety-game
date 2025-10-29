// You can add as many as you like. Support for multiple correct answers.
// Tip: videos live under ../assets/video and images under ../assets/images
const QUESTIONS = [
  {
    text: "Driver forgets to fasten a seatbelt before moving the vehicle.",
    image: "../assets/images/seatbelt.jpg", // optional
    options: ["Direct","Engineering","Administrative","Better‑Than‑Nothing"],
    correct: ["Direct","Administrative"],
    explanation: "Direct: the driver fastens the belt now. Administrative: training/signage/supervisor checks reinforce the habit.",
    hints: { "Direct":"What can the person do right now?", "Administrative":"What policy or training helps?" }
  },
  {
    text: "Forklift has a proximity sensor that auto‑brakes when an obstacle is detected.",
    video: "../assets/video/forklift_proximity.mp4", // optional
    options: ["Direct","Engineering","Administrative","Better‑Than‑Nothing"],
    correct: ["Engineering"],
    explanation: "A built‑in design feature that reduces hazard without relying on behavior."
  },
  {
    text: "Temporary mirror added to improve visibility until a proper guard is installed.",
    options: ["Direct","Engineering","Administrative","Better‑Than‑Nothing"],
    correct: ["Better‑Than‑Nothing"],
    explanation: "It’s not ideal but offers some awareness while higher‑order controls are pending."
  }
]
