import react from 'react';


function CssInternal() {
const headerStyle = {
    color: 'green',
    textAlign: 'center',
    fontSize: '40px',
    backgroundColor: '#abedbdff',
    padding: '20px',
};

    return (
        <div style={headerStyle}>
            <h1>CSS Internal Methods Component</h1>
        </div>
    )
}

export default CssInternal;