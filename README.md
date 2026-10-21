
# Cricket Player Search Application

A simple and interactive cricket player search application built using React.js and Redux. Users can search for cricket players by name, with matching results displayed dynamically as they type.

## 🚀 Live Demo

[View Live Application](https://searching-app-liard.vercel.app/)

## 📌 Features

- **Search Players:** Search for cricket players by entering their names.
- **Case-Insensitive Search:** Find players regardless of uppercase or lowercase letters.
- **Real-Time Filtering:** Update the displayed player list as the search input changes.
- **Redux State Management:** Manage the search input and player data using Redux.
- **Controlled Input:** Synchronize the search field with application state.
- **Reusable Components:** Separate the search input and player list into reusable React components.
- **Dynamic Rendering:** Display only the players matching the search query.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Redux
- React Redux
- HTML5
- CSS3
- Vite
- Git and GitHub
- Vercel

## 📂 Project Structure

```text
Searching-App/
├── public/
├── src/
│   ├── assets/
│   ├── Searching App/
│   │   ├── App.jsx
│   │   ├── cricketerReducer.jsx
│   │   ├── searchReducer.jsx
│   │   ├── rootReducer.jsx
│   │   └── store.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git (optional, for cloning the repository)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kenuit2004/Searching-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Searching-App
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🧠 Concepts Demonstrated

- **Functional Components:** Build the application using React function components.
- **useSelector:** Access Redux state from React components.
- **useDispatch:** Dispatch actions to update the search query.
- **Reducers:** Handle state updates using Redux reducers.
- **combineReducers:** Combine multiple reducers into a root reducer.
- **Controlled Components:** Manage the search input through React state.
- **Array filter():** Filter player names based on the search query.
- **String Methods:** Use `toLowerCase()` and `includes()` for case-insensitive matching.
- **Component Composition:** Pass data and callbacks through component props.

## 🔮 Future Improvements

- Add CSS styling and responsive design.
- Display player profile images and additional information.
- Show a message when no matching players are found.
- Add a clear-search button.
- Expand the player database with more cricket players.

## 👨‍💻 Author

**Kenuit M**

- GitHub: [kenuit2004](https://github.com/kenuit2004)
- LinkedIn: [kenuitm](https://linkedin.com/in/kenuitm)
