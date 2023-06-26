import styles from './index.module.css';
import CartIcon from '@/assets/CartIcon';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<Link href='/'>
				<h3 className={styles.heading}>Билетопоиск</h3>
			</Link>
			<Link href='/cart'>
				<div>
					<CartIcon/>
				</div>
			</Link>
		</header>
	);
}
