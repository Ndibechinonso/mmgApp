const Settings = ({ isActive }) => {
  return isActive ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5652 8.6087H18.7746C18.6244 8.11848 18.4279 7.645 18.1892 7.194L19.4542 5.929C19.7249 5.6583 19.8741 5.2977 19.8741 4.91365C19.8741 4.53009 19.7249 4.16948 19.4542 3.89878L18.1007 2.5453C17.5598 2.00439 16.6129 2.00296 16.071 2.5453L14.806 3.8103C14.3555 3.57165 13.8815 3.37557 13.3913 3.22491V1.43478C13.3913 0.643739 12.7476 0 11.9565 0H10.0435C9.25243 0 8.6087 0.643739 8.6087 1.43478V3.22539C8.11848 3.37604 7.645 3.57213 7.194 3.81078L5.92852 2.54578C5.36896 1.98622 4.45835 1.98622 3.89878 2.54578L2.54483 3.89926C1.98574 4.45883 1.98574 5.36943 2.54483 5.929L3.80983 7.19448C3.57117 7.645 3.37509 8.11896 3.22443 8.60917H1.43478C0.643739 8.60917 0 9.25291 0 10.044V11.957C0 12.7476 0.643739 13.3913 1.43478 13.3913H3.22539C3.37604 13.8815 3.57213 14.355 3.81078 14.806L2.54578 16.0715C1.98622 16.631 1.98622 17.5417 2.54578 18.1012L3.89926 19.4552C4.45883 20.0143 5.36943 20.0143 5.929 19.4552L7.19448 18.1902C7.645 18.4288 8.11896 18.6249 8.60917 18.7756V20.5652C8.60917 21.3563 9.25291 22 10.044 22H11.957C12.748 22 13.3918 21.3563 13.3918 20.5652V18.7746C13.882 18.624 14.356 18.4279 14.8065 18.1892L16.0715 19.4547C16.6138 19.9966 17.5608 19.9956 18.1012 19.4547L19.4547 18.1012C19.7254 17.8305 19.8746 17.4699 19.8746 17.0863C19.8746 16.7023 19.7254 16.3422 19.4547 16.0715L18.1897 14.806C18.4283 14.3555 18.6244 13.8815 18.7751 13.3913H20.5652C21.3563 13.3913 22 12.7476 22 11.9565V10.0435C22 9.25243 21.3563 8.6087 20.5652 8.6087ZM21.0435 11.9565C21.0435 12.22 20.8292 12.4348 20.5652 12.4348H18.413C18.195 12.4348 18.0046 12.5826 17.9501 12.7935C17.7808 13.4463 17.523 14.0695 17.183 14.6453C17.0725 14.8333 17.1026 15.0724 17.2566 15.2264L18.7775 16.7477C18.8674 16.8377 18.9171 16.9577 18.9171 17.0863C18.9171 17.215 18.8674 17.335 18.7775 17.425L17.424 18.7784C17.2442 18.9583 16.9271 18.9583 16.7468 18.7784L15.2259 17.2576C15.0719 17.1031 14.8328 17.0734 14.6443 17.1839C14.0695 17.5235 13.4463 17.7817 12.793 17.9506C12.5826 18.0046 12.4348 18.195 12.4348 18.413V20.5652C12.4348 20.8287 12.2205 21.0435 11.9565 21.0435H10.0435C9.77996 21.0435 9.56522 20.8287 9.56522 20.5652V18.413C9.56522 18.195 9.41743 18.0046 9.20652 17.9501C8.5537 17.7813 7.93052 17.5235 7.3547 17.1834C7.27913 17.1385 7.19543 17.117 7.11174 17.117C6.98787 17.117 6.86543 17.1648 6.77313 17.2571L5.25226 18.778C5.06526 18.9645 4.76204 18.9645 4.57504 18.778L3.22157 17.4245C3.03457 17.2375 3.03457 16.9338 3.22157 16.7473L4.74243 15.2264C4.89691 15.0719 4.92704 14.8328 4.81609 14.6453C4.47652 14.0695 4.21826 13.4468 4.04943 12.7935C3.99539 12.5826 3.80504 12.4348 3.58696 12.4348H1.43478C1.17126 12.4348 0.956522 12.22 0.956522 11.9565V10.0435C0.956522 9.77996 1.17126 9.56522 1.43478 9.56522H3.58696C3.80504 9.56522 3.99539 9.41743 4.04991 9.20652C4.21874 8.5537 4.47652 7.93052 4.81657 7.3547C4.92752 7.16674 4.89739 6.92761 4.74291 6.77361L3.22204 5.25274C3.03552 5.06622 3.03552 4.76252 3.22204 4.57552L4.57552 3.22204C4.76252 3.03504 5.06574 3.03552 5.25274 3.22204L6.77361 4.74291C6.92809 4.89739 7.16674 4.928 7.3547 4.81657C7.93052 4.477 8.55322 4.21874 9.20652 4.04991C9.41743 3.99539 9.56522 3.80504 9.56522 3.58696V1.43478C9.56522 1.17126 9.77996 0.956522 10.0435 0.956522H11.9565C12.2205 0.956522 12.4348 1.17126 12.4348 1.43478V3.58696C12.4348 3.80504 12.5826 3.99539 12.7935 4.04991C13.4468 4.21874 14.07 4.477 14.6448 4.81657C14.8333 4.92752 15.0724 4.89787 15.2264 4.74291L16.7473 3.22204C16.9276 3.04126 17.2447 3.04174 17.4245 3.22204L18.778 4.57552C18.8679 4.66543 18.9176 4.78596 18.9176 4.91413C18.9176 5.0423 18.8679 5.16283 18.778 5.25274L17.2571 6.77361C17.1031 6.92809 17.0725 7.16722 17.1834 7.3547C17.5235 7.93052 17.7813 8.55322 17.9506 9.20652C18.0046 9.41743 18.195 9.56522 18.413 9.56522H20.5652C20.8292 9.56522 21.0435 9.77996 21.0435 10.0435V11.9565Z"
        fill="#008080"
      />
      <path
        d="M11.0001 6.69568C8.62702 6.69568 6.6958 8.6269 6.6958 11C6.6958 13.3732 8.62702 15.3044 11.0001 15.3044C13.3738 15.3044 15.3045 13.3732 15.3045 11C15.3045 8.6269 13.3738 6.69568 11.0001 6.69568ZM11.0001 14.3478C9.15406 14.3478 7.65232 12.8461 7.65232 11C7.65232 9.15394 9.15406 7.6522 11.0001 7.6522C12.8458 7.6522 14.348 9.15394 14.348 11C14.348 12.8461 12.8458 14.3478 11.0001 14.3478Z"
        fill="#008080"
      />
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5652 8.6087H18.7746C18.6244 8.11848 18.4279 7.645 18.1892 7.194L19.4542 5.929C19.7249 5.6583 19.8741 5.2977 19.8741 4.91365C19.8741 4.53009 19.7249 4.16948 19.4542 3.89878L18.1007 2.5453C17.5598 2.00439 16.6129 2.00296 16.071 2.5453L14.806 3.8103C14.3555 3.57165 13.8815 3.37557 13.3913 3.22491V1.43478C13.3913 0.643739 12.7476 0 11.9565 0H10.0435C9.25243 0 8.6087 0.643739 8.6087 1.43478V3.22539C8.11848 3.37604 7.645 3.57213 7.194 3.81078L5.92852 2.54578C5.36896 1.98622 4.45835 1.98622 3.89878 2.54578L2.54483 3.89926C1.98574 4.45883 1.98574 5.36943 2.54483 5.929L3.80983 7.19448C3.57117 7.645 3.37509 8.11896 3.22443 8.60917H1.43478C0.643739 8.60917 0 9.25291 0 10.044V11.957C0 12.7476 0.643739 13.3913 1.43478 13.3913H3.22539C3.37604 13.8815 3.57213 14.355 3.81078 14.806L2.54578 16.0715C1.98622 16.631 1.98622 17.5417 2.54578 18.1012L3.89926 19.4552C4.45883 20.0143 5.36943 20.0143 5.929 19.4552L7.19448 18.1902C7.645 18.4288 8.11896 18.6249 8.60917 18.7756V20.5652C8.60917 21.3563 9.25291 22 10.044 22H11.957C12.748 22 13.3918 21.3563 13.3918 20.5652V18.7746C13.882 18.624 14.356 18.4279 14.8065 18.1892L16.0715 19.4547C16.6138 19.9966 17.5608 19.9956 18.1012 19.4547L19.4547 18.1012C19.7254 17.8305 19.8746 17.4699 19.8746 17.0863C19.8746 16.7023 19.7254 16.3422 19.4547 16.0715L18.1897 14.806C18.4283 14.3555 18.6244 13.8815 18.7751 13.3913H20.5652C21.3563 13.3913 22 12.7476 22 11.9565V10.0435C22 9.25243 21.3563 8.6087 20.5652 8.6087ZM21.0435 11.9565C21.0435 12.22 20.8292 12.4348 20.5652 12.4348H18.413C18.195 12.4348 18.0046 12.5826 17.9501 12.7935C17.7808 13.4463 17.523 14.0695 17.183 14.6453C17.0725 14.8333 17.1026 15.0724 17.2566 15.2264L18.7775 16.7477C18.8674 16.8377 18.9171 16.9577 18.9171 17.0863C18.9171 17.215 18.8674 17.335 18.7775 17.425L17.424 18.7784C17.2442 18.9583 16.9271 18.9583 16.7468 18.7784L15.2259 17.2576C15.0719 17.1031 14.8328 17.0734 14.6443 17.1839C14.0695 17.5235 13.4463 17.7817 12.793 17.9506C12.5826 18.0046 12.4348 18.195 12.4348 18.413V20.5652C12.4348 20.8287 12.2205 21.0435 11.9565 21.0435H10.0435C9.77996 21.0435 9.56522 20.8287 9.56522 20.5652V18.413C9.56522 18.195 9.41743 18.0046 9.20652 17.9501C8.5537 17.7813 7.93052 17.5235 7.3547 17.1834C7.27913 17.1385 7.19543 17.117 7.11174 17.117C6.98787 17.117 6.86543 17.1648 6.77313 17.2571L5.25226 18.778C5.06526 18.9645 4.76204 18.9645 4.57504 18.778L3.22157 17.4245C3.03457 17.2375 3.03457 16.9338 3.22157 16.7473L4.74243 15.2264C4.89691 15.0719 4.92704 14.8328 4.81609 14.6453C4.47652 14.0695 4.21826 13.4468 4.04943 12.7935C3.99539 12.5826 3.80504 12.4348 3.58696 12.4348H1.43478C1.17126 12.4348 0.956522 12.22 0.956522 11.9565V10.0435C0.956522 9.77996 1.17126 9.56522 1.43478 9.56522H3.58696C3.80504 9.56522 3.99539 9.41743 4.04991 9.20652C4.21874 8.5537 4.47652 7.93052 4.81657 7.3547C4.92752 7.16674 4.89739 6.92761 4.74291 6.77361L3.22204 5.25274C3.03552 5.06622 3.03552 4.76252 3.22204 4.57552L4.57552 3.22204C4.76252 3.03504 5.06574 3.03552 5.25274 3.22204L6.77361 4.74291C6.92809 4.89739 7.16674 4.928 7.3547 4.81657C7.93052 4.477 8.55322 4.21874 9.20652 4.04991C9.41743 3.99539 9.56522 3.80504 9.56522 3.58696V1.43478C9.56522 1.17126 9.77996 0.956522 10.0435 0.956522H11.9565C12.2205 0.956522 12.4348 1.17126 12.4348 1.43478V3.58696C12.4348 3.80504 12.5826 3.99539 12.7935 4.04991C13.4468 4.21874 14.07 4.477 14.6448 4.81657C14.8333 4.92752 15.0724 4.89787 15.2264 4.74291L16.7473 3.22204C16.9276 3.04126 17.2447 3.04174 17.4245 3.22204L18.778 4.57552C18.8679 4.66543 18.9176 4.78596 18.9176 4.91413C18.9176 5.0423 18.8679 5.16283 18.778 5.25274L17.2571 6.77361C17.1031 6.92809 17.0725 7.16722 17.1834 7.3547C17.5235 7.93052 17.7813 8.55322 17.9506 9.20652C18.0046 9.41743 18.195 9.56522 18.413 9.56522H20.5652C20.8292 9.56522 21.0435 9.77996 21.0435 10.0435V11.9565Z"
        fill="#79B0B0"
      />
      <path
        d="M11.0001 6.69568C8.62702 6.69568 6.6958 8.6269 6.6958 11C6.6958 13.3732 8.62702 15.3044 11.0001 15.3044C13.3738 15.3044 15.3045 13.3732 15.3045 11C15.3045 8.6269 13.3738 6.69568 11.0001 6.69568ZM11.0001 14.3478C9.15406 14.3478 7.65232 12.8461 7.65232 11C7.65232 9.15394 9.15406 7.6522 11.0001 7.6522C12.8458 7.6522 14.348 9.15394 14.348 11C14.348 12.8461 12.8458 14.3478 11.0001 14.3478Z"
        fill="#79B0B0"
      />
    </svg>
  );
};
export default Settings;
