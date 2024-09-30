import {motion} from 'framer-motion';

import styles from '@/app/styles/LoadingScreen.module.scss'

const LoadingScreen: React.FC = () => {


    return (
        <motion.div
            initial={{opacity: 1}}
            exit={{
                opacity: 0,
            }}
            className={styles.container}>
            <motion.div
                initial={{scale: 1}}
                animate={{scale: 4}}
                exit={{scale:5}}
                transition={{duration: 4}}
                className={styles.block}
            >
            </motion.div>

            <div className={styles.text}>
                Loading
            </div>

        </motion.div>
    )

}

export default LoadingScreen