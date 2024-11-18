import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      // width="110"
      // height="114"
      viewBox="0 0 110 114"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "w-10 h-10")}
    >
      <path
        d="M56.6983 0.000117198C58.5405 -0.00082493 60.5061 -0.000824496 62.18 0.198907C64.1256 0.43067 66.5321 1.01008 68.7245 2.7841C70.9417 4.57886 71.9756 6.81547 72.5581 8.6969C73.0479 10.2787 74.3267 17.7225 74.6213 19.4419C75.8591 20.0608 77.0614 20.7373 78.2255 21.4665C79.9625 20.8343 87.1679 18.2171 88.8236 17.8327C90.7548 17.3843 93.2187 17.1195 95.8989 18.0381C98.6001 18.9633 100.364 20.6921 101.591 22.2588C102.627 23.5806 103.62 25.2491 104.532 26.7829C105.42 28.2724 108.232 32.9915 108.883 34.4886C109.652 36.2541 110.342 38.6179 109.815 41.3972C109.29 44.1652 107.79 46.1229 106.446 47.4956C105.297 48.6704 99.2419 53.5017 97.8597 54.603V58.4723C99.2409 59.5737 105.276 64.3889 106.426 65.5637C107.77 66.9374 109.271 68.8951 109.795 71.6621C110.322 74.4423 109.631 76.8052 108.863 78.5717C108.212 80.0687 107.239 81.6995 106.353 83.1881C105.439 84.7228 102.607 89.4796 101.571 90.8014C100.344 92.3673 98.58 94.0961 95.8797 95.0222C93.1986 95.9407 90.7356 95.676 88.8035 95.2276C87.1487 94.8432 79.951 92.2288 78.213 91.5966C77.0537 92.323 75.8552 92.9966 74.6213 93.6137C74.3267 95.3331 73.0479 102.777 72.5581 104.359C71.9756 106.24 70.9417 108.477 68.7245 110.271C66.5321 112.046 64.1256 112.626 62.18 112.858C60.5061 113.056 58.5405 113.056 56.6983 113.055C54.856 113.056 49.5187 113.056 47.8448 112.858C45.8993 112.626 43.4918 112.046 41.3004 110.271C39.0823 108.477 38.0483 106.24 37.4667 104.359C36.977 102.777 35.6981 95.3331 35.4026 93.6137C34.1658 92.9947 32.9644 92.3202 31.8023 91.591C30.0643 92.2231 22.8522 94.8432 21.1965 95.2276C19.2653 95.676 16.8013 95.9407 14.1212 95.0222C11.42 94.0961 9.65622 92.3673 8.42902 90.8014C7.39312 89.4796 6.40026 87.8111 5.48775 86.2764C4.60011 84.7878 1.78798 80.0687 1.1366 78.5717C0.368522 76.8052 -0.322075 74.4423 0.204961 71.6621C0.730085 68.8951 2.22989 66.9374 3.57378 65.5637C4.7235 64.3889 10.782 59.5548 12.1642 58.4535L12.1632 54.6219C10.7811 53.5196 4.70342 48.6704 3.55369 47.4956C2.2098 46.1229 0.709998 44.1652 0.184875 41.3972C-0.342162 38.6179 0.348435 36.2541 1.11651 34.4886C1.76885 32.9915 4.58003 28.2724 5.46767 26.7829C6.38018 25.2491 7.37399 23.5806 8.40893 22.2588C9.63613 20.6921 11.3999 18.9633 14.1011 18.0381C16.7813 17.1195 19.2452 17.3843 21.1764 17.8327C22.8321 18.2171 30.0528 20.84 31.7908 21.4712C32.9568 20.7401 34.162 20.0627 35.4026 19.4419C35.6981 17.7225 36.977 10.2787 37.4667 8.6969C38.0483 6.81547 39.0823 4.57886 41.3004 2.7841C43.4918 1.01008 45.8993 0.43067 47.8448 0.198907C49.5187 -0.000824496 54.856 -0.00082493 56.6983 0.000117198Z"
        fill="#99E100"
      />
      <path
        d="M56.6674 1.00012C58.4761 0.99919 60.406 0.99919 62.0495 1.19529C63.9596 1.42284 66.3225 1.99171 68.4749 3.73348C70.6518 5.4956 71.667 7.69156 72.2389 9.53878C72.7197 11.0918 73.9753 18.4002 74.2646 20.0884C75.4798 20.6961 76.6603 21.3602 77.8032 22.0762C79.5086 21.4555 86.583 18.8859 88.2086 18.5085C90.1047 18.0682 92.5238 17.8083 95.1553 18.7101C97.8073 19.6185 99.5391 21.3159 100.744 22.8541C101.761 24.1519 102.736 25.7901 103.632 27.296C104.503 28.7584 107.264 33.3917 107.904 34.8615C108.658 36.595 109.336 38.9158 108.818 41.6445C108.303 44.3622 106.83 46.2843 105.511 47.632C104.382 48.7855 98.4375 53.5289 97.0804 54.6102V58.4092C98.4365 59.4905 104.362 64.2182 105.491 65.3717C106.811 66.7203 108.284 68.6424 108.799 71.3592C109.316 74.0888 108.638 76.4087 107.884 78.1431C107.245 79.6129 106.289 81.2141 105.419 82.6756C104.522 84.1824 101.741 88.8527 100.724 90.1505C99.5193 91.6878 97.7876 93.3852 95.1365 94.2945C92.5041 95.1964 90.0859 94.9364 88.1889 94.4961C86.5642 94.1188 79.4974 91.5519 77.791 90.9312C76.6528 91.6444 75.476 92.3057 74.2646 92.9116C73.9753 94.5997 72.7197 101.908 72.2389 103.461C71.667 105.308 70.6518 107.504 68.4749 109.267C66.3225 111.009 63.9596 111.578 62.0495 111.806C60.406 112.001 58.4761 112.001 56.6674 112C54.8587 112.001 49.6184 112.001 47.9749 111.806C46.0648 111.578 43.701 111.009 41.5495 109.267C39.3717 107.504 38.3565 105.308 37.7855 103.461C37.3047 101.908 36.0491 94.5997 35.7589 92.9116C34.5446 92.3039 33.3651 91.6416 32.224 90.9257C30.5177 91.5463 23.4367 94.1188 21.8111 94.4961C19.915 94.9364 17.4959 95.1964 14.8645 94.2945C12.2124 93.3852 10.4806 91.6878 9.27576 90.1505C8.2587 88.8527 7.28389 87.2146 6.38798 85.7077C5.51648 84.2462 2.75547 79.6129 2.11593 78.1431C1.36182 76.4087 0.683781 74.0888 1.20123 71.3592C1.71681 68.6424 3.18934 66.7203 4.5088 65.3717C5.63762 64.2182 11.586 59.472 12.943 58.3907L12.9421 54.6287C11.5851 53.5465 5.6179 48.7855 4.48908 47.632C3.16962 46.2843 1.69709 44.3622 1.18151 41.6445C0.66406 38.9158 1.3421 36.595 2.09621 34.8615C2.73669 33.3917 5.49675 28.7584 6.36826 27.296C7.26417 25.7901 8.23992 24.1519 9.25604 22.8541C10.4609 21.3159 12.1927 19.6185 14.8447 18.7101C17.4761 17.8083 19.8953 18.0682 21.7914 18.5085C23.417 18.8859 30.5064 21.4611 32.2128 22.0808C33.3576 21.363 34.5408 20.6979 35.7589 20.0884C36.0491 18.4002 37.3047 11.0918 37.7855 9.53878C38.3565 7.69156 39.3717 5.4956 41.5495 3.73348C43.701 1.99171 46.0648 1.42284 47.9749 1.19529C49.6184 0.99919 54.8587 0.99919 56.6674 1.00012Z"
        fill="url(#paint0_radial_2210_14381)"
      />
      <path
        d="M33 57C33 44.8494 42.8494 35 55 35C67.1506 35 77 44.8494 77 57C77 69.1506 67.1506 79 55 79C42.8494 79 33 69.1506 33 57Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2210_14381"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55 56.5278) rotate(90) scale(56.5278 55)"
        >
          <stop offset="0.475" stopColor="#547B00" />
          <stop offset="1" stopColor="#99E100" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Logo;