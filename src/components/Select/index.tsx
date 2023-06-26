import cn from 'classnames';
import {useRef, useState, useEffect} from 'react';
import styles from './index.module.css';
import {type SelectHTMLAttributes} from 'react';
import useToggleOpening from './useToggleOpening';
import ArrowIcon from '../../assets/ArrowIcon';
import BindedPortal from './BindedPortal';
type Props = {
	options: Array<[string, string]>;
	placeholder?: string;
	onValueChange: (newOptionValue: string) => void;
	initialValue?: string;
};
export default function Select({
	options,
	placeholder,
	onValueChange,
	initialValue,
}: Props & SelectHTMLAttributes<HTMLSelectElement>) {
	const [optionIndex, setOptionIndex] = useState<number>(
		options.findIndex(option => option[0] === initialValue),
	);
	const {isOpened, toggleIsOpened, setIsClosed} = useToggleOpening();
	const ref = useRef<HTMLDivElement>(null);
	//   UseOutsideClick(ref, setIsClosed);
	useEffect(() => {
		if (onValueChange) {
			onValueChange(optionIndex > -1 ? options[optionIndex][0] : '');
		}
	}, [optionIndex]);
	return (
		<>
			<div
				ref={ref}
				className={cn(styles.container, {
					[styles.noSelectedOption]: optionIndex === -1,
				})}
			>
				<div className={styles.select} onClick={toggleIsOpened}>
					<p className={styles.placeholder}>
						{optionIndex > -1 ? options[optionIndex][1] : placeholder}
					</p>
				</div>
				<div className={cn(styles.arrow, {[styles.opened]: isOpened})}>
					<ArrowIcon color='#999FA6' />
				</div>
			</div>
			{isOpened && (
				<BindedPortal onOutsideClick={setIsClosed} selectRef={ref}>
					<div className={cn(styles.options, {[styles.opened]: isOpened})}>
						{options.map((option, i) => (
							<div
								key={option[0]}
								onClick={() => {
									setOptionIndex(i);
									setIsClosed();
								}}
							>
								{option[1]}
							</div>
						))}
					</div>
				</BindedPortal>
			)}
		</>
	);
}
