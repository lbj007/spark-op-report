// Spark OP Report - Navigation Component
const NAV_ITEMS = [
  { href: 'index.html', icon: '0', label: '总览仪表盘' },
  { href: 'market.html', icon: '1', label: '市场调研' },
  { href: 'location.html', icon: '2', label: '选址策略' },
  { href: 'product.html', icon: '3', label: '产品规划' },
  { href: 'brand.html', icon: '4', label: '品牌规划' },
  { href: 'teaching.html', icon: '5', label: '教学规划' },
  { href: 'operations.html', icon: '6', label: '校区运营' },
  { href: 'finance.html', icon: '7', label: '财务规划' },
  { href: 'risk.html', icon: '8', label: '风险应对' },
  { href: 'roadmap.html', icon: '9', label: '推进计划' },
  { href: 'reference.html', icon: 'REF', label: '原文参考' },
];

function renderSidebar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  let html = `
    <div class="sidebar-logo">
      <h1>Spark Math</h1>
      <div class="subtitle">思派克素养中心 OP V2.0</div>
    </div>
    <nav>
  `;

  NAV_ITEMS.forEach(item => {
    const isActive = currentPage === item.href;
    html += `
      <a href="${item.href}" class="${isActive ? 'active' : ''}">
        <span class="nav-num">${item.icon}</span>
        <span>${item.label}</span>
      </a>
    `;
  });

  html += `
    </nav>
    <div class="sidebar-footer">Spark思派克素养中心<br>运营计划 2026</div>
  `;

  sidebar.innerHTML = html;
}

function renderPageNav(prevPage, nextPage) {
  const nav = document.getElementById('page-nav');
  if (!nav) return;

  let html = '';
  if (prevPage) {
    html += `<a href="${prevPage.href}">&larr; ${prevPage.label}</a>`;
  } else {
    html += '<span></span>';
  }
  if (nextPage) {
    html += `<a href="${nextPage.href}">${nextPage.label} &rarr;</a>`;
  } else {
    html += '<span></span>';
  }
  nav.innerHTML = html;
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const idx = NAV_ITEMS.findIndex(i => i.href === currentPage);
  const prev = idx > 0 ? NAV_ITEMS[idx - 1] : null;
  const next = idx < NAV_ITEMS.length - 1 ? NAV_ITEMS[idx + 1] : null;
  renderPageNav(prev, next);
});
