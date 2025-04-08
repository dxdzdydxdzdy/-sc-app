import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props {
	children: ReactNode
}

const Button: FC<Props> = ({ children }) => {
	return (
		<button type='submit' className={styles.button}>
			{children}
		</button>
	)
}

export default Button
