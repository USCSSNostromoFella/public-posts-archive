(() => {
  const search = document.getElementById('search');
  const type = document.getElementById('type');
  const onlyImages = document.getElementById('only-images');
  const sort = document.getElementById('sort');
  const entries = Array.from(document.querySelectorAll('.entry'));
  const list = document.getElementById('timeline');
  const count = document.getElementById('shown-count');
  const empty = document.getElementById('empty');
  const norm = value => String(value || '').normalize('NFKC').toLocaleLowerCase();
  function update() {
    const needle = norm(search.value.trim());
    const chosen = type.value;
    const screenshotOnly = onlyImages.checked;
    let shown = 0;
    for (const entry of entries) {
      const show = (!needle || norm(entry.dataset.search).includes(needle)) &&
        (chosen === 'all' || entry.dataset.kind === chosen) &&
        (!screenshotOnly || entry.dataset.screenshot === 'yes');
      entry.hidden = !show;
      if (show) shown++;
    }
    const ascending = sort.value === 'oldest';
    entries.sort((a,b) => ascending ? a.dataset.published.localeCompare(b.dataset.published) : b.dataset.published.localeCompare(a.dataset.published));
    entries.forEach(entry => list.appendChild(entry));
    count.textContent = `${shown} ${shown === 1 ? 'entry' : 'entries'}`;
    empty.hidden = shown !== 0;
  }
  [search, type, onlyImages, sort].forEach(control => control.addEventListener('input', update));
  update();
})();
