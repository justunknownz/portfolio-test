function updateTime() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(now);

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(now);

  document.getElementById("my-time").textContent =
    `${date} ${time}`;
}

updateTime();
setInterval(updateTime, 1000);
