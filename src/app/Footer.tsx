import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<Link href='/qa'>Вопросы-ответы</Link>
			<Link href='/about'>О нас</Link>
		</footer>
	);
}
