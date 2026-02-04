const QUESTIONS = [
{
  text: "What type of control is an airbag?",
  video: "../assets/videos/airbag.mp4",
  options: ["Direct Control", "Critical Control", "Engineering Control", "Administrative"],
  correct: ["Direct Control", "Engineering Control"],
  explanation: "Airbags isolate people from the hazard, so they're an engineering control. They also specifically target high energy, mitigate exposure, and are effective even with human error, so they're a direct control."
},
  {
    text: "What type of control is driver setup (adjusting seat, mirrors, steering wheel prior to driving)?",
    video: "../assets/videos/driver-setup.mp4",
    options: ["Direct Control", "Critical Control", "Engineering Control", "Administrative Control"],
    correct: ["Critical Control", "Administrative Control"],
    explanation: "Critical because not setting up things like your mirrors could be deadly if you can't see your blind spots. Administrative because it's a trained procedure. It's not direct because it does not specifically target high energy and has a high risk of human error."
  },
  {
    text: "Avoiding unnecessary driving would be considered what type of control?",
    video: "../assets/videos/avoid-unnecessary-driving.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Substitution or Elimination"],
    correct: ["Direct Control", "Substitution or Elimination"],
    explanation: "This is both a direct control and substitution/elimination because it removes the high energy source from the equation. This is the best way to prevent a SIF, but obviously isn't always possible. Sticking with the example, driving is still often necessary."
  },
  {
    text: "A driver monitoring system (like for fatigue or distraction that actively vibrates and/or alarms to wake you up or gets your attention back on the road) is what kind of control?",
    video: "../assets/videos/driver-monitoring-system.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "This is considered an engineering direct control because, by detecting a distraction or drowsiness, it can alert you and isolate you from the potential hazard (crashing). It's more active than just an alert, so it's beyond administrative."
  },
  {
    text: "What type of control is journey management (planning route, checking weather and conditions)?",
    video: "../assets/videos/journey-management.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Administrative Control", "Critical Control"],
    explanation: "This is a learned action or procedure that, while it doesn't target high energy specifically, is highly important to avoiding potential encounters with it, making it critical and administrative, but not direct."
  },
  {
    text: "What type of control is a pre-startup walkaround?",
    video: "../assets/videos/pre-startup-walkaround.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Critical Control", "Administrative Control"],
    explanation: "Doesn't directly target high energy, but is critical to potentially running over a child or animal."
  },
  {
    text: "What type of control is a hands-free device or no-device policy?",
    video: "../assets/videos/hands-free-device.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Administrative Control"],
    explanation: "This is a rule or procedure and does not specifically target high energy, and isn't something that would be considered critical to avoiding a hazard, so it's just an administrative control."
  },
    {
    text: "What type of control is an automatic brake assist?",
    video: "../assets/videos/automatic-braking-system.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "Automatic braking works without operator intervention, mitigates exposure, and isolates the driver from the hazard, so it's a direct and engineering control."
  },
  {
    text: "What type of control are crumple zones (where the car is designed to crush in a crash to protect the passengers)?",
    video: "../assets/videos/crumple-zones.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Elimination or Substitution"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "Crumple Zones isolate you from the hazard, mitigate the high energy, and work regardless of the driver, so they're direct and engineering controls."
  },
  {
    text: "What type of control is a seat belt?",
    video: "../assets/videos/seat-belt.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Critical Control"],
    explanation: "A seat belt would be like targeted PPE where it directly targets high energy in the event of a crash. It would be very similar to fall protection in a facility — critical to putting it on before beginning your work or drive."
  },
  {
    text: "What type of control is the traction control system (TCS)?",
    video: "../assets/videos/traction-control-system-s.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "Isolates you from the hazard, works independently of human error, and mitigates exposure to the high energy."
  },
    {
    text: "What type of control is the lane departure warning system (alert only, doesn't control car)?",
    video: "../assets/videos/lane-departure-warning-system.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Administrative Control"],
    explanation: "While this warns you, it doesn't actually stop you from getting into the hazard. This would be like a communication at the facility — they've told you about the risk, but that ultimately doesn't stop you from crashing or being exposed to the high energy."
  },
  {
    text: "What type of control is lane assist system (helps keep you in your lane)?",
    video: "../assets/videos/lane-assist-system.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "Keeping you in the lane works works regardless, actually in spite of, the human's actions (or inaction). It helps minimize exposure to a high energy event."
  },
  {
    text: "What type of control is the blind spot detection system?",
    video: "../assets/videos/blind-spot-warning-system.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Administrative Control"],
    explanation: "Blind spot detection is really just a communication to you that something is in your blind spot. It doesn't stop you from actually entering the area. So, it's just an administrative control."
  },
  {
    text: "What type of control is a rearview camera?",
    video: "../assets/videos/rearview-camera.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Administrative Control"],
    explanation: "Similar to a blind spot detection, a camera can only do so much. It can show you the risk, but can't stop you from a high energy incident. Therefore, it's just an administrative control (not targeted to high energy)."
  },
  {
    text: "What type of control is backup braking (detects obstacles in your rear and automatically brakes)?",
    video: "../assets/videos/backup-braking.mp4",
    options: ["Direct Control", "Engineering Control", "Administrative Control", "Critical Control"],
    correct: ["Direct Control", "Engineering Control"],
    explanation: "This works regardless of human error and mitigates exposure to a hazard, so it's a direct engineering control."
  }
];
