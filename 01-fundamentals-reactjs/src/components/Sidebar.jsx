import {PencilLine} from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
             className={styles.cover}
             src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=400&q=100" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/108482936?v=4" />

                <strong>Ramon Dino</strong>
                <span>Photografer</span>
            </div> 

            <footer>
                <a href='#'>
                    <PencilLine />
                    Editar seu perfil
                </a>
            </footer>
        </aside>    
    );
}