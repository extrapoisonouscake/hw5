import styles from "./index.module.css";
import {createPortal} from "react-dom";
import CloseButton from "@/components/CloseButton";
import {memo} from "react";
interface Props {
	isOpened: boolean;
	closeModal: () => void;
	onAction?: () => void;
}
function DeleteTicketModal({isOpened, closeModal, onAction}: Props) {
	return createPortal(
		<div className={styles.container} data-visible={isOpened}>
			<div className={styles.overlay} onClick={closeModal} />
			<div className={styles.modal}>
				<p className={styles.heading}>
          Удаление билета
					<CloseButton alt='Закрыть всплывающее окно' onClick={closeModal} />
				</p>
				<p className={styles.text}>Вы уверены, что хотите удалить билет?</p>
				<div className={styles.buttons}>
					<button
						onClick={() => {
							if (onAction) {
								onAction();
							}

							closeModal();
						}}
					>
            Да
					</button>
					<button onClick={closeModal} className='ghost'>
            Нет
					</button>
				</div>
			</div>
		</div>,
		document.body,
	);
}

export default memo(DeleteTicketModal);
