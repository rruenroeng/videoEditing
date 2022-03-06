import { useVideoConfig } from "remotion";

export const MyComposition = () => {
	const {fps, durationInFrames, width, height } = useVideoConfig();
	return (
	<div
		style= {{
			flex: 1,
			textAlign: 'center',
			fontSize: '7em',
			background:'black',
			color: 'red',
		}}
		>
			Hi Mom!
			I made a {width}x{height}px video that is 
			{ durationInFrames/fps} seconds long.
		</div>
	);
};
