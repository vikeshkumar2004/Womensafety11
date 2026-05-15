function alertHelpline() {
  const msg = "Emergency alert. Call 1091 for women helpline. Or dial 112 for national support.";
  alert("🚨 Emergency Alert 🚨\n\nCall 1091 for Women Helpline\nOr Dial 112 for National Emergency");

  if ('speechSynthesis' in window) {
    const speak = new SpeechSynthesisUtterance(msg);
    speak.rate = 1;
    speak.pitch = 1;
    speechSynthesis.speak(speak);
  }

  const btn = document.getElementById('sos-button');
  btn.classList.add('sos-active');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      p => console.log(`Location: ${p.coords.latitude}, ${p.coords.longitude}`),
      e => console.log("Location error:", e.message)
    );
  }
}
