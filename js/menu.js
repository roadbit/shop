let sidebarPanelExpanded = false;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  
  if (sidebarPanelExpanded) {
    sidebar.style.opacity = '0';
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 200);
  } else {
    sidebar.style.display = 'block';
    setTimeout(() => {
      sidebar.style.opacity = '1';
    }, 0);
  }

  sidebarPanelExpanded = !sidebarPanelExpanded;
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.opacity = '0';
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 200);
  sidebarPanelExpanded = false;
}