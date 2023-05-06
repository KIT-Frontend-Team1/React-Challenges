import Hook from './components/Hook';
import './App.css';
import UseRef from './components/useRef';
import UseEffect from './components/useEffect';
import UseMemo from './components/useMemo';
import { useState } from 'react';
import UseCallback from './components/useCallback';

function App() {
    const [num, setNum] = useState(5);

    const handleNumChange = event => {
        setNum(Number(event.target.value));
    };
    return (
        <>
            <Hook />
            <UseRef />
            <UseEffect />
            <div>
                <input type='number' value={num} onChange={handleNumChange} />
                <UseMemo num={num} />
            </div>
            <UseCallback />
        </>
    );
}

export default App;
