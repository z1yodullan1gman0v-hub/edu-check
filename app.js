const MAIN_DIRECTOR_TG_ID = 8914149525;
const STORAGE_KEY = "edu_check_v7_data";

const I18N = {
  ru: {
    pageTitle: "edu-check — Школьная система",
    subtitle: "Электронный журнал и календарь уроков",
    fullscreenBtn: "На весь экран",
    exitFullscreenBtn: "Обычный экран",
    styleBtn: "Стиль сайта",
    editName: "Изменить имя",
    createBtn: "+ Создать",
    resetBtn: "Сбросить",
    closeBtn: "Закрыть",
    navHome: "Главная",
    navClasses: "Классы и ученики",
    navStaff: "Персонал",
    navParents: "Родители",
    navTimetable: "Календарь уроков",
    navJournal: "Журнал оценок",
    defaultDirectorName: "Директор школы",
    defaultDirectorSubject: "Администрация",
    guestViewerName: "Гость / Родитель",
    guestViewerSubject: "Режим просмотра",
    roleLabel: "Роль",
    roleDirector: "Директор",
    roleHomeroom: "Классный руководитель",
    roleTeacher: "Учитель",
    roleGuest: "Просмотр",
    days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    daysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    prevWeek: "← Пред. неделя",
    todayBtn: "Сегодня",
    nextWeek: "След. неделя →",
    lessonsShort: "ур.",
    statClasses: "Классы",
    statStaff: "Сотрудники",
    statStudents: "Ученики",
    statParents: "Родители",
    quickStartText: "Создавайте классы, добавляйте руководителей, учителей, учеников и родителей с номером телефона (по желанию). Нажимайте на дни недели в календаре, чтобы назначать уроки.",
    guestStartText: "Вы вошли в режиме просмотра. Создание классов, редактирование расписания и управление персоналом доступны только директору школы.",
    noClasses: "Классов пока нет.",
    noStudents: "В этом классе пока нет учеников.",
    noParents: "Родителей пока нет.",
    classLabel: "Класс",
    classNameInput: "Название класса (например, 8-А)",
    roomLabel: "Кабинет",
    subjectLabel: "Предмет",
    phoneOptional: "Телефон (необязательно)",
    phonePlaceholder: "+998 90 123 45 67",
    homeroomLabel: "Классный руководитель",
    selectFromList: "— Выбрать из списка —",
    inlineLeaderHint: "Или сразу создать нового классного руководителя:",
    placeholderName: "Каримов Жахон",
    placeholderStudent: "Алиев Вали",
    placeholderParent: "Алиева Нигора",
    placeholderSubject: "Алгебра, Физика...",
    addStudentShort: "+ Ученик",
    studentLabel: "Ученик (привязка)",
    noStudentBound: "Без привязки",
    lessonNum: "Урок",
    clickToAssign: "Нажмите, чтобы назначить",
    emptySlotText: "Нет урока",
    gradesCol: "Оценки (0–10)",
    attendanceCol: "Посещаемость",
    actionCol: "Действие",
    writeGrade: "Вписать",
    present: "Был",
    late: "Опоздал",
    absent: "НБ",
    createModalTitle: "Создать с нуля",
    ctabClass: "1. Класс",
    ctabStaff: "2. Руководитель",
    ctabStudent: "3. Ученик",
    ctabParent: "4. Родитель",
    themeModalTitle: "Стиль сайта (комфорт для глаз)",
    themeSageName: "Оливковая бумага",
    themeSageDesc: "Мягкий зелёно-серый фон без бликов",
    themeSandName: "Тёплый песок",
    themeSandDesc: "Кремовый оттенок, снижает синий свет",
    themeSlateName: "Спокойный сланец",
    themeSlateDesc: "Матовый серо-голубой тон",
    themeDarkName: "Тёмный графит",
    themeDarkDesc: "Комфортный ночной режим",
    editModalTitle: "Изменить данные профиля",
    fullName: "ФИО",
    save: "Сохранить",
    assignLessonTitle: "Назначить урок",
    saveLesson: "Сохранить урок",
    clearSlot: "Очистить слот",
    writeGradeTitle: "Вписать оценку",
    gradeRange: "Оценка (от 0 до 10)",
    noteOptional: "Комментарий (необязательно)",
    savedToast: "Сохранено",
    noAccessToast: "Доступно только директору",
    resetConfirm: "Удалить все классы, учителей, родителей, уроки и оценки и начать заново?"
  },
  en: {
    pageTitle: "edu-check — School System",
    subtitle: "Digital gradebook and lesson calendar",
    fullscreenBtn: "Full screen",
    exitFullscreenBtn: "Exit full screen",
    styleBtn: "Site style",
    editName: "Edit name",
    createBtn: "+ Create",
    resetBtn: "Reset",
    closeBtn: "Close",
    navHome: "Home",
    navClasses: "Classes & Students",
    navStaff: "Staff",
    navParents: "Parents",
    navTimetable: "Lesson Calendar",
    navJournal: "Gradebook",
    defaultDirectorName: "School Director",
    defaultDirectorSubject: "Administration",
    guestViewerName: "Guest / Parent",
    guestViewerSubject: "View-only mode",
    roleLabel: "Role",
    roleDirector: "Director",
    roleHomeroom: "Homeroom Teacher",
    roleTeacher: "Teacher",
    roleGuest: "Viewer",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    prevWeek: "← Prev week",
    todayBtn: "Today",
    nextWeek: "Next week →",
    lessonsShort: "les.",
    statClasses: "Classes",
    statStaff: "Staff",
    statStudents: "Students",
    statParents: "Parents",
    quickStartText: "Create classes, add leaders, teachers, students, and parents with optional phone numbers. Click any weekday in the calendar to assign lessons.",
    guestStartText: "You are in view-only mode. Creating classes, editing schedules, and managing staff are restricted to the School Director.",
    noClasses: "No classes yet.",
    noStudents: "No students in this class yet.",
    noParents: "No parents yet.",
    classLabel: "Class",
    classNameInput: "Class name (e.g., 8-A)",
    roomLabel: "Room",
    subjectLabel: "Subject",
    phoneOptional: "Phone number (optional)",
    phonePlaceholder: "+998 90 123 45 67",
    homeroomLabel: "Homeroom teacher",
    selectFromList: "— Select from list —",
    inlineLeaderHint: "Or create a new homeroom teacher right here:",
    placeholderName: "Karimov Jakhon",
    placeholderStudent: "Aliev Vali",
    placeholderParent: "Alieva Nigora",
    placeholderSubject: "Algebra, Physics...",
    addStudentShort: "+ Student",
    studentLabel: "Linked student",
    noStudentBound: "Not linked",
    lessonNum: "Lesson",
    clickToAssign: "Click to assign",
    emptySlotText: "No lesson",
    gradesCol: "Grades (0–10)",
    attendanceCol: "Attendance",
    actionCol: "Action",
    writeGrade: "Enter grade",
    present: "Present",
    late: "Late",
    absent: "Absent",
    createModalTitle: "Create from scratch",
    ctabClass: "1. Class",
    ctabStaff: "2. Leader",
    ctabStudent: "3. Student",
    ctabParent: "4. Parent",
    themeModalTitle: "Site style (eye comfort)",
    themeSageName: "Olive Paper",
    themeSageDesc: "Soft sage-gray without glare",
    themeSandName: "Warm Sand",
    themeSandDesc: "Creamy tone reducing blue light",
    themeSlateName: "Calm Slate",
    themeSlateDesc: "Matte cool blue-gray palette",
    themeDarkName: "Dark Graphite",
    themeDarkDesc: "Low-glare night mode",
    editModalTitle: "Edit profile details",
    fullName: "Full name",
    save: "Save",
    assignLessonTitle: "Assign lesson",
    saveLesson: "Save lesson",
    clearSlot: "Clear slot",
    writeGradeTitle: "Enter grade",
    gradeRange: "Grade (0 to 10)",
    noteOptional: "Note (optional)",
    savedToast: "Saved",
    noAccessToast: "Director access only",
    resetConfirm: "Delete all classes, teachers, parents, lessons, and grades to start fresh?"
  },
  uz: {
    pageTitle: "edu-check — Maktab tizimi",
    subtitle: "Elektron jurnal va darslar taqvimi",
    fullscreenBtn: "Toʻliq ekran",
    exitFullscreenBtn: "Oddiy ekran",
    styleBtn: "Sayt uslubi",
    editName: "Ismni oʻzgartirish",
    createBtn: "+ Yaratish",
    resetBtn: "Tozalash",
    closeBtn: "Yopish",
    navHome: "Bosh sahifa",
    navClasses: "Sinflar va oʻquvchilar",
    navStaff: "Xodimlar",
    navParents: "Ota-onalar",
    navTimetable: "Darslar taqvimi",
    navJournal: "Baholar jurnali",
    defaultDirectorName: "Maktab direktori",
    defaultDirectorSubject: "Maʼmuriyat",
    guestViewerName: "Mehmon / Ota-ona",
    guestViewerSubject: "Koʻrish rejimi",
    roleLabel: "Lavozim",
    roleDirector: "Direktor",
    roleHomeroom: "Sinf rahbari",
    roleTeacher: "Oʻqituvchi",
    roleGuest: "Koʻrish",
    days: ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
    daysShort: ["Du", "Se", "Ch", "Pa", "Ju", "Sh"],
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
    prevWeek: "← Oldingi hafta",
    todayBtn: "Bugun",
    nextWeek: "Keyingi hafta →",
    lessonsShort: "dars",
    statClasses: "Sinflar",
    statStaff: "Xodimlar",
    statStudents: "Oʻquvchilar",
    statParents: "Ota-onalar",
    quickStartText: "Sinflar yarating, rahbarlar, oʻqituvchilar, oʻquvchilar va ota-onalarni (telefon raqami ixtiyoriy) qoʻshing. Dars belgilash uchun taqvimdagi hafta kunini bosing.",
    guestStartText: "Siz koʻrish rejimidasiz. Sinflar yaratish, dars jadvalini oʻzgartirish va xodimlarni boshqarish faqat direktor uchun ochiq.",
    noClasses: "Hozircha sinflar yoʻq.",
    noStudents: "Bu sinfda hozircha oʻquvchilar yoʻq.",
    noParents: "Hozircha ota-onalar yoʻq.",
    classLabel: "Sinf",
    classNameInput: "Sinf nomi (masalan, 8-A)",
    roomLabel: "Xona",
    subjectLabel: "Fan",
    phoneOptional: "Telefon raqami (ixtiyoriy)",
    phonePlaceholder: "+998 90 123 45 67",
    homeroomLabel: "Sinf rahbari",
    selectFromList: "— Roʻyxatdan tanlang —",
    inlineLeaderHint: "Yoki shu yerda yangi sinf rahbari yarating:",
    placeholderName: "Karimov Jahon",
    placeholderStudent: "Aliyev Vali",
    placeholderParent: "Aliyeva Nigora",
    placeholderSubject: "Algebra, Fizika...",
    addStudentShort: "+ Oʻquvchi",
    studentLabel: "Oʻquvchi (biriktirish)",
    noStudentBound: "Biriktirilmagan",
    lessonNum: "Dars",
    clickToAssign: "Belgilash uchun bosing",
    emptySlotText: "Dars yoʻq",
    gradesCol: "Baholar (0–10)",
    attendanceCol: "Davomat",
    actionCol: "Amal",
    writeGrade: "Baho yozish",
    present: "Keldi",
    late: "Kechikdi",
    absent: "Kelmagan",
    createModalTitle: "Noldan yaratish",
    ctabClass: "1. Sinf",
    ctabStaff: "2. Rahbar",
    ctabStudent: "3. Oʻquvchi",
    ctabParent: "4. Ota-ona",
    themeModalTitle: "Sayt uslubi (koʻzga qulay)",
    themeSageName: "Zaytun qogʻoz",
    themeSageDesc: "Yaltirashsiz yumshoq yashil-kulrang fon",
    themeSandName: "Iliq qum",
    themeSandDesc: "Koʻk nurni kamaytiruvchi qaymoqrang uslub",
    themeSlateName: "Sokin shifer",
    themeSlateDesc: "Mat rangli kulrang-moviy ohang",
    themeDarkName: "Toʻq grafit",
    themeDarkDesc: "Koʻzni charchatmaydigan tungi rejim",
    editModalTitle: "Profil maʼlumotlarini oʻzgartirish",
    fullName: "F.I.Sh.",
    save: "Saqlash",
    assignLessonTitle: "Dars belgilash",
    saveLesson: "Darsni saqlash",
    clearSlot: "Boʻshatish",
    writeGradeTitle: "Baho yozish",
    gradeRange: "Baho (0 dan 10 gacha)",
    noteOptional: "Izoh (ixtiyoriy)",
    savedToast: "Saqlandi",
    noAccessToast: "Faqat direktor uchun",
    resetConfirm: "Barcha sinflar, oʻqituvchilar, ota-onalar, darslar va baholarni oʻchirib noldan boshlaysizmi?"
  }
};

const THEMES = [
  { id: "sage", nameKey: "themeSageName", descKey: "themeSageDesc", colors: ["#e5eae1", "#f2f5ef", "#336151"] },
  { id: "sand", nameKey: "themeSandName", descKey: "themeSandDesc", colors: ["#ebe5d8", "#f5f1e8", "#6c5838"] },
  { id: "slate", nameKey: "themeSlateName", descKey: "themeSlateDesc", colors: ["#e2e7ec", "#f0f3f6", "#365975"] },
  { id: "dark", nameKey: "themeDarkName", descKey: "themeDarkDesc", colors: ["#181c1a", "#212624", "#52947c"] }
];

function detectTelegramUser() {
  try {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      const isMobile = ["android", "android_x", "ios"].includes(tg.platform);
      document.body.classList.add(isMobile ? "is-mobile" : "is-desktop");
      if (isMobile && typeof tg.requestFullscreen === "function") {
        tg.requestFullscreen();
      }
      if (tg.initDataUnsafe?.user) {
        return tg.initDataUnsafe.user;
      }
    }
  } catch {}
  return null;
}

const TG_USER = detectTelegramUser();

function isOwnerDirector() {
  if (!TG_USER) return true;
  return Number(TG_USER.id) === Number(MAIN_DIRECTOR_TG_ID);
}

function getInitialState() {
  return {
    lang: "ru",
    theme: "sage",
    activeUserId: isOwnerDirector() ? "dir_1" : "guest_1",
    activeTab: "home",
    selectedClassId: null,
    selectedDayIndex: 0,
    weekOffset: 0,
    createModalTab: "class",
    staff: [
      {
        id: "dir_1",
        name: "",
        phone: "",
        isDefaultDirector: true,
        role: "director",
        subject: "",
        room: "101"
      }
    ],
    classes: [],
    students: [],
    parents: [],
    timetable: [],
    grades: [],
    attendance: {}
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const base = getInitialState();
    if (!raw) return base;
    const merged = { ...base, ...JSON.parse(raw) };
    if (!isOwnerDirector() && merged.activeUserId === "dir_1") {
      merged.activeUserId = "guest_1";
    }
    return merged;
  } catch {
    return getInitialState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return I18N[state.lang]?.[key] ?? I18N.ru[key] ?? key;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getStaffDisplayName(staffObj) {
  if (!staffObj) return "—";
  if (staffObj.id === "guest_1") {
    if (TG_USER?.first_name) {
      return `${TG_USER.first_name}${TG_USER.last_name ? " " + TG_USER.last_name : ""}`;
    }
    return t("guestViewerName");
  }
  if (staffObj.isDefaultDirector && !staffObj.name) return t("defaultDirectorName");
  return staffObj.name;
}

function getStaffDisplaySubject(staffObj) {
  if (!staffObj) return "";
  if (staffObj.id === "guest_1") return t("guestViewerSubject");
  if (staffObj.isDefaultDirector && !staffObj.subject) return t("defaultDirectorSubject");
  return staffObj.subject || "";
}

function getActiveUser() {
  if (!isOwnerDirector()) {
    const foundStaff = state.staff.find((s) => s.id === state.activeUserId && s.role !== "director");
    if (foundStaff) return foundStaff;
    return {
      id: "guest_1",
      name: "",
      role: "guest",
      subject: "",
      room: ""
    };
  }
  return state.staff.find((s) => s.id === state.activeUserId) || state.staff[0];
}

function canAdminister() {
  const u = getActiveUser();
  return isOwnerDirector() && u.role === "director";
}

function canGrade() {
  const u = getActiveUser();
  if (u.role === "guest") return false;
  if (u.role === "director") return isOwnerDirector();
  return u.role === "teacher" || u.role === "homeroom";
}

function getGradeClass(val) {
  const num = Number(val);
  if (num >= 8) return "grade-green";
  if (num >= 6) return "grade-yellow";
  return "grade-red";
}

function showToast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function renderCustomSelect(container, options, selectedValue, onSelect, placeholder = "—") {
  if (!container) return;
  const selectedObj = options.find((o) => String(o.value) === String(selectedValue));
  const labelText = selectedObj ? selectedObj.label : placeholder;

  container.innerHTML = `
    <button type="button" class="custom-select-trigger">
      <span>${escapeHtml(labelText)}</span>
      <span class="custom-select-caret">▼</span>
    </button>
    <div class="custom-select-menu">
      ${options
        .map(
          (opt) => `
          <div class="custom-select-option ${String(opt.value) === String(selectedValue) ? "selected" : ""}" data-val="${escapeHtml(opt.value)}">
            <span>${escapeHtml(opt.label)}</span>
            ${opt.sub ? `<span class="custom-select-sub">${escapeHtml(opt.sub)}</span>` : ""}
          </div>
        `
        )
        .join("")}
    </div>
  `;

  const trigger = container.querySelector(".custom-select-trigger");
  trigger.onclick = (e) => {
    e.stopPropagation();
    const wasOpen = container.classList.contains("open");
    closeAllCustomSelects();
    if (!wasOpen) container.classList.add("open");
  };

  container.querySelectorAll(".custom-select-option").forEach((optEl) => {
    optEl.onclick = (e) => {
      e.stopPropagation();
      const val = optEl.dataset.val;
      container.classList.remove("open");
      onSelect(val);
    };
  });
}

function closeAllCustomSelects() {
  document.querySelectorAll(".custom-select.open").forEach((el) => el.classList.remove("open"));
}

document.addEventListener("click", closeAllCustomSelects);

function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = (day === 0 ? -6 : 1 - day) + weekOffset * 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);

  const list = [];
  for (let i = 0; i < 6; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    list.push({
      dateObj: d,
      dayNum: d.getDate(),
      monthIdx: d.getMonth(),
      year: d.getFullYear(),
      iso: d.toISOString().slice(0, 10)
    });
  }
  return list;
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.documentElement.setAttribute("data-theme", state.theme || "sage");
  document.title = t("pageTitle");

  document.getElementById("t-subtitle").textContent = t("subtitle");
  const isFs = Boolean(document.fullscreenElement || window.Telegram?.WebApp?.isFullscreen);
  document.getElementById("fullscreenBtn").textContent = isFs ? t("exitFullscreenBtn") : t("fullscreenBtn");
  document.getElementById("openThemeBtn").textContent = t("styleBtn");
  document.getElementById("editNameBtn").textContent = t("editName");
  document.getElementById("openCreateBtn").textContent = t("createBtn");
  document.getElementById("resetAllBtn").textContent = t("resetBtn");

  const isAdmin = canAdminister();
  document.getElementById("openCreateBtn").style.display = isAdmin ? "" : "none";
  document.getElementById("resetAllBtn").style.display = isAdmin ? "" : "none";
  document.getElementById("editNameBtn").style.display = isAdmin ? "" : "none";

  document.getElementById("nav-home").textContent = t("navHome");
  document.getElementById("nav-classes").textContent = t("navClasses");
  document.getElementById("nav-staff").textContent = t("navStaff");
  document.getElementById("nav-parents").textContent = t("navParents");
  document.getElementById("nav-timetable").textContent = t("navTimetable");
  document.getElementById("nav-journal").textContent = t("navJournal");

  document.getElementById("nav-parents").style.display = isAdmin ? "" : "none";

  ["closeCreateBtn", "closeThemeBtn", "closeEditBtn", "closeLessonBtn", "closeGradeBtn"].forEach((id) => {
    document.getElementById(id).textContent = t("closeBtn");
  });

  document.getElementById("modalCreateTitle").textContent = t("createModalTitle");
  document.getElementById("ctab-class").textContent = t("ctabClass");
  document.getElementById("ctab-staff").textContent = t("ctabStaff");
  document.getElementById("ctab-student").textContent = t("ctabStudent");
  document.getElementById("ctab-parent").textContent = t("ctabParent");

  document.getElementById("themeModalTitle").textContent = t("themeModalTitle");

  document.getElementById("modalEditTitle").textContent = t("editModalTitle");
  document.getElementById("lbl-edit-name").textContent = t("fullName");
  document.getElementById("lbl-edit-phone").textContent = t("phoneOptional");
  document.getElementById("editPhoneInput").placeholder = t("phonePlaceholder");
  document.getElementById("lbl-edit-subject").textContent = t("subjectLabel");
  document.getElementById("lbl-edit-room").textContent = t("roomLabel");
  document.getElementById("btn-save-name").textContent = t("save");

  document.getElementById("lessonModalTitle").textContent = t("assignLessonTitle");
  document.getElementById("lbl-lesson-subject").textContent = t("subjectLabel");
  document.getElementById("lessonSubjectInput").placeholder = t("placeholderSubject");
  document.getElementById("lbl-lesson-teacher").textContent = t("roleTeacher");
  document.getElementById("lbl-lesson-room").textContent = t("roomLabel");
  document.getElementById("btn-save-lesson").textContent = t("saveLesson");
  document.getElementById("deleteLessonBtn").textContent = t("clearSlot");

  document.getElementById("gradeModalTitle").textContent = t("writeGradeTitle");
  document.getElementById("lbl-grade-subject").textContent = t("subjectLabel");
  document.getElementById("lbl-grade-value").textContent = t("gradeRange");
  document.getElementById("lbl-grade-note").textContent = t("noteOptional");
  document.getElementById("btn-save-grade").textContent = t("writeGradeTitle");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });
}

function renderTopbarUserDropdown() {
  const roleMap = {
    director: t("roleDirector"),
    homeroom: t("roleHomeroom"),
    teacher: t("roleTeacher"),
    guest: t("roleGuest")
  };

  let visibleProfiles = [];
  if (isOwnerDirector()) {
    visibleProfiles = state.staff;
  } else {
    const guestProfile = { id: "guest_1", role: "guest" };
    const nonDirectors = state.staff.filter((s) => s.role !== "director");
    visibleProfiles = [guestProfile, ...nonDirectors];
  }

  const options = visibleProfiles.map((s) => ({
    value: s.id,
    label: getStaffDisplayName(s),
    sub: roleMap[s.role] || s.role
  }));

  const currentUser = getActiveUser();
  renderCustomSelect(document.getElementById("userDropdown"), options, currentUser.id, (val) => {
    state.activeUserId = val;
    saveState();
    renderApp();
  });
}

function renderApp() {
  applyTranslations();
  renderTopbarUserDropdown();

  if (!canAdminister() && state.activeTab === "parents") {
    state.activeTab = "home";
  }

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === state.activeTab);
  });

  if (!state.selectedClassId && state.classes.length > 0) {
    state.selectedClassId = state.classes[0].id;
  }

  const root = document.getElementById("appRoot");
  if (state.activeTab === "home") root.innerHTML = renderHomeTab();
  else if (state.activeTab === "classes") root.innerHTML = renderClassesTab();
  else if (state.activeTab === "staff") root.innerHTML = renderStaffTab();
  else if (state.activeTab === "parents") root.innerHTML = renderParentsTab();
  else if (state.activeTab === "timetable") root.innerHTML = renderTimetableTab();
  else if (state.activeTab === "journal") root.innerHTML = renderJournalTab();

  const classDropdown = document.getElementById("pageClassDropdown");
  if (classDropdown && state.classes.length > 0) {
    const clsOptions = state.classes.map((c) => ({
      value: c.id,
      label: `${t("classLabel")} ${c.name}`,
      sub: c.room ? `${t("roomLabel")} ${c.room}` : ""
    }));
    renderCustomSelect(classDropdown, clsOptions, state.selectedClassId, (val) => {
      state.selectedClassId = val;
      saveState();
      renderApp();
    });
  }

  if (!document.getElementById("createModal").classList.contains("hidden")) {
    renderCreateModalBody();
  }
}

function renderHomeTab() {
  const user = getActiveUser();
  const displaySubject = getStaffDisplaySubject(user);
  const isAdmin = canAdminister();

  return `
    <div class="grid-3" style="margin-bottom: 18px;">
      <div class="card">
        <div class="muted">${t("statClasses")}</div>
        <div class="stat-value">${state.classes.length}</div>
      </div>
      <div class="card">
        <div class="muted">${t("statStaff")}</div>
        <div class="stat-value">${state.staff.length}</div>
      </div>
      <div class="card">
        <div class="muted">${t("statStudents")} / ${t("statParents")}</div>
        <div class="stat-value">${state.students.length} / ${state.parents.length}</div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">${escapeHtml(getStaffDisplayName(user))}</div>
          <div class="muted">
            ${escapeHtml(displaySubject)}
            ${user.room ? " · " + t("roomLabel") + " " + escapeHtml(user.room) : ""}
            ${user.phone ? " · " + escapeHtml(user.phone) : ""}
          </div>
        </div>
        <div class="btn-row">
          <button type="button" class="btn btn-secondary" onclick="openThemeModal()">${t("styleBtn")}</button>
          ${
            isAdmin
              ? `
                <button type="button" class="btn btn-secondary" onclick="openEditNameModal()">${t("editName")}</button>
                <button type="button" class="btn btn-primary" onclick="openCreateModal('class')">${t("createBtn")}</button>
              `
              : ""
          }
        </div>
      </div>
      <p class="muted">${isAdmin ? t("quickStartText") : t("guestStartText")}</p>
    </div>
  `;
}

function renderClassesTab() {
  const isAdmin = canAdminister();

  if (state.classes.length === 0) {
    return `
      <div class="empty-state">
        <p>${t("noClasses")}</p>
        ${isAdmin ? `<button type="button" class="btn btn-primary" onclick="openCreateModal('class')">${t("createBtn")}</button>` : ""}
      </div>
    `;
  }

  return `
    <div class="grid-2">
      ${state.classes
        .map((cls) => {
          const leader = state.staff.find((s) => s.id === cls.homeroomId);
          const clsStudents = state.students.filter((st) => st.classId === cls.id);
          return `
            <div class="card">
              <div class="card-header">
                <div>
                  <div class="card-title">${t("classLabel")} ${escapeHtml(cls.name)}</div>
                  <div class="muted">${t("homeroomLabel")}: ${leader ? escapeHtml(getStaffDisplayName(leader)) : "—"} · ${t("roomLabel")}: ${escapeHtml(cls.room || "—")}</div>
                </div>
                ${isAdmin ? `<button type="button" class="btn btn-secondary btn-sm" onclick="openCreateModal('student', '${cls.id}')">${t("addStudentShort")}</button>` : ""}
              </div>
              ${
                clsStudents.length === 0
                  ? `<div class="muted">${t("noStudents")}</div>`
                  : `<ul class="student-list">
                      ${clsStudents
                        .map(
                          (st, idx) =>
                            `<li class="student-item">
                              <span><strong>${idx + 1}. ${escapeHtml(st.name)}</strong> ${st.phone ? `<span class="muted">· ${escapeHtml(st.phone)}</span>` : ""}</span>
                              ${isAdmin ? `<span class="muted">/link ${st.code}</span>` : ""}
                            </li>`
                        )
                        .join("")}
                    </ul>`
              }
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStaffTab() {
  const isAdmin = canAdminister();
  const roleMap = {
    director: t("roleDirector"),
    homeroom: t("roleHomeroom"),
    teacher: t("roleTeacher")
  };

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${t("navStaff")}</div>
        ${isAdmin ? `<button type="button" class="btn btn-primary btn-sm" onclick="openCreateModal('staff')">${t("createBtn")}</button>` : ""}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("fullName")}</th>
              <th>${t("roleLabel")}</th>
              <th>${t("subjectLabel")}</th>
              <th>${t("roomLabel")}</th>
              <th>${t("phoneOptional")}</th>
            </tr>
          </thead>
          <tbody>
            ${state.staff
              .map(
                (s) => `
                  <tr>
                    <td><strong>${escapeHtml(getStaffDisplayName(s))}</strong></td>
                    <td>${roleMap[s.role] || s.role}</td>
                    <td>${escapeHtml(getStaffDisplaySubject(s) || "—")}</td>
                    <td>${escapeHtml(s.room || "—")}</td>
                    <td>${escapeHtml(s.phone || "—")}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderParentsTab() {
  if (!canAdminister()) return "";
  if (state.parents.length === 0) {
    return `
      <div class="empty-state">
        <p>${t("noParents")}</p>
        <button type="button" class="btn btn-primary" onclick="openCreateModal('parent')">${t("createBtn")}</button>
      </div>
    `;
  }

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${t("navParents")}</div>
        <button type="button" class="btn btn-primary btn-sm" onclick="openCreateModal('parent')">${t("createBtn")}</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t("fullName")}</th>
              <th>${t("phoneOptional")}</th>
              <th>${t("studentLabel")}</th>
            </tr>
          </thead>
          <tbody>
            ${state.parents
              .map((p) => {
                const st = state.students.find((s) => s.id === p.studentId);
                const cls = st ? state.classes.find((c) => c.id === st.classId) : null;
                return `
                  <tr>
                    <td><strong>${escapeHtml(p.name)}</strong></td>
                    <td>${escapeHtml(p.phone || "—")}</td>
                    <td>${st ? `${escapeHtml(st.name)}${cls ? ` (${escapeHtml(cls.name)})` : ""}` : t("noStudentBound")}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTimetableTab() {
  const isAdmin = canAdminister();

  if (state.classes.length === 0) {
    return `
      <div class="empty-state">
        <p>${t("noClasses")}</p>
        ${isAdmin ? `<button type="button" class="btn btn-primary" onclick="openCreateModal('class')">${t("createBtn")}</button>` : ""}
      </div>
    `;
  }

  const days = t("days");
  const daysShort = t("daysShort");
  const months = t("months");
  const weekDates = getWeekDates(state.weekOffset);
  const firstDay = weekDates[0];
  const lastDay = weekDates[5];
  const monthHeader =
    firstDay.monthIdx === lastDay.monthIdx
      ? `${months[firstDay.monthIdx]} ${firstDay.year}`
      : `${months[firstDay.monthIdx]} — ${months[lastDay.monthIdx]} ${lastDay.year}`;

  const lessons = [1, 2, 3, 4, 5, 6];

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${t("navTimetable")}</div>
        <div class="custom-select" id="pageClassDropdown"></div>
      </div>

      <div class="calendar-bar">
        <div class="calendar-top">
          <span class="calendar-month-label">${monthHeader}</span>
          <div class="calendar-nav-btns">
            <button type="button" class="btn btn-secondary btn-sm" onclick="shiftWeek(-1)">${t("prevWeek")}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="shiftWeek(0)">${t("todayBtn")}</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="shiftWeek(1)">${t("nextWeek")}</button>
          </div>
        </div>

        <div class="calendar-week-grid">
          ${weekDates
            .map((dObj, idx) => {
              const count = state.timetable.filter(
                (item) => item.classId === state.selectedClassId && item.dayIndex === idx
              ).length;
              return `
                <div class="cal-day-card ${state.selectedDayIndex === idx ? "active" : ""}" onclick="selectDayAndOpen(${idx})">
                  <span class="cal-day-name">${daysShort[idx]}</span>
                  <span class="cal-day-num">${dObj.dayNum}</span>
                  <span class="cal-day-count">${count} ${t("lessonsShort")}</span>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th style="width:55px;">#</th>
              ${days
                .map(
                  (d, idx) =>
                    `<th style="${idx === state.selectedDayIndex ? "background:var(--accent-soft); color:var(--accent);" : ""}">${d} (${weekDates[idx].dayNum})</th>`
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${lessons
              .map(
                (num) => `
                  <tr>
                    <td><strong>${num}</strong></td>
                    ${days
                      .map((_, dayIdx) => {
                        const slot = state.timetable.find(
                          (item) =>
                            item.classId === state.selectedClassId &&
                            item.dayIndex === dayIdx &&
                            item.lessonNum === num
                        );
                        const teacher = slot ? state.staff.find((s) => s.id === slot.teacherId) : null;
                        return `
                          <td class="slot-cell" onclick="${isAdmin ? `openLessonModal(${dayIdx}, ${num})` : ""}">
                            ${
                              slot
                                ? `<div class="slot-subject">${escapeHtml(slot.subject)}</div>
                                   <div class="slot-meta">${teacher ? escapeHtml(getStaffDisplayName(teacher)) : ""} ${slot.room ? "· " + escapeHtml(slot.room) : ""}</div>`
                                : `<span class="slot-empty">${isAdmin ? t("clickToAssign") : t("emptySlotText")}</span>`
                            }
                          </td>
                        `;
                      })
                      .join("")}
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderJournalTab() {
  const isAdmin = canAdminister();
  const allowGrading = canGrade();

  if (state.classes.length === 0) {
    return `
      <div class="empty-state">
        <p>${t("noClasses")}</p>
        ${isAdmin ? `<button type="button" class="btn btn-primary" onclick="openCreateModal('class')">${t("createBtn")}</button>` : ""}
      </div>
    `;
  }

  const weekDates = getWeekDates(state.weekOffset);
  const activeDateObj = weekDates[state.selectedDayIndex] || weekDates[0];
  const activeDateIso = activeDateObj.iso;
  const clsStudents = state.students.filter((st) => st.classId === state.selectedClassId);

  return `
    <div class="card">
      <div class="card-header">
        <div class="card-title">${t("navJournal")} · ${t("days")[state.selectedDayIndex]} (${activeDateIso})</div>
        <div class="custom-select" id="pageClassDropdown"></div>
      </div>

      <div class="calendar-bar">
        <div class="calendar-week-grid">
          ${weekDates
            .map(
              (dObj, idx) => `
                <div class="cal-day-card ${state.selectedDayIndex === idx ? "active" : ""}" onclick="selectJournalDay(${idx})">
                  <span class="cal-day-name">${t("daysShort")[idx]}</span>
                  <span class="cal-day-num">${dObj.dayNum}</span>
                </div>
              `
            )
            .join("")}
        </div>
      </div>

      ${
        clsStudents.length === 0
          ? `<p class="muted">${t("noStudents")}</p>`
          : `
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>${t("fullName")}</th>
                    <th>${t("gradesCol")}</th>
                    <th>${t("attendanceCol")}</th>
                    ${allowGrading ? `<th>${t("actionCol")}</th>` : ""}
                  </tr>
                </thead>
                <tbody>
                  ${clsStudents
                    .map((st) => {
                      const stGrades = state.grades.filter((g) => g.studentId === st.id);
                      const attKey = `${st.id}_${activeDateIso}`;
                      const attStatus = state.attendance[attKey] || "";
                      return `
                        <tr>
                          <td><strong>${escapeHtml(st.name)}</strong></td>
                          <td>
                            <div class="grades-list">
                              ${
                                stGrades.length === 0
                                  ? `<span class="muted">—</span>`
                                  : stGrades
                                      .map(
                                        (g) =>
                                          `<span class="grade-badge ${getGradeClass(g.value)}" title="${escapeHtml(g.subject)}">${g.value} (${escapeHtml(g.subject)})</span>`
                                      )
                                      .join("")
                              }
                            </div>
                          </td>
                          <td>
                            ${
                              allowGrading
                                ? `<div class="att-group">
                                    <button type="button" class="att-btn ${attStatus === "present" ? "active-present" : ""}" onclick="setAttendance('${st.id}', 'present')">${t("present")}</button>
                                    <button type="button" class="att-btn ${attStatus === "late" ? "active-late" : ""}" onclick="setAttendance('${st.id}', 'late')">${t("late")}</button>
                                    <button type="button" class="att-btn ${attStatus === "absent" ? "active-absent" : ""}" onclick="setAttendance('${st.id}', 'absent')">${t("absent")}</button>
                                  </div>`
                                : `<span class="muted">${attStatus ? t(attStatus) : "—"}</span>`
                            }
                          </td>
                          ${
                            allowGrading
                              ? `<td>
                                  <button type="button" class="btn btn-primary btn-sm" onclick="openGradeModal('${st.id}')">${t("writeGrade")}</button>
                                </td>`
                              : ""
                          }
                        </tr>
                      `;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>
          `
      }
    </div>
  `;
}

window.shiftWeek = function (delta) {
  state.weekOffset = delta === 0 ? 0 : state.weekOffset + delta;
  saveState();
  renderApp();
};

window.selectJournalDay = function (dayIdx) {
  state.selectedDayIndex = dayIdx;
  saveState();
  renderApp();
};

window.selectDayAndOpen = function (dayIdx) {
  state.selectedDayIndex = dayIdx;
  saveState();
  renderApp();
  if (!canAdminister()) return;

  const occupied = state.timetable
    .filter((x) => x.classId === state.selectedClassId && x.dayIndex === dayIdx)
    .map((x) => x.lessonNum);
  const nextFree = [1, 2, 3, 4, 5, 6].find((n) => !occupied.includes(n)) || 1;
  openLessonModal(dayIdx, nextFree);
};

window.openThemeModal = function () {
  const body = document.getElementById("themeModalBody");
  body.innerHTML = `
    <div class="theme-grid">
      ${THEMES.map(
        (th) => `
          <button type="button" class="theme-option ${state.theme === th.id ? "active" : ""}" onclick="setTheme('${th.id}')">
            <div class="theme-swatches">
              ${th.colors.map((c) => `<span class="swatch" style="background:${c};"></span>`).join("")}
            </div>
            <div style="font-weight:600; font-size:14px; margin-bottom:2px;">${t(th.nameKey)}</div>
            <div class="muted" style="font-size:12px;">${t(th.descKey)}</div>
          </button>
        `
      ).join("")}
    </div>
  `;
  document.getElementById("themeModal").classList.remove("hidden");
};

window.setTheme = function (themeId) {
  state.theme = themeId;
  saveState();
  renderApp();
  openThemeModal();
};

window.openCreateModal = function (tab = "class", preselectClassId = null) {
  if (!canAdminister()) {
    showToast(t("noAccessToast"));
    return;
  }
  state.createModalTab = tab;
  if (preselectClassId) state.selectedClassId = preselectClassId;
  renderCreateModalBody();
  document.getElementById("createModal").classList.remove("hidden");
};

function renderCreateModalBody() {
  document.querySelectorAll(".modal-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.ctab === state.createModalTab);
  });

  const body = document.getElementById("createModalBody");

  if (state.createModalTab === "class") {
    let selectedLeaderId = "";
    body.innerHTML = `
      <form id="createClassForm" class="form-stack">
        <label class="field">
          <span>${t("classNameInput")}</span>
          <input type="text" id="newClassName" required placeholder="8-A" />
        </label>
        <label class="field">
          <span>${t("roomLabel")}</span>
          <input type="text" id="newClassRoom" placeholder="305" />
        </label>
        <div class="field">
          <span>${t("homeroomLabel")}</span>
          <div class="custom-select full-width" id="modalLeaderDropdown"></div>
        </div>

        <div class="divider-box">
          <span class="muted">${t("inlineLeaderHint")}</span>
          <input type="text" id="inlineLeaderName" placeholder="${t("fullName")} (${t("placeholderName")})" />
          <input type="tel" id="inlineLeaderPhone" placeholder="${t("phoneOptional")}" />
          <input type="text" id="inlineLeaderSubject" placeholder="${t("subjectLabel")} (${t("placeholderSubject")})" />
          <input type="text" id="inlineLeaderRoom" placeholder="${t("roomLabel")} (204)" />
        </div>

        <button type="submit" class="btn btn-primary">${t("save")}</button>
      </form>
    `;

    const leaderOpts = [
      { value: "", label: t("selectFromList") },
      ...state.staff.map((s) => ({ value: s.id, label: getStaffDisplayName(s), sub: s.room || "" }))
    ];
    const renderLeaderSelect = () =>
      renderCustomSelect(document.getElementById("modalLeaderDropdown"), leaderOpts, selectedLeaderId, (v) => {
        selectedLeaderId = v;
        renderLeaderSelect();
      });
    renderLeaderSelect();

    document.getElementById("createClassForm").onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("newClassName").value.trim();
      const room = document.getElementById("newClassRoom").value.trim();
      let leaderId = selectedLeaderId;

      const inlineName = document.getElementById("inlineLeaderName").value.trim();
      if (inlineName) {
        const newStaffId = "stf_" + Date.now();
        state.staff.push({
          id: newStaffId,
          name: inlineName,
          phone: document.getElementById("inlineLeaderPhone").value.trim(),
          role: "homeroom",
          subject: document.getElementById("inlineLeaderSubject").value.trim(),
          room: document.getElementById("inlineLeaderRoom").value.trim()
        });
        leaderId = newStaffId;
      }

      const newClassId = "cls_" + Date.now();
      state.classes.push({ id: newClassId, name, room, homeroomId: leaderId || null });
      state.selectedClassId = newClassId;
      saveState();
      closeModal("createModal");
      renderApp();
      showToast(t("savedToast"));
    };
  } else if (state.createModalTab === "staff") {
    let selectedRole = "teacher";
    body.innerHTML = `
      <form id="createStaffForm" class="form-stack">
        <div class="field">
          <span>${t("roleLabel")}</span>
          <div class="custom-select full-width" id="modalRoleDropdown"></div>
        </div>
        <label class="field">
          <span>${t("fullName")}</span>
          <input type="text" id="newStaffName" placeholder="${t("placeholderName")}" required />
        </label>
        <label class="field">
          <span>${t("phoneOptional")}</span>
          <input type="tel" id="newStaffPhone" placeholder="${t("phonePlaceholder")}" />
        </label>
        <label class="field">
          <span>${t("subjectLabel")}</span>
          <input type="text" id="newStaffSubject" placeholder="${t("placeholderSubject")}" />
        </label>
        <label class="field">
          <span>${t("roomLabel")}</span>
          <input type="text" id="newStaffRoom" placeholder="302" />
        </label>
        <button type="submit" class="btn btn-primary">${t("save")}</button>
      </form>
    `;

    const roleOpts = [
      { value: "teacher", label: t("roleTeacher") },
      { value: "homeroom", label: t("roleHomeroom") },
      { value: "director", label: t("roleDirector") }
    ];
    const renderRoleSel = () =>
      renderCustomSelect(document.getElementById("modalRoleDropdown"), roleOpts, selectedRole, (v) => {
        selectedRole = v;
        renderRoleSel();
      });
    renderRoleSel();

    document.getElementById("createStaffForm").onsubmit = (e) => {
      e.preventDefault();
      state.staff.push({
        id: "stf_" + Date.now(),
        role: selectedRole,
        name: document.getElementById("newStaffName").value.trim(),
        phone: document.getElementById("newStaffPhone").value.trim(),
        subject: document.getElementById("newStaffSubject").value.trim(),
        room: document.getElementById("newStaffRoom").value.trim()
      });
      saveState();
      closeModal("createModal");
      renderApp();
      showToast(t("savedToast"));
    };
  } else if (state.createModalTab === "student") {
    if (state.classes.length === 0) {
      body.innerHTML = `<p class="muted">${t("noClasses")}</p>`;
      return;
    }
    let selectedCls = state.selectedClassId || state.classes[0].id;
    body.innerHTML = `
      <form id="createStudentForm" class="form-stack">
        <div class="field">
          <span>${t("classLabel")}</span>
          <div class="custom-select full-width" id="modalStudentClassDropdown"></div>
        </div>
        <label class="field">
          <span>${t("fullName")}</span>
          <input type="text" id="newStudentName" placeholder="${t("placeholderStudent")}" required />
        </label>
        <label class="field">
          <span>${t("phoneOptional")}</span>
          <input type="tel" id="newStudentPhone" placeholder="${t("phonePlaceholder")}" />
        </label>
        <button type="submit" class="btn btn-primary">${t("save")}</button>
      </form>
    `;

    const clsOpts = state.classes.map((c) => ({ value: c.id, label: c.name }));
    const renderClsSel = () =>
      renderCustomSelect(document.getElementById("modalStudentClassDropdown"), clsOpts, selectedCls, (v) => {
        selectedCls = v;
        renderClsSel();
      });
    renderClsSel();

    document.getElementById("createStudentForm").onsubmit = (e) => {
      e.preventDefault();
      state.students.push({
        id: "stu_" + Date.now(),
        classId: selectedCls,
        name: document.getElementById("newStudentName").value.trim(),
        phone: document.getElementById("newStudentPhone").value.trim(),
        code: state.students.length + 1
      });
      saveState();
      closeModal("createModal");
      renderApp();
      showToast(t("savedToast"));
    };
  } else if (state.createModalTab === "parent") {
    let boundStudentId = "";
    body.innerHTML = `
      <form id="createParentForm" class="form-stack">
        <label class="field">
          <span>${t("fullName")}</span>
          <input type="text" id="newParentName" placeholder="${t("placeholderParent")}" required />
        </label>
        <label class="field">
          <span>${t("phoneOptional")}</span>
          <input type="tel" id="newParentPhone" placeholder="${t("phonePlaceholder")}" />
        </label>
        <div class="field">
          <span>${t("studentLabel")}</span>
          <div class="custom-select full-width" id="modalParentStudentDropdown"></div>
        </div>
        <button type="submit" class="btn btn-primary">${t("save")}</button>
      </form>
    `;

    const stOpts = [
      { value: "", label: t("noStudentBound") },
      ...state.students.map((st) => {
        const cls = state.classes.find((c) => c.id === st.classId);
        return { value: st.id, label: st.name, sub: cls ? cls.name : "" };
      })
    ];
    const renderStSel = () =>
      renderCustomSelect(document.getElementById("modalParentStudentDropdown"), stOpts, boundStudentId, (v) => {
        boundStudentId = v;
        renderStSel();
      });
    renderStSel();

    document.getElementById("createParentForm").onsubmit = (e) => {
      e.preventDefault();
      state.parents.push({
        id: "par_" + Date.now(),
        name: document.getElementById("newParentName").value.trim(),
        phone: document.getElementById("newParentPhone").value.trim(),
        studentId: boundStudentId || null
      });
      saveState();
      closeModal("createModal");
      renderApp();
      showToast(t("savedToast"));
    };
  }
}

window.openEditNameModal = function () {
  if (!canAdminister()) return;
  const user = getActiveUser();
  document.getElementById("editNameInput").value = getStaffDisplayName(user);
  document.getElementById("editPhoneInput").value = user.phone || "";
  document.getElementById("editSubjectInput").value = getStaffDisplaySubject(user);
  document.getElementById("editRoomInput").value = user.room || "";
  document.getElementById("editNameModal").classList.remove("hidden");
};

let currentLessonTeacherId = "";

window.openLessonModal = function (dayIdx, lessonNum) {
  if (!canAdminister()) return;
  const days = t("days");
  const cls = state.classes.find((c) => c.id === state.selectedClassId);
  const existing = state.timetable.find(
    (item) =>
      item.classId === state.selectedClassId &&
      item.dayIndex === dayIdx &&
      item.lessonNum === lessonNum
  );

  document.getElementById("lessonDayInput").value = dayIdx;
  document.getElementById("lessonNumInput").value = lessonNum;
  document.getElementById("lessonSlotInfo").textContent = `${t("classLabel")} ${cls ? cls.name : ""} · ${days[dayIdx]} · ${t("lessonNum")} #${lessonNum}`;

  document.getElementById("lessonSubjectInput").value = existing ? existing.subject : "";
  document.getElementById("lessonRoomInput").value = existing ? existing.room || "" : "";
  currentLessonTeacherId = existing ? existing.teacherId || "" : "";

  const teacherOpts = [
    { value: "", label: "—" },
    ...state.staff.map((s) => ({
      value: s.id,
      label: getStaffDisplayName(s),
      sub: getStaffDisplaySubject(s)
    }))
  ];

  const renderTeacherSel = () =>
    renderCustomSelect(document.getElementById("lessonTeacherDropdown"), teacherOpts, currentLessonTeacherId, (val) => {
      currentLessonTeacherId = val;
      const selectedTeacher = state.staff.find((s) => s.id === val);
      if (selectedTeacher) {
        const subj = getStaffDisplaySubject(selectedTeacher);
        if (!document.getElementById("lessonSubjectInput").value && subj) {
          document.getElementById("lessonSubjectInput").value = subj;
        }
        if (!document.getElementById("lessonRoomInput").value && selectedTeacher.room) {
          document.getElementById("lessonRoomInput").value = selectedTeacher.room;
        }
      }
      renderTeacherSel();
    });

  renderTeacherSel();
  document.getElementById("lessonModal").classList.remove("hidden");
};

window.openGradeModal = function (studentId) {
  if (!canGrade()) return;
  const student = state.students.find((s) => s.id === studentId);
  const user = getActiveUser();
  const userSubj = getStaffDisplaySubject(user);
  document.getElementById("gradeStudentId").value = studentId;
  document.getElementById("gradeStudentInfo").textContent = student ? student.name : "";
  document.getElementById("gradeSubjectInput").value = user.isDefaultDirector ? "" : userSubj;
  document.getElementById("gradeValueInput").value = "";
  document.getElementById("gradeNoteInput").value = "";
  updateGradePreview("");
  document.getElementById("gradeModal").classList.remove("hidden");
};

window.setAttendance = function (studentId, status) {
  if (!canGrade()) return;
  const weekDates = getWeekDates(state.weekOffset);
  const activeDateIso = (weekDates[state.selectedDayIndex] || weekDates[0]).iso;
  state.attendance[`${studentId}_${activeDateIso}`] = status;
  saveState();
  renderApp();
};

function updateGradePreview(rawVal) {
  const preview = document.getElementById("gradePreview");
  preview.className = "grade-preview";
  if (rawVal === "" || isNaN(Number(rawVal))) {
    preview.textContent = "—";
    return;
  }
  const num = Math.max(0, Math.min(10, Number(rawVal)));
  preview.textContent = num;
  preview.classList.add(getGradeClass(num));
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.onclick = () => {
      state.lang = btn.dataset.lang;
      saveState();
      renderApp();
    };
  });

  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.onclick = () => {
      state.activeTab = btn.dataset.tab;
      saveState();
      renderApp();
    };
  });

  document.getElementById("fullscreenBtn").onclick = () => {
    const tg = window.Telegram?.WebApp;
    if (tg && typeof tg.requestFullscreen === "function") {
      if (tg.isFullscreen && typeof tg.exitFullscreen === "function") {
        tg.exitFullscreen();
      } else {
        tg.requestFullscreen();
      }
      setTimeout(applyTranslations, 250);
      return;
    }
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  document.addEventListener("fullscreenchange", applyTranslations);
  window.Telegram?.WebApp?.onEvent?.("fullscreenChanged", applyTranslations);

  document.getElementById("openThemeBtn").onclick = () => openThemeModal();
  document.getElementById("editNameBtn").onclick = () => openEditNameModal();
  document.getElementById("openCreateBtn").onclick = () => openCreateModal("class");

  document.getElementById("resetAllBtn").onclick = () => {
    if (!canAdminister()) return;
    if (confirm(t("resetConfirm"))) {
      const keepLang = state.lang;
      const keepTheme = state.theme;
      state = getInitialState();
      state.lang = keepLang;
      state.theme = keepTheme;
      saveState();
      renderApp();
    }
  };

  document.querySelectorAll(".modal-tab").forEach((btn) => {
    btn.onclick = () => {
      state.createModalTab = btn.dataset.ctab;
      renderCreateModalBody();
    };
  });

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.onclick = () => closeModal(btn.dataset.close);
  });

  document.getElementById("editNameForm").onsubmit = (e) => {
    e.preventDefault();
    if (!canAdminister()) return;
    const user = getActiveUser();
    user.name = document.getElementById("editNameInput").value.trim();
    user.phone = document.getElementById("editPhoneInput").value.trim();
    user.subject = document.getElementById("editSubjectInput").value.trim();
    user.room = document.getElementById("editRoomInput").value.trim();
    user.isDefaultDirector = false;
    saveState();
    closeModal("editNameModal");
    renderApp();
    showToast(t("savedToast"));
  };

  document.getElementById("lessonForm").onsubmit = (e) => {
    e.preventDefault();
    if (!canAdminister()) return;
    const dayIndex = Number(document.getElementById("lessonDayInput").value);
    const lessonNum = Number(document.getElementById("lessonNumInput").value);
    const subject = document.getElementById("lessonSubjectInput").value.trim();
    const room = document.getElementById("lessonRoomInput").value.trim();

    state.timetable = state.timetable.filter(
      (item) =>
        !(
          item.classId === state.selectedClassId &&
          item.dayIndex === dayIndex &&
          item.lessonNum === lessonNum
        )
    );
    state.timetable.push({
      classId: state.selectedClassId,
      dayIndex,
      lessonNum,
      subject,
      teacherId: currentLessonTeacherId,
      room
    });

    saveState();
    closeModal("lessonModal");
    renderApp();
    showToast(t("savedToast"));
  };

  document.getElementById("deleteLessonBtn").onclick = () => {
    if (!canAdminister()) return;
    const dayIndex = Number(document.getElementById("lessonDayInput").value);
    const lessonNum = Number(document.getElementById("lessonNumInput").value);
    state.timetable = state.timetable.filter(
      (item) =>
        !(
          item.classId === state.selectedClassId &&
          item.dayIndex === dayIndex &&
          item.lessonNum === lessonNum
        )
    );
    saveState();
    closeModal("lessonModal");
    renderApp();
  };

  document.getElementById("gradeValueInput").oninput = (e) => updateGradePreview(e.target.value);

  document.getElementById("gradeForm").onsubmit = (e) => {
    e.preventDefault();
    if (!canGrade()) return;
    const studentId = document.getElementById("gradeStudentId").value;
    const subject = document.getElementById("gradeSubjectInput").value.trim();
    const value = Number(document.getElementById("gradeValueInput").value);
    const note = document.getElementById("gradeNoteInput").value.trim();

    if (isNaN(value) || value < 0 || value > 10) return;

    state.grades.push({
      id: "grd_" + Date.now(),
      studentId,
      subject,
      value,
      note
    });

    saveState();
    closeModal("gradeModal");
    renderApp();
    showToast(t("savedToast"));
  };

  renderApp();
});
