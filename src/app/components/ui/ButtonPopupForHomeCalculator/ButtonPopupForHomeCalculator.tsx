import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { FC, ReactNode } from 'react'
import Popup from '../../popup/Popup'
import styles from './ButtonPopupForHomeCalculator.module.scss'

interface Props {
	children: ReactNode
}

const ButtonPopupForHomeCalculator: FC<Props> = ({ children }) => {
	return (
		<Popover>
			<PopoverTrigger type='submit'>
				<p className={styles.button}>{children}</p>
			</PopoverTrigger>
			<PopoverContent>
				<Popup />
			</PopoverContent>
		</Popover>
	)
}

export default ButtonPopupForHomeCalculator
