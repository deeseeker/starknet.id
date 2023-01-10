import React, { FunctionComponent } from "react";
import { IconProps } from "../../types";

const StarknetIcon: FunctionComponent<IconProps> = ({ width }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_18)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.174 31.9994C64.174 49.6723 49.8147 63.9987 32.1013 63.9987C14.3878 63.9987 0.0275269 49.6723 0.0275269 31.9994C0.0275269 14.3264 14.3878 0 32.1013 0C49.8147 0 64.174 14.3264 64.174 31.9994Z"
          fill="#29296E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.0263 23.4429L46.2107 20.929C46.045 20.4177 45.6405 20.0199 45.1261 19.863L42.5941 19.0861C42.2436 18.9793 42.2408 18.486 42.5884 18.3735L45.109 17.5598C45.6205 17.3944 46.0194 16.9909 46.1776 16.4777L46.9552 13.9515C47.0623 13.6028 47.5567 13.599 47.6695 13.9468L48.485 16.4607C48.6508 16.971 49.0553 17.3689 49.5696 17.5267L52.1016 18.3027C52.4521 18.4104 52.4559 18.9028 52.1073 19.0152L49.5867 19.8289C49.0752 19.9943 48.6764 20.3989 48.5182 20.912L47.7405 23.4373C47.6335 23.787 47.139 23.7907 47.0263 23.4429Z"
          fill="#FAFAFA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.9437 31.4921C3.70623 30.0017 5.21425 28.8789 6.78099 28.1691C8.36382 27.4669 10.1039 27.036 11.8128 26.8962C15.2626 26.5852 18.6235 27.1608 21.6849 28.1559C23.2621 28.6246 24.6735 29.2758 26.1313 29.9336C26.8398 30.2738 27.5058 30.6594 28.1916 31.0318L30.0861 32.1271C32.1662 33.3992 34.1829 34.5257 36.0774 35.4009C37.9766 36.2685 39.693 36.8553 41.3109 37.1549C42.9288 37.4583 44.5732 37.4546 46.5956 36.9915C48.6018 36.5387 50.8591 35.5625 53.2187 34.3103C55.5925 33.0571 58.027 31.5204 60.8043 30.0187C60.5258 33.1572 59.6354 36.1003 58.2449 38.9421C56.8202 41.7499 54.8385 44.4887 51.9494 46.7069C49.1153 48.9429 45.2231 50.5013 41.2607 50.7357C37.2965 51.0032 33.5255 50.1318 30.3172 48.821C27.0966 47.4913 24.3136 45.7438 21.8469 43.8149C21.1658 43.2819 20.8002 42.9794 20.2972 42.5552L18.8925 41.3275C17.9462 40.5884 17.0292 39.7048 16.0924 38.9723C14.2235 37.4139 12.3745 35.8526 10.3474 34.4993C9.32525 33.8113 8.27102 33.1733 7.07558 32.6082C6.48166 32.335 5.85079 32.0809 5.17351 31.8804C4.48013 31.6546 3.77538 31.5204 2.9437 31.4921Z"
          fill="#F6643C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.9437 31.4921C3.33302 28.2627 4.84198 25.2338 7.26029 22.6556C9.66628 20.1021 13.4249 18.1334 17.5957 17.8726C19.6541 17.7355 21.7437 17.9642 23.6647 18.4954C25.5772 19.0246 27.3693 19.7958 28.9844 20.704C29.7915 21.1605 30.5464 21.6595 31.2985 22.1632L33.3029 23.6772L36.4317 26.1401C38.4625 27.7534 40.4006 29.2456 42.1918 30.478C44.0001 31.7123 45.5404 32.6139 47.0114 33.1422C48.4692 33.7187 50.3107 33.8662 52.7451 33.2556C53.9538 32.9777 55.2146 32.4703 56.5597 31.9202C57.8972 31.3569 59.2858 30.685 60.8043 30.0187C60.6215 31.6424 60.2909 33.2594 59.6628 34.7706C59.0594 36.3025 58.2647 37.8015 57.1536 39.1992C56.5853 39.8797 55.9761 40.5639 55.2657 41.1952C54.5553 41.8114 53.7681 42.3964 52.8986 42.9096C51.1642 43.9123 49.1067 44.6447 46.9963 44.9056C44.8858 45.1702 42.7669 45.0379 40.8373 44.6296C38.8973 44.2327 37.1297 43.5928 35.5071 42.8538C32.2733 41.353 29.5679 39.4666 27.1761 37.4697C25.975 36.4726 24.8487 35.4312 23.7821 34.3736L22.5223 33.1119C22.1425 32.7462 21.7589 32.3786 21.379 32.0422C19.8483 30.6916 18.4273 29.6596 16.8625 29.016C15.309 28.3421 13.3208 28.0653 10.8816 28.5208C8.45195 28.9715 5.78638 30.0197 2.9437 31.4921Z"
          fill="#FAFAFA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7642 48.1452C15.7642 49.1006 14.9875 49.8756 14.0298 49.8756C13.0722 49.8756 12.2963 49.1006 12.2963 48.1452C12.2963 47.1897 13.0722 46.4147 14.0298 46.4147C14.9875 46.4147 15.7642 47.1897 15.7642 48.1452Z"
          fill="#FAFAFA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7642 48.1452C15.7642 49.1006 14.9875 49.8756 14.0298 49.8756C13.0722 49.8756 12.2963 49.1006 12.2963 48.1452C12.2963 47.1897 13.0722 46.4147 14.0298 46.4147C14.9875 46.4147 15.7642 47.1897 15.7642 48.1452Z"
          fill="#FAFAFA"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_18">
          <rect
            width="64.1468"
            height="64"
            fill="white"
            transform="translate(0.0275269)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StarknetIcon;
