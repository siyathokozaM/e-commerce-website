<<<<<<< HEAD
import "../sidebag.css";
=======
import "../sidebar.css";
>>>>>>> e3e54b5d591d5b3058ceabfa274cdcf673f50a81
import { useState } from "react";

const SideBag = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
      style={{ width: 4.5 + "rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        title="Icon-only"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <svg
          width="24"
          height="32"
          viewBox="0 0 24 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.4874 1L9.76744 0.999999L8.24165 8.93076H7.24165L8.88014 0.414182H8.88119L8.95741 0.0180054L22.6737 0.0180083L22.5975 0.414182H22.6001L20.9616 8.93076H19.9616L21.4874 1Z"
            fill="#105E46"
          />
          <rect
            width="18.5019"
            height="22.2023"
            transform="matrix(1 0 -0.188924 0.981992 5.49811 9.66516)"
            fill="#12805D"
          />
          <rect
            width="18.5019"
            height="22.2023"
            transform="matrix(1 0 -0.188924 0.981992 4.19452 8.50879)"
            fill="#02D693"
          />
        </svg>

        <svg className="bi pe-none" width="40" height="32">
          <use href="#bootstrap" />
        </svg>
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active py-3 border-bottom rounded-0"
            aria-current="page"
            title="Home"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.125 7.125H12H19.875M4.125 12H19.875M4.125 16.875H19.875"
                stroke="#1A1F16"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Dashboard"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6666 20.5714H3.1666C3.21081 20.5714 3.2532 20.5526 3.28446 20.5191C3.31571 20.4856 3.33327 20.4402 3.33327 20.3929V12.7817C3.33289 12.7533 3.33885 12.7252 3.35064 12.6997C3.36243 12.6743 3.37972 12.6522 3.40107 12.6354C3.42243 12.6185 3.44722 12.6074 3.4734 12.6028C3.49959 12.5983 3.5264 12.6006 3.55161 12.6094C3.93396 12.7381 4.33101 12.8099 4.73162 12.8228C4.78079 12.8228 4.82746 12.825 4.87329 12.825C5.64383 12.8269 6.40198 12.6173 7.0754 12.2161C7.12638 12.1857 7.18374 12.1698 7.24207 12.1698C7.3004 12.1698 7.35776 12.1857 7.40874 12.2161C8.08201 12.6173 8.84002 12.8269 9.61043 12.825C10.3765 12.8262 11.1298 12.614 11.7963 12.2094C11.8477 12.1782 11.9058 12.1618 11.9648 12.1618C12.0239 12.1618 12.082 12.1782 12.1334 12.2094C12.8099 12.6155 13.5729 12.8277 14.3484 12.8254C15.1196 12.826 15.8776 12.6105 16.5472 12.2004C16.599 12.1689 16.6576 12.1523 16.7172 12.1523C16.7768 12.1523 16.8354 12.1689 16.8872 12.2004C17.5567 12.6105 18.3147 12.826 19.086 12.8254C19.1314 12.8254 19.1772 12.8254 19.2264 12.8232H19.2289C19.6436 12.8099 20.0543 12.7334 20.4489 12.596C20.4739 12.5873 20.5004 12.5851 20.5263 12.5896C20.5523 12.594 20.5769 12.6049 20.5981 12.6214C20.6194 12.638 20.6366 12.6597 20.6486 12.6847C20.6605 12.7098 20.6668 12.7375 20.6668 12.7656V20.3929C20.6668 20.4402 20.6844 20.4856 20.7156 20.5191C20.7469 20.5526 20.7893 20.5714 20.8335 20.5714H21.3126C21.6727 20.5714 21.9835 20.8679 21.9993 21.2536C22.0034 21.35 21.9892 21.4462 21.9575 21.5366C21.9259 21.6269 21.8775 21.7095 21.8153 21.7792C21.7531 21.849 21.6783 21.9045 21.5955 21.9425C21.5127 21.9804 21.4235 22 21.3335 22H2.68743C2.32743 22 2.01659 21.7036 2.00076 21.3179C1.9967 21.2215 2.01092 21.1252 2.04255 21.0348C2.07419 20.9445 2.12257 20.862 2.1848 20.7922C2.24703 20.7224 2.3218 20.6669 2.40461 20.629C2.48741 20.591 2.57654 20.5715 2.6666 20.5714ZM13.3334 17.5357C13.3334 17.5831 13.3509 17.6285 13.3822 17.662C13.4135 17.6955 13.4559 17.7143 13.5001 17.7143H17.1668C17.211 17.7143 17.2534 17.6955 17.2846 17.662C17.3159 17.6285 17.3334 17.5831 17.3334 17.5357V14.6786C17.3334 14.5365 17.2808 14.4002 17.187 14.2998C17.0932 14.1993 16.966 14.1429 16.8334 14.1429H13.8334C13.7008 14.1429 13.5736 14.1993 13.4798 14.2998C13.3861 14.4002 13.3334 14.5365 13.3334 14.6786V17.5357ZM6.83331 20.5714H9.83335C9.87755 20.5714 9.91994 20.5526 9.9512 20.5191C9.98246 20.4856 10 20.4402 10 20.3929V14.6786C10 14.5365 9.94734 14.4002 9.85357 14.2998C9.7598 14.1993 9.63262 14.1429 9.50001 14.1429H7.16665C7.03404 14.1429 6.90686 14.1993 6.81309 14.2998C6.71932 14.4002 6.66664 14.5365 6.66664 14.6786V20.3929C6.66664 20.4402 6.6842 20.4856 6.71546 20.5191C6.74672 20.5526 6.78911 20.5714 6.83331 20.5714ZM2.14284 8.17321L3.9312 3.77634C4.39953 2.69732 5.46913 2 6.65623 2H17.3459C18.533 2 19.6026 2.69732 20.071 3.77634L21.8593 8.17321C22.2343 9.03973 21.7389 9.92946 21.7385 9.92991L21.7268 9.95C21.7064 9.98482 21.6702 10.0393 21.6481 10.0741C21.646 10.0768 21.6443 10.0799 21.6422 10.083L21.4339 10.3531C21.4261 10.3633 21.4178 10.373 21.4089 10.3821L21.2006 10.5978L21.1831 10.6138C21.0607 10.7262 20.9298 10.8274 20.7918 10.9165V10.9187C20.3383 11.2131 19.8217 11.3771 19.2918 11.3951H19.1889C18.3871 11.3967 17.6145 11.0727 17.0268 10.4884L17.013 10.4746C16.9516 10.4126 16.8705 10.3781 16.7861 10.3781C16.7018 10.3781 16.6206 10.4126 16.5593 10.4746L16.5455 10.4884C15.9515 11.0717 15.175 11.3953 14.3692 11.3953C13.5635 11.3953 12.787 11.0717 12.193 10.4884C12.1313 10.4273 12.0505 10.3933 11.9665 10.3933C11.8825 10.3933 11.8017 10.4273 11.74 10.4884C11.1478 11.0699 10.3741 11.3933 9.57083 11.3952C8.76752 11.3971 7.99254 11.0773 7.3979 10.4987C7.3372 10.4384 7.25751 10.4049 7.17478 10.4049C7.09204 10.4049 7.01235 10.4384 6.95165 10.4987C6.35638 11.0809 5.57801 11.401 4.77204 11.3951H4.66829C4.15168 11.3744 3.64902 11.2098 3.20994 10.9174C3.17035 10.892 3.13244 10.8652 3.0941 10.8384C2.79796 10.6245 2.54023 10.3552 2.33326 10.0433L2.26076 9.92589C2.25354 9.91399 2.24687 9.90149 2.24076 9.88839C2.17159 9.7375 1.80075 8.96161 2.14284 8.17321Z"
                fill="#1A1F16"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            title="Orders"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3117 7.94062C21.1727 7.8006 21.0073 7.68956 20.825 7.61392C20.6428 7.53829 20.4473 7.49957 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80321 21.7122 8.60826 21.637 8.42642C21.5617 8.24458 21.4512 8.07946 21.3117 7.94062ZM8.25 6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5H8.25V6.75ZM17.25 11.25C17.25 12.6424 16.6969 13.9777 15.7123 14.9623C14.7277 15.9469 13.3924 16.5 12 16.5C10.6076 16.5 9.27226 15.9469 8.28769 14.9623C7.30312 13.9777 6.75 12.6424 6.75 11.25V10.5C6.75 10.3011 6.82902 10.1103 6.96967 9.96967C7.11032 9.82902 7.30109 9.75 7.5 9.75C7.69891 9.75 7.88968 9.82902 8.03033 9.96967C8.17098 10.1103 8.25 10.3011 8.25 10.5V11.25C8.25 12.2446 8.64509 13.1984 9.34835 13.9017C10.0516 14.6049 11.0054 15 12 15C12.9946 15 13.9484 14.6049 14.6517 13.9017C15.3549 13.1984 15.75 12.2446 15.75 11.25V10.5C15.75 10.3011 15.829 10.1103 15.9697 9.96967C16.1103 9.82902 16.3011 9.75 16.5 9.75C16.6989 9.75 16.8897 9.82902 17.0303 9.96967C17.171 10.1103 17.25 10.3011 17.25 10.5V11.25Z"
                fill="#1A1F16"
              />
            </svg>
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </li>
      </ul>
      <div className=" ">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none"
          data-bs-toggle="d"
          aria-expanded="false"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H15V6.375C15 4.875 13.4161 3.75 12 3.75H4.875C4.17904 3.75074 3.51179 4.02755 3.01967 4.51967C2.52755 5.01179 2.25074 5.67904 2.25 6.375V17.625C2.25074 18.321 2.52755 18.9882 3.01967 19.4803C3.51179 19.9725 4.17904 20.2493 4.875 20.25H12.375C13.071 20.2493 13.7382 19.9725 14.2303 19.4803C14.7225 18.9882 14.9993 18.321 15 17.625V12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12ZM21.5302 11.4698L17.7802 7.71984C17.6384 7.58513 17.4495 7.51114 17.254 7.51364C17.0584 7.51614 16.8715 7.59495 16.7332 7.73325C16.5949 7.87155 16.5161 8.0584 16.5136 8.25398C16.5111 8.44955 16.5851 8.63836 16.7198 8.78016L19.1892 11.25H15V12.75H19.1892L16.7198 15.2198C16.6473 15.2888 16.5892 15.3716 16.5492 15.4633C16.5091 15.555 16.4878 15.6539 16.4865 15.754C16.4852 15.8541 16.504 15.9534 16.5417 16.0461C16.5794 16.1389 16.6353 16.2231 16.7061 16.2939C16.7769 16.3647 16.8611 16.4206 16.9539 16.4583C17.0466 16.496 17.1459 16.5148 17.246 16.5135C17.3461 16.5122 17.445 16.4909 17.5367 16.4508C17.6284 16.4108 17.7112 16.3527 17.7802 16.2802L21.5302 12.5302C21.6707 12.3895 21.7497 12.1988 21.7497 12C21.7497 11.8012 21.6707 11.6105 21.5302 11.4698Z"
              fill="#E5252C"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SideBag;
