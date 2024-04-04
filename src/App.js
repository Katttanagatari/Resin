import './App.css';
import { Header } from './components/Header/component';
import { Main } from './components/Main/component';
import { OurTeam } from './components/Team/component';
import { OurTeamsCard } from './components/Teams-card/component';
import { Project } from './components/Project/component';


function App() {
  return (
    <>
      <Header />
      <Main />
      <OurTeam />
      <OurTeamsCard />
      <Project />
    </>
  );
}

export default App;
