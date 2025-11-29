# React CSS & Styling Assignment Guide

## Assignment Overview
Master React styling techniques including inline CSS, external CSS, internal CSS, CSS modules, Tailwind CSS, props, and parent-child data flow through 50 questions and practical components.

---

## Section 1: Multiple Choice Questions (15 Questions)

**Q1:** What is the correct syntax for inline styles in React?
- A) `style="color: red"`
- B) `style={{color: 'red'}}`
- C) `style={color: 'red'}`
- D) `style='color: red'`



**Q2:** Which approach is best for large-scale styling?
- A) Inline CSS
- B) CSS Modules
- C) Internal CSS
- D) All are equal



**Q3:** How do you import an external CSS file in React?
- A) `<link href="style.css" />`
- B) `import './style.css'`
- C) `require('style.css')`
- D) Both B and C


**Q4:** What does Tailwind CSS use?
- A) CSS classes
- B) Utility classes
- C) CSS-in-JS
- D) None


**Q5:** Props in React are:
- A) Mutable
- B) Immutable
- C) Optional
- D) Required



**Q6:** CSS Modules scope styles to:
- A) Global scope
- B) Component scope
- C) Window scope
- D) Function scope



**Q7:** How do you pass props to child components?
- A) `<Child data={value} />`
- B) `Child.data = value`
- C) `global.data = value`
- D) `this.data = value`



**Q8:** Tailwind class for text color red:
- A) `text-red`
- B) `text-red-500`
- C) `color-red`
- D) `font-red`



**Q9:** Internal CSS in React uses:
- A) `<style>` tag in JSX
- B) CSS files
- C) Inline objects
- D) External files



**Q10:** Parent-to-child communication happens via:
- A) State
- B) Props
- C) Context API
- D) Redux



**Q11:** Tailwind spacing class `p-4` means:
- A) Padding 1rem
- B) Padding 2rem
- C) Padding 0.5rem
- D) Padding 4px



**Q12:** CSS Modules file naming convention:
- A) `style.css`
- B) `style.module.css`
- C) `style-module.css`
- D) `moduleStyle.css`



**Q13:** To style multiple elements with inline CSS:
- A) One object per element
- B) Create reusable objects
- C) Use className
- D) Both A and B



**Q14:** Child-to-parent communication uses:
- A) Props
- B) Callback functions via props
- C) State
- D) Direct assignment



**Q15:** Tailwind's `flex` and `justify-center` combination:
- A) Creates flexbox with centered content
- B) Creates grid layout
- C) Sets font alignment
- D) None



## Section 2: Practical Code Examples (35 Questions)

### Topic 1: Inline CSS (5 Questions)

**Q16-20:** Write inline CSS for these scenarios:

```jsx
// Q16: Red text, bold
const Q16 = () => (
    <p style={{color: 'red', fontWeight: 'bold'}}>Answer here</p>
);

// Q17: Blue background, white text, padding
const Q17 = () => (
    <div style={{backgroundColor: 'blue', color: 'white', padding: '10px'}}>
        Text
    </div>
);

// Q18: Centered text with margin
const Q18 = () => (
    <h1 style={{textAlign: 'center', margin: '20px'}}>Title</h1>
);

// Q19: Reusable style object
const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};
const Q19 = () => <button style={buttonStyle}>Click me</button>;

// Q20: Conditional inline styles
const Q20 = ({isActive}) => (
    <div style={{
        color: isActive ? 'green' : 'red',
        fontWeight: isActive ? 'bold' : 'normal'
    }}>
        Status
    </div>
);
```

### Topic 2: External CSS (5 Questions)

**Q21-25:** External CSS examples:

```jsx
// styles/external.css
.card {
    border: 1px solid #ddd;
    padding: 15px;
    borderRadius: 8px;
    boxShadow: 0 2px 8px rgba(0,0,0,0.1);
}

.button-primary {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

// Q21: Basic component with external CSS
import './styles/external.css';

const Q21 = () => (
    <div className="card">
        <h2>Card Title</h2>
        <p>Card content</p>
        <button className="button-primary">Action</button>
    </div>
);

// Q22: Multiple classes
const Q22 = () => (
    <div className="card button-primary">Content</div>
);

// Q23: Conditional classes
const Q23 = ({isPremium}) => (
    <div className={isPremium ? 'card premium-card' : 'card'}>
        Content
    </div>
);

// Q24: Class with template literals
const Q24 = ({status}) => (
    <div className={`card card-${status}`}>
        Status: {status}
    </div>
);

// Q25: Combining external styles
const Q25 = () => (
    <section className="card">
        <button className="button-primary">Save</button>
        <button className="button-primary">Cancel</button>
    </section>
);
```

### Topic 3: CSS Modules (5 Questions)

**Q26-30:** CSS Modules examples:

```jsx
// styles/Component.module.css
.container {
    display: flex;
    padding: 20px;
    backgroundColor: #f5f5f5;
}

.title {
    fontSize: 24px;
    color: #333;
    marginBottom: 10px;
}

.button {
    backgroundColor: #28a745;
    color: white;
    padding: 8px 16px;
    borderRadius: 4px;
    cursor: pointer;
}

// Q26: Basic CSS Module
import styles from './styles/Component.module.css';

const Q26 = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Title</h1>
    </div>
);

// Q27: Dynamic CSS Module classes
const Q27 = ({isActive}) => (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`}>
        Click
    </button>
);

// Q28: Multiple modules
import globalStyles from './styles/Global.module.css';
import componentStyles from './styles/Component.module.css';

const Q28 = () => (
    <div className={globalStyles.wrapper}>
        <div className={componentStyles.container}>Content</div>
    </div>
);

// Q29: Scoped styling with modules
const Q29 = () => (
    <section className={styles.section}>
        <article className={styles.article}>
            <h2 className={styles.title}>Article</h2>
        </article>
    </section>
);

// Q30: CSS Modules with conditions
const Q30 = ({theme}) => (
    <div className={`${styles.container} ${styles[theme]}`}>
        Themed content
    </div>
);
```

### Topic 4: Tailwind CSS (5 Questions)

**Q31-35:** Tailwind CSS examples:

```jsx
// Q31: Basic Tailwind classes
const Q31 = () => (
    <div className="bg-blue-500 text-white p-4 rounded-lg">
        Tailwind card
    </div>
);

// Q32: Flexbox with Tailwind
const Q32 = () => (
    <div className="flex justify-between items-center p-8">
        <span>Left</span>
        <span>Right</span>
    </div>
);

// Q33: Responsive Tailwind
const Q33 = () => (
    <div className="bg-red-500 md:bg-blue-500 lg:bg-green-500 p-4 md:p-8 lg:p-12">
        Responsive
    </div>
);

// Q34: Tailwind hover states
const Q34 = () => (
    <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded transition">
        Hover me
    </button>
);

// Q35: Complex Tailwind layout
const Q35 = () => (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Title</h2>
            <p className="text-gray-600 mb-4">Description</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Action
            </button>
        </div>
    </div>
);
```

### Topic 5: Props (5 Questions)

**Q36-40:** Props examples:

```jsx
// Q36: Basic props
const Q36 = ({title, color}) => (
    <h1 style={{color}}>{title}</h1>
);
// Usage: <Q36 title="Hello" color="blue" />

// Q37: Props with default values
const Q37 = ({name = 'Guest', role = 'User'}) => (
    <div>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
    </div>
);

// Q38: Props destructuring
const Q38 = ({user: {firstName, lastName, email}}) => (
    <div>
        <p>{firstName} {lastName}</p>
        <p>{email}</p>
    </div>
);

// Q39: Props with functions
const Q39 = ({onSubmit, buttonLabel = 'Submit'}) => (
    <button onClick={onSubmit} style={{padding: '10px 20px'}}>
        {buttonLabel}
    </button>
);

// Q40: Children props
const Q40 = ({children, bgColor = '#f0f0f0'}) => (
    <div style={{backgroundColor: bgColor, padding: '20px', borderRadius: '8px'}}>
        {children}
    </div>
);
// Usage: <Q40 bgColor="lightblue"><h2>Content</h2></Q40>
```

### Topic 6: Parent-Child Communication (5 Questions)

**Q41-45:** Parent-Child data flow:

```jsx
// Q41: Simple parent to child
const Q41Parent = () => {
    return (
        <Q41Child message="Hello from parent" />
    );
};

const Q41Child = ({message}) => (
    <p>{message}</p>
);

// Q42: Child to parent (callback)
const Q42Parent = () => {
    const [value, setValue] = useState('');
    
    return (
        <div>
            <p>Value: {value}</p>
            <Q42Child onValueChange={setValue} />
        </div>
    );
};

const Q42Child = ({onValueChange}) => (
    <input onChange={(e) => onValueChange(e.target.value)} />
);

// Q43: Complex props passing
const Q43Parent = () => {
    const [user, setUser] = useState({name: 'John', age: 25});
    
    return <Q43Child user={user} onUpdate={setUser} />;
};

const Q43Child = ({user, onUpdate}) => (
    <button onClick={() => onUpdate({...user, age: user.age + 1})}>
        {user.name} is {user.age}
    </button>
);

// Q44: Multiple children
const Q44Parent = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <Q44Child1 count={count} />
            <Q44Child2 onIncrement={() => setCount(count + 1)} />
        </div>
    );
};

const Q44Child1 = ({count}) => <p>Count: {count}</p>;
const Q44Child2 = ({onIncrement}) => <button onClick={onIncrement}>+</button>;

// Q45: Nested children communication
const Q45Parent = () => {
    const [data, setData] = useState('Initial');
    
    return (
        <Q45Child1 data={data} onDataChange={setData}>
            <Q45Child2 />
        </Q45Child1>
    );
};

const Q45Child1 = ({data, onDataChange, children}) => (
    <div>
        <p>{data}</p>
        {children}
        <button onClick={() => onDataChange('Updated')}>Update</button>
    </div>
);

const Q45Child2 = () => <span>Child 2 content</span>;
```

---

## Section 3: Main Assignment Project

### Assignment Task: Build a User Profile Card System

**Objective:** Create a parent component with multiple child components using all styling methods and props.

```jsx
// App.js
import React, { useState } from 'react';
import UserProfileParent from './components/UserProfileParent';
import './App.css'; // External CSS

function App() {
    return (
        <div className="app-container">
            <h1>User Profile Card System</h1>
            <UserProfileParent />
        </div>
    );
}

export default App;
```

```jsx
// components/UserProfileParent.js
import React, { useState } from 'react';
import UserCard from './UserCard';
import UserStats from './UserStats';
import UserActions from './UserActions';
import styles from './UserProfileParent.module.css';

const UserProfileParent = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer', followers: 245, isActive: true },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer', followers: 180, isActive: false }
    ]);

    const [selectedUserId, setSelectedUserId] = useState(1);

    const handleUserSelect = (id) => {
        setSelectedUserId(id);
    };

    const handleUserUpdate = (id, updatedData) => {
        setUsers(users.map(u => u.id === id ? {...u, ...updatedData} : u));
    };

    const selectedUser = users.find(u => u.id === selectedUserId);

    return (
        <div className={styles.parentContainer}>
            <div className="grid-container" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div>
                    <h2>Select User</h2>
                    {users.map(user => (
                        <button
                            key={user.id}
                            onClick={() => handleUserSelect(user.id)}
                            style={{
                                backgroundColor: selectedUserId === user.id ? '#007bff' : '#e9ecef',
                                color: selectedUserId === user.id ? 'white' : 'black',
                                padding: '10px',
                                margin: '5px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            {user.name}
                        </button>
                    ))}
                </div>

                <div>
                    {selectedUser && (
                        <>
                            <UserCard user={selectedUser} />
                            <UserStats user={selectedUser} />
                            <UserActions user={selectedUser} onUpdate={handleUserUpdate} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfileParent;
```

```jsx
// components/UserCard.js
import React from 'react';
import styles from './UserCard.module.css';

const UserCard = ({ user }) => {
    const inlineStyle = {
        borderLeft: `4px solid ${user.isActive ? '#28a745' : '#dc3545'}`
    };

    return (
        <div className={`${styles.card} tailwind-card`} style={inlineStyle}>
            <style>{`
                .user-card-internal {
                    font-weight: bold;
                    color: #333;
                }
            `}</style>
            
            <div className="user-card-internal">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Role: {user.role}</p>
                <p className={`mt-2 ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {user.isActive ? 'Active' : 'Inactive'}
                </p>
            </div>
        </div>
    );
};

export default UserCard;
```

```jsx
// components/UserStats.js
import React from 'react';

const UserStats = ({ user }) => {
    const statStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        marginTop: '10px'
    };

    const statItemStyle = {
        textAlign: 'center',
        padding: '10px'
    };

    return (
        <div style={statStyle} className="flex justify-around bg-gray-100 rounded-lg p-4">
            <div style={statItemStyle}>
                <p className="text-2xl font-bold text-blue-600">{user.followers}</p>
                <p className="text-gray-600">Followers</p>
            </div>
            <div style={statItemStyle}>
                <p className="text-2xl font-bold text-purple-600">12</p>
                <p className="text-gray-600">Posts</p>
            </div>
            <div style={statItemStyle}>
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-gray-600">Badges</p>
            </div>
        </div>
    );
};

export default UserStats;
```

```jsx
// components/UserActions.js
import React from 'react';
import styles from './UserActions.module.css';

const UserActions = ({ user, onUpdate }) => {
    const handleToggleStatus = () => {
        onUpdate(user.id, { isActive: !user.isActive });
    };

    const handleAddFollower = () => {
        onUpdate(user.id, { followers: user.followers + 1 });
    };

    return (
        <div className={`${styles.actions} flex gap-4 mt-4`}>
            <button
                onClick={handleToggleStatus}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition"
                style={{marginRight: '10px'}}
            >
                Toggle Status
            </button>
            <button
                onClick={handleAddFollower}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
            >
                Add Follower
            </button>
        </div>
    );
};

export default UserActions;
```

```css
/* App.css - External CSS */
.app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.grid-container {
    gap: 30px;
    margin-top: 30px;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}
```

```css
/* components/UserCard.module.css */
.card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}
```

```css
/* components/UserActions.module.css */
.actions {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}
```

---

## Questions 46-50: Reflection & Analysis

**Q46:** Explain how parent-child communication works in your project.

**Q47:** Compare the four CSS methods (inline, external, modules, Tailwind) used in your project.

**Q48:** How would you add a grandchild component that receives data from parent through child?

**Q49:** Design a solution to update parent state from a deeply nested child component.

**Q50:** How would you refactor this project to use Context API instead of props drilling?


