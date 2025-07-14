
// تحميل مكون الهيدر وإضافته للصفحة
fetch('/components/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  }); 

  // تحميل مكون الفوترد وإضافته للصفحة
fetch('/components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  }); 

AOS.init({
    duration: 1000,
});
