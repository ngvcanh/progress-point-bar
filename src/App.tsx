import './App.css';
import "./ProgressPointBar.css";
import { ProgressPointBar } from './ProgressPointBar';

function App() {
  return (
    <div className="App" style={{
      padding: '32px'
    }}>
      <ProgressPointBar
        label="Điểm hồ sơ"
        pointVariant={{
          0: "danger",
          45: "warning",
          70: "info",
          100: "success"
        }}
      />
    </div>
  );
}

export default App;
