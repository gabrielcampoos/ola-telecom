import { motion } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

const CustomAnimation: React.FC<Props> = ({ children }) => {
	return (
		<motion.div
			className="box"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.4,
				delay: 0.3,
				ease: 'linear',
			}}
		>
			{children}
		</motion.div>
	);
};

export default CustomAnimation;
