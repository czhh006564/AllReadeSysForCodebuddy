/* ============================================================
   薪火传 · 书香伴 高保真原型 · 公共交互脚本
   负责：图标渲染 / 状态栏 / 标签栏 / 提示 / 跳转 / 弹层
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 图标库（线性图标） ---------------- */
  var ICONS = {
    back: '<path d="M15 5 8 12l7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M4 12.5 9.5 18 20 7.5"/>',
    'check-circle': '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.9-5.2"/>',
    home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
    group: '<circle cx="8.5" cy="8" r="3.1"/><path d="M2.6 20c0-3.3 2.6-5.6 5.9-5.6s5.9 2.3 5.9 5.6"/><path d="M15.4 5.6a2.9 2.9 0 1 1 0 5.8"/><path d="M16.4 14.6c2.9.4 5 2.4 5 5.4"/>',
    scan: '<path d="M4 8.5V5.8A1.8 1.8 0 0 1 5.8 4H8.5M15.5 4h2.7A1.8 1.8 0 0 1 20 5.8v2.7M20 15.5v2.7a1.8 1.8 0 0 1-1.8 1.8h-2.7M8.5 20H5.8A1.8 1.8 0 0 1 4 18.2v-2.7"/><path d="M4 12h16"/>',
    user: '<circle cx="12" cy="8" r="3.8"/><path d="M4.6 20c0-3.6 3.3-6 7.4-6s7.4 2.4 7.4 6"/>',
    message: '<path d="M20 12.4c0 3.8-3.6 6.9-8 6.9-1 0-2-.2-2.9-.5L5 20.5l1.2-3.3C5.1 15.9 4.5 14.2 4.5 12.4c0-3.8 3.6-6.9 8-6.9s7.5 3.1 7.5 6.9z"/>',
    heart: '<path d="M12 20s-7-4.5-7-9.3A3.9 3.9 0 0 1 12 7.9a3.9 3.9 0 0 1 7 2.8C19 15.5 12 20 12 20z"/>',
    comment: '<path d="M20 11.6c0 3.7-3.6 6.7-8 6.7-1 0-1.9-.2-2.8-.5L5 20l1.1-3.1C5 15.3 4 13.6 4 11.6 4 7.9 7.6 5 12 5s8 2.9 8 6.6z"/>',
    star: '<path d="M12 4.4l2.4 5 5.5.8-4 3.8.9 5.5-4.8-2.6-4.8 2.6.9-5.5-4-3.8 5.5-.8z"/>',
    thumb: '<path d="M7 21V10l4-6c1.1 0 1.9.8 1.9 1.9V10H19a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 17.8 20H7z"/><path d="M7 10H4v11h3"/>',
    book: '<path d="M4 5c3-1 6-1 8 .9C14 4 17 4 20 5v13c-3-1-6-1-8 .9C10 17 7 17 4 18z"/><path d="M12 5.9v13"/>',
    camera: '<path d="M4 8.6h3l1.5-2.1h7l1.5 2.1h3a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.6a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.6" r="3.2"/>',
    image: '<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4.6 17.2l4.4-4.4 2.9 2.9 3-2.5 4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    alert: '<path d="M12 4.2 20.5 19h-17z"/><path d="M12 10.2v4M12 16.8h.01"/>',
    clock: '<circle cx="12" cy="12" r="8.2"/><path d="M12 7.4V12l3 2"/>',
    edit: '<path d="M15.4 5.6l3 3-9 9H6.4v-3z"/><path d="M4 20.2h16"/>',
    trash: '<path d="M5 7h14M9.5 7V5h5v2M7.2 7l.9 12.6h7.8L16.8 7"/>',
    'arrow-right': '<path d="M5 12h13M13 6.4l5.6 5.6-5.6 5.6"/>',
    spark: '<path d="M12 4l1.8 5.2L19 11l-5.2 1.8L12 18l-1.8-5.2L5 11l5.2-1.8z"/>',
    bell: '<path d="M6.6 17c1-1 1.5-2.1 1.5-4v-1.6a3.9 3.9 0 0 1 7.8 0V13c0 1.9.5 3 1.5 4z"/><path d="M10 20a2.2 2.2 0 0 0 4 0"/>',
    gift: '<rect x="3.6" y="8.6" width="16.8" height="11" rx="2"/><path d="M3.6 12.6h16.8M12 8.6v11"/><path d="M12 8.6S10.6 4.2 8.2 4.7 8.6 8.6 12 8.6zM12 8.6s1.4-4.4 3.8-3.9-.4 3.9-3.8 3.9z"/>',
    shield: '<path d="M12 3.6l7 2.5v5.9c0 4.2-2.9 7.4-7 8.4-4.1-1-7-4.2-7-8.4V6.1z"/><path d="M9 12l2.2 2.2 4.3-4.4"/>',
    share: '<path d="M12 15.4V4.2M8 8l4-4 4 4"/><path d="M5 13.4V19.6h14v-6.2"/>',
    search: '<circle cx="11" cy="11" r="6.2"/><path d="M15.6 15.6 20 20"/>',
    location: '<path d="M12 20.6s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10z"/><circle cx="12" cy="10.6" r="2.3"/>',
    calendar: '<rect x="3.6" y="6" width="16.8" height="13.6" rx="2"/><path d="M3.6 10.4h16.8M8 4v4M16 4v4"/>',
    refresh: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4.2V9h-4.8"/>',
    flag: '<path d="M6 4v16.4"/><path d="M6 5.2h11l-1.9 3.5L17 12.2H6z"/>',
    medal: '<circle cx="12" cy="14.2" r="5.2"/><path d="M8.8 9.6 7 3.8h10l-1.8 5.8"/>',
    flash: '<path d="M13.4 3 6.6 13.2h4.4L10.2 21l7.2-10.6h-4.6z"/>',
    album: '<rect x="3.6" y="5.4" width="16.8" height="13.2" rx="2.4"/><path d="M3.6 15.4l4.6-4.4 3 3 3.2-2.6 4.6 4.4"/><circle cx="9.4" cy="9.4" r="1.4"/>',
    users: '<circle cx="9" cy="8.2" r="3.4"/><path d="M2.8 19.8c0-3.3 2.8-5.6 6.2-5.6s6.2 2.3 6.2 5.6"/><path d="M16.6 5.6a3.1 3.1 0 1 1 0 6.1"/>',
    bookplus: '<path d="M4 5c3-1 5.4-1 7.2.6V19C9.4 17.4 7 17.4 4 18.4z"/><path d="M20 5v6.4"/><path d="M17.2 8.2h5.6"/>',
    eye: '<path d="M2.6 12S6 6.4 12 6.4 21.4 12 21.4 12 18 17.6 12 17.6 2.6 12 2.6 12z"/><circle cx="12" cy="12" r="2.8"/>',
    lock: '<rect x="4.6" y="10.4" width="14.8" height="9.6" rx="2.2"/><path d="M8.2 10.4V8.2a3.8 3.8 0 0 1 7.6 0v2.2"/>',
    chart: '<path d="M4 20V9.6M10 20V4.6M16 20v-7.4M21 20H3.4"/>',
    box: '<path d="M4 8.2 12 4l8 4.2v7.6L12 20l-8-4.2z"/><path d="M4 8.2 12 12.4l8-4.2M12 12.4V20"/>',
    trophy: '<path d="M7.6 4.6h8.8v3.6a4.4 4.4 0 0 1-8.8 0z"/><path d="M7.6 6H4.8v1.4a3 3 0 0 0 2.8 3M16.4 6h2.8v1.4a3 3 0 0 1-2.8 3"/><path d="M10.4 13.4h3.2M12 12.6v3.6M9.4 19.4h5.2"/>',
    download: '<path d="M12 4v11M7.6 10.8 12 15.2l4.4-4.4"/><path d="M4.4 19.2h15.2"/>',
    history: '<path d="M12 7v5l3.2 2"/><path d="M3.8 12a8.2 8.2 0 1 0 2.6-6"/><path d="M3.8 4.4V9h4.6"/>',
    /* ---------- 后台专用 ---------- */
    dashboard: '<rect x="3.6" y="3.6" width="7" height="7" rx="2"/><rect x="13.4" y="3.6" width="7" height="7" rx="2"/><rect x="3.6" y="13.4" width="7" height="7" rx="2"/><rect x="13.4" y="13.4" width="7" height="7" rx="2"/>',
    building: '<path d="M4 20.4V5.6A1.6 1.6 0 0 1 5.6 4h7.2a1.6 1.6 0 0 1 1.6 1.6v14.8"/><path d="M14.4 9.6h4a1.6 1.6 0 0 1 1.6 1.6v9.2"/><path d="M2.8 20.4h18.4"/><path d="M7.4 8h3.6M7.4 12h3.6M7.4 16h3.6"/>',
    folder: '<path d="M3.6 7.4a1.8 1.8 0 0 1 1.8-1.8h3.4l1.8 2.2h8a1.8 1.8 0 0 1 1.8 1.8v7.8a1.8 1.8 0 0 1-1.8 1.8H5.4a1.8 1.8 0 0 1-1.8-1.8z"/>',
    layers: '<path d="M12 3.6 20.4 8 12 12.4 3.6 8z"/><path d="M3.6 12.6 12 17l8.4-4.4"/><path d="M3.6 16.8 12 21.2l8.4-4.4"/>',
    books: '<path d="M4.2 5.4h4.6v13.2H4.2z"/><path d="M8.8 5.4h4.6v13.2H8.8z"/><path d="M16.2 5.6l3.2 1.1-4.2 12.2-3.2-1.1z"/>',
    file: '<path d="M6 3.8h7l5 5v11.4a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8V5.6A1.8 1.8 0 0 1 6 3.8z"/><path d="M13 4v5h5"/>',
    clipboard: '<rect x="5.4" y="4.6" width="13.2" height="15.8" rx="2"/><path d="M9.2 4.6V3.2h5.6v1.4"/><path d="M9 10h6M9 13.6h6M9 17h3.4"/>',
    tag: '<path d="M11.4 3.8H19a1.2 1.2 0 0 1 1.2 1.2v7.6L12 21 3 12z"/><circle cx="16" cy="8" r="1.5"/>',
    sliders: '<path d="M4 7.4h10M18 7.4h2M4 16.6h4M12 16.6h8"/><circle cx="16" cy="7.4" r="2"/><circle cx="10" cy="16.6" r="2"/>',
    settings: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3.4l1 2.2 2.4-.6 1 2.3 2.2 1-.6 2.4 1.6 1.7-1.6 1.7.6 2.4-2.2 1-1 2.3-2.4-.6-1 2.2-1-2.2-2.4.6-1-2.3-2.2-1 .6-2.4L4.4 12l1.6-1.7-.6-2.4 2.2-1 1-2.3 2.4.6z"/>',
    key: '<circle cx="8.4" cy="12" r="3.6"/><path d="M12 12h9M17.6 12v2.8M20.4 12v2"/>',
    upload: '<path d="M12 16.4V5.2M8 9.2 12 5.2l4 4"/><path d="M4.4 19.2h15.2"/>',
    'chev-down': '<path d="M6 9.6 12 15.6l6-6"/>',
    dots: '<circle cx="5.6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18.4" cy="12" r="1.5"/>',
    printer: '<path d="M7 9.4V4.6h10v4.8"/><rect x="4.6" y="9.4" width="14.8" height="6.6" rx="1.8"/><path d="M7 14h10v5.6H7z"/>',
    copy: '<rect x="8.4" y="8.4" width="11.2" height="11.2" rx="2.2"/><path d="M15.6 5.4a2.2 2.2 0 0 0-2.2-2.2H5.6a2.2 2.2 0 0 0-2.2 2.2v7.8a2.2 2.2 0 0 0 2.2 2.2"/>',
    link: '<path d="M10.4 13.6a3.4 3.4 0 0 0 4.8 0l2.6-2.6a3.4 3.4 0 0 0-4.8-4.8l-1 1"/><path d="M13.6 10.4a3.4 3.4 0 0 0-4.8 0l-2.6 2.6a3.4 3.4 0 0 0 4.8 4.8l1-1"/>',
    trend: '<path d="M4 16.6 9.6 11l3.4 3.4L20 7.4"/><path d="M15.4 7.4H20v4.6"/>',
    pie: '<path d="M12 3.6A8.4 8.4 0 1 0 20.4 12H12z"/><path d="M14.8 3.7a8.4 8.4 0 0 1 5.5 5.5"/>',
    database: '<ellipse cx="12" cy="6.4" rx="7.4" ry="2.8"/><path d="M4.6 6.4v11.2c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8V6.4"/><path d="M4.6 12c0 1.5 3.3 2.8 7.4 2.8s7.4-1.3 7.4-2.8"/>',
    'x-circle': '<circle cx="12" cy="12" r="8.4"/><path d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    logout: '<path d="M9.6 4.6H6a1.8 1.8 0 0 0-1.8 1.8v11.2A1.8 1.8 0 0 0 6 19.4h3.6"/><path d="M15 8.4 18.6 12 15 15.6"/><path d="M9 12h9.4"/>',
    filter: '<path d="M4 5.6h16l-6.2 7v5.6l-3.6 2v-7.6z"/>',
    'id-card': '<rect x="3.4" y="5.6" width="17.2" height="12.8" rx="2.2"/><circle cx="9" cy="11.4" r="2.2"/><path d="M5.8 16.4c.6-1.5 1.9-2.3 3.2-2.3s2.6.8 3.2 2.3"/><path d="M14.6 10.4h3.8M14.6 13.8h3.8"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    scale: '<path d="M12 4.4v15.2M7 19.6h10"/><path d="M4.4 8.4h15.2"/><path d="M4.4 8.4 2.6 14h3.6zM19.6 8.4 17.8 14h3.6z"/>'
  };

  var NS = 'http://www.w3.org/2000/svg';

  function makeSvg(name, size, sw) {
    var d = ICONS[name];
    if (!d) return null;
    var s = document.createElementNS(NS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('width', size);
    s.setAttribute('height', size);
    s.setAttribute('fill', 'none');
    s.setAttribute('stroke', 'currentColor');
    s.setAttribute('stroke-width', sw);
    s.setAttribute('stroke-linecap', 'round');
    s.setAttribute('stroke-linejoin', 'round');
    s.innerHTML = d;
    return s;
  }

  function renderIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      if (el.getAttribute('data-icon-done')) return;
      var svg = makeSvg(
        el.getAttribute('data-icon'),
        el.getAttribute('data-size') || 20,
        el.getAttribute('data-sw') || 1.7
      );
      if (!svg) return;
      if (el.hasAttribute('data-fill')) svg.setAttribute('fill', 'currentColor');
      el.appendChild(svg);
      el.setAttribute('data-icon-done', '1');
    });
  }

  /* ---------------- 状态栏 ---------------- */
  var BAR_ICONS =
    '<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">' +
      '<rect x="0" y="7.2" width="3" height="3.8" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/>' +
      '<rect x="9" y="2.6" width="3" height="8.4" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/>' +
    '</svg>' +
    '<svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">' +
      '<path d="M8 10.6l-1-.9a1.4 1.4 0 0 1 2 0z"/>' +
      '<path d="M8 7.1c1.2 0 2.3.5 3.1 1.3l-1.1 1.1A2.9 2.9 0 0 0 8 8.7c-.8 0-1.5.3-2 .8L4.9 8.4A4.4 4.4 0 0 1 8 7.1z"/>' +
      '<path d="M8 3.8c1.9 0 3.7.8 5 2l-1 1.1A5.6 5.6 0 0 0 8 5.4c-1.6 0-3 .6-4 1.5l-1-1.1a7.3 7.3 0 0 1 5-2z"/>' +
      '<path d="M8 .6c2.4 0 4.7.9 6.4 2.4l-1 1.1A8 8 0 0 0 8 2.2 8 8 0 0 0 2.6 4.1l-1-1.1A9.6 9.6 0 0 1 8 .6z"/>' +
    '</svg>' +
    '<svg width="25" height="12" viewBox="0 0 25 12" fill="none">' +
      '<rect x=".7" y=".7" width="20.6" height="10.6" rx="3.2" stroke="currentColor" stroke-opacity=".4"/>' +
      '<rect x="2.3" y="2.3" width="14.4" height="7.4" rx="1.9" fill="currentColor"/>' +
      '<path d="M23 4.2v3.6a2.05 2.05 0 0 0 0-3.6z" fill="currentColor" fill-opacity=".45"/>' +
    '</svg>';

  function renderStatusBar() {
    document.querySelectorAll('[data-statusbar]').forEach(function (el) {
      el.innerHTML =
        '<span class="statusbar__time">9:41</span>' +
        '<span class="statusbar__right">' + BAR_ICONS + '</span>';
    });
  }

  /* ---------------- 标签栏 ---------------- */
  var TABS = {
    student: [
      { key: 'home', label: '首页', icon: 'home', href: 'home-reading.html' },
      { key: 'class', label: '班级', icon: 'group', href: 'class-home.html' },
      { key: 'scan', label: '扫一扫', icon: 'scan', href: 'scan.html', center: true },
      { key: 'mine', label: '我的', icon: 'user', href: 'profile.html' }
    ],
    teacher: [
      { key: 'home', label: '首页', icon: 'home', href: 'teacher-home.html' },
      { key: 'class', label: '班级', icon: 'group', href: 'teacher-classes.html' },
      { key: 'msg', label: '消息', icon: 'message', href: 'teacher-messages.html' },
      { key: 'mine', label: '我的', icon: 'user', href: 'teacher-me.html' }
    ],
    school: [
      { key: 'home', label: '概览', icon: 'chart', href: 'school-home.html' },
      { key: 'class', label: '班级', icon: 'group', href: 'school-classes.html' },
      { key: 'book', label: '图书', icon: 'book', href: 'school-books.html' },
      { key: 'mine', label: '我的', icon: 'user', href: 'school-me.html' }
    ],
    volunteer: [
      { key: 'home', label: '工作台', icon: 'box', href: 'volunteer-home.html' },
      { key: 'archive', label: '服务记录', icon: 'history', href: 'volunteer-archive.html' },
      { key: 'msg', label: '消息', icon: 'message', href: 'volunteer-messages.html' },
      { key: 'mine', label: '我的', icon: 'user', href: 'volunteer-me.html' }
    ]
  };

  function renderTabBars() {
    document.querySelectorAll('[data-tabbar]').forEach(function (nav) {
      var role = nav.getAttribute('data-tabbar') || 'student';
      var active = nav.getAttribute('data-active') || '';
      var list = TABS[role] || TABS.student;
      nav.innerHTML = list.map(function (t) {
        var on = t.key === active ? ' is-on' : '';
        var center = t.center ? ' tab--center' : '';
        return '<a class="tab' + center + on + '" href="' + t.href + '">' +
          '<span class="tab__key"><i data-icon="' + t.icon + '" data-size="' + (t.center ? 22 : 21) + '"></i></span>' +
          '<span class="tab__label">' + t.label + '</span></a>';
      }).join('');
    });
  }

  /* ---------------- 后台侧边导航 / 顶栏 ---------------- */
  var ADMIN_NAV = [
    { label: '工作台', icon: 'dashboard', href: 'admin-dashboard.html' },
    { title: '基础数据', items: [
      { label: '区域管理', icon: 'location', href: 'admin-regions.html' },
      { label: '学校管理', icon: 'building', href: 'admin-schools.html', num: '4' },
      { label: '学年学期', icon: 'calendar', href: 'admin-terms.html' },
      { label: '班级管理', icon: 'group', href: 'admin-classes.html' },
      { label: '学生管理', icon: 'users', href: 'admin-students.html' },
      { label: '教师管理', icon: 'id-card', href: 'admin-teachers.html' },
      { label: '志愿者管理', icon: 'box', href: 'admin-volunteers.html' }
    ] },
    { title: '图书资源', items: [
      { label: '书目管理', icon: 'book', href: 'admin-books.html' },
      { label: '公益来源', icon: 'gift', href: 'admin-donors.html' },
      { label: '图书批次', icon: 'layers', href: 'admin-batches.html' },
      { label: '永久图书', icon: 'books', href: 'admin-pbooks.html' },
      { label: '仓库管理', icon: 'database', href: 'admin-warehouses.html' },
      { label: '图书异常', icon: 'alert', href: 'admin-book-issues.html', num: '7' }
    ] },
    { title: '图书流转', items: [
      { label: '入仓管理', icon: 'download', href: 'admin-inbound.html' },
      { label: '投放管理', icon: 'share', href: 'admin-deliver.html' },
      { label: '回收管理', icon: 'refresh', href: 'admin-recycle.html' },
      { label: '未交与异常', icon: 'clipboard', href: 'admin-missing.html', num: '3' }
    ] },
    { title: '阅读运营', items: [
      { label: '班级共读轮次', icon: 'history', href: 'admin-rounds.html' },
      { label: '阅读关系', icon: 'link', href: 'admin-relations.html' },
      { label: '阅读分享', icon: 'comment', href: 'admin-shares.html' },
      { label: '教师点评与推荐', icon: 'thumb', href: 'admin-comments.html' },
      { label: '内容治理', icon: 'shield', href: 'admin-content-gov.html' }
    ] },
    { title: '荣誉管理', items: [
      { label: '荣誉规则', icon: 'sliders', href: 'admin-honor-rules.html' },
      { label: '学生荣誉', icon: 'medal', href: 'admin-honors.html' },
      { label: '荣誉流水', icon: 'file', href: 'admin-honor-flow.html' },
      { label: '特殊荣誉与证书', icon: 'trophy', href: 'admin-special-honor.html' }
    ] },
    { title: '客服中心', items: [
      { label: '换书申请', icon: 'refresh', href: 'admin-exchanges.html', num: '2' },
      { label: '身份异常中心', icon: 'user', href: 'admin-identity-issues.html', num: '1' },
      { label: '问题处理', icon: 'message', href: 'admin-feedback.html' }
    ] },
    { title: '内容运营', items: [
      { label: '活动动态', icon: 'flag', href: 'admin-activities.html' },
      { label: '内容授权', icon: 'check-circle', href: 'admin-auth.html' },
      { label: '首页优秀内容', icon: 'star', href: 'admin-featured.html' }
    ] },
    { title: '数据中心', items: [
      { label: '项目数据总览', icon: 'chart', href: 'admin-data-overview.html' },
      { label: '学校数据', icon: 'building', href: 'admin-data-school.html' },
      { label: '图书数据', icon: 'books', href: 'admin-data-book.html' },
      { label: '阅读数据', icon: 'eye', href: 'admin-data-reading.html' },
      { label: '公益来源数据', icon: 'gift', href: 'admin-donor-data.html' },
      { label: '公益成果快照', icon: 'target', href: 'admin-snapshots.html' }
    ] },
    { title: '系统工具', items: [
      { label: 'Excel 导入', icon: 'upload', href: 'admin-excel.html' },
      { label: '系统配置', icon: 'settings', href: 'admin-config.html' },
      { label: '后台账号', icon: 'users', href: 'admin-accounts.html' },
      { label: '权限管理', icon: 'key', href: 'admin-roles.html' },
      { label: '操作日志', icon: 'history', href: 'admin-logs.html' }
    ] }
  ];

  function adminLink(it, here) {
    var on = it.href === here ? ' is-on' : '';
    var num = it.num ? '<span class="admin-link__num">' + it.num + '</span>' : '';
    return '<a class="admin-link' + on + '" href="' + it.href + '">' +
      '<i class="admin-link__ic" data-icon="' + it.icon + '" data-size="17"></i>' +
      '<span class="admin-link__txt">' + it.label + '</span>' + num + '</a>';
  }

  /* ---------------- 后台顶栏「我的」下拉 ---------------- */
  var ADMIN_USER = {
    name: '林晓',
    initial: '林',
    dept: '项目运营组',
    account: 'linxiao',
    scope: '全部学校（4 所）',
    last: '2026-09-10 08:52 · 本机'
  };

  function adminModal(id, title, body, foot) {
    return '<div class="modal" id="' + id + '" data-close><div class="modal__box">' +
      '<div class="modal__head"><span class="modal__title">' + title + '</span>' +
      '<span class="modal__close" data-close><i data-icon="close" data-size="17"></i></span></div>' +
      '<div class="modal__body">' + body + '</div>' +
      '<div class="modal__foot">' + foot + '</div></div></div>';
  }

  /* 账号信息 / 修改密码 / 退出登录统一由本脚本注入，52 个后台页面无需改 HTML */
  function renderAdminUserModals(role) {
    if (document.getElementById('adm-account')) return;
    var u = ADMIN_USER;
    var html =
      adminModal('adm-account', '账号信息',
        '<div class="frow"><span class="frow__k">姓名</span><div class="frow__v">' + u.name + '</div></div>' +
        '<div class="frow"><span class="frow__k">登录账号</span><div class="frow__v">' + u.account + '</div></div>' +
        '<div class="frow"><span class="frow__k">后台角色</span><div class="frow__v"><span class="pill pill--info">' + role + '</span></div></div>' +
        '<div class="frow"><span class="frow__k">所属小组</span><div class="frow__v">' + u.dept + '</div></div>' +
        '<div class="frow"><span class="frow__k">数据范围</span><div class="frow__v">' + u.scope + '</div></div>' +
        '<div class="frow"><span class="frow__k">最近登录</span><div class="frow__v">' + u.last + '</div></div>' +
        '<div class="note note--info" style="margin-top:12px"><i class="note__ic" data-icon="shield" data-size="17"></i>' +
        '<div class="note__b">账号由<b>系统管理员</b>创建并分配权限，后台不提供自助提权。如需调整角色或数据范围，请联系系统管理员。</div></div>',
        '<button class="btn btn--soft" data-close data-href="admin-logs.html">我的操作日志</button>' +
        '<button class="btn btn--primary" data-close>关闭</button>'
      ) +
      adminModal('adm-password', '修改密码',
        '<div class="frow"><span class="frow__k"><em>*</em>当前密码</span><div class="frow__v">' +
        '<input class="inp inp--block" type="password" placeholder="请输入当前密码" /></div></div>' +
        '<div class="frow"><span class="frow__k"><em>*</em>新密码</span><div class="frow__v">' +
        '<input class="inp inp--block" type="password" placeholder="8-20 位，含字母与数字" />' +
        '<div class="frow__tip">不得与最近 3 次使用过的密码重复。</div></div></div>' +
        '<div class="frow"><span class="frow__k"><em>*</em>确认新密码</span><div class="frow__v">' +
        '<input class="inp inp--block" type="password" placeholder="请再次输入新密码" /></div></div>' +
        '<div class="note note--warn" style="margin-top:12px"><i class="note__ic" data-icon="alert" data-size="17"></i>' +
        '<div class="note__b">修改成功后，所有设备上的登录状态将失效，需要用新密码重新登录。</div></div>',
        '<button class="btn btn--soft" data-close>取消</button>' +
        '<button class="btn btn--primary" data-adm-pwd-submit>保存</button>'
      ) +
      adminModal('adm-logout', '退出登录',
        '<div class="frow"><span class="frow__k">当前账号</span><div class="frow__v">' + u.name + ' · ' + role + '</div></div>' +
        '<div class="note note--warn" style="margin-top:12px"><i class="note__ic" data-icon="alert" data-size="17"></i>' +
        '<div class="note__b">退出后需重新输入账号密码登录后台，未保存的筛选条件不会保留。</div></div>',
        '<button class="btn btn--soft" data-close>取消</button>' +
        '<button class="btn btn--danger" data-adm-logout-confirm>确认退出</button>'
      );
    var box = document.createElement('div');
    box.innerHTML = html;
    while (box.firstChild) document.body.appendChild(box.firstChild);
  }

  function closeAdminMenu() {
    document.querySelectorAll('[data-adm-menu-panel].is-open').forEach(function (m) { m.classList.remove('is-open'); });
    document.querySelectorAll('[data-adm-toggle].is-on').forEach(function (b) { b.classList.remove('is-on'); });
  }

  function renderAdmin() {
    var here = window.location.pathname.split('/').pop() || 'admin-dashboard.html';
    var side = document.querySelector('[data-admin-side]');
    if (side) {
      var h = '<a class="admin-brand" href="admin-dashboard.html">' +
        '<span class="admin-brand__logo"><i data-icon="spark" data-size="18"></i></span>' +
        '<span><span class="admin-brand__name">共读一本书</span>' +
        '<span class="admin-brand__sub">运营管理后台 V1.0</span></span></a><nav class="admin-nav">';
      ADMIN_NAV.forEach(function (g) {
        if (g.items) {
          h += '<div class="admin-group__title">' + g.title + '</div>';
          g.items.forEach(function (it) { h += adminLink(it, here); });
        } else {
          h += adminLink(g, here);
        }
      });
      side.innerHTML = h + '</nav>';
    }

    var top = document.querySelector('[data-admin-top]');
    if (top) {
      var parts = (top.getAttribute('data-crumb') || '').split('/');
      var crumb = parts.length > 1
        ? '<span>' + parts[0] + '</span><i data-icon="right" data-size="13"></i><b>' + parts[1] + '</b>'
        : '<b>' + parts[0] + '</b>';
      var role = document.body.getAttribute('data-role') || '运营人员';
      var u = ADMIN_USER;
      top.innerHTML = '<div class="admin-crumb">' + crumb + '</div>' +
        '<div class="admin-top__right">' +
        '<span class="pill pill--mute">' + role + '</span>' +
        '<div class="admin-user" data-adm-user>' +
        '<button type="button" class="admin-user__btn" data-adm-toggle>' +
        '<span class="avatar avatar--sm avatar--sky">' + u.initial + '</span>' +
        '<span class="admin-user__name">' + u.name + '</span>' +
        '<i class="admin-user__chev" data-icon="chev-down" data-size="15"></i></button>' +
        '<div class="admin-menu" data-adm-menu-panel>' +
        '<div class="admin-menu__head">' +
        '<span class="avatar avatar--warm">' + u.initial + '</span>' +
        '<div class="admin-menu__who"><b class="admin-menu__name">' + u.name + '</b>' +
        '<span class="admin-menu__meta">' + role + ' · ' + u.dept + '</span></div></div>' +
        '<div class="admin-menu__item" data-adm-menu="account"><i data-icon="id-card" data-size="16"></i>账号信息</div>' +
        '<div class="admin-menu__item" data-adm-menu="password"><i data-icon="key" data-size="16"></i>修改密码</div>' +
        '<div class="admin-menu__sep"></div>' +
        '<div class="admin-menu__item admin-menu__item--danger" data-adm-menu="logout"><i data-icon="logout" data-size="16"></i>退出登录</div>' +
        '</div></div></div>';
      renderAdminUserModals(role);
    }
  }

  /* ---------------- 轻提示 ---------------- */
  var toastTimer = null;
  window.toast = function (msg, duration) {
    var el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-show'); }, duration || 1700);
  };

  /* ---------------- 弹层 ---------------- */
  window.openSheet = function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('is-open');
  };
  window.closeSheet = function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('is-open');
  };

  /* ---------------- 事件委托 ---------------- */
  document.addEventListener('click', function (e) {
    var t = e.target;

    /* ---------------- 后台顶栏「我的」下拉 ---------------- */
    if (!t.closest('.admin-user')) closeAdminMenu();

    var admToggle = t.closest('[data-adm-toggle]');
    if (admToggle) {
      var panel = admToggle.closest('.admin-user').querySelector('[data-adm-menu-panel]');
      var wasOn = panel && panel.classList.contains('is-open');
      closeAdminMenu();
      if (panel && !wasOn) { panel.classList.add('is-open'); admToggle.classList.add('is-on'); }
      return;
    }

    var admItem = t.closest('[data-adm-menu]');
    if (admItem) {
      closeAdminMenu();
      window.openSheet('adm-' + admItem.getAttribute('data-adm-menu'));
      return;
    }

    var pwdSubmit = t.closest('[data-adm-pwd-submit]');
    if (pwdSubmit) {
      var pbox = document.getElementById('adm-password');
      var fi = pbox ? pbox.querySelectorAll('input') : [];
      var cur = fi[0] ? fi[0].value.trim() : '';
      var nw = fi[1] ? fi[1].value.trim() : '';
      var cf = fi[2] ? fi[2].value.trim() : '';
      if (!cur || !nw || !cf) { window.toast('请完整填写当前密码、新密码与确认密码'); return; }
      if (nw.length < 8 || nw.length > 20) { window.toast('新密码需为 8-20 位'); return; }
      if (nw === cur) { window.toast('新密码不能与当前密码相同'); return; }
      if (nw !== cf) { window.toast('两次输入的新密码不一致'); return; }
      fi.forEach(function (el) { el.value = ''; });
      if (pbox) pbox.classList.remove('is-open');
      window.toast('密码已修改，请用新密码重新登录');
      return;
    }

    var logoutOk = t.closest('[data-adm-logout-confirm]');
    if (logoutOk) {
      var lbox = document.getElementById('adm-logout');
      if (lbox) lbox.classList.remove('is-open');
      window.toast('已退出登录，正在返回原型总览');
      setTimeout(function () { window.location.href = '../index.html'; }, 900);
      return;
    }

    var closer = t.closest('[data-close]');
    if (closer) {
      if (closer.classList.contains('overlay') || closer.classList.contains('modal')) {
        if (t === closer) closer.classList.remove('is-open');
      } else {
        var box = closer.closest('.overlay, .modal');
        if (box) box.classList.remove('is-open');
      }
    }

    var opener = t.closest('[data-sheet]');
    if (opener) { openSheet(opener.getAttribute('data-sheet')); return; }

    var modalOpener = t.closest('[data-modal]');
    if (modalOpener) {
      var mo = document.getElementById(modalOpener.getAttribute('data-modal'));
      if (mo) mo.classList.add('is-open');
    }

    var toaster = t.closest('[data-toast]');
    if (toaster) { window.toast(toaster.getAttribute('data-toast')); }

    var link = t.closest('[data-href]');
    if (link) {
      var href = link.getAttribute('data-href');
      if (href && href !== '#') window.location.href = href;
      else window.toast(link.getAttribute('data-msg') || '该页面不在本次原型范围内');
      return;
    }

    var toggle = t.closest('[data-toggle]');
    if (toggle) { toggle.classList.toggle('is-on'); }

    var like = t.closest('[data-like]');
    if (like) {
      var on = like.classList.toggle('is-on');
      var n = like.querySelector('.js-count');
      if (n) n.textContent = on ? (parseInt(n.textContent, 10) + 1) : (parseInt(n.textContent, 10) - 1);
      var ic = like.querySelector('[data-icon]');
      if (ic) { if (on) ic.setAttribute('data-fill', '1'); else ic.removeAttribute('data-fill'); }
    }

    var seg = t.closest('.segmented__item');
    if (seg) {
      seg.parentNode.querySelectorAll('.segmented__item').forEach(function (x) { x.classList.remove('is-on'); });
      seg.classList.add('is-on');
    }

    var tabx = t.closest('.tabs__item');
    if (tabx) {
      tabx.parentNode.querySelectorAll('.tabs__item').forEach(function (x) { x.classList.remove('is-on'); });
      tabx.classList.add('is-on');
    }

    var chip = t.closest('.chip[data-chip]');
    if (chip) {
      var chipGroup = chip.parentNode;
      if (chipGroup.getAttribute('data-chip-group') === 'single') {
        chipGroup.querySelectorAll('.chip[data-chip]').forEach(function (x) { x.classList.remove('chip--on'); });
        chip.classList.add('chip--on');
      } else {
        chip.classList.toggle('chip--on');
      }
    }

    var pick = t.closest('.pick[data-pick]');
    if (pick) { pick.classList.toggle('is-on'); }

    var choice = t.closest('.choice');
    if (choice && choice.hasAttribute('data-choice')) {
      var multi = choice.parentNode.getAttribute('data-choice-group') === 'single';
      if (multi) {
        choice.parentNode.querySelectorAll('.choice').forEach(function (x) { x.classList.remove('is-on'); });
      }
      choice.classList.toggle('is-on');
    }
  });

  /* ---------------- 返回原型总览入口 ---------------- */
  function injectHomeLink() {
    var box = document.querySelector('.device') || document.querySelector('.admin-shell');
    if (!box || document.body.getAttribute('data-proto-home') === 'off') return;
    var a = document.createElement('a');
    a.className = 'proto-home';
    a.href = '../index.html';
    a.textContent = '← 返回原型总览';
    document.body.appendChild(a);
  }

  window.renderIcons = renderIcons;

  function boot() {
    renderStatusBar();
    renderTabBars();
    renderAdmin();
    renderIcons();
    injectHomeLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
