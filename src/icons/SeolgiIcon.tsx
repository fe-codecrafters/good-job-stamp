import { IconType } from "@/types";

interface Props {
  type: IconType;
  width?: number;
  height?: number;
  bgFill?: string;
  mouthFill?: string;
  blushFill?: string;
}

export default function SeolgiIcon({
  type = "desktop",
  width,
  height,
  bgFill = "#F3F3F3",
  blushFill = "#FFE3E3",
}: Props) {
  const svgProps = width && height ? { width, height } : null;
  /** color를 변경하면, 자식자손 엘리먼트 color가 currentColor인 경우 똑같이 적용되어 설기 눈, 입 컬러도 변경되는 구조 */
  const desktopCN = "text-primary-black";
  const mobileCN = "text-primary-black";
  const cn = type === "desktop" ? desktopCN : mobileCN;
  const vb = `0 0 ${24} ${24}`;

  return (
    <>
      <svg
        className={cn}
        viewBox={vb}
        {...svgProps}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.583984 23.2531V0.647339H23.4643V23.2531H0.583984Z"
          fill={bgFill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0007 0C18.5365 0 23.9129 0.0223896 23.9457 0.0447793C24.0004 0.0727663 24.0113 2.61959 23.9894 23.9849L12.039 23.9961C2.62629 24.0073 0.0775855 23.9961 0.0502389 23.9401C0.0283616 23.9065 0.00648437 18.5498 0.00101506 12.0456C-0.00445426 3.42002 0.0119537 0.184715 0.0557082 0.106351C0.115871 0 0.312767 0 12.0007 0V0ZM1.0019 12.0904L1.01831 23.0333C20.5492 23.0557 22.9667 23.0445 23.0214 22.9886C23.0815 22.9326 23.087 20.8839 23.0761 11.9785L23.0597 1.03552C3.27167 1.00753 1.04019 1.01873 1.01831 1.0747C1.0019 1.11388 0.996431 6.07319 1.0019 12.0904V12.0904ZM16.7317 6.54897C16.8574 6.54897 17.0434 6.58256 17.1364 6.62174C17.2348 6.66652 17.4044 6.80645 17.5138 6.94639C17.645 7.11431 17.7325 7.30462 17.7818 7.52852C17.8419 7.80279 17.8419 7.92593 17.7872 8.20021C17.7489 8.38492 17.656 8.648 17.5794 8.78793C17.5083 8.92787 17.3661 9.10139 17.2731 9.17975C17.1528 9.28051 17.0379 9.31969 16.8793 9.31409C16.759 9.31409 16.5512 9.25812 16.4144 9.19095C16.2777 9.12378 16.1027 8.97265 16.0261 8.8551C15.9441 8.74316 15.8511 8.54725 15.8183 8.4241C15.7855 8.30096 15.7581 8.03228 15.7581 7.81958C15.7581 7.5677 15.7909 7.36619 15.862 7.20947C15.9222 7.07513 16.0152 6.9128 16.0699 6.84563C16.1246 6.77846 16.2449 6.68331 16.3324 6.63853C16.4199 6.58815 16.6004 6.54897 16.7262 6.54897H16.7317ZM6.07743 6.75607C6.18681 6.79526 6.37277 6.93519 6.49309 7.06953C6.6353 7.22066 6.73921 7.39978 6.78297 7.5733C6.81578 7.71883 6.8486 7.92034 6.8486 8.02109C6.8486 8.11625 6.79938 8.36813 6.73921 8.58083C6.66264 8.84391 6.56966 9.02303 6.42199 9.17975C6.2415 9.37566 6.19228 9.39805 5.94616 9.40365C5.73286 9.40365 5.61253 9.37007 5.41017 9.23573C5.26797 9.14617 5.11483 8.98384 5.0656 8.88869C5.01638 8.78794 4.96169 8.51366 4.95075 8.28417C4.92887 7.97631 4.94528 7.76921 5.02185 7.50053C5.08748 7.26544 5.18046 7.07513 5.28984 6.96878C5.37735 6.87362 5.55237 6.76727 5.66723 6.73928C5.83131 6.6945 5.93522 6.7001 6.07743 6.75607V6.75607ZM13.4282 14.0047C13.5704 14.0159 13.6141 14.0551 13.6688 14.2174C13.7071 14.3238 13.7345 14.5869 13.7345 14.8052C13.7399 15.0235 13.7126 15.2921 13.6852 15.4097C13.6524 15.5216 13.5376 15.7119 13.4227 15.8295C13.2969 15.9582 13.0836 16.087 12.8648 16.1709C12.668 16.2437 12.3726 16.3165 12.2085 16.3276C12.0444 16.3444 11.8093 16.3276 11.6889 16.2997C11.5686 16.2661 11.3389 16.1485 11.1803 16.0422C11.0272 15.9302 10.8521 15.8407 10.8029 15.8407C10.7537 15.8407 10.6334 15.9302 10.5404 16.0366C10.4529 16.1485 10.2505 16.2997 10.1028 16.3724C9.92235 16.462 9.7364 16.5124 9.5395 16.5124C9.36995 16.5124 9.184 16.4732 9.08008 16.4172C8.98163 16.3612 8.85037 16.2549 8.77927 16.1765C8.71364 16.0982 8.61519 15.9358 8.56596 15.8127C8.50033 15.6448 8.48392 15.4656 8.50033 15.113C8.51674 14.7996 8.55503 14.5869 8.61519 14.4861C8.68082 14.3686 8.75192 14.3294 8.87225 14.3294C8.9871 14.3294 9.05273 14.3686 9.09649 14.4581C9.14024 14.5365 9.14571 14.7212 9.11836 15.0011C9.08555 15.3369 9.09649 15.46 9.16759 15.6056C9.21681 15.7007 9.30979 15.8127 9.37542 15.8463C9.45199 15.8855 9.58326 15.891 9.69264 15.8687C9.83485 15.8407 9.98252 15.7231 10.2724 15.4153C10.5787 15.085 10.6881 15.0011 10.8193 15.0011C10.9396 15.0011 11.06 15.0794 11.3061 15.3145C11.5139 15.5104 11.7108 15.6448 11.8366 15.6783C11.9515 15.7063 12.1593 15.7119 12.3015 15.6951C12.4492 15.6783 12.6625 15.6112 12.7828 15.5384C12.9031 15.4712 13.0344 15.3537 13.0672 15.2809C13.1055 15.2026 13.1328 14.9395 13.1328 14.6764C13.1328 14.4077 13.1547 14.1614 13.193 14.0999C13.2422 14.0159 13.3024 13.9935 13.4282 14.0047V14.0047Z"
          fill="currentColor"
        />
        <ellipse
          cx="3.48088"
          cy="12.8963"
          rx="1.9716"
          ry="0.896266"
          fill={blushFill}
        />
        <ellipse
          cx="19.7402"
          cy="12.8963"
          rx="1.9716"
          ry="0.896266"
          fill={blushFill}
        />
      </svg>
    </>
  );
}
