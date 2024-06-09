// JSX = JavaScript + XML (HTML)
import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';

import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ramon Dino"
            content="em ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsam reprehenderit, ea ducimus tempora nisi ut quis repudiandae itaque nihil dignissimos quae nemo natus ab totam repellendus maxime amet ratione."
          /> 
          <Post
            author="Adalto Pereira"
            content="em ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsam reprehenderit, ea ducimus tempora nisi ut quis repudiandae itaque nihil dignissimos quae nemo natus ab totam repellendus maxime amet ratione."
          />          
        </main>    
      </div>
    </div>
  )
}
