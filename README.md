# KUET ECE Materials Hub 🎓

![Project Badge](https://img.shields.io/badge/KUET-ECE-blue) ![Batch](https://img.shields.io/badge/Batch-2k24%2F2k25-green) ![Status](https://img.shields.io/badge/Status-Active-success)

**KUET ECE Materials Hub** is a centralized, modern web platform designed specifically for students of **Khulna University of Engineering & Technology (KUET)**, Department of **Electronics & Communication Engineering (ECE)**. It serves as a comprehensive digital library, organizing academic materials for all 8 semesters of the undergraduate program.

---

## 🌟 Key Features

- **📚 Multi-Semester Architecture**: A central Hub page linking to dedicated spaces for all 8 semesters (from 1-1 to 4-2).
- **📂 Seamless Google Drive Integration**: Directly embeds curated Google Drive folders for viewing files without leaving the app.
- **🌗 Dynamic Theme System**: Beautiful **Dark Mode** (default) for late-night study sessions and a crisp **Light Mode** for daytime clarity.
- **⚡ Premium UI/UX**: Built with a glassmorphism aesthetic, staggered grid animations, smooth scroll-to-top functionality, and an anchored global hamburger menu.
- **📱 Fully Responsive**: Optimized experience across Desktops, Tablets, and Mobile devices.
- **🌐 SEO & Social Ready**: Integrated OpenGraph (OG) tags for beautiful rich-link previews when shared on WhatsApp, Messenger, or Facebook.

---

## 📚 Subject Coverage (Semester 1-1)

While the Hub is built for all semesters, **Semester 1-1** is currently fully populated with resources for the following subjects:

| Code          | Subject Name                     | Resources Available                            |
| :------------ | :------------------------------- | :--------------------------------------------- |
| **ECE 1109**  | Introduction to ECE              | Notes, Books, Questions, Slides, Lab Manuals   |
| **EEE 1109**  | Basic Electrical Engineering     | Notes, Books, Questions, Labs                  |
| **MATH 1109** | Differential & Integral Calculus | Notes, Books, Questions                        |
| **PH 1109**   | Physics                          | Notes, Books, Questions, Slides, Labs, Manuals |
| **HUM 1109**  | Technical English                | Question Bank, Writing Part                    |

*(Note: Other semester pages are structurally ready and marked as "Coming Soon" until their respective materials are uploaded.)*

---

## 🛠️ Technologies Used

- **HTML5**: Semantic structure across multiple pages (`index.html` and `pages/semester-*.html`).
- **CSS3**: Custom variables, Flexbox/Grid, Glassmorphism effects, keyframe animations, and Media Queries (No frameworks used).
- **JavaScript (ES6+)**: Dynamic DOM manipulation, scroll event listeners, Theme logic, and Drive embed handling.
- **Font Awesome**: Iconography.
- **Google Fonts**: Inter & Outfit typefaces.

---

## 🚀 Setup & Configuration

To run this project locally or update resources:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/KankonNil007/KUET-ECE-1-1.git
    ```
2.  **Open `index.html`** in any modern web browser to access the main Hub.

### Directory Structure
- `/index.html`: The main Hub homepage.
- `/pages/`: Contains all 8 individual semester pages.
- `/css/`: Global stylesheets (`style.css`).
- `/js/`: Global scripts (`script.js`).
- `/assets/`: Icons and images.

### Updating Drive Links

All resource links are managed in the `js/script.js` configuration object. To add or update a folder:

1.  Open the folder in Google Drive.
2.  Ensure Sharing is set to **"Anyone with the link"**.
3.  Copy the Folder ID from the URL (the string after `folders/`).
4.  Paste it into the corresponding field in `js/script.js`:
    ```javascript
    const resources = {
      ece: {
        notes: "NEW_FOLDER_ID_HERE",
        // ...
      },
    };
    ```

---

## 🎨 Theme Customization

The application saves the user's theme preference (Light/Dark) in the browser's `localStorage`.

- **Dark Mode**: Dark blues and slate greys with neon accents.
- **Light Mode**: Clean white and slate whites with deep blue accents.

---

## 👥 Credits

- **Built For**: KUET ECE Batch 2k25
- **Designed & Developed By**: [Kankon Mondal](https://facebook.com/kankonnil)
- **Department**: Electronics & Communication Engineering

---

&copy; 2024 KUET ECE Materials Hub. All custom assets and code are free to use for educational purposes.
