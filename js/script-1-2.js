

const resources = {
  ece1205: {
    notes: "1d6v03Gn487dd5DHBBoFftTW43c2IzXg9",
    books: "1P5EbK-43cmEkrYqAiPV0ooaGdKS6xA6a",
    questions: "1o0HnJ8VWZop7p3TsEZ79IfiDV0u5FECY",
    slides: "1vRXdzmWeDcp8yQcjvYwfmU2rqt0wzpPJ",
    labs: null,
    labManuals: null,
    writing: null,
  },
  ece1209: {
    notes: "1S82cCQufJzZloHJuUy7jDQ0OEjtTPQJy",
    books: "1v3z29bpV-xFTawHO2vsEZLDduAnBLs14",
    questions: "1ZLSuf7N0IlWDB9tLsC-YADL2rrC17FSx",
    slides: "1XuMZXAJsdgmOuuDmDVXB68wgNzcZTV1J",
    labs: "12zUsV7bIbcgz8tv_E0kli70s3yiUiyB2", // ECE 1210
    labManuals: "1PozjUZt3XdhWs_EA4ao9VGHwJXn0GXkq",
    writing: null,
  },
  ch1209: {
    notes: "1vGIR2jBdRRF57wR4QqgLbwAWVRq7xRGN",
    books: "10pf69wU9xEn6RE39aUktWXKUWJnVvsj1",
    questions: "18TYQbUqyLPcQjcWd9oR7MamcSMbjiWUe",
    slides: "1AeP6mo2a-OOqtv6ODak2yIFVfun0tuQQ",
    labs: "16TPRU0-y7UyDcdqjwZk60G9Uau_bFM5n", // CH 1210
    labManuals: "16cR8Gb3y_eXmkuSCkKd1pp9ZNo_TqLPf",
    writing: null,
  },
  math1209: {
    notes: "18vW4ULdjYsF3_GHfekF2llhmUAhQl0C5",
    books: "1bnyhTmLc-rlgctIymk2IGu4oB1hCej_J",
    questions: "18U26paiKANgYqu7P6AsDVr3yXACIv4kJ",
    slides: null,
    labs: null, 
    labManuals: null,
    writing: null,
  },
  cse1209: {
    notes: null,
    books: "1XtCCgOSqR62Dr42ypKYatx973w14d9kJ",
    questions: "15Q34soh4WezaqHdBGR0CcVTAK2GwyKur",
    slides: "1bi7HxWBK4mVJSjPJSAmEP0mQvxEt7AP6",
    labs: "1TAPTpzZsmAFymS527B48N9rb4Y5u5JoI", // CSE 1210
    labManuals: "1iKJ8oAVSDFIOVSzYk4ww0yiu_lXhV2iP",
    writing: null,
  },
  hum1210: {
    notes: null,
    books: null,
    questions: "1D1pCRfRrZmuyaFv_lJGeK1iCgCLfgfaQ",
    slides: null,
    labs: null,
    labManuals: null,
    writing: null,
  },
};

let currentSubject = "ece1205";
let currentTab = "notes";

const modal = document.getElementById("viewerModal");
const modalTitle = document.getElementById("modalTitle");
const driveFrame = document.getElementById("driveFrame");
const tabBtns = document.querySelectorAll(".tab-btn");
const labTabBtn = document.getElementById("labTabBtn");
const labManualsBtn = document.getElementById("labManualsBtn");
const slidesBtn = document.getElementById("slidesBtn");
const writingTabBtn = document.getElementById("writingTabBtn");
const notesBtn = document.getElementById("notesBtn");
const booksBtn = document.getElementById("booksBtn");

function openViewer(title, subjectKey) {
  currentSubject = subjectKey;
  modalTitle.textContent = title;
  
  // Show/Hide Notes
  if (resources[subjectKey].notes) {
      notesBtn.style.display = "block";
  } else {
      notesBtn.style.display = "none";
  }

  // Show/Hide Books
  if (resources[subjectKey].books) {
      booksBtn.style.display = "block";
  } else {
      booksBtn.style.display = "none";
  }

  // Show/Hide Slides
  if (resources[subjectKey].slides) {
      slidesBtn.style.display = "block";
  } else {
      slidesBtn.style.display = "none";
  }

  // Show/Hide Lab Tab based on availability
  if (resources[subjectKey].labs) {
      labTabBtn.style.display = "block";
  } else {
      labTabBtn.style.display = "none";
  }

  // Show/Hide Lab Manuals
  if (resources[subjectKey].labManuals) {
      labManualsBtn.style.display = "block";
  } else {
      labManualsBtn.style.display = "none";
  }

  // Show/Hide Writing Tab
  if (resources[subjectKey].writing) {
      writingTabBtn.style.display = "block";
  } else {
      writingTabBtn.style.display = "none";
  }

  // Reset to first tab
  // Reset to first available tab
  const resourceKeys = Object.keys(resources[subjectKey]);
  let firstAvailable = "notes"; // Default fallback
  for (const key of resourceKeys) {
      if (resources[subjectKey][key]) {
          firstAvailable = key;
          break;
      }
  }
  switchTab(firstAvailable);

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling background
}

function closeViewer() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto"; // Restore scrolling
  driveFrame.src = "about:blank"; // Stop loading to save bandwidth
}

function switchTab(type) {
  currentTab = type;

  // Update UI tabs
  tabBtns.forEach((btn) => {
    if (
      btn.textContent
        .toLowerCase()
        .includes(type === "questions" ? "question" : type)
    ) {
      // Simple fuzzy match for 'Question Bank' vs 'questions'
      // Better to use data attributes, but this works for now
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Specific logic for exact button matching since text might differ
  // Let's rely on the onclick passing the exact type 'notes', 'books', etc.
  tabBtns.forEach((btn) => {
    // Remove active from all
    btn.classList.remove("active");
    // Add to the one that called this function (we can't easily select by onclick attribute without more complex query)
    // So we will just look at the mapping:
    const btnType = btn.getAttribute("onclick").match(/'([^']+)'/)[1];
    if (btnType === type) {
      btn.classList.add("active");
    }
  });

  loadDriveContent();
}

function loadDriveContent() {
  const folderId = resources[currentSubject][currentTab];

  if (folderId && !folderId.includes("FOLDER_ID")) {
    // Real ID formatting
    // Only invert if NOT in light mode
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        driveFrame.classList.remove("inverted");
    } else {
        driveFrame.classList.add("inverted");
    }
    const embedUrl = `https://drive.google.com/embeddedfolderview?id=${folderId}#list`;
    driveFrame.src = embedUrl;
  } else {
    driveFrame.classList.remove("inverted");
    // Placeholder or Demo View
    // We will create a fake "No Content Configured" display using a data URI or just an empty folder view if we had a specific demo folder.
    // For now, let's show a helpful error message in the frame
    const htmlContent = `
            <body style="background: #0f0f12; color: #94a3b8; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; font-family: sans-serif;">
                <h2 style="color: #3b82f6;">Content Not Linked</h2>
                <p>The Folder ID for <strong>${currentSubject.toUpperCase()} - ${currentTab.toUpperCase()}</strong> is missing.</p>
                <p style="font-size: 0.9em; opacity: 0.7;">Edit script.js and add the Google Drive Folder ID.</p>
            </body>
        `;
    driveFrame.src = "data:text/html;charset=utf-8," + encodeURI(htmlContent);
  }
}

// Close on outside click
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeViewer();
        }
    });
}

// Theme Toggle Logic
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    
    updateThemeIcon(targetTheme);
    
    // Refresh drive content inversion if a folder is loaded
    if (modal && modal.classList.contains("active")) {
        loadDriveContent();
    }
}

function updateThemeIcon(theme) {
    const toggleBtn = document.querySelector('.theme-toggle i');
    if (theme === 'light') {
        toggleBtn.className = 'fa-solid fa-moon';
    } else {
        toggleBtn.className = 'fa-solid fa-sun';
    }
}

// Initialize Theme
(function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
})();

// Mobile Menu Logic
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Scroll Events
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
