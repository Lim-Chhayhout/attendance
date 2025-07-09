// datetime
(() => {
  const dtEl       = document.getElementById('show-datetime');
  const lastAttEl  = document.getElementById('last-attday');
  const todayAttEl = document.getElementById('today-attday');

  if (!dtEl && !lastAttEl && !todayAttEl) return;

  const fmt = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
    hour:    'numeric',
    minute:  '2-digit',
    second:  '2-digit',
    hour12:  true,
  });

  function updateNow() {
    if (dtEl) dtEl.textContent = fmt.format(new Date());
  }

  function setYesterday() {
    if (!lastAttEl) return;
    const y = new Date();
    y.setDate(y.getDate() - 1);             
    const dateOnly = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year:    'numeric',
      month:   'long',
      day:     'numeric',
    });
    lastAttEl.textContent = `– ${dateOnly.format(y)}`;
  }

  function settoday() {
    if (!todayAttEl) return;
    const y = new Date();
    y.setDate(y.getDate());             
    const dateOnly = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year:    'numeric',
      month:   'long',
      day:     'numeric',
    });
    todayAttEl.textContent = `– ${dateOnly.format(y)}`;
  }

  updateNow();
  setYesterday();
  settoday();

  if (dtEl) setInterval(updateNow, 1000);
})();
