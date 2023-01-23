import React, { FunctionComponent } from "react";
import { IconProps } from "../../types";

const starknetIcon: FunctionComponent<IconProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 66"
      className="w-40 m-5"
    >
      <defs>
        <path
          d="M343.361 20.488V30.53h14.695v3.253h-14.695v7.071c0 3.913 1.707 5.657 5.594 5.657H360V50h-11.709c-6.92 0-9.291-2.263-9.291-8.769V17h21v3.488h-16.639Z"
          id="a"
        ></path>
      </defs>
      <g fill="#28286E" fillRule="evenodd">
        <path d="M105 41.986c0 5.091-2.91 8.014-8.637 8.014H82.668v-6.034H94.74c1.766 0 2.625-.613 2.625-2.169 0-1.273-.954-2.074-3.054-3.536l-7.157-5.468C83.527 30.058 82 27.513 82 24.495 82 19.357 85.054 17 91.066 17h13.361v6.034H92.402c-1.86 0-2.767.613-2.767 2.216 0 1.226.954 2.027 3.101 3.441l7.11 4.903c3.627 2.452 5.154 5.422 5.154 8.392M133 23.034h-8.654V50h-7.692V23.034H108V17h25zM153.636 38.12l-4.59-13.059-4.636 13.059h9.226Zm1.967 5.516h-13.206L140.149 50H132l13.066-33h7.868L166 50h-8.149l-2.248-6.364ZM178.973 32.557c4.199 0 5.44-1.461 5.44-4.95s-1.241-4.95-5.44-4.95h-3.34v9.9h3.34ZM193 50h-7.681l-1.48-6.317c-.953-4.384-1.812-5.563-5.152-5.61h-3.053V50H168V17h13.693c7.108 0 10.353 3.111 10.353 9.9 0 4.573-1.813 7.354-5.487 8.486 2.624 1.225 3.912 3.677 4.962 8.297L193 50ZM205.436 32.982 217.286 17h8.877l-12.455 15.982L227 50h-8.877l-12.687-17.018ZM198 50h7.436V17H198v33ZM276 17l-9.98 33h-4.663l-7.88-26.4-7.881 26.4h-4.71L231 17h4.57l7.788 27.861L251.612 17h3.73l8.254 27.861L271.43 17zM295.771 38.261l-6.247-16.547-6.295 16.547h12.542Zm1.183 3.159h-14.908L278.78 50H274l13.204-33h4.591L305 50h-4.78l-3.266-8.58ZM319.355 33.17c5.249 0 7.205-2.027 7.205-6.459 0-4.337-1.956-6.41-7.205-6.41h-5.965V33.17h5.965ZM332 50h-4.438l-1.193-5.657c-1.193-5.893-2.672-7.873-7.158-7.967h-5.821V50H309V17h11.834c7.015 0 10.116 3.064 10.116 9.334 0 4.714-1.956 7.59-6.06 8.533 3.245 1.226 4.724 4.007 5.87 9.476L332 50Z"></path>
        <use xlinkHref="#a"></use>
        <path d="m31.953 37.232-5.655 5.832-.011.01a.087.087 0 0 1-.049.014.09.09 0 0 1-.089-.092c0-.01.002-.02.005-.029l2.151-8.276a1.756 1.756 0 0 0-.409-1.74l-5.655-5.831-.01-.012a.094.094 0 0 1-.014-.05c0-.05.04-.092.09-.092.01 0 .02.002.028.005l8.025 2.219a1.63 1.63 0 0 0 1.687-.422l5.655-5.832.012-.01a.086.086 0 0 1 .048-.014.09.09 0 0 1 .089.092c0 .01-.002.02-.005.029l-2.151 8.276a1.757 1.757 0 0 0 .409 1.74l5.655 5.831.01.012a.094.094 0 0 1 .014.05.09.09 0 0 1-.09.091.088.088 0 0 1-.028-.004L33.64 36.81a1.631 1.631 0 0 0-1.687.422m31.803-4.84-13.508-13.93a1.631 1.631 0 0 0-1.686-.422l-8.883 2.457c-.001 0-.001-.002-.003-.001a.088.088 0 0 1-.027.004.09.09 0 0 1-.089-.092c0-.033.016-.061.041-.077.969-.665 2.44-1.869 5.954-5.493a.879.879 0 0 0 0-1.216L32.589.252a.815.815 0 0 0-1.178 0l-13.508 13.93a1.757 1.757 0 0 0-.41 1.74l2.383 9.16s-.002 0-.001.003a.089.089 0 0 1 .004.027.09.09 0 0 1-.09.092.088.088 0 0 1-.074-.043v.001c-.645-1-1.812-2.516-5.327-6.14a.816.816 0 0 0-1.178 0L.244 32.392a.878.878 0 0 0 0 1.216l13.508 13.93c.456.47 1.111.611 1.687.422l8.882-2.457c.001 0 .001.002.003.001a.088.088 0 0 1 .027-.004c.05 0 .089.041.089.092 0 .032-.016.061-.041.077-.969.665-2.439 1.869-5.954 5.493a.878.878 0 0 0 0 1.216l12.966 13.37a.815.815 0 0 0 1.178 0l13.508-13.93c.456-.47.593-1.146.41-1.74l-2.382-9.16v-.002a.097.097 0 0 1-.004-.028c0-.05.04-.092.09-.092.031 0 .059.017.075.043v-.001c.644 1 1.811 2.516 5.326 6.14a.816.816 0 0 0 1.178 0l12.966-13.37a.879.879 0 0 0 0-1.216"></path>
      </g>
    </svg>
  );
};

export default starknetIcon;