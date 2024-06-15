import styles from './Comment.module.css'

import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() { 
      onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar 
              hasBorder={false} 
              src="https://avatars.githubusercontent.com/u/108482936?v=4"
              alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pitagoras Bradock</strong>
                            <time title="11 de Setembro ás 22:55" dateTime="2024-06-15 22:55:11">Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Positivar <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}