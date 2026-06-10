/* ===================== MENU ===================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* ===================== UNIVERSITIES DATA ===================== */

const universities = [
  {
    id: 1,
    name: "MIT",
    country: "USA",
    city: "Cambridge",
    major: "Computer Science",
    price: 58000,
    ranking: 1,
    dorm: "Есть",
    match: 96,
    icon: "fa-microchip",
    students: "11 000+",
    language: "English",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.8,
    deadline: "January 1",
    website: "mit.edu",
    description: "One of the strongest universities in technology, engineering and innovation.",
    programs: ["Computer Science", "AI", "Robotics", "Engineering", "Data Science"],
    review: "Сильная академическая среда, но нагрузка очень высокая."
  },
  {
    id: 2,
    name: "Stanford University",
    country: "USA",
    city: "Stanford",
    major: "Engineering",
    price: 56000,
    ranking: 3,
    dorm: "Есть",
    match: 93,
    icon: "fa-rocket",
    students: "17 000+",
    language: "English",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.8,
    deadline: "January 5",
    website: "stanford.edu",
    description: "Known for entrepreneurship, Silicon Valley connections and research.",
    programs: ["Engineering", "Business", "Computer Science", "Design", "Medicine"],
    review: "Отличный вариант для стартапов и технологий."
  },
  {
    id: 3,
    name: "Harvard University",
    country: "USA",
    city: "Cambridge",
    major: "Business",
    price: 54000,
    ranking: 4,
    dorm: "Есть",
    match: 92,
    icon: "fa-graduation-cap",
    students: "24 000+",
    language: "English",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.8,
    deadline: "January 1",
    website: "harvard.edu",
    description: "A world-famous university with strong business, law, medicine and humanities.",
    programs: ["Business", "Law", "Medicine", "Economics", "Political Science"],
    review: "Престиж высокий, конкуренция тоже безжалостная."
  },
  {
    id: 4,
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    major: "Medicine",
    price: 48000,
    ranking: 2,
    dorm: "Есть",
    match: 91,
    icon: "fa-book",
    students: "26 000+",
    language: "English",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.7,
    deadline: "October 15",
    website: "ox.ac.uk",
    description: "Historic university with strong academic traditions and global reputation.",
    programs: ["Medicine", "Law", "Philosophy", "Engineering", "Economics"],
    review: "Очень престижно, но поступить сложно."
  },
  {
    id: 5,
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    major: "Engineering",
    price: 47000,
    ranking: 5,
    dorm: "Есть",
    match: 90,
    icon: "fa-building-columns",
    students: "25 000+",
    language: "English",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.7,
    deadline: "October 15",
    website: "cam.ac.uk",
    description: "One of the most respected universities for science, engineering and research.",
    programs: ["Engineering", "Mathematics", "Medicine", "Computer Science", "Physics"],
    review: "Сильный академический стиль, не для ленивых."
  },
  {
    id: 6,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    major: "Computer Science",
    price: 42000,
    ranking: 21,
    dorm: "Есть",
    match: 94,
    icon: "fa-brain",
    students: "90 000+",
    language: "English",
    scholarship: "Partial",
    ielts: 6.5,
    gpa: 3.5,
    deadline: "January 15",
    website: "utoronto.ca",
    description: "A top Canadian university with strong CS, medicine and research.",
    programs: ["Computer Science", "Medicine", "Business", "Psychology", "Engineering"],
    review: "Большой кампус и много возможностей."
  },
  {
    id: 7,
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    major: "Engineering",
    price: 3000,
    ranking: 7,
    dorm: "Есть",
    match: 94,
    icon: "fa-gear",
    students: "23 000+",
    language: "English / German",
    scholarship: "Available",
    ielts: 7.0,
    gpa: 3.6,
    deadline: "April 30",
    website: "ethz.ch",
    description: "One of Europe's strongest technical universities.",
    programs: ["Engineering", "Computer Science", "Physics", "Architecture", "Data Science"],
    review: "Очень сильный технический вуз за адекватную цену."
  },
  {
    id: 8,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    major: "Computer Science",
    price: 22000,
    ranking: 8,
    dorm: "Есть",
    match: 93,
    icon: "fa-laptop-code",
    students: "38 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.6,
    deadline: "February 28",
    website: "nus.edu.sg",
    description: "A leading Asian university with strong technology and business programs.",
    programs: ["Computer Science", "Business", "Engineering", "Medicine", "Economics"],
    review: "Сильный вуз для Азии и международной карьеры."
  },
  {
    id: 9,
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    major: "Engineering",
    price: 6000,
    ranking: 37,
    dorm: "Есть",
    match: 89,
    icon: "fa-gears",
    students: "50 000+",
    language: "German / English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.3,
    deadline: "July 15",
    website: "tum.de",
    description: "One of the best technical universities in Europe.",
    programs: ["Engineering", "AI", "Physics", "Architecture", "Management"],
    review: "Хороший вариант: качество высокое, цена ниже США."
  },
  {
    id: 10,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    major: "Business",
    price: 33000,
    ranking: 13,
    dorm: "Есть",
    match: 87,
    icon: "fa-earth-oceania",
    students: "52 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.3,
    deadline: "October 31",
    website: "unimelb.edu.au",
    description: "A major Australian university with strong business, medicine and science programs.",
    programs: ["Business", "Medicine", "Engineering", "Law", "Psychology"],
    review: "Комфортная страна, но обучение недешёвое."
  },
  {
    id: 11,
    name: "Seoul National University",
    country: "South Korea",
    city: "Seoul",
    major: "Business",
    price: 12000,
    ranking: 41,
    dorm: "Есть",
    match: 88,
    icon: "fa-building-columns",
    students: "28 000+",
    language: "Korean / English",
    scholarship: "Available",
    ielts: 6.0,
    gpa: 3.2,
    deadline: "March 31",
    website: "snu.ac.kr",
    description: "The leading university in South Korea with strong business and technology programs.",
    programs: ["Business", "Engineering", "Computer Science", "Economics", "Korean Studies"],
    review: "Отличный выбор для тех, кто хочет учиться в Азии."
  },
  {
    id: 12,
    name: "KAIST",
    country: "South Korea",
    city: "Daejeon",
    major: "Computer Science",
    price: 7000,
    ranking: 53,
    dorm: "Есть",
    match: 89,
    icon: "fa-robot",
    students: "11 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.4,
    deadline: "May 25",
    website: "kaist.ac.kr",
    description: "A strong Korean science and technology university.",
    programs: ["Computer Science", "AI", "Engineering", "Robotics", "Physics"],
    review: "Для технарей прям вкусный вариант."
  },
  {
    id: 13,
    name: "Nazarbayev University",
    country: "Kazakhstan",
    city: "Astana",
    major: "Medicine",
    price: 9000,
    ranking: 450,
    dorm: "Есть",
    match: 86,
    icon: "fa-user-doctor",
    students: "7 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.0,
    gpa: 3.0,
    deadline: "June 30",
    website: "nu.edu.kz",
    description: "A modern university in Kazakhstan with English-language education.",
    programs: ["Medicine", "Engineering", "Business", "Education", "Public Policy"],
    review: "Сильный вариант внутри Казахстана."
  },
  {
    id: 14,
    name: "KIMEP University",
    country: "Kazakhstan",
    city: "Almaty",
    major: "Business",
    price: 6000,
    ranking: 800,
    dorm: "Есть",
    match: 82,
    icon: "fa-chart-line",
    students: "4 000+",
    language: "English",
    scholarship: "Partial",
    ielts: 5.5,
    gpa: 2.8,
    deadline: "August 15",
    website: "kimep.kz",
    description: "A private university focused on business, law and social sciences.",
    programs: ["Business", "Finance", "Law", "Economics", "Marketing"],
    review: "Хороший вариант для бизнеса и английской среды."
  },
  {
    id: 15,
    name: "Al-Farabi Kazakh National University",
    country: "Kazakhstan",
    city: "Almaty",
    major: "Science",
    price: 3500,
    ranking: 200,
    dorm: "Есть",
    match: 84,
    icon: "fa-atom",
    students: "25 000+",
    language: "Kazakh / Russian / English",
    scholarship: "Available",
    ielts: 5.5,
    gpa: 2.8,
    deadline: "July 25",
    website: "kaznu.kz",
    description: "One of the largest and oldest universities in Kazakhstan.",
    programs: ["Science", "IT", "Law", "Economics", "International Relations"],
    review: "Крупный университет с большим выбором программ."
  },
  {
    id: 16,
    name: "University of Tokyo",
    country: "Japan",
    city: "Tokyo",
    major: "Engineering",
    price: 6000,
    ranking: 28,
    dorm: "Есть",
    match: 90,
    icon: "fa-torii-gate",
    students: "29 000+",
    language: "Japanese / English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.4,
    deadline: "December 10",
    website: "u-tokyo.ac.jp",
    description: "Japan's leading university with strong research and engineering.",
    programs: ["Engineering", "Medicine", "Economics", "Science", "AI"],
    review: "Сильный вариант, но культура и язык могут быть вызовом."
  },
  {
    id: 17,
    name: "Kyoto University",
    country: "Japan",
    city: "Kyoto",
    major: "Science",
    price: 5500,
    ranking: 46,
    dorm: "Есть",
    match: 87,
    icon: "fa-flask",
    students: "23 000+",
    language: "Japanese / English",
    scholarship: "Available",
    ielts: 6.0,
    gpa: 3.3,
    deadline: "January 20",
    website: "kyoto-u.ac.jp",
    description: "A respected Japanese university with strong science and research traditions.",
    programs: ["Science", "Engineering", "Medicine", "Agriculture", "Physics"],
    review: "Подходит для исследовательской карьеры."
  },
  {
    id: 18,
    name: "Tsinghua University",
    country: "China",
    city: "Beijing",
    major: "Engineering",
    price: 9000,
    ranking: 20,
    dorm: "Есть",
    match: 89,
    icon: "fa-industry",
    students: "47 000+",
    language: "Chinese / English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.4,
    deadline: "March 1",
    website: "tsinghua.edu.cn",
    description: "A top Chinese university known for engineering and technology.",
    programs: ["Engineering", "Computer Science", "Architecture", "Business", "AI"],
    review: "Сильный вуз, особенно для инженерии."
  },
  {
    id: 19,
    name: "Peking University",
    country: "China",
    city: "Beijing",
    major: "Medicine",
    price: 8500,
    ranking: 17,
    dorm: "Есть",
    match: 88,
    icon: "fa-stethoscope",
    students: "46 000+",
    language: "Chinese / English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.4,
    deadline: "March 31",
    website: "pku.edu.cn",
    description: "A top Chinese university with strong medicine, humanities and sciences.",
    programs: ["Medicine", "Science", "Economics", "Law", "International Relations"],
    review: "Хороший вариант для Китая и академической карьеры."
  },
  {
    id: 20,
    name: "University of Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    major: "Business",
    price: 14000,
    ranking: 55,
    dorm: "Есть",
    match: 86,
    icon: "fa-euro-sign",
    students: "41 000+",
    language: "English",
    scholarship: "Partial",
    ielts: 6.5,
    gpa: 3.2,
    deadline: "April 1",
    website: "uva.nl",
    description: "A strong European university with many English-taught programs.",
    programs: ["Business", "Economics", "Psychology", "Media", "Social Sciences"],
    review: "Классный город, но жильё может быть проблемой."
  },
  {
    id: 21,
    name: "Delft University of Technology",
    country: "Netherlands",
    city: "Delft",
    major: "Engineering",
    price: 15000,
    ranking: 49,
    dorm: "Есть",
    match: 91,
    icon: "fa-compass-drafting",
    students: "27 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.3,
    deadline: "April 1",
    website: "tudelft.nl",
    description: "A strong technical university in Europe.",
    programs: ["Engineering", "Architecture", "Computer Science", "Aerospace", "Design"],
    review: "Очень хороший вариант для инженерии."
  },
  {
    id: 22,
    name: "University of British Columbia",
    country: "Canada",
    city: "Vancouver",
    major: "Science",
    price: 39000,
    ranking: 34,
    dorm: "Есть",
    match: 88,
    icon: "fa-leaf",
    students: "65 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.3,
    deadline: "January 15",
    website: "ubc.ca",
    description: "A leading Canadian university with strong research and beautiful campus.",
    programs: ["Science", "Business", "Engineering", "Computer Science", "Forestry"],
    review: "Сильный вуз, плюс город очень комфортный."
  },
  {
    id: 23,
    name: "McGill University",
    country: "Canada",
    city: "Montreal",
    major: "Medicine",
    price: 32000,
    ranking: 30,
    dorm: "Есть",
    match: 87,
    icon: "fa-hospital",
    students: "39 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.4,
    deadline: "January 15",
    website: "mcgill.ca",
    description: "One of Canada's most respected universities, especially strong in medicine.",
    programs: ["Medicine", "Science", "Law", "Engineering", "Arts"],
    review: "Престижный канадский вариант, особенно для медицины."
  },
  {
    id: 24,
    name: "University of Manchester",
    country: "United Kingdom",
    city: "Manchester",
    major: "Engineering",
    price: 31000,
    ranking: 32,
    dorm: "Есть",
    match: 85,
    icon: "fa-city",
    students: "46 000+",
    language: "English",
    scholarship: "Partial",
    ielts: 6.5,
    gpa: 3.2,
    deadline: "January 25",
    website: "manchester.ac.uk",
    description: "A large UK university with strong research and engineering programs.",
    programs: ["Engineering", "Business", "Computer Science", "Medicine", "Economics"],
    review: "Хороший баланс рейтинга, города и возможностей."
  },
  {
    id: 25,
    name: "University of Sydney",
    country: "Australia",
    city: "Sydney",
    major: "Medicine",
    price: 35000,
    ranking: 19,
    dorm: "Есть",
    match: 86,
    icon: "fa-briefcase-medical",
    students: "73 000+",
    language: "English",
    scholarship: "Available",
    ielts: 6.5,
    gpa: 3.3,
    deadline: "September 30",
    website: "sydney.edu.au",
    description: "A major Australian university with strong medicine, business and law.",
    programs: ["Medicine", "Business", "Law", "Engineering", "Arts"],
    review: "Сильный университет, но стоимость жизни высокая."
  }
];

/* ===================== STATE ===================== */

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let compareList = JSON.parse(localStorage.getItem("compareList")) || [];

/* ===================== UNIVERSITY SEARCH ===================== */

const grid = document.getElementById("universitiesGrid");
const resultCount = document.getElementById("resultCount");

const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const majorFilter = document.getElementById("majorFilter");
const budgetFilter = document.getElementById("budgetFilter");
const resetFilters = document.getElementById("resetFilters");

function renderUniversities(list) {
  if (!grid || !resultCount) return;

  grid.innerHTML = "";
  resultCount.textContent = `Найдено: ${list.length}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>Ничего не найдено</h3>
        <p>Попробуй изменить фильтры.</p>
      </div>
    `;
    return;
  }

  list.forEach((uni) => {
    const isFavorite = favorites.includes(uni.id);

    const card = document.createElement("div");
    card.className = "university-card";

    card.innerHTML = `
      <div class="university-image">
        <i class="fa-solid ${uni.icon}"></i>
      </div>

      <div class="university-content">
        <div class="university-header">
          <h3>${uni.name}</h3>
          <button class="favorite-btn ${isFavorite ? "active" : ""}" onclick="toggleFavorite(${uni.id})">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>

        <p class="university-location">
          <i class="fa-solid fa-location-dot"></i>
          ${uni.country}, ${uni.city}
        </p>

        <div class="university-info">
          <div class="info-box">
            <span>Специальность</span>
            <strong>${uni.major}</strong>
          </div>
          <div class="info-box">
            <span>QS Ranking</span>
            <strong>#${uni.ranking}</strong>
          </div>
          <div class="info-box">
            <span>Стоимость</span>
            <strong>$${uni.price.toLocaleString()}</strong>
          </div>
          <div class="info-box">
            <span>IELTS</span>
            <strong>${uni.ielts}</strong>
          </div>
        </div>

        <div class="match-box">
          <div class="match-line">
            <span>Совпадение</span>
            <strong>${uni.match}%</strong>
          </div>
          <div class="match-progress">
            <div style="width: ${uni.match}%"></div>
          </div>
        </div>

        <div class="card-actions">
          <button class="btn secondary" onclick="openUniversityModal(${uni.id})">Подробнее</button>
          <button class="btn primary" onclick="addToCompare(${uni.id})">Сравнить</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterUniversities() {
  if (!searchInput || !countryFilter || !majorFilter || !budgetFilter) return;

  const searchValue = searchInput.value.toLowerCase();
  const countryValue = countryFilter.value;
  const majorValue = majorFilter.value;
  const budgetValue = budgetFilter.value;

  const filtered = universities.filter((uni) => {
    const matchesSearch =
      uni.name.toLowerCase().includes(searchValue) ||
      uni.country.toLowerCase().includes(searchValue) ||
      uni.city.toLowerCase().includes(searchValue) ||
      uni.major.toLowerCase().includes(searchValue);

    const matchesCountry = countryValue === "all" || uni.country === countryValue;
    const matchesMajor = majorValue === "all" || uni.major === majorValue;
    const matchesBudget = budgetValue === "all" || uni.price <= Number(budgetValue);

    return matchesSearch && matchesCountry && matchesMajor && matchesBudget;
  });

  renderUniversities(filtered);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  filterUniversities();
  renderSavedUniversities();
}

if (searchInput) searchInput.addEventListener("input", filterUniversities);
if (countryFilter) countryFilter.addEventListener("change", filterUniversities);
if (majorFilter) majorFilter.addEventListener("change", filterUniversities);
if (budgetFilter) budgetFilter.addEventListener("change", filterUniversities);

if (resetFilters) {
  resetFilters.addEventListener("click", () => {
    searchInput.value = "";
    countryFilter.value = "all";
    majorFilter.value = "all";
    budgetFilter.value = "all";
    filterUniversities();
  });
}

/* ===================== MODAL ===================== */

const modal = document.getElementById("universityModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openUniversityModal(id) {
  if (!modal || !modalBody) return;

  const uni = universities.find((item) => item.id === id);

  modalBody.innerHTML = `
    <div class="modal-hero">
      <h2>${uni.name}</h2>
      <p>${uni.country}, ${uni.city} · ${uni.major}</p>
    </div>

    <div class="modal-grid">
      <div class="modal-info"><span>QS Ranking</span><strong>#${uni.ranking}</strong></div>
      <div class="modal-info"><span>Стоимость</span><strong>$${uni.price.toLocaleString()}</strong></div>
      <div class="modal-info"><span>IELTS</span><strong>${uni.ielts}</strong></div>
      <div class="modal-info"><span>GPA</span><strong>${uni.gpa}</strong></div>
      <div class="modal-info"><span>Дедлайн</span><strong>${uni.deadline}</strong></div>
      <div class="modal-info"><span>Сайт</span><strong>${uni.website}</strong></div>
      <div class="modal-info"><span>Студенты</span><strong>${uni.students}</strong></div>
      <div class="modal-info"><span>Язык</span><strong>${uni.language}</strong></div>
      <div class="modal-info"><span>Стипендия</span><strong>${uni.scholarship}</strong></div>
    </div>

    <div class="modal-section">
      <h3>Описание</h3>
      <p>${uni.description}</p>
    </div>

    <div class="modal-section">
      <h3>Популярные программы</h3>
      <div class="program-tags">
        ${uni.programs.map((program) => `<span>${program}</span>`).join("")}
      </div>
    </div>

    <div class="modal-section">
      <h3>Отзывы студентов</h3>
      <div class="review-card">
        <strong>Student Review</strong>
        <p>${uni.review}</p>
      </div>
    </div>

    <button class="btn primary" onclick="addToCompare(${uni.id})">Добавить в сравнение</button>
  `;

  modal.classList.add("active");
}

if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
}

/* ===================== COMPARE ===================== */

const compareBox = document.getElementById("compareBox");

function addToCompare(id) {
  if (compareList.includes(id)) {
    alert("Этот университет уже добавлен в сравнение.");
    return;
  }

  if (compareList.length >= 3) {
    alert("Можно сравнивать максимум 3 университета.");
    return;
  }

  compareList.push(id);
  localStorage.setItem("compareList", JSON.stringify(compareList));
  renderCompare();
  renderSavedUniversities();
}

function removeFromCompare(id) {
  compareList = compareList.filter((item) => item !== id);
  localStorage.setItem("compareList", JSON.stringify(compareList));
  renderCompare();
  renderSavedUniversities();
}

function renderCompare() {
  if (!compareBox) return;

  if (compareList.length === 0) {
    compareBox.innerHTML = `<p>Пока ничего не выбрано.</p>`;
    return;
  }

  const selected = universities.filter((uni) => compareList.includes(uni.id));

  compareBox.innerHTML = `
    <table class="compare-table">
      <tr>
        <th>Параметр</th>
        ${selected.map((uni) => `<th>${uni.name}</th>`).join("")}
      </tr>
      <tr><td>Страна</td>${selected.map((uni) => `<td>${uni.country}</td>`).join("")}</tr>
      <tr><td>Город</td>${selected.map((uni) => `<td>${uni.city}</td>`).join("")}</tr>
      <tr><td>Специальность</td>${selected.map((uni) => `<td>${uni.major}</td>`).join("")}</tr>
      <tr><td>QS Ranking</td>${selected.map((uni) => `<td>#${uni.ranking}</td>`).join("")}</tr>
      <tr><td>Стоимость</td>${selected.map((uni) => `<td>$${uni.price.toLocaleString()}</td>`).join("")}</tr>
      <tr><td>IELTS</td>${selected.map((uni) => `<td>${uni.ielts}</td>`).join("")}</tr>
      <tr><td>GPA</td>${selected.map((uni) => `<td>${uni.gpa}</td>`).join("")}</tr>
      <tr><td>Дедлайн</td>${selected.map((uni) => `<td>${uni.deadline}</td>`).join("")}</tr>
      <tr><td>Общежитие</td>${selected.map((uni) => `<td>${uni.dorm}</td>`).join("")}</tr>
      <tr>
        <td>Удалить</td>
        ${selected.map((uni) => `
          <td>
            <button class="remove-compare" onclick="removeFromCompare(${uni.id})">
              Убрать
            </button>
          </td>
        `).join("")}
      </tr>
    </table>
  `;
}

/* ===================== AI ADVISOR ===================== */

const advisorForm = document.getElementById("advisorForm");
const advisorResult = document.getElementById("advisorResult");

if (advisorForm) {
  advisorForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const gpa = Number(document.getElementById("gpaInput").value);
    const budget = Number(document.getElementById("advisorBudget").value);
    const major = document.getElementById("advisorMajor").value;
    const country = document.getElementById("advisorCountry").value;
    const ielts = Number(document.getElementById("ieltsInput").value);

    if (!gpa || !ielts) {
      advisorResult.innerHTML = `<div class="ai-warning">Заполни GPA и IELTS.</div>`;
      return;
    }

    const recommended = universities
      .map((uni) => {
        let score = 40;

        if (uni.price <= budget) score += 20;
        if (uni.major === major) score += 20;
        if (country === "all" || uni.country === country) score += 15;
        if (gpa >= uni.gpa) score += 15;
        if (ielts >= uni.ielts) score += 10;
        if (uni.price > budget) score -= 15;
        if (gpa < uni.gpa) score -= 10;
        if (ielts < uni.ielts) score -= 10;

        score = Math.max(1, Math.min(score, 99));

        return { ...uni, aiScore: score };
      })
      .filter((uni) => uni.price <= budget + 20000)
      .sort((a, b) => b.aiScore - a.aiScore)
      .slice(0, 5);

    advisorResult.innerHTML = recommended.map((uni) => `
      <div class="ai-result-card">
        <div class="ai-result-top">
          <h4>${uni.name}</h4>
          <span class="ai-score">${uni.aiScore}%</span>
        </div>
        <p>${uni.country}, ${uni.city} · ${uni.major}</p>
        <div class="ai-tags">
          <span>QS #${uni.ranking}</span>
          <span>$${uni.price.toLocaleString()}</span>
          <span>IELTS ${uni.ielts}</span>
          <span>GPA ${uni.gpa}</span>
        </div>
      </div>
    `).join("");
  });
}

/* ===================== DORMS ===================== */

const dormitories = [
  { id: 1, name: "Campus Dorm A", university: "University of Toronto", city: "Toronto", price: 350, distance: 5, rating: 4.8, features: ["Wi-Fi", "Kitchen", "Laundry"] },
  { id: 2, name: "Student House Munich", university: "Technical University of Munich", city: "Munich", price: 290, distance: 10, rating: 4.5, features: ["Wi-Fi", "Kitchen"] },
  { id: 3, name: "International Dorm Seoul", university: "Seoul National University", city: "Seoul", price: 420, distance: 3, rating: 4.9, features: ["Wi-Fi", "Gym", "Laundry"] },
  { id: 4, name: "Astana Student Residence", university: "Nazarbayev University", city: "Astana", price: 180, distance: 7, rating: 4.4, features: ["Wi-Fi", "Kitchen", "Laundry"] },
  { id: 5, name: "Cambridge Tech Dorm", university: "MIT", city: "Cambridge", price: 500, distance: 4, rating: 4.7, features: ["Wi-Fi", "Gym", "Kitchen"] },
  { id: 6, name: "Stanford Residence Hall", university: "Stanford University", city: "Stanford", price: 480, distance: 6, rating: 4.6, features: ["Wi-Fi", "Laundry", "Gym"] }
];

const dormsGrid = document.getElementById("dormsGrid");
const dormResultCount = document.getElementById("dormResultCount");
const dormSearchInput = document.getElementById("dormSearchInput");
const dormPriceFilter = document.getElementById("dormPriceFilter");
const dormDistanceFilter = document.getElementById("dormDistanceFilter");
const dormFeatureFilter = document.getElementById("dormFeatureFilter");
const resetDormFilters = document.getElementById("resetDormFilters");

function renderStars(rating) {
  const rounded = Math.round(rating);
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    stars += i <= rounded
      ? `<i class="fa-solid fa-star"></i>`
      : `<i class="fa-regular fa-star"></i>`;
  }

  return stars;
}

function renderDorms(list) {
  if (!dormsGrid || !dormResultCount) return;

  dormsGrid.innerHTML = "";
  dormResultCount.textContent = `Найдено: ${list.length}`;

  if (list.length === 0) {
    dormsGrid.innerHTML = `
      <div class="no-dorms">
        <h3>Общежития не найдены</h3>
        <p>Попробуй изменить фильтры.</p>
      </div>
    `;
    return;
  }

  list.forEach((dorm) => {
    const card = document.createElement("div");
    card.className = "full-dorm-card";

    card.innerHTML = `
      <div class="dorm-image">
        <h3>${dorm.name}</h3>
      </div>

      <div class="dorm-content">
        <p class="dorm-location">
          <i class="fa-solid fa-location-dot"></i>
          ${dorm.city} · ${dorm.university}
        </p>

        <div class="dorm-main-info">
          <div><span>Цена</span><strong>$${dorm.price}</strong></div>
          <div><span>До кампуса</span><strong>${dorm.distance} мин</strong></div>
          <div><span>Рейтинг</span><strong>${dorm.rating}</strong></div>
        </div>

        <div class="dorm-rating">${renderStars(dorm.rating)}</div>

        <div class="dorm-features">
          ${dorm.features.map((feature) => `<span>${feature}</span>`).join("")}
        </div>
      </div>
    `;

    dormsGrid.appendChild(card);
  });
}

function filterDorms() {
  if (!dormSearchInput || !dormPriceFilter || !dormDistanceFilter || !dormFeatureFilter) return;

  const searchValue = dormSearchInput.value.toLowerCase();
  const priceValue = dormPriceFilter.value;
  const distanceValue = dormDistanceFilter.value;
  const featureValue = dormFeatureFilter.value;

  const filtered = dormitories.filter((dorm) => {
    const matchesSearch =
      dorm.name.toLowerCase().includes(searchValue) ||
      dorm.university.toLowerCase().includes(searchValue) ||
      dorm.city.toLowerCase().includes(searchValue);

    const matchesPrice = priceValue === "all" || dorm.price <= Number(priceValue);
    const matchesDistance = distanceValue === "all" || dorm.distance <= Number(distanceValue);
    const matchesFeature = featureValue === "all" || dorm.features.includes(featureValue);

    return matchesSearch && matchesPrice && matchesDistance && matchesFeature;
  });

  renderDorms(filtered);
}

if (dormSearchInput) dormSearchInput.addEventListener("input", filterDorms);
if (dormPriceFilter) dormPriceFilter.addEventListener("change", filterDorms);
if (dormDistanceFilter) dormDistanceFilter.addEventListener("change", filterDorms);
if (dormFeatureFilter) dormFeatureFilter.addEventListener("change", filterDorms);

if (resetDormFilters) {
  resetDormFilters.addEventListener("click", () => {
    dormSearchInput.value = "";
    dormPriceFilter.value = "all";
    dormDistanceFilter.value = "all";
    dormFeatureFilter.value = "all";
    filterDorms();
  });
}

/* ===================== GROWTH LAB ===================== */

const calculateGpaBtn = document.getElementById("calculateGpaBtn");
const gpaResult = document.getElementById("gpaResult");

if (calculateGpaBtn) {
  calculateGpaBtn.addEventListener("click", () => {
    const gradeInputs = document.querySelectorAll(".grade-input");
    let grades = [];

    gradeInputs.forEach((input) => {
      const value = Number(input.value);
      if (value > 0) grades.push(value);
    });

    if (grades.length === 0) {
      gpaResult.className = "growth-result danger";
      gpaResult.textContent = "Введи хотя бы одну оценку.";
      return;
    }

    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    const gpa = sum / grades.length;

    gpaResult.className = "growth-result success";
    gpaResult.textContent = `Ваш GPA: ${gpa.toFixed(2)} из 4.0`;
  });
}

const findScholarshipBtn = document.getElementById("findScholarshipBtn");
const scholarshipResult = document.getElementById("scholarshipResult");

if (findScholarshipBtn) {
  findScholarshipBtn.addEventListener("click", () => {
    const gpa = Number(document.getElementById("scholarshipGpa").value);
    const ielts = Number(document.getElementById("scholarshipIelts").value);

    if (!gpa || !ielts) {
      scholarshipResult.className = "growth-result danger";
      scholarshipResult.textContent = "Введи GPA и IELTS.";
      return;
    }

    if (gpa >= 3.8 && ielts >= 7) {
      scholarshipResult.className = "growth-result success";
      scholarshipResult.textContent = "Высокий шанс на стипендию.";
    } else if (gpa >= 3.3 && ielts >= 6.5) {
      scholarshipResult.className = "growth-result warning";
      scholarshipResult.textContent = "Средний шанс на стипендию.";
    } else {
      scholarshipResult.className = "growth-result danger";
      scholarshipResult.textContent = "Шанс на стипендию низкий.";
    }
  });
}

const calculateChanceBtn = document.getElementById("calculateChanceBtn");
const chanceResult = document.getElementById("chanceResult");

if (calculateChanceBtn) {
  calculateChanceBtn.addEventListener("click", () => {
    const gpa = Number(document.getElementById("chanceGpa").value);
    const ielts = Number(document.getElementById("chanceIelts").value);
    const level = document.getElementById("chanceLevel").value;

    if (!gpa || !ielts) {
      chanceResult.className = "growth-result danger";
      chanceResult.textContent = "Введи GPA и IELTS.";
      return;
    }

    let chance = 40;
    chance += gpa * 10;
    chance += ielts * 4;

    if (level === "medium") chance -= 18;
    if (level === "hard") chance -= 35;

    chance = Math.max(5, Math.min(95, Math.round(chance)));

    if (chance >= 75) {
      chanceResult.className = "growth-result success";
    } else if (chance >= 45) {
      chanceResult.className = "growth-result warning";
    } else {
      chanceResult.className = "growth-result danger";
    }

    chanceResult.innerHTML = `Вероятность поступления: ${chance}%`;
  });
}

/* ===================== ROADMAP ===================== */

const roadmapUniversity = document.getElementById("roadmapUniversity");
const buildRoadmapBtn = document.getElementById("buildRoadmapBtn");
const roadmapResult = document.getElementById("roadmapResult");

function fillRoadmapUniversities() {
  if (!roadmapUniversity) return;

  roadmapUniversity.innerHTML = universities
    .map((uni) => `<option value="${uni.id}">${uni.name}</option>`)
    .join("");
}

if (buildRoadmapBtn) {
  buildRoadmapBtn.addEventListener("click", () => {
    const uniId = Number(roadmapUniversity.value);
    const level = document.getElementById("roadmapLevel").value;
    const ielts = Number(document.getElementById("roadmapIelts").value);
    const gpa = Number(document.getElementById("roadmapGpa").value);

    const uni = universities.find((item) => item.id === uniId);

    if (!ielts || !gpa) {
      roadmapResult.innerHTML = `<div class="ai-warning">Введи IELTS и GPA.</div>`;
      return;
    }

    const ieltsReady = ielts >= uni.ielts;
    const gpaReady = gpa >= uni.gpa;

    const levelText = {
      school: "Школьник",
      college: "Колледж",
      bachelor: "Бакалавр"
    };

    roadmapResult.innerHTML = `
      <div class="roadmap-university-card">
        <h4>${uni.name}</h4>
        <p>${uni.country}, ${uni.city} · ${uni.major}</p>
        <p>Текущий уровень: ${levelText[level]}</p>
      </div>

      <div class="timeline">
        <div class="timeline-item ${gpaReady ? "done" : "warning"}">
          <span class="timeline-status">${gpaReady ? "Готово" : "Нужно улучшить"}</span>
          <h4>GPA</h4>
          <p>Твой GPA: ${gpa}. Требуется примерно: ${uni.gpa}.</p>
        </div>

        <div class="timeline-item ${ieltsReady ? "done" : "warning"}">
          <span class="timeline-status">${ieltsReady ? "Готово" : "Нужно улучшить"}</span>
          <h4>IELTS</h4>
          <p>Твой IELTS: ${ielts}. Рекомендуемый уровень: ${uni.ielts}.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-status">Документы</span>
          <h4>Подготовка документов</h4>
          <p>Паспорт, транскрипт, мотивационное письмо, рекомендации и сертификат английского.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-status">Дедлайн</span>
          <h4>Дата подачи</h4>
          <p>Ориентировочный дедлайн: ${uni.deadline}.</p>
        </div>

        <div class="timeline-item">
          <span class="timeline-status">Финал</span>
          <h4>Подача заявки</h4>
          <p>Подай заявку через официальный сайт: ${uni.website}.</p>
        </div>
      </div>
    `;
  });
}

/* ===================== PROFILE ===================== */

const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const authBox = document.getElementById("authBox");
const dashboardBox = document.getElementById("dashboardBox");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const savedCount = document.getElementById("savedCount");
const compareCount = document.getElementById("compareCount");
const savedGrid = document.getElementById("savedGrid");

function getUserData() {
  return JSON.parse(localStorage.getItem("universeUser"));
}

function setUserData(user) {
  localStorage.setItem("universeUser", JSON.stringify(user));
}

function renderSavedUniversities() {
  if (!savedGrid || !savedCount || !compareCount) return;

  savedGrid.innerHTML = "";

  savedCount.textContent = favorites.length;
  compareCount.textContent = compareList.length;

  if (favorites.length === 0) {
    savedGrid.innerHTML = `
      <div class="empty-saved">
        Пока нет сохранённых университетов.
      </div>
    `;
    return;
  }

  const savedUniversities = universities.filter((uni) => favorites.includes(uni.id));

  savedUniversities.forEach((uni) => {
    const card = document.createElement("div");
    card.className = "saved-card";

    card.innerHTML = `
      <h4>${uni.name}</h4>
      <p>${uni.country}, ${uni.city}</p>
      <p>${uni.major}</p>
      <strong>$${uni.price.toLocaleString()}</strong>
      <br><br>
      <button class="btn secondary" onclick="openUniversityModal(${uni.id})">
        Подробнее
      </button>
    `;

    savedGrid.appendChild(card);
  });
}

function showDashboard() {
  if (!authBox || !dashboardBox) return;

  const user = getUserData();

  if (!user) {
    authBox.classList.remove("hidden");
    dashboardBox.classList.remove("active");
    return;
  }

  authBox.classList.add("hidden");
  dashboardBox.classList.add("active");

  profileName.textContent = user.name;
  profileEmail.textContent = user.email;

  renderSavedUniversities();
}

if (registerBtn) {
  registerBtn.addEventListener("click", () => {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("userPassword").value.trim();

    if (!name || !email || !password) {
      alert("Заполни имя, email и пароль.");
      return;
    }

    setUserData({ name, email, password });
    showDashboard();
  });
}

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("userPassword").value.trim();
    const user = getUserData();

    if (!user) {
      alert("Сначала зарегистрируйся.");
      return;
    }

    if (user.email !== email || user.password !== password) {
      alert("Неверный email или пароль.");
      return;
    }

    showDashboard();
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    authBox.classList.remove("hidden");
    dashboardBox.classList.remove("active");
  });
}

/* ===================== THEME ===================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
  });
}

/* ===================== ACTIVE NAVIGATION ===================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ===================== INIT ===================== */

function initReveal() {
  const revealElements = document.querySelectorAll(
    ".section-title, .university-card, .feature-card, .full-dorm-card, .growth-card, .roadmap-form, .roadmap-result, .auth-box, .dashboard-box, .about-card"
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal");
  });

  function revealOnScroll() {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
}

renderUniversities(universities);
renderCompare();
renderDorms(dormitories);
fillRoadmapUniversities();
showDashboard();
initReveal();