export type Name = "Home" | "Explore" | "link" |
  "Wallet" | "Settings" | "edit" | "location" | "email" | "calendar"
  | "search" | "like" | "comment" | "repost" | "user" | "tx" | "receive" | "theme" | "account"


interface Props {
  name: Name
  bg?: string
  width?: number
  height?: number
  color?: string
  spin?: boolean
  className?: string
}

const Icon = ({name, bg, color, width, height, spin, className}: Props) => {
  switch (name) {
    case "calendar":
      return <svg width="2.8rem" height="3rem" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.83409 17.6419C9.83409 18.4053 9.21524 19.0241 8.45185 19.0241C7.68846 19.0241 7.06961 18.4053 7.06961 17.6419C7.06961 16.8785 7.68846 16.2596 8.45185 16.2596C9.21524 16.2596 9.83409 16.8785 9.83409 17.6419Z"
          fill="#1F1F1F"/>
        <path
          d="M8.45185 24.5531C9.21524 24.5531 9.83409 23.9342 9.83409 23.1708C9.83409 22.4074 9.21524 21.7886 8.45185 21.7886C7.68846 21.7886 7.06961 22.4074 7.06961 23.1708C7.06961 23.9342 7.68846 24.5531 8.45185 24.5531Z"
          fill="#1F1F1F"/>
        <path
          d="M15.363 17.6419C15.363 18.4053 14.7442 19.0241 13.9808 19.0241C13.2174 19.0241 12.5986 18.4053 12.5986 17.6419C12.5986 16.8785 13.2174 16.2596 13.9808 16.2596C14.7442 16.2596 15.363 16.8785 15.363 17.6419Z"
          fill="#1F1F1F"/>
        <path
          d="M13.9808 24.5531C14.7442 24.5531 15.363 23.9342 15.363 23.1708C15.363 22.4074 14.7442 21.7886 13.9808 21.7886C13.2174 21.7886 12.5986 22.4074 12.5986 23.1708C12.5986 23.9342 13.2174 24.5531 13.9808 24.5531Z"
          fill="#1F1F1F"/>
        <path
          d="M20.892 17.6419C20.892 18.4053 20.2732 19.0241 19.5098 19.0241C18.7464 19.0241 18.1275 18.4053 18.1275 17.6419C18.1275 16.8785 18.7464 16.2596 19.5098 16.2596C20.2732 16.2596 20.892 16.8785 20.892 17.6419Z"
          fill="#1F1F1F"/>
        <path
          d="M19.5098 24.5531C20.2732 24.5531 20.892 23.9342 20.892 23.1708C20.892 22.4074 20.2732 21.7886 19.5098 21.7886C18.7464 21.7886 18.1275 22.4074 18.1275 23.1708C18.1275 23.9342 18.7464 24.5531 19.5098 24.5531Z"
          fill="#1F1F1F"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.8708 1.05499C10.8708 0.482448 10.4066 0.0183105 9.83409 0.0183105C9.26154 0.0183105 8.79741 0.482448 8.79741 1.05499V2.78279H5.68737C2.82465 2.78279 0.503967 5.10348 0.503967 7.96619V24.5531C0.503967 27.4158 2.82465 29.7365 5.68737 29.7365H22.2742C25.137 29.7365 27.4576 27.4158 27.4576 24.5531V7.96619C27.4576 5.10348 25.137 2.78279 22.2742 2.78279H19.1642V1.05499C19.1642 0.482448 18.7001 0.0183105 18.1275 0.0183105C17.555 0.0183105 17.0908 0.482448 17.0908 1.05499V2.78279H10.8708V1.05499ZM5.68737 4.85615C3.96974 4.85615 2.57733 6.24856 2.57733 7.96619V11.0762H25.3843V7.96619C25.3843 6.24856 23.9919 4.85615 22.2742 4.85615H5.68737ZM2.57733 13.1496H25.3843V24.5531C25.3843 26.2707 23.9919 27.6631 22.2742 27.6631H5.68737C3.96974 27.6631 2.57733 26.2707 2.57733 24.5531V13.1496Z"
              fill="#1F1F1F"/>
      </svg>

    case "email":
      return <svg width="3.3rem" height="3,2rem" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M29.5124 18.3618V23.6028C29.5124 25.05 28.3392 26.2232 26.8919 26.2232H5.92793C4.48067 26.2232 3.30743 25.05 3.30743 23.6028V18.3618M29.5124 18.3618C29.5124 17.6381 28.9258 17.0515 28.2021 17.0515H24.8011C24.4613 17.0515 24.1354 17.186 23.8845 17.4152C19.104 21.7839 13.9904 21.8235 8.93005 17.3941C8.68272 17.1776 8.36598 17.0515 8.03729 17.0515H4.61768C3.89405 17.0515 3.30743 17.6381 3.30743 18.3618M29.5124 18.3618V13.7759C29.5124 12.3286 28.3392 11.1554 26.8919 11.1554H5.92793C4.48067 11.1554 3.30743 12.3286 3.30743 13.7759V18.3618M3.30743 14.431V7.87977C3.30743 6.43251 4.48067 5.25928 5.92793 5.25928H26.8919C28.3392 5.25928 29.5124 6.43251 29.5124 7.87977V14.431"
          stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    case "link":
      return <svg width="2.8rem" height="2.8rem" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.3985 19.6616L15.3144 17.7207C13.8368 17.5954 12.7724 17.1071 12.0086 16.3432C9.89236 14.227 9.89236 11.2342 11.9961 9.14306L16.1534 4.97323C18.2696 2.86952 21.2498 2.857 23.3661 4.97323C25.4948 7.10197 25.4698 10.0822 23.3786 12.1859L21.2498 14.3021C21.6505 15.2288 21.7883 16.3558 21.5629 17.3325L25.1442 13.7637C28.2246 10.6958 28.2371 6.31308 25.1317 3.20762C22.0137 0.0896327 17.656 0.114677 14.5756 3.1951L10.2179 7.55276C7.13751 10.6332 7.12499 15.0034 10.2305 18.1088C10.9567 18.8476 11.9585 19.3986 13.3985 19.6616ZM14.5631 9.08045L12.6472 11.0214C14.1248 11.1591 15.1892 11.6349 15.953 12.3988C18.0818 14.515 18.0692 17.5078 15.9655 19.6115L11.8082 23.7688C9.69201 25.885 6.71176 25.885 4.60806 23.7688C2.47932 21.6401 2.49184 18.6723 4.59554 16.5686L6.71176 14.4399C6.31106 13.5258 6.18584 12.3988 6.39871 11.4095L2.81741 14.9909C-0.263007 18.0587 -0.275529 22.4289 2.82993 25.5344C5.94792 28.6524 10.3056 28.6273 13.386 25.5594L17.7437 21.1893C20.8241 18.1088 20.8366 13.7386 17.7312 10.6332C17.0049 9.90691 16.0156 9.35594 14.5631 9.08045Z"
          fill="#1C1C1E"/>
      </svg>

    case "location":
      return <svg width="2.4rem" height="2.9rem" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.4099 7.37058C9.6963 7.37058 7.49648 9.57039 7.49648 12.284C7.49648 14.9976 9.6963 17.1974 12.4099 17.1974C15.1235 17.1974 17.3233 14.9976 17.3233 12.284C17.3233 9.57039 15.1235 7.37058 12.4099 7.37058ZM9.46185 12.284C9.46185 10.6558 10.7817 9.33595 12.4099 9.33595C14.0381 9.33595 15.358 10.6558 15.358 12.284C15.358 13.9122 14.0381 15.2321 12.4099 15.2321C10.7817 15.2321 9.46185 13.9122 9.46185 12.284Z"
              fill="#1F1F1F"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12.3427 0.819336C8.35874 0.819336 4.45707 3.14844 2.42637 6.62977C0.356563 10.1781 0.257103 14.8683 3.7694 19.4344C7.71913 24.5691 10.0017 27.0593 11.03 28.1038C11.7306 28.8155 12.8666 28.9393 13.6734 28.1838C14.6571 27.2625 16.7679 25.0011 21.0502 19.4344C24.5667 14.8632 24.4281 10.1691 22.3224 6.62315C20.2575 3.14605 16.3244 0.819336 12.3427 0.819336ZM5.32721 18.2361C2.28839 14.2856 2.46795 10.4591 4.12403 7.62004C5.81921 4.71391 9.09028 2.78471 12.3427 2.78471C15.5972 2.78471 18.9042 4.7163 20.6325 7.62666C22.3199 10.4681 22.5275 14.2907 19.4924 18.2361C15.3301 23.6467 13.2937 25.8336 12.3945 26.6883C11.4185 25.6928 9.19553 23.265 5.32721 18.2361Z"
              fill="#1F1F1F"/>
      </svg>

    case "Home":
      return <svg width="3.2rem" height="2.9rem" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.9047 26.7867H19.397V17.3336C19.397 16.7364 19.0074 16.3468 18.4102 16.3468H12.9045C12.2942 16.3468 11.9047 16.7364 11.9047 17.3336V26.7867ZM6.82758 28.1241H24.3962C26.2401 28.1241 27.3178 27.0724 27.3178 25.2545V10.9061L25.2272 9.47778V24.7221C25.2272 25.5661 24.7728 26.0336 23.9547 26.0336H7.26907C6.43803 26.0336 5.98356 25.5661 5.98356 24.7221V9.49077L3.89298 10.9061V25.2545C3.89298 27.0724 4.97074 28.1241 6.82758 28.1241ZM0.15332 13.6719C0.15332 14.2043 0.568838 14.7107 1.27002 14.7107C1.63361 14.7107 1.93226 14.516 2.20494 14.2952L15.2028 3.38785C15.4885 3.12815 15.8391 3.12815 16.1248 3.38785L29.1227 14.2952C29.3824 14.516 29.681 14.7107 30.0447 14.7107C30.6549 14.7107 31.1484 14.3342 31.1484 13.7109C31.1484 13.3213 31.0185 13.0617 30.7459 12.8279L17.2286 1.46608C16.2677 0.648026 15.073 0.648026 14.0991 1.46608L0.568838 12.8279C0.28317 13.0617 0.15332 13.3733 0.15332 13.6719ZM24.0586 7.81571L27.3178 10.5685V4.56947C27.3178 3.99814 26.9542 3.63456 26.3829 3.63456H24.9935C24.4352 3.63456 24.0586 3.99814 24.0586 4.56947V7.81571Z"
          fill="black" fillOpacity="0.85"/>
      </svg>
    case "Explore":
      return <svg width="3.6rem" height="3.6rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M17.6398 32.8818C25.6873 32.8818 32.2112 26.358 32.2112 18.3104C32.2112 10.2629 25.6873 3.73901 17.6398 3.73901C9.5922 3.73901 3.06836 10.2629 3.06836 18.3104C3.06836 26.358 9.5922 32.8818 17.6398 32.8818ZM9.98978 18.3104C9.98978 17.6828 10.0654 17.0727 10.2079 16.489H13.4326C13.324 17.098 13.2685 17.702 13.2685 18.3104C13.2685 18.9188 13.324 19.5229 13.4325 20.1318H10.2079C10.0654 19.5481 9.98978 18.9381 9.98978 18.3104ZM14.0311 14.3033H11.122C12.122 12.6802 13.7113 11.4589 15.5917 10.9377C14.9399 12.1341 14.4155 13.2412 14.0311 14.3033ZM16.378 14.3033C16.7052 13.5249 17.1236 12.6833 17.6398 11.7502C18.1559 12.6833 18.5743 13.5249 18.9016 14.3033H16.378ZM15.4542 18.3104C15.4542 17.7177 15.5212 17.1181 15.6605 16.489H19.619C19.7583 17.1181 19.8253 17.7177 19.8254 18.3104C19.8254 18.9031 19.7583 19.5027 19.619 20.1318H15.6605C15.5212 19.5027 15.4542 18.9031 15.4542 18.3104ZM22.0111 18.3104C22.0111 18.9188 21.9555 19.5229 21.847 20.1318H25.0716C25.2142 19.5481 25.2898 18.9381 25.2898 18.3104C25.2898 17.6828 25.2142 17.0727 25.0716 16.489H21.847C21.9555 17.098 22.0111 17.702 22.0111 18.3104ZM17.6398 24.8707C17.1236 23.9375 16.7052 23.096 16.378 22.3176H18.9016C18.5743 23.096 18.1559 23.9375 17.6398 24.8707ZM14.0311 22.3176C14.4155 23.3797 14.9399 24.4868 15.5917 25.6832C13.7113 25.162 12.122 23.9407 11.122 22.3176H14.0311ZM21.2485 22.3176C20.864 23.3797 20.3396 24.4868 19.6878 25.6832C21.5682 25.162 23.1575 23.9407 24.1576 22.3176H21.2485ZM21.2484 14.3033H24.1576C23.1575 12.6802 21.5682 11.4589 19.6878 10.9377C20.3396 12.1341 20.864 13.2412 21.2484 14.3033ZM17.6398 8.47472C12.2077 8.47472 7.80407 12.8783 7.80407 18.3104C7.80407 23.7425 12.2077 28.1461 17.6398 28.1461C23.0719 28.1461 27.4755 23.7425 27.4755 18.3104C27.4755 12.8783 23.0719 8.47472 17.6398 8.47472Z"
              fill="#1F1F1F"/>
      </svg>
    case "Wallet":
      return <svg width="3.5rem" height="2.9rem" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.3309 17.8148V24.0918C33.3309 25.8251 31.9257 27.2302 30.1924 27.2302H5.08475C3.35142 27.2302 1.94629 25.8251 1.94629 24.0918V17.8148M33.3309 17.8148C33.3309 16.9482 32.6283 16.2456 31.7616 16.2456H27.6883C27.2814 16.2456 26.891 16.4067 26.5906 16.6812C20.8652 21.9134 14.7409 21.9608 8.68026 16.6559C8.38404 16.3967 8.0047 16.2456 7.61103 16.2456H3.51552C2.64886 16.2456 1.94629 16.9482 1.94629 17.8148M33.3309 17.8148V12.3225C33.3309 10.5892 31.9257 9.18409 30.1924 9.18409H5.08475C3.35142 9.18409 1.94629 10.5892 1.94629 12.3225V17.8148M1.94629 13.1072V5.26102C1.94629 3.52769 3.35142 2.12256 5.08475 2.12256H30.1924C31.9257 2.12256 33.3309 3.52769 33.3309 5.26102V13.1072"
          stroke="#1F1F1F" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    case "Settings":
      return <svg width="3.3rem" height="3.2rem" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.174 31.9751H18.1032C19.3008 31.9751 20.2388 31.2247 20.5274 30.0704L21.1046 27.5452L21.4797 27.4009L23.6875 28.7717C24.6976 29.4066 25.8952 29.2335 26.7466 28.3821L28.7667 26.3619C29.6325 25.4962 29.7768 24.3129 29.1419 23.3173L27.7711 21.1095L27.9154 20.7632L30.4406 20.1716C31.5805 19.883 32.3309 18.9451 32.3309 17.7474V14.9048C32.3309 13.7071 31.5949 12.7692 30.4406 12.4806L27.9298 11.8745L27.7855 11.4994L29.1563 9.30606C29.7912 8.31041 29.6469 7.12717 28.7812 6.24696L26.761 4.22681C25.9241 3.37545 24.7264 3.21673 23.7163 3.8372L21.5086 5.1936L21.1046 5.0493L20.5274 2.50967C20.2388 1.3553 19.3008 0.619385 18.1032 0.619385H15.174C13.9619 0.619385 13.0239 1.3553 12.7498 2.50967L12.1726 5.0493L11.7686 5.1936L9.56081 3.8372C8.5363 3.21673 7.35307 3.37545 6.51615 4.22681L4.48156 6.24696C3.63021 7.12717 3.47148 8.31041 4.10639 9.30606L5.47721 11.4994L5.33291 11.8745L2.83658 12.4806C1.6822 12.7692 0.946289 13.7071 0.946289 14.9048V17.7474C0.946289 18.9451 1.69663 19.883 2.83658 20.1716L5.36177 20.7632L5.49164 21.1095L4.12082 23.3173C3.48591 24.3129 3.64464 25.4962 4.49599 26.3619L6.53058 28.3821C7.3675 29.2335 8.56516 29.4066 9.57524 28.7717L11.783 27.4009L12.1726 27.5452L12.7498 30.0704C13.0239 31.2247 13.9619 31.9751 15.174 31.9751ZM15.5491 29.32C15.3038 29.32 15.174 29.219 15.1451 29.0026L14.2793 25.4529C13.3702 25.2364 12.49 24.8613 11.783 24.4139L8.66617 26.3331C8.47859 26.4485 8.30543 26.4341 8.13227 26.2609L6.61716 24.7458C6.444 24.5871 6.444 24.4139 6.55944 24.2264L8.47859 21.1095C8.07455 20.4169 7.69938 19.5511 7.48294 18.6421L3.9188 17.7907C3.70236 17.7619 3.58692 17.632 3.58692 17.3867V15.2511C3.58692 14.9914 3.68793 14.8903 3.9188 14.8326L7.46851 13.9957C7.68495 13.0289 8.10341 12.1343 8.46416 11.4849L6.54501 8.39699C6.42957 8.19497 6.42957 8.02181 6.5883 7.84866L8.11784 6.34797C8.291 6.18924 8.44973 6.16038 8.66617 6.29025L11.7541 8.18054C12.4035 7.77651 13.3702 7.37248 14.2937 7.1416L15.1451 3.5919C15.174 3.37545 15.3038 3.26002 15.5491 3.26002H17.728C17.9733 3.26002 18.0888 3.36103 18.132 3.5919L18.9978 7.15603C19.9358 7.38691 20.7871 7.77651 21.5086 8.18054L24.5965 6.29025C24.813 6.17481 24.9717 6.18924 25.1449 6.3624L26.6744 7.86309C26.8476 8.02181 26.8476 8.19497 26.7177 8.39699L24.813 11.4849C25.1593 12.1343 25.5922 13.0289 25.8086 13.9957L29.3583 14.8326C29.5892 14.8903 29.6758 14.9914 29.6758 15.2511V17.3867C29.6758 17.632 29.5748 17.7619 29.3583 17.7907L25.7942 18.6421C25.5778 19.5511 25.1882 20.4313 24.7841 21.1095L26.7033 24.2119C26.8187 24.4139 26.8187 24.5727 26.6456 24.7314L25.1304 26.2609C24.9573 26.4341 24.7841 26.4485 24.5965 26.3331L21.4942 24.4139C20.7727 24.8613 19.9502 25.222 18.9978 25.4529L18.132 29.0026C18.0888 29.219 17.9733 29.32 17.728 29.32H15.5491ZM16.6458 21.7733C19.6472 21.7733 22.1146 19.3058 22.1146 16.29C22.1146 13.3031 19.6472 10.8356 16.6458 10.8356C13.63 10.8356 11.1481 13.3031 11.1481 16.29C11.1481 19.3058 13.63 21.7733 16.6458 21.7733ZM16.6458 19.277C15.0008 19.277 13.6588 17.935 13.6588 16.29C13.6588 14.6739 15.0152 13.3319 16.6458 13.3319C18.2475 13.3319 19.5894 14.6739 19.5894 16.29C19.5894 17.9206 18.2475 19.277 16.6458 19.277Z"
          fill="#1C1C1E"/>
      </svg>
    case "search":
      return <svg width="3.6rem" height="3.6rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.1189 29.0097C18.0347 29.0097 20.7671 28.1295 23.0411 26.6257L31.0733 34.6763C31.6051 35.1897 32.2836 35.4465 33.0172 35.4465C34.5393 35.4465 35.6579 34.2545 35.6579 32.7507C35.6579 32.0539 35.4195 31.3754 34.906 30.8619L26.9288 22.848C28.5793 20.5007 29.5512 17.6582 29.5512 14.5774C29.5512 6.63682 23.0594 0.14502 15.1189 0.14502C7.19666 0.14502 0.686523 6.63682 0.686523 14.5774C0.686523 22.5179 7.17833 29.0097 15.1189 29.0097ZM15.1189 25.1586C9.30558 25.1586 4.53759 20.3906 4.53759 14.5774C4.53759 8.76408 9.30558 3.99609 15.1189 3.99609C20.9321 3.99609 25.7001 8.76408 25.7001 14.5774C25.7001 20.3906 20.9321 25.1586 15.1189 25.1586Z"
          fill="#1C1C1E"/>
      </svg>
    case "like":
      return <svg width="2.5rem" height="2.2rem" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.68 2.50042C18.9636 2.50042 20.1749 3.00606 21.0834 3.92288C22.9754 5.82875 22.9754 8.92927 21.0834 10.8324L13.0293 18.9476C12.8487 19.131 12.6431 19.1699 12.5014 19.1699C12.3597 19.1699 12.1569 19.131 11.9735 18.9476L3.9194 10.8324C2.02742 8.92649 2.02742 5.82597 3.9194 3.92288C4.83067 3.00606 6.0392 2.50042 7.32275 2.50042C8.6063 2.50042 9.81761 3.00606 10.7261 3.92288L12.5014 5.70928L14.2767 3.92288C15.1852 3.00606 16.3965 2.50042 17.68 2.50042ZM17.68 0C15.8047 0 13.9322 0.719564 12.5014 2.16147C11.0706 0.719564 9.19806 0 7.32275 0C5.44744 0 3.5749 0.719564 2.14411 2.16147C-0.714702 5.04251 -0.714702 9.71273 2.14411 12.5965L10.1982 20.7118C10.8344 21.3508 11.6679 21.6703 12.5014 21.6703C13.3349 21.6703 14.1683 21.3508 14.8018 20.709L22.8559 12.5938C25.7147 9.71273 25.7147 5.04251 22.8559 2.15869C21.4279 0.719564 19.5553 0 17.68 0Z"
          fill="black"/>
      </svg>
    case "comment":
      return <svg width="2.5rem" height="2.1rem" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.8568 0.00265636H3.1224C2.32251 -0.0226517 1.54512 0.269651 0.960063 0.815701C0.375009 1.36175 0.0298512 2.11716 0 2.91689L0 14.1575C0.0298512 14.9573 0.375009 15.7127 0.960063 16.2587C1.54512 16.8048 2.32251 17.0971 3.1224 17.0718H5.60991L5.9846 19.9131C6.0093 20.0979 6.08318 20.2727 6.19853 20.4192C6.31388 20.5657 6.46645 20.6784 6.6403 20.7458C6.76049 20.79 6.887 20.8146 7.01499 20.8186C7.26211 20.8135 7.50035 20.7255 7.69151 20.5689L11.8547 17.0718H21.8776C22.6775 17.0971 23.4549 16.8048 24.0399 16.2587C24.625 15.7127 24.9701 14.9573 25 14.1575V2.91689C24.9866 2.51863 24.8945 2.12696 24.729 1.76447C24.5634 1.40199 24.3277 1.07588 24.0355 0.804949C23.7433 0.534018 23.4003 0.323633 23.0264 0.185932C22.6524 0.048232 22.2549 -0.014058 21.8568 0.00265636ZM22.8976 14.1575C22.8638 14.4032 22.737 14.6266 22.5433 14.7815C22.3497 14.9365 22.1039 15.0111 21.8568 14.9902H11.4488C11.2056 14.9897 10.9699 15.0744 10.7827 15.2296L7.78518 17.7483L7.54579 15.9269C7.51045 15.6768 7.38537 15.4481 7.19388 15.2834C7.00239 15.1187 6.75755 15.0293 6.505 15.0318H3.1224C2.87527 15.0528 2.62952 14.9781 2.43585 14.8232C2.24218 14.6682 2.11538 14.4449 2.0816 14.1992V2.91689C2.11538 2.67119 2.24218 2.44783 2.43585 2.29289C2.62952 2.13796 2.87527 2.06328 3.1224 2.08425H21.8568C22.1039 2.06328 22.3497 2.13796 22.5433 2.29289C22.737 2.44783 22.8638 2.67119 22.8976 2.91689V14.1575Z"
          fill="black"/>
        <path
          d="M18.7344 5.20667H5.20403C5.06734 5.20665 4.93198 5.23355 4.80569 5.28585C4.6794 5.33815 4.56464 5.41481 4.46798 5.51146C4.37132 5.60811 4.29464 5.72285 4.24233 5.84913C4.19001 5.97542 4.16309 6.11077 4.16309 6.24746C4.16309 6.38416 4.19001 6.51951 4.24233 6.6458C4.29464 6.77208 4.37132 6.88682 4.46798 6.98347C4.56464 7.08012 4.6794 7.15678 4.80569 7.20908C4.93198 7.26138 5.06734 7.28828 5.20403 7.28826H18.7344C19.0104 7.28823 19.2751 7.17855 19.4703 6.98337C19.6654 6.78819 19.7751 6.52348 19.7751 6.24746C19.7751 5.97145 19.6654 5.70674 19.4703 5.51156C19.2751 5.31638 19.0104 5.2067 18.7344 5.20667ZM13.5304 9.36986H5.20403C4.92799 9.36986 4.66326 9.47952 4.46807 9.67471C4.27289 9.86989 4.16323 10.1346 4.16323 10.4107C4.16323 10.6867 4.27289 10.9514 4.46807 11.1466C4.66326 11.3418 4.92799 11.4515 5.20403 11.4515H13.5304C13.8065 11.4515 14.0712 11.3418 14.2664 11.1466C14.4616 10.9514 14.5712 10.6867 14.5712 10.4107C14.5712 10.1346 14.4616 9.86989 14.2664 9.67471C14.0712 9.47952 13.8065 9.36986 13.5304 9.36986Z"
          fill="black"/>
      </svg>
    case "repost":
      return <svg width="2.5rem" height="1.8rem" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.903 9.81394H21.9546C21.7395 9.81394 21.5635 9.63792 21.5635 9.42278V2.66542C21.5635 1.80241 20.8618 1.10076 19.9988 1.10076H7.89718C7.8434 1.10076 7.79939 1.14477 7.79939 1.19855V3.34995C7.79939 3.40374 7.8434 3.44774 7.89718 3.44774H18.8253C19.0405 3.44774 19.2165 3.62377 19.2165 3.83891V9.42278C19.2165 9.63792 19.0405 9.81394 18.8253 9.81394H15.8769C15.8011 9.81394 15.7547 9.89462 15.7914 9.96063L20.3044 17.7741C20.3411 17.8401 20.4364 17.8401 20.4731 17.7741L24.9862 9.96063C25.0253 9.89462 24.9764 9.81394 24.903 9.81394ZM0.0983509 8.0097H3.04675C3.26189 8.0097 3.43791 8.18572 3.43791 8.40086V15.1582C3.43791 16.0212 4.13956 16.7229 5.00257 16.7229H17.1042C17.158 16.7229 17.202 16.6789 17.202 16.6251V14.4737C17.202 14.4199 17.158 14.3759 17.1042 14.3759H6.17606C5.96092 14.3759 5.7849 14.1999 5.7849 13.9847V8.40086C5.7849 8.18572 5.96092 8.0097 6.17606 8.0097H9.12446C9.20025 8.0097 9.2467 7.92902 9.21003 7.86301L4.69453 0.0495067C4.65786 -0.0165022 4.56251 -0.0165022 4.52584 0.0495067L0.0127837 7.86301C-0.0238879 7.92902 0.0225628 8.0097 0.0983509 8.0097Z"
          fill="black"/>
      </svg>
    case "user":
      return <svg width="2.9rem" height="3rem" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.24644 11.1277C9.24644 8.41408 11.4463 6.21426 14.1599 6.21426C16.8735 6.21426 19.0733 8.41408 19.0733 11.1277C19.0733 13.8413 16.8735 16.0411 14.1599 16.0411C11.4463 16.0411 9.24644 13.8413 9.24644 11.1277ZM14.1599 8.17963C12.5317 8.17963 11.2118 9.49952 11.2118 11.1277C11.2118 12.7559 12.5317 14.0757 14.1599 14.0757C15.788 14.0757 17.1079 12.7559 17.1079 11.1277C17.1079 9.49952 15.788 8.17963 14.1599 8.17963Z"
              fill="#1F1F1F"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.074707 15.0584C0.074707 7.27941 6.38085 0.973267 14.1599 0.973267C21.9389 0.973267 28.245 7.27941 28.245 15.0584C28.245 22.8375 21.9389 29.1436 14.1599 29.1436C6.38085 29.1436 0.074707 22.8375 0.074707 15.0584ZM14.1599 2.93864C7.4663 2.93864 2.04008 8.36486 2.04008 15.0584C2.04008 17.819 2.96305 20.3641 4.51724 22.4018C5.59122 21.1659 6.89518 20.1453 8.36018 19.3989C10.1565 18.4836 12.1439 18.0065 14.1599 18.0065C16.1759 18.0065 18.1633 18.4836 19.9596 19.3989C21.4246 20.1453 22.7285 21.1659 23.8025 22.4018C25.3567 20.3641 26.2797 17.819 26.2797 15.0584C26.2797 8.36486 20.8535 2.93864 14.1599 2.93864ZM22.4757 23.8753C21.5382 22.7465 20.3791 21.8184 19.0673 21.15C17.5474 20.3756 15.8657 19.9719 14.1599 19.9719C12.454 19.9719 10.7724 20.3756 9.25244 21.15C7.94069 21.8184 6.78153 22.7465 5.84408 23.8753C8.01438 25.923 10.9405 27.1782 14.1599 27.1782C17.3792 27.1782 20.3054 25.923 22.4757 23.8753Z"
              fill="#1F1F1F"/>
      </svg>
    case "tx":
      return <svg width="2.9rem" height="3.2rem" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.857 2.08054C19.381 1.60458 19.381 0.832915 19.857 0.356964C20.3329 -0.118988 21.1046 -0.118988 21.5805 0.356964L28.0805 6.85696C28.3185 7.09494 28.4375 7.40684 28.4375 7.71875C28.4375 7.884 28.4046 8.04157 28.345 8.18527C28.2855 8.32901 28.1974 8.46369 28.0805 8.58054L21.5805 15.0805C21.1046 15.5565 20.3329 15.5565 19.857 15.0805C19.381 14.6046 19.381 13.8329 19.857 13.357L24.2764 8.9375H1.21875C0.545653 8.9375 0 8.39185 0 7.71875C0 7.04565 0.545653 6.5 1.21875 6.5H24.2764L19.857 2.08054Z"
          fill="#1F1F1F"/>
        <path
          d="M8.58054 18.3305C9.05649 17.8546 9.05649 17.0829 8.58054 16.607C8.10458 16.131 7.33292 16.131 6.85696 16.607L0.356964 23.107C0.240114 23.2238 0.151952 23.3585 0.0924772 23.5022C0.0328884 23.6459 0 23.8035 0 23.9688C0 24.134 0.0328888 24.2916 0.0924774 24.4353C0.151049 24.5768 0.237444 24.7096 0.351661 24.8252"
          fill="#1F1F1F"/>
        <path
          d="M0.35761 24.8312L6.85696 31.3305C7.33292 31.8065 8.10458 31.8065 8.58054 31.3305C9.05649 30.8546 9.05649 30.0829 8.58054 29.607L4.16107 25.1875H27.2188C27.8918 25.1875 28.4375 24.6418 28.4375 23.9688C28.4375 23.2957 27.8918 22.75 27.2188 22.75H4.16107L8.58054 18.3305"
          fill="#1F1F1F"/>
      </svg>
    case "receive":
      return <svg width="3.1rem" height="2.4rem" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3515 12.1898L29.3052 12.1898M29.3052 12.1898L19.1974 22.2974M29.3052 12.1898L19.1974 2.08228"
              stroke="#1F1F1F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    case "theme":
      return <svg width="4.6rem" height="4.6rem" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.1368 35.5939C15.9779 35.5939 10.9138 30.6778 10.9138 22.7856C10.9138 20.5349 11.284 18.5507 11.8319 17.4846C12.054 17.0552 12.0984 16.8479 12.0984 16.5517C12.0984 16.0631 11.6394 15.4856 11.0175 15.4856C10.899 15.4856 10.6177 15.53 10.2031 15.6929C4.72441 17.914 0.874512 23.6888 0.874512 29.9079C0.874512 38.8959 7.40453 45.4407 16.3925 45.4407C22.8337 45.4407 28.0607 42.0647 30.4595 36.5267C30.6372 36.1418 30.6667 35.8159 30.6667 35.6531C30.6667 35.0461 30.1486 34.6314 29.6895 34.6314C29.4526 34.6314 29.2749 34.6463 28.9195 34.7794C27.7201 35.2681 25.9136 35.5939 24.1368 35.5939ZM3.19925 29.8042C3.19925 25.1992 5.59803 20.8162 9.43313 18.4026C8.95929 19.7797 8.70757 21.3049 8.70757 22.9929C8.70757 32.2474 14.3492 37.7558 23.7962 37.7558C25.3214 37.7558 26.6096 37.5781 27.8385 37.1486C25.5879 40.8652 21.2493 43.1308 16.4814 43.1308C8.79641 43.1308 3.19925 37.5336 3.19925 29.8042Z"
          fill="black" fill-opacity="0.85"/>
        <path
          d="M32.0611 2.18109C32.0611 1.43602 31.4244 0.799316 30.6793 0.799316C29.9342 0.799316 29.3111 1.43602 29.3111 2.18109V4.9311C29.3111 5.67617 29.9342 6.29932 30.6793 6.29932C31.4244 6.29932 32.0611 5.67617 32.0611 4.9311V2.18109ZM37.4798 7.22051C36.9515 7.74883 36.9515 8.62938 37.4933 9.1577C38.0081 9.68603 38.9022 9.68603 39.4305 9.14416L41.3813 7.19341C41.9096 6.67864 41.9096 5.771 41.3813 5.24267C40.8529 4.72789 39.9724 4.72789 39.4441 5.25622L37.4798 7.22051ZM21.928 9.14416C22.4428 9.68603 23.3369 9.68603 23.8652 9.1577C24.3936 8.64292 24.3936 7.73529 23.8788 7.22051L21.928 5.25622C21.4133 4.74144 20.5192 4.72789 19.9908 5.24267C19.4625 5.771 19.4625 6.67864 19.9773 7.17987L21.928 9.14416ZM30.6793 8.80549C26.7778 8.80549 23.5401 12.0296 23.5401 15.9447C23.5401 19.8597 26.7778 23.0838 30.6793 23.0838C34.5808 23.0838 37.8049 19.8597 37.8049 15.9447C37.8049 12.0296 34.5808 8.80549 30.6793 8.80549ZM30.6793 11.3658C33.1719 11.3658 35.2581 13.4385 35.2581 15.9447C35.2581 18.4508 33.1719 20.5235 30.6793 20.5235C28.1731 20.5235 26.0869 18.4508 26.0869 15.9447C26.0869 13.4385 28.1731 11.3658 30.6793 11.3658ZM44.4293 17.3264C45.1744 17.3264 45.7975 16.6897 45.7975 15.9447C45.7975 15.1996 45.1744 14.5764 44.4293 14.5764H41.6793C40.9342 14.5764 40.3111 15.1996 40.3111 15.9447C40.3111 16.6897 40.9342 17.3264 41.6793 17.3264H44.4293ZM16.9428 14.5764C16.1842 14.5764 15.561 15.1996 15.561 15.9447C15.561 16.6897 16.1842 17.3264 16.9428 17.3264H19.6793C20.4243 17.3264 21.061 16.6897 21.061 15.9447C21.061 15.1996 20.4243 14.5764 19.6793 14.5764H16.9428ZM39.417 22.7452C38.8887 22.2168 38.0081 22.2304 37.4798 22.7587C36.9515 23.2735 36.9515 24.154 37.4933 24.6959L39.4576 26.6466C39.9724 27.175 40.8665 27.1614 41.3948 26.6331C41.9096 26.1048 41.9096 25.2242 41.3813 24.6959L39.417 22.7452ZM19.9773 24.6824C19.449 25.2107 19.4354 26.1048 19.9502 26.6196C20.4785 27.1479 21.3862 27.1614 21.9009 26.6466L23.8652 24.6959C24.3936 24.1676 24.3936 23.2735 23.8788 22.7587C23.3505 22.2304 22.4564 22.2304 21.928 22.7452L19.9773 24.6824ZM32.0611 26.9582C32.0611 26.2131 31.4244 25.59 30.6793 25.59C29.9342 25.59 29.3111 26.2131 29.3111 26.9582V29.7082C29.3111 30.4533 29.9342 31.09 30.6793 31.09C31.4244 31.09 32.0611 30.4533 32.0611 29.7082V26.9582Z"
          fill="#1C1C1E"/>
      </svg>
    case "account":
      return <svg width="4.8rem" height="4.9rem" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.8867" cy="24.6504" r="23.8091" fill="#D9D9D9"/>
        <path
          d="M24.336 20.6074V24.95V25.8088C24.336 26.2266 24.2225 26.6367 24.0075 26.995V26.995C23.754 27.4174 23.3719 27.7476 22.9172 27.937L22.7233 28.0178C22.3645 28.1673 21.9796 28.2443 21.5909 28.2443H21.1914H19.8438"
          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
          d="M13.5544 33.635C13.7525 33.833 14.3232 34.3583 14.9211 34.8653C15.7705 35.5855 16.7744 36.0779 17.8172 36.4689L18.1987 36.612C19.2915 37.0218 20.4287 37.302 21.5869 37.4467L21.9213 37.4885C22.9282 37.6144 23.9468 37.6144 24.9536 37.4885L25.2488 37.4516C26.4285 37.3042 27.5746 36.9572 28.638 36.4255V36.4255C29.3613 36.0638 30.0404 35.6197 30.6617 35.1019L32.422 33.635"
          stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <ellipse cx="16.699" cy="16.5643" rx="3.1446" ry="3.1446" fill="black"/>
        <ellipse cx="31.973" cy="16.5643" rx="3.1446" ry="3.1446" fill="black"/>
      </svg>
    case "edit":
      return <svg width="3.2rem" height="3.2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.9377 10.7561C11.9332 10.7605 11.9287 10.765 11.9242 10.7695L6.74884 15.9449C6.56667 16.127 6.39788 16.318 6.24261 16.5166C5.09799 17.9635 4.26245 20.1179 3.67112 22.0863C3.07055 24.0855 2.6858 26.02 2.4922 27.1121C2.29043 28.2502 3.29983 29.1993 4.41194 28.9621C6.28506 28.5626 10.8545 27.4995 13.6857 26.0308C14.3632 25.7287 14.9969 25.3 15.5504 24.7465L25.7418 14.5551C28.1723 12.1246 28.1723 8.18403 25.7418 5.75354C23.3113 3.32304 19.3707 3.32304 16.9402 5.75354L11.9377 10.7561ZM18.3299 7.14327C19.9929 5.48029 22.6891 5.48029 24.3521 7.14327C26.015 8.80624 26.015 11.5024 24.3521 13.1654L22.5455 14.9719C22.4972 13.4459 21.8906 11.9343 20.7258 10.7695C19.561 9.6047 18.0494 8.99813 16.5234 8.94975L18.3299 7.14327ZM13.3251 12.1481C14.989 10.4962 17.6768 10.5 19.3361 12.1592C20.999 13.8222 20.999 16.5184 19.3361 18.1814L14.1607 23.3568C13.7741 23.7434 13.3336 24.0389 12.8643 24.2451L12.8341 24.2583L12.8049 24.2736C10.4605 25.4971 6.61955 26.4604 4.5245 26.9261C4.73016 25.8416 5.06936 24.2631 5.5534 22.6518C6.13241 20.7244 6.8837 18.873 7.78546 17.7341L7.78942 17.7291C7.89605 17.5926 8.01239 17.4608 8.13857 17.3346L13.3251 12.1481Z"
              fill="#1F1F1F"/>
      </svg>


  }
}

export default Icon
