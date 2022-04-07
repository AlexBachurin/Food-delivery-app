import { motion } from "framer-motion";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import links from "../../utils/links";
const HeaderNav: FC = () => {
	return (
		<motion.ul
			initial={{ opacity: 0, x: 200 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 200 }}
			className="flex md:flex-row lg:flex-row flex-col  h-full items-start md:items-center justify-start md:justify-between pt-16 pl-10 md:pt-0 md:pl-0 gap-10 lg:gap-24 md:gap-12 md:text-[16px] text-[20px] pr-16"
		>
			{links.map(({ id, path, name }) => {
				return (
					<Link
						to={path}
						key={id}
						className="text-textColor hover:text-headingColor transition-all ease-in-out cursor-pointer"
					>
						{name}
					</Link>
				);
			})}
		</motion.ul>
	);
};

export default HeaderNav;
