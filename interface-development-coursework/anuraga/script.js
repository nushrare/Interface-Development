// Mood selection + local demo save
document.addEventListener("DOMContentLoaded", () => {
  const moodBtns = document.querySelectorAll(".btn-mood");
  const form = document.getElementById("checkinForm");
  const toast = document.getElementById("saveToast");

  let selectedMood = null;

  moodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      moodBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedMood = btn.dataset.mood;
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const payload = {
        mood: selectedMood,
        need: document.getElementById("need")?.value,
        reflection: document.getElementById("reflection")?.value,
        savedAt: new Date().toISOString()
      };

      localStorage.setItem("anuraga_last_checkin", JSON.stringify(payload));

      if (toast) {
        toast.classList.remove("d-none");
        setTimeout(() => toast.classList.add("d-none"), 2200);
      }
      form.reset();
      moodBtns.forEach(b => b.classList.remove("active"));
      selectedMood = null;
    });
  }
});
