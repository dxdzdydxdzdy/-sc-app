import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { FC, ReactNode } from 'react'
import Popup from '../../popup/Popup'
import styles from './ButtonPopup.module.scss'

interface Props {
	children: ReactNode
}

const ButtonPopup: FC<Props> = ({ children }) => {
	return (
		<Popover>
			<PopoverTrigger>
				<p className={styles.button}>{children}</p>
			</PopoverTrigger>
			<PopoverContent>
				<Popup />
			</PopoverContent>
		</Popover>
	)
}

export default ButtonPopup
