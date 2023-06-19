fetch('header-template.html')
  .then(response => response.text())
  .then(template => {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = template;
  });