# React Support 5 Manjor Styling Methods:

### 1. Inline CSS

- React uses Javascript object for inline Styling.
- Syntax: style={{key:"value"}}

Notes:-

- CSS properties become **camelCase**
- Example:- background-color -> backgroundColor
- Values muct be inside ""
- Style are inside {{    }} -> (object inside JSX)

### 2. Internal CSS (Inside Component)

- Internal CSS means Writing style as an object inside componenet.

### 3. External CSS

### 4. CSS modules

Notes:-

- Styles are scoped only to this component
- No Naming Conflit
- Recommended for Big Applications

### 5. Tailwind CSS

---


**An instructional session covering CSS styling approaches in React development. The training presented five major styling methods: inline CSS, internal CSS, external CSS, CSS modules, and Tailwind CSS.**

**Key topics included:**

* **Inline CSS**: Using JavaScript objects with double curly brackets syntax for component-level styles
* **Internal CSS**: Defining style objects within components as JavaScript objects, providing scoped styling
* **External CSS**: Creating separate .css files and importing them into components using className attributes
* **CSS Modules**: Using .module.css files to scope styles locally to prevent naming conflicts across components
* **Tailwind CSS**: A utility-first CSS framework for rapid UI development with pre-defined classes

**The session included practical demonstrations of each method with code examples, setup instructions for implementing Tailwind CSS in projects (including npm installations and configuration), and discussions on when to use each approach. Tailwind CSS was highlighted as particularly beneficial for larger applications and modern UI development, with notes on integrating it with frameworks like Next.js and Vite.**

**The training covered project structure, component styling patterns, installation procedures, and configuration requirements for production-ready implementations.**
