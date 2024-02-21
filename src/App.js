import './App.css';
import { StudioDashboardHeader } from './studio/StudioDashboardHeader/StudioDashboardHeader';
import { StudioDashboardStudioId } from './studio/dashboard/[studioId]/StudioDashboardStudioId.js';




function App() {

  
  return (
    
    <div className="App">
      <StudioDashboardHeader />
      <StudioDashboardStudioId />
    </div>
  );
}

export default App;
