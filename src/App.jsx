// JSX = JavaScript + XML (HTML)
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/108482936?v=4',
      name: 'Ramon Dino',
      role: 'CTO @FOTNOX'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋',},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
     { type: 'link', content: 'jane.design/doctorcare'},    
    ],
    publishedAt: new Date('2110-09-11 22:59:59'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/89268597?v=4',
      name: 'Pitagoras Bradock',
      role: 'CIAFOU @FOTNOX'
    },
    content: [
     { type: 'paragraph', content: 'Fala galeraa 👋',},
     { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu Face. É um projeto que fiz no jQuest, evento da feira. O nome do projeto Kabummmmm!!!',},
     { type: 'link', content: 'jane.Ramon/Feiras'},    
    ],
    publishedAt: new Date('2112-09-12 11:59:59'),
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            )
          })}
                   
        </main>    
      </div>
    </div>
  )
}
