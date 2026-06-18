# ShopEase 🛒

ShopEase is a react and tailwind based e-commerce application that includes global state synchronization, persistency of data using local storage, and strict authentication. It provides a fast and efficient shopping platform with a structured product catalog and dynamic cart ledger with a slide-out drawer menu.

---

##  Core Architectural Features

- **Persisted Global State Engine:** Employs the React Context API to maintain synchronization of the information flow between all independent components of the UI (e.g., when adding an object, the global navbar badges will be immediately updated, and normal notification channels will fire up).
- **Strict Protected Routes:** An independent, interceptive middleware protection (`ProtectedRoute.jsx`) intercepts the access tokens to lock down the private dashboards such as the `/cart` behind the authentication barriers.
- **Mobile Overlay Navigation Pattern:** Includes a unique mobile navigation design pattern. In the case of a narrow screen size, the application transforms into a side drawer animation on the left side with a semitransparent blurred background.
- **Order Pricing Matrix:** Is a precise bookkeeping ledger, aggregating the particular subtotals, shipping logistics costs, and state tax matrices according to the integer rounding patterns.
- **Native Client Validation:** Includes form controllers, which have the native schema regex pattern validation, along with mandatory asterisk signs (`*`).

---

##  Technology Stack

- **Core of the Library:** React.js (v18+)
- **Build Engine & Bundle:** Vite (Production optimized build)
- **Styling System:** Tailwind CSS (Utility-based Grid System for Styling)
- **Routing of the Client Side:** React Router Dom (v6+)
- **User Alert Interface:** React Hot Toast
---

##  Project Architecture

```text
src/
├── components/
│   ├── Footer.jsx          # Comprehensive situational multi-link desktop/mobile site footer
│   ├── Hero.jsx            # Dynamic call-to-action entry segment
│   ├── Loader.jsx          # Synchronous thread loading component
│   ├── Navbar.jsx          # Adaptive navigation system with scrolling hooks and mobile menu
│   ├── ProductCard.jsx     # Individual product grid cell views
│   └── ProtectedRoute.jsx  # Route middleware ensuring private dashboard isolation
├── context/
│   ├── AuthContext.jsx     # Session hooks with active state synchronization
│   └── CartContext.jsx     # Central data ledger managing client collection mutations
├── pages/
│   ├── Home.jsx            # Main view layer incorporating category filters and search queries
│   ├── Products.jsx        # Complete store product catalogue overview
│   ├── ProductDetails.jsx  # Detailed singular focus item descriptions
│   ├── Cart.jsx            # Two-column layout item manager and rounding matrix
│   └── Login.jsx           # Secured form interface with rigid validation schemas
├── App.jsx                 # Routing declaration file
└── main.jsx                # Web application bootstrapper wrapped inside state providers
```
---

## 🔧 Installation & Setup

Follow these quick steps to get a local copy of ShopEase up and running on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/sutanjoyb/ShopEase.git](https://github.com/sutanjoyb/ShopEase.git)
cd shopease
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start the Local Development Server
```bash
npm run dev
```

Once the compilation completes, open your browser and navigate to [http://localhost:5173]

### 4. 4. Create an Optimized Production Build
```bash
npm run build
```
---

##  Author Details

* **Developer:** Sutanjoy Bhattacharjee
* **GitHub Profile:** [@sutanjoyb](https://github.com/sutanjoyb)

---

##  Thank You!

Thank you for taking your time to check out **ShopEase**! It is my full-fledged attempt at implementing clean coding practices, managing state, and achieving an optimal UX with React and Tailwind CSS!

If you have any comments, ideas, or queries about this application's design or implementation, do not hesitate to contact me or raise an issue in the repository. Your input will be highly valued! Happy Shopping! 🛒