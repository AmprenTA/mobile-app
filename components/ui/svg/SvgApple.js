import Svg, { Path } from "react-native-svg";

function SvgApple(props) {
  return (
    <Svg
      width={39}
      height={48}
      viewBox="0 0 39 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M30.648 9.5c-1.673-.417-3.413-.298-5.17.354a17.201 17.201 0 01-11.956 0c-1.757-.652-3.497-.77-5.17-.353C1.594 11.189-1.693 20.91.866 31.636c2.304 9.658 8.45 16.36 14.605 16.359.68 0 1.36-.082 2.035-.25a8.04 8.04 0 014.016.007c.67.167 1.344.248 2.019.248 6.136 0 12.286-6.703 14.591-16.364 2.56-10.724-.729-20.447-7.485-22.135zm5.044 21.526c-2.15 9.013-8.364 15.529-13.594 14.223a10.46 10.46 0 00-5.216.005c-5.208 1.3-11.423-5.215-13.574-14.228C1.158 22.013 3.74 13.3 8.948 12c.45-.113.913-.17 1.383-.17.76 0 1.541.148 2.335.443a19.662 19.662 0 0013.668 0c1.285-.477 2.535-.568 3.719-.273 5.207 1.3 7.79 10.014 5.639 19.027z"
        fill="#222122"
      />
      <Path
        d="M21.087 3.548C19.74 1.522 17.597.233 15.205.011c-1.273-.118-2.457.706-2.816 1.96a8.298 8.298 0 001.054 6.897c1.347 2.026 3.49 3.315 5.881 3.537.082.008.162.012.242.012 1.178 0 2.238-.798 2.574-1.972a8.298 8.298 0 00-1.053-6.897zM19.729 9.72c-.021.077-.098.135-.178.124a5.43 5.43 0 01-4.03-2.422 5.686 5.686 0 01-.721-4.727.175.175 0 01.164-.124h.014a5.43 5.43 0 014.03 2.423 5.684 5.684 0 01.721 4.726z"
        fill="#222122"
      />
      <Path
        d="M29.919 11.2c-1.402-.354-2.85-.229-4.268.302a17.52 17.52 0 01-12.302 0c-1.419-.53-2.866-.656-4.268-.303-5.742 1.446-8.562 10.364-6.3 19.918 2.261 9.556 8.75 16.13 14.49 14.684l.025-.006a8.839 8.839 0 014.408 0l.024.006c5.742 1.445 12.23-5.128 14.491-14.684 2.262-9.554-.558-18.472-6.3-19.918zM20.694 4.477c-1.172-1.47-3.006-2.323-4.931-2.472-.672-.052-1.299.311-1.49.864-.544 1.582-.288 3.35.883 4.82 1.172 1.47 3.006 2.323 4.931 2.471.672.053 1.299-.31 1.489-.864.545-1.581.29-3.35-.883-4.82z"
        fill="#222122"
      />
    </Svg>
  );
}

export default SvgApple;