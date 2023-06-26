"use client";
import CartCounter from "./CartCounter";
import styles from "./index.module.css";
import CartIcon from "@/assets/CartIcon";
import Link from "next/link";

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<h3 className={styles.heading}>Билетопоиск</h3>
			</Link>
			<Link href='/cart'>

				<div className={styles.right}>
					<CartCounter/><CartIcon />
				</div>
			</Link>
		</header>
	);
}
