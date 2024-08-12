let panelExpanded = false;

function togglePanel() {
  const panelContent = document.getElementById('panelContent');

  if (panelExpanded) {
    panelContent.style.height = '0';
    panelContent.style.borderTop = 'none';
  } else {
    panelContent.style.height = '300px';
    panelContent.style.borderTop = '1px solid #121113';
  }

  panelExpanded = !panelExpanded;
}
