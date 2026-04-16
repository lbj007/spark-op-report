// Spark OP Report - Shared Chart Theme & Utilities

const BRAND = {
  deep: '#06628c',
  teal: '#18a9c4',
  orange: '#fa6e1f',
  gold: '#ffc757',
  brown: '#845121',
  light: '#e8f6fa',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
};

const PALETTE = [BRAND.teal, BRAND.orange, BRAND.gold, BRAND.deep, BRAND.success, BRAND.brown, '#7c3aed', '#ec4899'];

// Register theme
if (typeof echarts !== 'undefined') {
  echarts.registerTheme('spark', {
    color: PALETTE,
    backgroundColor: 'transparent',
    textStyle: { fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif' },
    title: { textStyle: { color: BRAND.deep, fontSize: 16, fontWeight: 700 } },
    legend: { textStyle: { color: '#5a6a7a' } },
    categoryAxis: { axisLine: { lineStyle: { color: '#e2e8f0' } }, axisLabel: { color: '#5a6a7a' } },
    valueAxis: { axisLine: { show: false }, splitLine: { lineStyle: { color: '#f0f2f5' } }, axisLabel: { color: '#8a9aaa' } },
  });
}

// Helper: init chart with auto-resize
function initChart(domId) {
  const dom = document.getElementById(domId);
  if (!dom) return null;
  const chart = echarts.init(dom, 'spark');
  window.addEventListener('resize', () => chart.resize());
  return chart;
}

// Helper: format numbers
function fmtNum(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '万';
  return n.toLocaleString();
}
