import styles from './index.module.css';
import PhotoIcon from '@/assets/PhotoIcon';
export default function DefaultAvatar() {
	return (
		<div className={styles.container}>
			<PhotoIcon/>
		</div>
	);
}
