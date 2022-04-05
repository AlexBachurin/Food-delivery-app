import React, { FC } from "react";
import links from "../../utils/links";
const HeaderNav: FC = () => {
	return (
		<ul className="flex md:flex-row lg:flex-row flex-col  h-full items-start md:items-center justify-start md:justify-between pt-16 pl-10 md:pt-0 md:pl-0 gap-10 lg:gap-24 md:gap-12 md:text-[16px] text-[20px] pr-16">
			{links.map(({ id, path, name }) => {
				return (
					<li key={id} className="cursor-pointer">
						{name}
					</li>
				);
			})}
		</ul>
	);
};

export default HeaderNav;
