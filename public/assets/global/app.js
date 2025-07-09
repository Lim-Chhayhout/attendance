/* ------------------------------------------------------------------
   data‑profile line‑wrapping (80 chars)
   ------------------------------------------------------------------ */
(() => {
  const target = document.getElementById('data-profile');
  if (!target) return;                

  const text = (target.textContent || '').trim();
  if (!text) return;               

  const chunks = text.match(/.{1,80}/g);
  if (!chunks) return;

  target.textContent = chunks.join('\n');
})();

/* ------------------------------------------------------------------
   profile popup helpers
   ------------------------------------------------------------------ */
(() => {
  const popup = document.getElementById('profilePopup');
  if (!popup) return;                      

  window.openProfile  = () => { popup.style.display = 'flex'; };
  window.closeProfile = () => { popup.style.display = 'none';  };
})();
