const copyBtn = document.getElementById('copy-btn');
const addressEl = document.getElementById('contract-address');

if (copyBtn && addressEl) {
  const text = addressEl.textContent?.trim() ?? '';
  const isPlaceholder = !text || /coming\s*soon/i.test(text);

  if (!isPlaceholder) {
    copyBtn.disabled = false;

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
        setTimeout(() => {
          copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
        }, 2000);
      } catch {
        /* clipboard unavailable */
      }
    });
  }
}
