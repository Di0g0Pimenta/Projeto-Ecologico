function openTab(evt, tabName) {
  var i, tabContent, tabLabels;

  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLabels = document.getElementsByClassName("tab-label");
  for (i = 0; i < tabLabels.length; i++) {
    tabLabels[i].className = tabLabels[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}