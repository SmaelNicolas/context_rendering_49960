// export const Footer = ({ date }) => {
// 	console.log("SE RENDERIZA FOOTER");
// 	return (
// 		<div
// 			style={{
// 				width: "100vw",
// 				padding: "40px",
// 				background: "pink",
// 				textAlign: "center",
// 			}}>
// 			Footer
// 		</div>
// 	);
// };

import { memo } from "react";

export const Footer = memo(
	({ date }) => {
		console.log("SE RENDERIZA FOOTER");
		return (
			<div
				style={{
					width: "100vw",
					padding: "40px",
					background: "pink",
					textAlign: "center",
				}}>
				Footer
			</div>
		);
	},
	(oldProps, newProps) => 1 === 2
);
