# ✨ حكايتنا (Our Story) — Interactive Multimedia Web Narrative

A cinematic, interactive web narrative and multimedia showcase featuring custom audio integration, right-to-left (RTL) Arabic typography, and smooth CSS3 animations.

---

## 🌟 Key Features

* **🎭 Cinematic Loading & Transitions:** Smooth entrance animations and loading sequences built with CSS keyframes and modular JS.
* **🎵 Embedded Audio Controller:** Interactive background music player with playback state management and volume control.
* **🖼️ Dynamic Photo Gallery:** Fluid image display layout showcasing moments with custom transitions.
* **🌍 Native RTL Support:** Full Right-To-Left layout support utilizing Amiri and Tajawal typography.
* **📱 Responsive Layout:** 100% responsive across mobile devices, tablets, and desktop displays.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5 (Semantic, RTL), CSS3 (Animations, Flexbox, Media Queries), Vanilla JavaScript (ES6+).
* **Typography:** Google Fonts (Amiri, Aref Ruqaa, Tajawal).
* **Zero Dependencies:** Pure vanilla web code requiring no complex build pipeline.

---

## 📂 Project Structure

```
project_webpages/
├── index.html              # Main Interactive Story Page
├── css/
│   ├── style.css           # Core styling and typography
│   ├── animations.css      # CSS keyframes and transition effects
│   └── responsive.css      # Mobile/tablet media queries
├── js/
│   ├── main.js             # Initialization and configuration
│   ├── gallery.js          # Image gallery interactions
│   ├── music.js            # Audio player controls
│   └── animations.js       # Scroll and entrance animation triggers
└── assets/
    ├── images/             # Visual narrative assets
    └── music/              # Audio tracks
```

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Uzair0123/project_webpages.git
   cd project_webpages
   ```
2. Open `index.html` directly in your browser or run a simple local web server:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` in your web browser.

---

## 💡 What I Learned Building This

* Handling complex media playback states (Audio API) with user interaction policies.
* Crafting responsive RTL (Right-to-Left) layouts and fluid typography.
* Organizing modular JavaScript files for maintainable client-side behavior.
