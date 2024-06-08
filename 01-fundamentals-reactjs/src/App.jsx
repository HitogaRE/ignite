// JSX = JavaScript + XML (HTML)
import { Post } from './Post'
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Ramon Dino" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur facilis itaque quaerat quis, temporibus nobis. Iure similique porro expedita explicabo sunt rerum, a suscipit esse inventore ut error autem?"
      />
    </div>
  )
}


