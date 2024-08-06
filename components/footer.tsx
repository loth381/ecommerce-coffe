import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
const dataFooter = [
  {
    id: 1,
    name: "Menu",
    link: "#",
  },
  {
    id: 2,
    name: "Nosotros",
    link: "#",
   
  },
  {
    id: 3,
    name: "Galeria",
    link: "#",
  },
  {
    id: 4,
    name: "Local",
    link: "#",
    
  },
  {
    id: 4,
    name: "politica de privacidad",
    link: "#",
    
  },
];

const Footer = () => {
  return (
    <footer
      className=""

    >
      <div className=" xl:w-[1300px] md:w-auto text-slate-800 max-md:flex-col flex justify-between mx-auto md:py-4">
        <div className=" flex gap-4 text-center max-md:flex-col items-center justify-center">
          <h1  >
          <svg className="hover:text-red-600 w-[200px] mr-8" width="200" height="auto" viewBox="0 0 361 135" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M71.1606 47.9311C76.8842 47.6753 81.2489 43.9981 79.714 35.8604C78.1792 27.7386 70.5211 26.7954 70.5211 26.7954C71.4164 28.7619 71.4964 32.7908 71.4964 32.7908C67.0518 18.0021 53.2704 19.3131 53.2704 19.3131C53.2704 19.3131 39.489 17.9862 35.0445 32.7908C35.0445 32.7908 35.1244 28.7619 36.0197 26.7954C36.0197 26.7954 28.3456 27.7386 26.8108 35.8604C25.276 43.9821 29.6406 47.6753 35.3642 47.9311C41.0878 48.1869 42.7025 45.3571 42.7025 45.3571C42.7025 45.3571 40.5282 49.29 34.6288 49.7217C34.6288 49.7217 37.7783 52.2957 38.4978 57.5077C38.4978 57.5077 41.2157 60.8172 53.1905 60.8491H53.3344C65.2932 60.8172 68.027 57.5077 68.027 57.5077C68.7465 52.2957 71.8961 49.7217 71.8961 49.7217C65.9966 49.29 63.8223 45.3571 63.8223 45.3571C63.8223 45.3571 65.437 48.1869 71.1606 47.9311Z" fill="#1D1D1B"/>
<path d="M67.723 59.3143C63.4543 62.5598 54.5332 62.2401 53.3341 62.1761H53.1902C51.9911 62.2401 43.054 62.5598 38.8013 59.3143C38.8013 59.3143 39.5527 62.2241 39.5047 64.1106C39.5047 64.1106 43.5176 67.8038 53.2701 67.2442C63.0066 67.7878 67.0355 64.1106 67.0355 64.1106C66.9876 62.2241 67.739 59.3143 67.739 59.3143H67.723Z" fill="#1D1D1B"/>
<path d="M33.8301 108.46L30.9683 111.274C30.9683 111.274 30.9683 116.598 36.452 117.078L39.4257 113.864C36.2602 112.729 34.5655 110.027 33.8301 108.46Z" fill="#1D1D1B"/>
<path d="M35.0293 107.293C35.5249 108.492 37.1876 111.738 40.609 112.601L65.0222 86.2536V82.2247H73.096C73.096 82.2247 105.919 58.2271 105.919 37.7789L35.0293 107.293ZM93.1445 60.1297C91.8655 61.5526 90.5865 63.0075 89.2435 64.3664C87.9166 65.7573 86.5256 67.0843 85.1507 68.4113C83.7278 69.7063 82.3369 71.0173 80.866 72.2483C77.9562 74.7424 74.9505 77.1246 71.801 79.3149C74.6308 76.7409 101.826 46.4123 102.305 45.5809C101.042 49.2101 98.98 52.5195 96.7098 55.6212C95.6066 57.2039 94.3436 58.6588 93.1285 60.1457L93.1445 60.1297Z" fill="#1D1D1B"/>
<path d="M70.8894 107.277L0 37.7629C0 58.2112 32.8227 82.2087 32.8227 82.2087H40.8965V86.2376L65.3097 112.585C68.779 111.738 70.4257 108.444 70.9054 107.277H70.8894ZM25.0527 72.2483C23.5818 71.0173 22.1909 69.7063 20.768 68.4113C19.3931 67.0843 18.0021 65.7573 16.6752 64.3664C15.3322 62.9915 14.0532 61.5526 12.7742 60.1297C11.5591 58.6428 10.2961 57.1879 9.19292 55.6052C6.93865 52.5035 4.86026 49.1941 3.59723 45.5649C4.07686 46.3963 31.2719 76.7249 34.1017 79.2989C30.9522 77.1086 27.9465 74.7424 25.0367 72.2324L25.0527 72.2483Z" fill="#1D1D1B"/>
<path d="M72.0727 108.444C71.3373 109.995 69.6426 112.729 66.4771 113.848L69.4667 117.078C74.9505 116.598 74.9505 111.274 74.9505 111.274L72.0727 108.46V108.444Z" fill="#1D1D1B"/>
<path d="M115.239 38.4984C117.669 38.0987 121.139 38.0507 124.448 38.2745C129.58 38.6263 132.89 39.9053 135.208 42.2555C137.062 44.142 138.134 46.8919 138.134 49.9615C138.134 55.2055 135.048 58.6748 131.115 60.1297V60.3056C133.993 61.3767 135.688 64.2385 136.583 68.3474C137.782 73.8791 138.677 77.6682 139.461 79.1391C137.478 79.251 136.487 79.3149 134.488 79.4268C133.881 78.3237 133.018 74.9023 132.01 69.8982C130.891 64.3824 128.925 62.2241 124.56 62.0802C122.753 62.0802 121.842 62.0962 120.036 62.1122C120.036 69.4185 120.036 73.0637 120.036 80.3541C118.117 80.482 117.158 80.562 115.239 80.6899C115.239 63.7909 115.239 55.3494 115.239 38.4504V38.4984ZM120.036 58.0193C122.002 58.0193 122.977 58.0193 124.944 58.0513C130.076 58.0833 133.337 55.0296 133.337 50.4252C133.337 45.2132 129.836 42.7351 124.784 42.4313C122.482 42.2874 120.803 42.4473 120.036 42.6552C120.036 48.8104 120.036 51.8801 120.036 58.0353V58.0193Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M145.217 65.7574C145.328 72.6321 149.517 75.2701 154.377 75.0782C157.863 74.9343 159.957 74.2469 161.78 73.4155C162.115 74.8064 162.275 75.4939 162.611 76.8688C160.9 77.7162 157.975 78.7394 153.722 78.9632C145.488 79.3789 140.58 73.9431 140.58 65.3897C140.58 56.8363 145.328 50.2334 153.114 50.4252C161.844 50.6331 164.162 58.3231 164.162 63.2154C164.162 64.2066 164.05 64.974 164.002 65.4696C156.488 65.5815 152.731 65.6295 145.217 65.7734V65.7574ZM159.462 62.0163C159.509 58.8987 158.183 54.0384 152.715 53.9585C147.791 53.8786 145.648 58.5789 145.264 62.1122C150.94 62.0642 153.786 62.0483 159.462 62.0163Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M167.04 72.8559C168.479 73.7352 171.021 74.6305 173.451 74.5506C176.984 74.4387 178.647 72.68 178.647 70.5537C178.647 68.3154 177.256 67.0843 173.675 65.8693C168.91 64.2385 166.608 61.6485 166.608 58.467C166.608 54.1983 170.093 50.7769 175.833 50.8728C178.535 50.9208 180.917 51.7042 182.404 52.5675C181.924 53.9105 181.669 54.598 181.189 55.9409C180.134 55.3014 178.199 54.4221 175.721 54.4061C172.843 54.3741 171.245 55.9889 171.245 57.9394C171.245 60.0977 172.843 61.0889 176.329 62.352C180.965 64.0467 183.347 66.221 183.347 70.0261C183.347 74.5186 179.702 77.7961 173.339 78.0519C170.413 78.1638 167.695 77.5723 165.825 76.549C166.304 75.0622 166.56 74.3268 167.04 72.8399V72.8559Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M192.955 44.4777V51.7042C195.737 51.7361 197.128 51.7521 199.926 51.7841V55.2374C197.144 55.2374 195.753 55.2214 192.955 55.1895V68.763C192.955 71.8806 193.899 73.6393 196.6 73.5753C197.864 73.5433 198.807 73.3835 199.414 73.2076C199.51 74.5665 199.542 75.254 199.638 76.597C198.695 76.9807 197.208 77.2685 195.321 77.3164C193.051 77.3804 191.229 76.6929 190.062 75.5258C188.751 74.1988 188.175 71.9605 188.175 68.9708V55.1255C186.512 55.1255 185.681 55.1095 184.034 55.0935V51.5603C185.697 51.5763 186.528 51.5922 188.175 51.6242V45.5489C190.078 45.1172 191.021 44.8934 192.923 44.4617L192.955 44.4777Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M217.721 76.4211C217.561 75.1901 217.481 74.5666 217.337 73.3355H217.177C215.69 75.27 212.812 77.0447 208.991 77.1086C203.572 77.2045 200.806 73.7192 200.806 70.122C200.806 64.0946 206.545 60.8012 216.889 60.8331V60.3215C216.889 58.2911 216.282 54.6459 210.814 54.6299C208.32 54.6299 205.73 55.3174 203.843 56.4365C203.396 55.2534 203.188 54.6459 202.74 53.4628C204.946 52.1358 208.16 51.3045 211.533 51.3365C219.719 51.4004 221.702 56.5005 221.702 61.3927C221.702 65.0539 221.702 66.8765 221.702 70.5377C221.702 72.664 221.813 74.7264 222.149 76.3892C220.375 76.3892 219.495 76.4211 217.721 76.4371V76.4211ZM217.001 63.9188C211.693 63.8388 205.666 64.7341 205.666 69.5464C205.666 72.4562 207.76 73.8151 210.254 73.7832C213.74 73.7352 215.946 71.6888 216.729 69.6104C216.889 69.1467 217.001 68.6511 217.001 68.1875C217.001 66.4928 217.001 65.6295 217.001 63.9348V63.9188Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M249.456 69.6903C249.456 72.2163 249.504 74.4226 249.68 76.3412C247.953 76.3412 247.09 76.3252 245.363 76.3092C245.251 74.7104 245.204 73.927 245.092 72.3283H244.98C243.701 74.2788 240.887 76.8368 236.138 76.8368C231.934 76.8368 226.914 74.7584 226.914 66.189C226.914 60.4814 226.914 57.6356 226.914 51.928C228.864 51.928 229.839 51.928 231.774 51.928C231.774 57.3158 231.774 60.0177 231.774 65.4056C231.774 70.026 233.325 73.1436 237.737 73.1436C240.999 73.1436 243.269 71.0812 244.148 69.1307C244.42 68.4752 244.596 67.6758 244.596 66.8605C244.596 60.8811 244.596 57.8914 244.596 51.912C246.546 51.912 247.522 51.912 249.456 51.912C249.456 59.0105 249.456 62.5598 249.456 69.6583V69.6903Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M255.035 59.5701C255.035 56.6924 254.987 54.2143 254.812 51.944C256.522 51.944 257.37 51.944 259.064 51.928L259.224 56.7403H259.448C260.663 53.4469 263.589 51.3365 266.85 51.3045C267.41 51.3045 267.794 51.3525 268.225 51.4484C268.225 53.1431 268.225 53.9904 268.225 55.6851C267.73 55.5892 267.234 55.5412 266.562 55.5412C263.141 55.5412 260.711 57.9554 260.039 61.2968C259.928 61.9043 259.816 62.6078 259.816 63.3752C259.816 68.6032 259.816 71.2252 259.816 76.4691C257.897 76.4371 256.922 76.4371 255.003 76.4052C255.003 69.6744 255.003 66.3009 255.003 59.5701H255.035Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M285.172 76.9807C285.012 75.7017 284.932 75.0622 284.789 73.7832H284.629C283.142 75.7337 280.264 77.4124 276.443 77.3324C271.023 77.2045 268.257 73.6233 268.257 70.058C268.257 64.0786 273.997 60.8172 284.341 60.8811V60.3535C284.341 58.2591 283.733 54.518 278.266 54.55C275.772 54.566 273.182 55.3014 271.295 56.4365C270.847 55.2534 270.639 54.6619 270.192 53.4628C272.398 52.1198 275.612 51.2086 278.985 51.1606C287.171 51.0647 289.153 56.3406 289.153 61.4567C289.153 65.2617 289.153 67.1803 289.153 70.9853C289.153 73.1916 289.265 75.35 289.601 77.1086C287.826 77.0606 286.947 77.0287 285.172 76.9807ZM284.453 64.0627C279.145 63.9188 273.118 64.7661 273.118 69.5944C273.118 72.5201 275.212 73.943 277.706 74.007C281.191 74.0709 283.398 72.0405 284.181 69.9141C284.341 69.4505 284.453 68.9229 284.453 68.4593C284.453 66.7006 284.453 65.8213 284.453 64.0786V64.0627Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M294.509 58.499C294.509 55.845 294.462 53.6547 294.286 51.5443C296.012 51.5124 296.876 51.5124 298.602 51.4804C298.714 53.1911 298.762 54.0544 298.874 55.7651H298.986C300.313 53.287 303.415 50.8089 307.827 50.713C311.536 50.633 317.276 52.7434 317.276 62.0323C317.276 68.4913 317.276 71.7368 317.276 78.1958C315.325 78.0999 314.366 78.0519 312.416 77.972C312.416 71.8007 312.416 68.7151 312.416 62.5599C312.416 58.2432 310.817 54.6779 306.228 54.7259C303.031 54.7579 300.537 56.9961 299.705 59.6341C299.482 60.2256 299.37 61.025 299.37 61.8404C299.37 68.0916 299.37 71.2092 299.37 77.4604C297.419 77.3964 296.444 77.3485 294.509 77.2845C294.509 69.7703 294.509 66.0292 294.509 58.515V58.499Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M328.323 42.863V50.8728C331.105 50.8089 332.496 50.7769 335.278 50.697C335.278 52.2797 335.278 53.0631 335.278 54.6299C332.496 54.6779 331.105 54.6939 328.323 54.7259C328.323 60.7372 328.323 63.7429 328.323 69.7543C328.323 73.2076 329.267 75.2061 331.969 75.334C333.232 75.3979 334.175 75.254 334.782 75.1102C334.878 76.661 334.91 77.4444 335.006 78.9952C334.063 79.3469 332.576 79.5547 330.706 79.4428C328.435 79.3149 326.629 78.4036 325.462 77.0447C324.151 75.4939 323.591 73.0318 323.591 69.7863C323.591 63.7749 323.591 60.7852 323.591 54.7738C321.928 54.7898 321.113 54.8058 319.45 54.8218C319.45 53.3189 319.45 52.5675 319.45 51.0487C321.113 51.0167 321.928 51.0007 323.591 50.9528C323.591 48.3148 323.591 46.9878 323.591 44.3499C325.494 43.7423 326.437 43.4386 328.339 42.831L328.323 42.863Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M340.634 65.9652C340.746 73.0798 344.935 76.2133 349.795 76.4851C353.264 76.677 355.375 76.1174 357.197 75.334C357.533 76.9328 357.693 77.7482 358.029 79.3629C356.318 80.1303 353.392 80.9137 349.139 80.6259C340.922 80.0664 335.998 74.0071 335.998 65.4057C335.998 56.8043 340.746 49.9136 348.532 49.6578C357.245 49.386 359.563 58.1153 359.563 63.7749C359.563 64.926 359.451 65.8054 359.404 66.3809C351.905 66.2051 348.148 66.1251 340.634 65.9812V65.9652ZM354.879 62.336C354.927 58.8347 353.616 53.4309 348.148 53.5268C343.24 53.6228 341.082 58.5629 340.698 62.2081C346.374 62.2561 349.203 62.2721 354.879 62.336Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M187.202 108V89.8182H189.403V106.047H197.855V108H187.202ZM213.196 89.8182H215.398V101.857C215.398 103.099 215.105 104.209 214.519 105.186C213.939 106.156 213.119 106.923 212.06 107.485C211 108.041 209.757 108.32 208.331 108.32C206.905 108.32 205.662 108.041 204.602 107.485C203.543 106.923 202.72 106.156 202.134 105.186C201.554 104.209 201.264 103.099 201.264 101.857V89.8182H203.466V101.679C203.466 102.567 203.661 103.357 204.052 104.049C204.442 104.736 204.999 105.277 205.721 105.674C206.449 106.065 207.319 106.26 208.331 106.26C209.343 106.26 210.213 106.065 210.941 105.674C211.669 105.277 212.225 104.736 212.61 104.049C213.001 103.357 213.196 102.567 213.196 101.679V89.8182ZM219.794 108V89.8182H225.938C227.358 89.8182 228.524 90.0608 229.436 90.5462C230.347 91.0256 231.022 91.6855 231.46 92.5259C231.898 93.3664 232.117 94.3222 232.117 95.3935C232.117 96.4647 231.898 97.4147 231.46 98.2433C231.022 99.0719 230.35 99.7229 229.445 100.196C228.539 100.664 227.382 100.898 225.973 100.898H221.002V98.9091H225.902C226.873 98.9091 227.654 98.767 228.246 98.483C228.844 98.1989 229.276 97.7964 229.542 97.2756C229.815 96.7488 229.951 96.1214 229.951 95.3935C229.951 94.6655 229.815 94.0292 229.542 93.4847C229.27 92.9402 228.835 92.52 228.237 92.2241C227.64 91.9222 226.849 91.7713 225.867 91.7713H221.996V108H219.794ZM228.353 99.8324L232.827 108H230.27L225.867 99.8324H228.353ZM235.786 108V89.8182H246.759V91.7713H237.987V97.9148H246.191V99.8679H237.987V106.047H246.901V108H235.786ZM250.727 89.8182H253.355L259.534 104.911H259.747L265.926 89.8182H268.554V108H266.494V94.1861H266.317L260.635 108H258.646L252.964 94.1861H252.787V108H250.727V89.8182ZM271.406 89.8182H273.927L278.97 98.3054H279.183L284.225 89.8182H286.747L280.177 100.507V108H277.975V100.507L271.406 89.8182Z" fill="#1D1D1B"/>
<path d="M187.202 108H186.702V108.5H187.202V108ZM187.202 89.8182V89.3182H186.702V89.8182H187.202ZM189.403 89.8182H189.903V89.3182H189.403V89.8182ZM189.403 106.047H188.903V106.547H189.403V106.047ZM197.855 106.047H198.355V105.547H197.855V106.047ZM197.855 108V108.5H198.355V108H197.855ZM187.702 108V89.8182H186.702V108H187.702ZM187.202 90.3182H189.403V89.3182H187.202V90.3182ZM188.903 89.8182V106.047H189.903V89.8182H188.903ZM189.403 106.547H197.855V105.547H189.403V106.547ZM197.355 106.047V108H198.355V106.047H197.355ZM197.855 107.5H187.202V108.5H197.855V107.5ZM213.196 89.8182V89.3182H212.696V89.8182H213.196ZM215.398 89.8182H215.898V89.3182H215.398V89.8182ZM214.519 105.186L214.09 104.928L214.09 104.929L214.519 105.186ZM212.06 107.485L212.292 107.928L212.294 107.927L212.06 107.485ZM204.602 107.485L204.368 107.927L204.37 107.928L204.602 107.485ZM202.134 105.186L201.704 105.441L201.706 105.444L202.134 105.186ZM201.264 89.8182V89.3182H200.764V89.8182H201.264ZM203.466 89.8182H203.966V89.3182H203.466V89.8182ZM204.052 104.049L203.616 104.295L203.617 104.297L204.052 104.049ZM205.721 105.674L205.48 106.112L205.484 106.115L205.721 105.674ZM210.941 105.674L211.177 106.115L211.18 106.113L210.941 105.674ZM212.61 104.049L212.175 103.804L212.174 103.805L212.61 104.049ZM213.196 90.3182H215.398V89.3182H213.196V90.3182ZM214.898 89.8182V101.857H215.898V89.8182H214.898ZM214.898 101.857C214.898 103.017 214.625 104.037 214.09 104.928L214.948 105.443C215.584 104.382 215.898 103.182 215.898 101.857H214.898ZM214.09 104.929C213.559 105.817 212.809 106.521 211.825 107.043L212.294 107.927C213.429 107.324 214.318 106.496 214.948 105.442L214.09 104.929ZM211.827 107.042C210.852 107.555 209.692 107.82 208.331 107.82V108.82C209.823 108.82 211.148 108.528 212.292 107.928L211.827 107.042ZM208.331 107.82C206.97 107.82 205.81 107.555 204.835 107.042L204.37 107.928C205.513 108.528 206.839 108.82 208.331 108.82V107.82ZM204.837 107.043C203.852 106.521 203.099 105.816 202.562 104.927L201.706 105.444C202.342 106.497 203.233 107.325 204.368 107.927L204.837 107.043ZM202.564 104.93C202.034 104.038 201.764 103.018 201.764 101.857H200.764C200.764 103.181 201.074 104.38 201.704 105.441L202.564 104.93ZM201.764 101.857V89.8182H200.764V101.857H201.764ZM201.264 90.3182H203.466V89.3182H201.264V90.3182ZM202.966 89.8182V101.679H203.966V89.8182H202.966ZM202.966 101.679C202.966 102.643 203.179 103.519 203.616 104.295L204.487 103.804C204.144 103.195 203.966 102.491 203.966 101.679H202.966ZM203.617 104.297C204.056 105.067 204.681 105.673 205.48 106.112L205.962 105.236C205.317 104.882 204.829 104.405 204.486 103.802L203.617 104.297ZM205.484 106.115C206.3 106.552 207.255 106.76 208.331 106.76V105.76C207.383 105.76 206.598 105.577 205.957 105.233L205.484 106.115ZM208.331 106.76C209.407 106.76 210.362 106.552 211.177 106.115L210.705 105.233C210.064 105.577 209.279 105.76 208.331 105.76V106.76ZM211.18 106.113C211.986 105.674 212.613 105.067 213.046 104.294L212.174 103.805C211.838 104.405 211.352 104.881 210.702 105.235L211.18 106.113ZM213.046 104.295C213.483 103.519 213.696 102.643 213.696 101.679H212.696C212.696 102.491 212.518 103.195 212.175 103.804L213.046 104.295ZM213.696 101.679V89.8182H212.696V101.679H213.696ZM219.794 108H219.294V108.5H219.794V108ZM219.794 89.8182V89.3182H219.294V89.8182H219.794ZM229.436 90.5462L229.201 90.9875L229.203 90.9887L229.436 90.5462ZM231.46 92.5259L231.017 92.757L231.017 92.757L231.46 92.5259ZM231.46 98.2433L231.018 98.0096L231.018 98.0096L231.46 98.2433ZM229.445 100.196L229.674 100.641L229.676 100.639L229.445 100.196ZM221.002 100.898H220.502V101.398H221.002V100.898ZM221.002 98.9091V98.4091H220.502V98.9091H221.002ZM228.246 98.483L228.032 98.0314L228.03 98.0322L228.246 98.483ZM229.542 97.2756L229.098 97.046L229.097 97.0479L229.542 97.2756ZM228.237 92.2241L228.012 92.6704L228.015 92.6722L228.237 92.2241ZM221.996 91.7713V91.2713H221.496V91.7713H221.996ZM221.996 108V108.5H222.496V108H221.996ZM228.353 99.8324L228.791 99.5922L228.649 99.3324H228.353V99.8324ZM232.827 108V108.5H233.671L233.266 107.76L232.827 108ZM230.27 108L229.83 108.237L229.972 108.5H230.27V108ZM225.867 99.8324V99.3324H225.029L225.427 100.07L225.867 99.8324ZM220.294 108V89.8182H219.294V108H220.294ZM219.794 90.3182H225.938V89.3182H219.794V90.3182ZM225.938 90.3182C227.306 90.3182 228.384 90.5524 229.201 90.9875L229.671 90.1048C228.665 89.5693 227.411 89.3182 225.938 89.3182V90.3182ZM229.203 90.9887C230.033 91.425 230.63 92.0147 231.017 92.757L231.903 92.2949C231.414 91.3563 230.662 90.6261 229.669 90.1036L229.203 90.9887ZM231.017 92.757C231.413 93.5172 231.617 94.3921 231.617 95.3935H232.617C232.617 94.2524 232.383 93.2155 231.903 92.2949L231.017 92.757ZM231.617 95.3935C231.617 96.395 231.413 97.2627 231.018 98.0096L231.902 98.4769C232.383 97.5666 232.617 96.5344 232.617 95.3935H231.617ZM231.018 98.0096C230.632 98.7406 230.037 99.3223 229.213 99.7533L229.676 100.639C230.663 100.124 231.412 99.4031 231.902 98.4769L231.018 98.0096ZM229.215 99.7521C228.403 100.172 227.331 100.398 225.973 100.398V101.398C227.433 101.398 228.676 101.156 229.674 100.641L229.215 99.7521ZM225.973 100.398H221.002V101.398H225.973V100.398ZM221.502 100.898V98.9091H220.502V100.898H221.502ZM221.002 99.4091H225.902V98.4091H221.002V99.4091ZM225.902 99.4091C226.915 99.4091 227.779 99.262 228.463 98.9337L228.03 98.0322C227.53 98.2721 226.831 98.4091 225.902 98.4091V99.4091ZM228.461 98.9345C229.144 98.6097 229.665 98.1347 229.988 97.5032L229.097 97.0479C228.887 97.4581 228.544 97.788 228.032 98.0314L228.461 98.9345ZM229.987 97.5051C230.303 96.8931 230.451 96.1834 230.451 95.3935H229.451C229.451 96.0595 229.326 96.6046 229.098 97.046L229.987 97.5051ZM230.451 95.3935C230.451 94.6029 230.303 93.8874 229.99 93.2611L229.095 93.7083C229.327 94.1711 229.451 94.728 229.451 95.3935H230.451ZM229.99 93.2611C229.664 92.6098 229.145 92.1153 228.459 91.776L228.015 92.6722C228.526 92.9247 228.876 93.2706 229.095 93.7083L229.99 93.2611ZM228.463 91.7778C227.77 91.428 226.894 91.2713 225.867 91.2713V92.2713C226.805 92.2713 227.509 92.4164 228.012 92.6704L228.463 91.7778ZM225.867 91.2713H221.996V92.2713H225.867V91.2713ZM221.496 91.7713V108H222.496V91.7713H221.496ZM221.996 107.5H219.794V108.5H221.996V107.5ZM227.914 100.073L232.389 108.24L233.266 107.76L228.791 99.5922L227.914 100.073ZM232.827 107.5H230.27V108.5H232.827V107.5ZM230.71 107.763L226.307 99.5951L225.427 100.07L229.83 108.237L230.71 107.763ZM225.867 100.332H228.353V99.3324H225.867V100.332ZM235.786 108H235.286V108.5H235.786V108ZM235.786 89.8182V89.3182H235.286V89.8182H235.786ZM246.759 89.8182H247.259V89.3182H246.759V89.8182ZM246.759 91.7713V92.2713H247.259V91.7713H246.759ZM237.987 91.7713V91.2713H237.487V91.7713H237.987ZM237.987 97.9148H237.487V98.4148H237.987V97.9148ZM246.191 97.9148H246.691V97.4148H246.191V97.9148ZM246.191 99.8679V100.368H246.691V99.8679H246.191ZM237.987 99.8679V99.3679H237.487V99.8679H237.987ZM237.987 106.047H237.487V106.547H237.987V106.047ZM246.901 106.047H247.401V105.547H246.901V106.047ZM246.901 108V108.5H247.401V108H246.901ZM236.286 108V89.8182H235.286V108H236.286ZM235.786 90.3182H246.759V89.3182H235.786V90.3182ZM246.259 89.8182V91.7713H247.259V89.8182H246.259ZM246.759 91.2713H237.987V92.2713H246.759V91.2713ZM237.487 91.7713V97.9148H238.487V91.7713H237.487ZM237.987 98.4148H246.191V97.4148H237.987V98.4148ZM245.691 97.9148V99.8679H246.691V97.9148H245.691ZM246.191 99.3679H237.987V100.368H246.191V99.3679ZM237.487 99.8679V106.047H238.487V99.8679H237.487ZM237.987 106.547H246.901V105.547H237.987V106.547ZM246.401 106.047V108H247.401V106.047H246.401ZM246.901 107.5H235.786V108.5H246.901V107.5ZM250.727 89.8182V89.3182H250.227V89.8182H250.727ZM253.355 89.8182L253.818 89.6287L253.691 89.3182H253.355V89.8182ZM259.534 104.911L259.071 105.1L259.198 105.411H259.534V104.911ZM259.747 104.911V105.411H260.083L260.21 105.1L259.747 104.911ZM265.926 89.8182V89.3182H265.59L265.463 89.6287L265.926 89.8182ZM268.554 89.8182H269.054V89.3182H268.554V89.8182ZM268.554 108V108.5H269.054V108H268.554ZM266.494 108H265.994V108.5H266.494V108ZM266.494 94.1861H266.994V93.6861H266.494V94.1861ZM266.317 94.1861V93.6861H265.982L265.854 93.9959L266.317 94.1861ZM260.635 108V108.5H260.97L261.097 108.19L260.635 108ZM258.646 108L258.184 108.19L258.311 108.5H258.646V108ZM252.964 94.1861L253.427 93.9959L253.299 93.6861H252.964V94.1861ZM252.787 94.1861V93.6861H252.287V94.1861H252.787ZM252.787 108V108.5H253.287V108H252.787ZM250.727 108H250.227V108.5H250.727V108ZM250.727 90.3182H253.355V89.3182H250.727V90.3182ZM252.892 90.0076L259.071 105.1L259.997 104.721L253.818 89.6287L252.892 90.0076ZM259.534 105.411H259.747V104.411H259.534V105.411ZM260.21 105.1L266.389 90.0076L265.463 89.6287L259.284 104.721L260.21 105.1ZM265.926 90.3182H268.554V89.3182H265.926V90.3182ZM268.054 89.8182V108H269.054V89.8182H268.054ZM268.554 107.5H266.494V108.5H268.554V107.5ZM266.994 108V94.1861H265.994V108H266.994ZM266.494 93.6861H266.317V94.6861H266.494V93.6861ZM265.854 93.9959L260.172 107.81L261.097 108.19L266.779 94.3763L265.854 93.9959ZM260.635 107.5H258.646V108.5H260.635V107.5ZM259.109 107.81L253.427 93.9959L252.502 94.3763L258.184 108.19L259.109 107.81ZM252.964 93.6861H252.787V94.6861H252.964V93.6861ZM252.287 94.1861V108H253.287V94.1861H252.287ZM252.787 107.5H250.727V108.5H252.787V107.5ZM251.227 108V89.8182H250.227V108H251.227ZM271.406 89.8182V89.3182H270.512L270.98 90.08L271.406 89.8182ZM273.927 89.8182L274.357 89.5628L274.212 89.3182H273.927V89.8182ZM278.97 98.3054L278.54 98.5608L278.685 98.8054H278.97V98.3054ZM279.183 98.3054V98.8054H279.467L279.613 98.5608L279.183 98.3054ZM284.225 89.8182V89.3182H283.941L283.796 89.5628L284.225 89.8182ZM286.747 89.8182L287.173 90.08L287.641 89.3182H286.747V89.8182ZM280.177 100.507L279.751 100.245L279.677 100.366V100.507H280.177ZM280.177 108V108.5H280.677V108H280.177ZM277.975 108H277.475V108.5H277.975V108ZM277.975 100.507H278.475V100.366L278.401 100.245L277.975 100.507ZM271.406 90.3182H273.927V89.3182H271.406V90.3182ZM273.497 90.0736L278.54 98.5608L279.4 98.05L274.357 89.5628L273.497 90.0736ZM278.97 98.8054H279.183V97.8054H278.97V98.8054ZM279.613 98.5608L284.655 90.0736L283.796 89.5628L278.753 98.05L279.613 98.5608ZM284.225 90.3182H286.747V89.3182H284.225V90.3182ZM286.321 89.5564L279.751 100.245L280.603 100.769L287.173 90.08L286.321 89.5564ZM279.677 100.507V108H280.677V100.507H279.677ZM280.177 107.5H277.975V108.5H280.177V107.5ZM278.475 108V100.507H277.475V108H278.475ZM278.401 100.245L271.832 89.5564L270.98 90.08L277.549 100.769L278.401 100.245Z" fill="#1D1D1B"/>
<path d="M122.258 90.3536L123.905 95.3898H129.197L124.912 98.4914L126.543 103.527L122.258 100.426L117.973 103.527L119.62 98.4914L115.335 95.3898H120.627L122.258 90.3536Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M146.08 90.3536L147.711 95.3898H153.002L148.718 98.4914L150.364 103.527L146.08 100.426L141.795 103.527L143.426 98.4914L139.141 95.3898H144.433L146.08 90.3536Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M169.886 90.3536L171.516 95.3898H176.824L172.54 98.4914L174.17 103.527L169.886 100.426L165.601 103.527L167.248 98.4914L162.963 95.3898H168.255L169.886 90.3536Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M300.792 89.6822L302.439 94.7023H307.731L303.446 97.8199L305.077 102.856L300.792 99.7384L296.524 102.856L298.154 97.8199L293.87 94.7023H299.162L300.792 89.6822Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M324.614 89.6822L326.245 94.7023H331.537L327.252 97.8199L328.899 102.856L324.614 99.7384L320.33 102.856L321.96 97.8199L317.676 94.7023H322.968L324.614 89.6822Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M348.42 89.6822L350.066 94.7023H355.358L351.074 97.8199L352.704 102.856L348.42 99.7384L344.135 102.856L345.782 97.8199L341.497 94.7023H346.789L348.42 89.6822Z" fill="#1D1D1B" stroke="#1D1D1B" strokeMiterlimit="10"/>
<path d="M29.3375 122.418L30.9842 127.214H36.3081L32.0074 130.188L33.6541 135L29.3375 132.026L25.0368 135L26.6835 130.188L22.3828 127.214H27.7067L29.3375 122.418Z" fill="#1D1D1B"/>
<path d="M53.2709 122.418L54.9177 127.214H60.2256L55.9249 130.188L57.5716 135L53.2709 132.026L48.9702 135L50.601 130.188L46.3003 127.214H51.6242L53.2709 122.418Z" fill="#1D1D1B"/>
<path d="M77.189 122.418L78.8358 127.214H84.1437L79.843 130.188L81.4897 135L77.189 132.026L72.8883 135L74.5351 130.188L70.2344 127.214H75.5423L77.189 122.418Z" fill="#1D1D1B"/>
<path d="M29.3375 0L30.9842 4.81229H36.3081L32.0074 7.77001L33.6541 12.5823L29.3375 9.6086L25.0368 12.5823L26.6835 7.77001L22.3828 4.81229H27.7067L29.3375 0Z" fill="#1D1D1B"/>
<path d="M53.2709 0L54.9177 4.81229H60.2256L55.9249 7.77001L57.5716 12.5823L53.2709 9.6086L48.9702 12.5823L50.601 7.77001L46.3003 4.81229H51.6242L53.2709 0Z" fill="#1D1D1B"/>
<path d="M77.189 0L78.8358 4.81229H84.1437L79.843 7.77001L81.4897 12.5823L77.189 9.6086L72.8883 12.5823L74.5351 7.77001L70.2344 4.81229H75.5423L77.189 0Z" fill="#1D1D1B"/>
</svg>

          </h1>
          {dataFooter.map((data) => (
            <div key={data.id} className="">
              <Link href={data.link} className="hover:underline mt-2">
                <div className="text-[16px] font-bold text-gray-700 dark:text-gray-300">
                  {data.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <Separator className="my-6 bg-slate-800 border-slate-950 sm:mx-auto dark:border-white lg:my-4" /> */}
        <div className="flex max-md:flex-col py-4 gap-4 sm:py-0 justify-between items-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024 <Link href="#"></Link> Todos los derechos reservados.
          </span>
          <div className="flex gap-4 ">
            <a
              href="https://www.facebook.com/tu_cuenta"
              className="text-2xl text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/tu_cuenta"
              className="text-2xl text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@tu_cuenta"
              className="text-2xl text-black dark:text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/tu_cuenta"
              className="text-2xl text-red-600"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
