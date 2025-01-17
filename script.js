// تفعيل الشريط الجانبي
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('closed');
}

// إظهار المنتجات عند النقر على فئة معينة
function showCategory(category) {
  const sections = document.querySelectorAll('.product-grid');
  sections.forEach(section => {
    if (section.id === category) {
      section.style.display = 'grid';
    } else {
      section.style.display = 'none';
    }
  });
}

// وظيفة البحث
function searchProducts() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const products = document.querySelectorAll('.product-card');
  
  products.forEach(product => {
    const title = product.querySelector('.product-title').textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// وظيفة شراء المنتجات (التوجيه إلى WhatsApp)
function buyNow() {
  window.location.href = "https://wa.me/0645452403";
}