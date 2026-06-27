

const resources = {
  ece: {
    notes: "10HOfn8yuccuc6KhNbn-5Zm5dmxJED30O",
    books: "1gBwKKeMB9LNghbLdePfVyAcPdwjwfhGJ",
    questions: "1RibDU3TQ3-In0kxBCJcDBUNLnesH3Flp",
    slides: "105objX2McdhsymhoNSGq-fSga1O_Jk3P",
    labs: "1W4e8dToos0QSQAhcfuGF4kU7fdpH66fS", // ECE 1110
    notes2k22: "14i3wSgpWKY-sG2dLXCYNRfcVQ9tlwBR5",
    labManuals: "1udjE3J_Xx4S1KlSNRpry3qD6VZUluPQ1",
    writing: null,
  },
  eee: {
    notes: "1o4wEulpUnctitJB5543unEMZzUBL80f0",
    books: "1B6DpfbCesK4nvEWCZ-olv-AibzUxd0T4",
    questions: "1od4vziNaJ_5KgPe4R5RG7KOg5f4ZsCAF",
    slides: null,
    labs: "1EmM1G0raxCAkgCwNZPbZIkV9uy_O2SHa", // EEE 1110
    notes2k22: "1eBZKTgK_bRez5VOsYCokNlgbwWeyfO4N",
    labManuals: null,
    writing: null,
  },
  math: {
    notes: "1nhdHwb6QhugakuaPQQIr-Qj5I7d-U3kE",
    books: "1h4GXPJryYK8n36c3MvwqDSqrVdf0ddgc",
    questions: "1Nj4QBgEZML4uM5js6yImm5Es50P2Izov",
    slides: null,
    labs: null, // No Lab
    notes2k22: null,
    labManuals: null,
    writing: null,
  },
  phy: {
    notes: "12h5EHerXr1AjHq5FIEJVP_wUmTxeYQN7",
    books: "1ocVaP2R6K9c7TV8iaNY6i5MVZtCBUrMz",
    questions: "1SZpq5KkxifhHU2jDQ_7j_hdVxS_yyDkC",
    slides: "1FP8SQuEO1Z7swrFsFSE9NpM9wKFJtUBH",
    labs: "14jeAmUgUkwnFknl6TbuBxzys9vR7OLN7", // PH 1110
    notes2k22: null,
    labManuals: "1sQsJTesBEngvKFbTfwd2CB9Opf3Krp7c",
    writing: null,
  },
  hum: {
    notes: null,
    books: null,
    questions: "1tjWXIKbvz4LZTE0cFD8hzAkuTNKKKMkD",
    slides: null,
    labs: null, // No Lab
    notes2k22: null,
    labManuals: null,
    writing: "1NegvIVhSClRTIA8oAAni24zfTfeY-Ig4",
  },
};

let currentSubject = "ece";
let currentTab = "notes";

const modal = document.getElementById("viewerModal");
const modalTitle = document.getElementById("modalTitle");
const driveFrame = document.getElementById("driveFrame");
const tabBtns = document.querySelectorAll(".tab-btn");
const labTabBtn = document.getElementById("labTabBtn");
const notes2k22Btn = document.getElementById("notes2k22Btn");
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

  // Show/Hide 2k22 Notes
  if (resources[subjectKey].notes2k22) {
      notes2k22Btn.style.display = "block";
  } else {
      notes2k22Btn.style.display = "none";
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
