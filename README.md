# Progress Bar

A lightweight React progress bar that smoothly advances from 0% to 100% and clearly communicates its current loading state.

---

## 📬 Submission Links

| | Link |
|---|---|
| 🌐 **Hosted Link** | [Click here](https://strong-lebkuchen-01fc36.netlify.app/) |
| 🐙 **GitHub Repository** | [Click here](https://github.com/Vihanga-Ops/Progress-Bar) |

> Replace either URL above if your final deployment or repository link changes.

---

## Preview

> A clean, responsive progress indicator with animated percentage updates and a completion state.

---

## Features

| Feature | Description |
|---|---|
| **Animated Progress** | Progress increases automatically from 0% to 100%. |
| **Live Percentage** | The current progress value is displayed below the bar. |
| **Loading State** | Shows a purple progress bar and `Loading` label while progress is active. |
| **Completion State** | Switches to a green bar and `Complete` label at 100%. |
| **Responsive Layout** | The centered card adapts to smaller screen sizes. |
| **Automatic Cleanup** | The interval is cleaned up when the component unmounts. |

---

## Tech Stack

| Technology | Usage |
|---|---|
| **React** | Builds the progress bar component and user interface. |
| **React useState** | Stores the current percentage value. |
| **React useEffect** | Runs and cleans up the progress interval. |
| **JavaScript** | Controls the progress logic and completion state. |
| **Inline Styles** | Defines the component layout, colors, spacing, and transitions. |

---

## Project Structure

```text
progress-bar/
├── public/
│   └── index.html
├── src/
│   ├── App.js             # Root component
│   ├── Progressbar.jsx    # Animated progress bar component
│   ├── App.css            # App-level stylesheet
│   ├── index.css          # Global stylesheet
│   └── index.js           # React entry point
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- npm (included with Node.js)

### Installation

1. Clone the repository.
2. Open the project directory.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode. |
| `npm test` | Runs the test suite in interactive watch mode. |
| `npm run build` | Creates an optimized production build. |
| `npm run eject` | Ejects the Create React App configuration. |

---

## How It Works

The component starts at `0` and uses a timer to increase the value by `1` every 50 milliseconds. Once the value reaches `100`, the timer stops and the interface changes from the loading style to the completion style.

```jsx
const [percentage, setPercentage] = useState(0);
const isComplete = percentage >= 100;
```

The progress bar width is controlled by the current percentage:

```jsx
width: `${percentage}%`
```

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| **Page Background** | `#f0f4ff` | Main application background. |
| **Card Background** | `#ffffff` | Progress card surface. |
| **Progress Purple** | `#6366f1` | Loading bar and status text. |
| **Completion Green** | `#22c55e` | Completed bar and status text. |
| **Track Gray** | `#e2e8f0` | Empty progress track. |
| **Text Slate** | `#1e293b` | Component heading. |

---

## License

This project was created for educational purposes.
