let searchPanelExpanded = false;

function toggleSearchPanel() {
  const searchPanel = document.getElementById('searchPanel');

  if (searchPanelExpanded) {
    searchPanel.style.opacity = '0';
    setTimeout(() => {
      searchPanel.style.display = 'none';
    }, 200);
  } else {
    searchPanel.style.display = 'block';
    setTimeout(() => {
      searchPanel.style.opacity = '1';
    }, 0);
  }

  searchPanelExpanded = !searchPanelExpanded;
}

function closeSearchPanelFinal() {
  const searchPanel = document.getElementById('searchPanel');
  searchPanel.style.opacity = '0';
  setTimeout(() => {
    searchPanel.style.display = 'none';
  }, 200);
  searchPanelExpanded = false;
}