import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="25" height="18" viewBox="0 0 25 18" fill="none" style={{fill:"none"}} {...props}>
<path d="M24.3238 15.7805C24.231 15.9522 24.1507 16.1328 24.043 16.295C23.7544 16.7293 23.464 17.163 23.1522 17.5813C23.0671 17.6954 22.9142 17.7982 22.7762 17.8279C21.8081 18.0346 20.8257 18.0269 19.8463 17.9509C18.254 17.8273 16.6944 17.5177 15.211 16.9206C14.4446 16.6123 13.6758 16.2724 12.979 15.8334C8.74424 13.1663 4.52966 10.4671 0.30854 7.77804C-0.0627571 7.54157 -0.0895331 7.37937 0.177634 7.0318C1.91749 4.76932 3.65854 2.50744 5.39781 0.244959C5.51324 0.0946425 5.63225 -0.0420094 5.84765 0.0120572C6.05888 0.0649355 6.10708 0.228918 6.1404 0.422607C6.39686 1.92162 7.146 3.15267 8.24918 4.17281C8.74781 4.63386 9.38746 4.80794 10.0485 4.89409C11.3838 5.06877 12.678 4.83824 13.9567 4.50196C13.9567 4.17162 13.9364 3.85732 13.9614 3.54658C13.9977 3.09147 14.1994 2.69994 14.5077 2.36425C14.6707 2.1866 14.8736 2.15214 15.0325 2.27335C15.2003 2.40109 15.2223 2.62032 15.061 2.81758C14.5267 3.47053 14.5356 4.15974 14.9165 4.86973C15.2324 5.45971 15.5662 6.04018 15.8911 6.62244C16.4052 6.37943 16.5706 6.37706 16.6926 6.59273C16.8104 6.80187 16.7283 6.95575 16.3302 7.23975C16.5064 7.48572 16.6831 7.73169 16.8622 7.98123C17.1442 7.86716 17.3947 7.50651 17.7006 7.8826C17.8612 8.08045 17.772 8.23255 17.3227 8.57953C17.4834 8.77916 17.6441 8.97879 17.8125 9.18792C18.0749 9.06434 18.3337 8.77619 18.6026 9.13742C18.7413 9.32339 18.661 9.48381 18.3069 9.7684C18.605 10.0839 18.8948 10.4053 19.2001 10.7107C20.1819 11.6946 21.2303 12.5917 22.4989 13.1972C23.3998 13.6273 24.1066 14.2286 24.3268 15.26C24.3238 15.4323 24.3238 15.6064 24.3238 15.7805ZM0.890476 7.28668C0.96188 7.33659 1.01127 7.37402 1.06363 7.40729C5.09851 9.97753 9.13339 12.5478 13.1701 15.115C13.483 15.3141 13.8038 15.5054 14.1346 15.6723C16.0036 16.6158 17.9981 17.0941 20.0783 17.2444C20.8703 17.3015 21.6599 17.2985 22.4447 17.1595C22.509 17.1482 22.5905 17.122 22.6256 17.0745C22.7988 16.8428 22.9588 16.6016 23.1326 16.3514C23.0844 16.339 23.063 16.3277 23.0421 16.3295C21.892 16.4085 20.7489 16.3419 19.6118 16.1584C17.5935 15.8322 15.6805 15.2131 13.94 14.1187C12.2198 13.0368 10.5019 11.9513 8.78351 10.8664C8.71687 10.8242 8.64963 10.7808 8.59191 10.7279C8.45803 10.6061 8.43007 10.4558 8.51813 10.299C8.61155 10.132 8.76566 10.0791 8.94476 10.1391C9.03283 10.1683 9.11316 10.2247 9.19349 10.2746C10.9536 11.3827 12.7035 12.5068 14.4773 13.5917C15.0807 13.9606 15.7275 14.2726 16.3832 14.5411C17.9689 15.1923 19.6332 15.5238 21.3427 15.6218C22.0919 15.6646 22.8428 15.6688 23.5789 15.528C23.5896 15.4989 23.5997 15.4846 23.5991 15.4703C23.5985 15.4311 23.5961 15.3913 23.5896 15.3527C23.5086 14.8602 23.2254 14.493 22.8238 14.2298C22.4549 13.9886 22.0538 13.7967 21.6682 13.5798C20.336 12.8294 19.2268 11.8093 18.1909 10.7018C18.0136 10.5123 17.841 10.3192 17.6673 10.129C17.3216 10.3406 17.0008 10.5437 16.673 10.7351C16.4963 10.8378 16.2892 10.7879 16.1868 10.64C16.0726 10.4748 16.1083 10.2722 16.2832 10.138C16.3642 10.0756 16.4564 10.0274 16.5433 9.97278C16.7545 9.84088 16.9657 9.70958 17.1924 9.56817C17.0187 9.3525 16.8658 9.16356 16.7045 8.96393C16.6206 9.01562 16.5474 9.05959 16.4754 9.10534C16.2095 9.27645 15.9476 9.45469 15.6763 9.61689C15.4996 9.72265 15.2913 9.66918 15.1925 9.51708C15.089 9.35785 15.1217 9.16357 15.2812 9.03048C15.3473 8.97522 15.4234 8.93126 15.4966 8.88313C15.7465 8.71915 15.9964 8.55636 16.263 8.38227C16.0738 8.11669 15.8965 7.86834 15.7126 7.61108C15.6251 7.66337 15.5508 7.70614 15.4782 7.7507C15.1414 7.95806 14.8082 8.17017 14.4678 8.37098C14.2917 8.47496 14.084 8.42624 13.9811 8.27771C13.868 8.11551 13.9013 7.90518 14.0787 7.77685C14.2381 7.66099 14.4113 7.56415 14.5791 7.45958C14.8183 7.30985 15.0581 7.16132 15.2925 7.01516C14.9742 6.45905 14.6594 5.93027 14.369 5.38841C14.275 5.21255 14.1905 5.18344 14.0019 5.23275C12.7166 5.56784 11.4153 5.77401 10.0813 5.62607C9.14826 5.52269 8.28428 5.23928 7.60119 4.56256C6.72531 3.69393 6.04341 2.69637 5.65962 1.51226C5.63165 1.42611 5.59952 1.34114 5.55608 1.21816C4.38686 2.73796 3.24678 4.22034 2.09422 5.71935C3.1254 6.38181 4.13337 7.03061 5.15444 7.68654C5.65248 6.69849 5.7459 5.6938 5.45017 4.65465C5.30617 4.14726 5.0521 3.69452 4.73078 3.27685C4.55465 3.04751 4.58202 2.82827 4.78136 2.70172C4.96046 2.58765 5.14433 2.63518 5.31093 2.85441C6.31355 4.17221 6.58191 5.62963 6.12076 7.21658C6.03568 7.50889 5.90417 7.78754 5.78636 8.09115C6.35818 8.45773 6.92941 8.82372 7.50063 9.1903C7.62023 9.26695 7.74519 9.33824 7.85467 9.42796C8.00998 9.5557 8.03616 9.72562 7.93322 9.89554C7.82671 10.0714 7.65653 10.0934 7.47624 10.0233C7.3965 9.99239 7.32569 9.93654 7.25251 9.8896C5.46921 8.7441 3.68651 7.59861 1.90321 6.45311C1.82467 6.40261 1.74375 6.35567 1.64914 6.29744C1.39684 6.62838 1.15229 6.94684 0.890476 7.28668Z" fill="#5155F6"/>
    </Svg>
  );
};

export default Icon;