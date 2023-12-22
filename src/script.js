// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute("id"),
      sectionsClass = document.querySelector(
        "#nav-menu ul li a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Menu Jelajahi dari tempat wisata
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('source');
    
    if (source === 'tempat_wisata' || source === 'budaya') {
      const jelajahiSection = document.getElementById('jelajahi');
      if (jelajahiSection) {
        jelajahiSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
});




// tempat_wisata/Card
document.addEventListener('DOMContentLoaded', function() {
  const defaultContent = getDefaultContent();

  hideAllContent();

  showContent(defaultContent);
});

function getDefaultContent() {
  const currentPage = window.location.pathname;
    if (currentPage.includes('tempat_wisata')) {
        return 'monumen';
    } else if (currentPage.includes('budaya')) {
        return 'tari';
    }
}

function hideAllContent() {
  let contents = document.querySelectorAll('.content');
  contents.forEach(function(content) {
      content.style.display = 'none';
  });

  let titles = document.querySelectorAll('.title');
  titles.forEach(function(title) {
      title.classList.remove('active-card');
  });
}

function showContent(category) {
  hideAllContent();

  let selectedContent = document.getElementById(category + 'Content');
  let selectedTitle = document.getElementById(category + 'Title');
  selectedContent.style.display = 'block';
  selectedTitle.classList.add('active-card');
}






// Dark/light mode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const iconToggle = () => {
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
}

const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('display-none');
        return;
    }
    sunIcon.classList.add('display-none');
}

const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        iconToggle();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    iconToggle();
}

sunIcon.addEventListener('click', () => {
    themeSwitch();
})

moonIcon.addEventListener('click', () => {
    themeSwitch();
})

themeCheck();