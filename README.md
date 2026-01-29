# Academic Resource Hub 🎓

### KUET ECE | 1st Year 1st Semester

![Project Badge](https://img.shields.io/badge/KUET-ECE-blue) ![Batch](https://img.shields.io/badge/Batch-2k24%2F2k25-green) ![Status](https://img.shields.io/badge/Status-Active-success)

**Academic Resource Nexus** is a centralized, modern web platform designed specifically for students of **Khulna University of Engineering & Technology (KUET)**, Department of **Electronics & Communication Engineering (ECE)**. It serves as a one-stop digital library for all academic materials required in the Level 1 Term 1 semester.

---

## 🌟 Key Features

- ** centralized Resource Management**: Instant access to Lecture Notes, Books, Question Banks, Lab Manuals, and Slides for all 5 core subjects.
- **📂 Seamless Google Drive Integration**: Directly embeds curated Google Drive folders for viewing files without leaving the app.
- **🌗 Dynamic Theme System**: Beautiful **Dark Mode** (default) for late-night study sessions and a crisp **Light Mode** for daytime clarity.
- **⚡ Modern UI/UX**: Built with a glassmorphism aesthetic, smooth micro-interactions, and a responsive grid layout.
- **📱 Fully Responsive**: Optimized experience across Desktops, Tablets, and Mobile devices.

---

## 📚 Subject Coverage

The hub organizes resources for the following subjects:

| Code          | Subject Name                     | Resources Available                            |
| :------------ | :------------------------------- | :--------------------------------------------- |
| **ECE 1109**  | Introduction to ECE              | Notes, Books, Questions, Slides, Lab Manuals   |
| **EEE 1109**  | Basic Electrical Engineering     | Notes, Books, Questions, Labs                  |
| **MATH 1109** | Differential & Integral Calculus | Notes, Books, Questions                        |
| **PH 1109**   | Physics                          | Notes, Books, Questions, Slides, Labs, Manuals |
| **HUM 1109**  | Technical English                | Question Bank, Writing Part                    |

---

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom variables, Flexbox/Grid, Glassmorphism effects, and Media Queries (No frameworks used).
- **JavaScript (ES6+)**: Dynamic DOM manipulation, Theme logic, and Drive embed handling.
- **Font Awesome**: Iconography.
- **Google Fonts**: Inter & Outfit typefaces.

---

## 🚀 Setup & Configuration

To run this project locally or update resources:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/academic-resource-nexus.git
    ```
2.  **Open `index.html`** in any modern web browser.

### Updating Drive Links

All resource links are managed in the `script.js` configuration object. To add or update a folder:

1.  Open the folder in Google Drive.
2.  Ensure Sharing is set to **"Anyone with the link"**.
3.  Copy the Folder ID from the URL (the string after `folders/`).
4.  Paste it into the corresponding field in `script.js`:
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

&copy; 2024 Academic Resource Hub. All custom assets and code are free to use for educational purposes.
