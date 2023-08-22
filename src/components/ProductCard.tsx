import styles from './productcard.module.css'
import Image from 'next/image';

interface Data_props{
    pic: string;
    title: string;
    message : string;
}
export default function ProductCard({pic,title,message}:Data_props){
    return(
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={pic} alt='Vaccine Picture' fill={true} objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>{title}</div>
            <div className={styles.describtion}>{message}</div>
        </div>
    );
}
