import Svg, { SvgProps, Path } from 'react-native-svg';
export const DeleteIcon = (props: SvgProps) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 -0.5 21 21"
        {...props}
    >
        <Path
            fill="#000"
            fillRule="evenodd"
            d="M7.35 16h2.1V8h-2.1v8Zm4.2 0h2.1V8h-2.1v8Zm-6.3 2h10.5V6H5.25v12Zm2.1-14h6.3V2h-6.3v2Zm8.4 0V0H5.25v4H0v2h3.15v14h14.7V6H21V4h-5.25Z"
        />
    </Svg>
);
