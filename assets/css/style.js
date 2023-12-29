let showMenu = false;
function toggleMenu() {
  if (!showMenu) {
    document.getElementById('nav').style.display = 'flex';
    document.getElementById('nav-overlay').style.display = 'block';
    document.getElementById('nav').style.transform = 'translateX(0%)';
    showMenu = true;
  } else {
    document.getElementById('nav').style.display = 'none';
    document.getElementById('nav-overlay').style.display = 'none';
    showMenu = false;
  }
}

function product(a) {
  localStorage.setItem('selectedProduct', a.value);
  window.location = "http://127.0.0.1:5500/product.html";
}

const images = [
    "/assets/imgs/slider/slide-1.png",
    "/assets/imgs/slider/slide-2.png",
    "/assets/imgs/slider/slide-3.png"
  ]; // Danh sách các URL ảnh muốn thay đổi
  
  let currentImageIndex = 0;
  
  function changeImage() {
    if(currentImageIndex != 2){
        document.getElementById('slide').src = images[currentImageIndex++];
    }else{
        document.getElementById('slide').src = images[currentImageIndex];
        currentImageIndex = 0;
    }
  }
   
setInterval(changeImage, 3000);

let sizes = new Array(46); // Tạo một mảng với 46 phần tử
for (let i = 35; i <= 45; i++) {
  sizes[i] = false;
}

function changeboder(button) {
  if(!sizes[button.value]){
    button.style.border = "1px solid black";
    sizes[button.value] = true;
  }
  else{
    button.style.border = "1px solid #cccc";
    sizes[button.value] = false;
  }
}

function changeimg (img){
  document.getElementById('main-img').src = img.src;
}

const NI3 = new Array(14);
  NI3[0] = "Nike Invincible 3"
  NI3[1] = "Women's Road Running Shoes"
  NI3[2] = "5,279,000"
  NI3[11] = "Nike Invincible 3"
  NI3[12] = "Women's Road Running Shoes"
  NI3[13] = "5,279,000"

const NI4 = new Array(14);
  NI4[0] = "Nike InfinityRN 4 GORE-TEX"
  NI4[1] = "Women's Waterproof Road Running Shoes"
  NI4[2] = "5,279,000"
  NI4[11] = NI4[0];
  NI4[12] = NI4[1];
  NI4[13] = NI4[2];

const NS25 = new Array(14);
  NS25[0] = "Nike Structure 25"
  NS25[1] = "Men's Road Running Shoes"
  NS25[2] = "3,254,649"
  NS25[11] = NS25[0];
  NS25[12] = NS25[1];
  NS25[13] = NS25[2];

for (let i = 3; i < 11; i++) {
  NI3[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NI3/NI3-" + i + ".png";
  NI4[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NI4/NI4-" + i + ".png";
  NS25[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NS25/NS25-" + i + ".png";
  
}


const Web = new Array();
Web[0] = NI3;
Web[1] = NI4;
Web[2] = NS25;



const NDL = new Array(14);
  NDL[0] = "Nike Structure 25"
  NDL[1] = "Men's Road Running Shoes"
  NDL[2] = "3,254,649"
  NDL[11] = NDL[0];
  NDL[12] = NDL[1];
  NDL[13] = NDL[2];

const AJ1LS = new Array(14);
  AJ1LS[0] = "Air Jordan 1 Low SE"
  AJ1LS[1] = "Men's Road Running Shoes"
  AJ1LS[2] = "3,369,000"
  AJ1LS[11] = AJ1LS[0];
  AJ1LS[12] = AJ1LS[1];
  AJ1LS[13] = AJ1LS[2];

const NAF1 = new Array(14);
  NAF1[0] = "Nike Air Force 1 '07 EasyOn"
  NAF1[1] = "Women's Shoes"
  NAF1[2] = "3,239,000"
  NAF1[11] = NAF1[0];
  NAF1[12] = NAF1[1];
  NAF1[13] = NAF1[2];

const NAF107 = new Array(14);
  NAF107[0] = "Nike Air Force 1 '07 NN"
  NAF107[1] = "Women's Shoes"
  NAF107[2] = "3,239,000"
  NAF107[11] = NAF107[0];
  NAF107[12] = NAF107[1];
  NAF107[13] = NAF107[2];

const NDLT = new Array(14);
  NDLT[0] = "Nike Dunk Low Twist"
  NDLT[1] = "Women's Shoes"
  NDLT[2] = "2,753,149"
  NDLT[11] = NDLT[0];
  NDLT[12] = NDLT[1];
  NDLT[13] = NDLT[2];

const NAF1S = new Array(14);
  NAF1S[0] = "Nike Air Force 1 Shadow"
  NAF1S[1] = "Women's Shoes"
  NAF1S[2] = "3,829,000"
  NAF1S[11] = NAF1S[0];
  NAF1S[12] = NAF1S[1];
  NAF1S[13] = NAF1S[2];

const NAME = new Array(14);
  NAME[0] = "Nike Air Max Excee"
  NAME[1] = "Women's Shoes"
  NAME[2] = "2,649,000"
  NAME[11] = NAME[0];
  NAME[12] = NAME[1];
  NAME[13] = NAME[2];

const NDLtim = new Array(14);
  NDLtim[0] = "Nike Dunk Low"
  NDLtim[1] = "Women's Shoes"
  NDLtim[2] = "2,929,000"
  NDLtim[11] = NDLtim[0];
  NDLtim[12] = NDLtim[1];
  NDLtim[13] = NDLtim[2];

const NS58 = new Array(14);
  NS58[0] = "Nike SB Force 58 Premium"
  NS58[1] = "Women's Shoes"
  NS58[2] = "1,996,649"
  NS58[11] = NS58[0];
  NS58[12] = NS58[1];
  NS58[13] = NS58[2];

  const NCLNN = new Array(14);
  NCLNN[0] = "NikeCourt Legacy Next Nature"
  NCLNN[1] = "Women's Shoes"
  NCLNN[2] = "2,069,000"
  NCLNN[11] = NCLNN[0];
  NCLNN[12] = NCLNN[1];
  NCLNN[13] = NCLNN[2];

  const NAM97 = new Array(14);
  NAM97[0] = "Nike Air Max 97 Futura SE"
  NAM97[1] = "Women's Shoes"
  NAM97[2] = "5,589,000"
  NAM97[11] = NAM97[0];
  NAM97[12] = NAM97[1];
  NAM97[13] = NAM97[2];

  const AJ1E = new Array(14);
  AJ1E[0] = "Air Jordan 1 Elevate Low"
  AJ1E[1] = "Women's Shoes"
  AJ1E[2] = "3,254,649"
  AJ1E[11] = AJ1E[0];
  AJ1E[12] = AJ1E[1];
  AJ1E[13] = AJ1E[2];

  const NAMD = new Array(14);
  NAMD[0] = "Nike Air Max Dawn"
  NAMD[1] = "Women's Shoes"
  NAMD[2] = "3,519,000"
  NAMD[11] = NAMD[0];
  NAMD[12] = NAMD[1];
  NAMD[13] = NAMD[2];

const NWOV = new Array(14);
  NWOV[0] = "Nike Waffle One Vintage"
  NWOV[1] = "Women's Shoes"
  NWOV[2] = "2,753,149"
  NWOV[11] = NWOV[0];
  NWOV[12] = NWOV[1];
  NWOV[13] = NWOV[2];



for (let i = 3; i < 11; i++) {
  NDL[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NDL/NDL-" + i + ".png";
  AJ1LS[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/AJ1LS/AJ1LS-" + i + ".png";
  NAF1[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAF1/NAF1-" + i + ".png";
  NAF107[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAF107/NAF107-" + i + ".png";
  NDLT[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NDLT/NDLT-" + i + ".png";
  NAF1S[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAF1S/NAF1S-" + i + ".png";
  NAME[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAME/NAME-" + i + ".png";
  NDLtim[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NDLtim/NDLtim-" + i + ".png";
  NS58[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NS58/NS58-" + i + ".png";
  NCLNN[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NCLNN/NCLNN-" + i + ".png";
  NAM97[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAM97/NAM97-" + i + ".png";
  AJ1E[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/AJ1E/AJ1E-" + i + ".png";
  NAMD[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NAMD/NAMD-" + i + ".png";
  NWOV[i] = "assets/imgs/chi-tiet-san-pham/WomenShoes/NWOV/NWOV-" + i + ".png";
}


const Women = new Array();
Women[0] = NDL;
Women[1] = AJ1LS;
Women[2] = NAF1;
Women[3] = NAF107;
Women[4] = NDLT;
Women[5] = NAF1S;
Women[6] = NAME;
Women[7] = NDLtim;
Women[8] = NS58;
Women[9] = NCLNN;
Women[10] = NAM97;
Women[11] = AJ1E;
Women[12] = NAMD;
Women[13] = NWOV;



const AJ1LMS = new Array(14);
  AJ1LMS[0] = "Nike Waffle One Vintage"
  AJ1LMS[1] = "Men's shoes"
  AJ1LMS[2] = "2,929,000"
  AJ1LMS[11] = AJ1LMS[0];
  AJ1LMS[12] = AJ1LMS[1];
  AJ1LMS[13] = AJ1LMS[2];

  const AJ1LSEMS = new Array(14);
  AJ1LSEMS[0] = "Air Jordan 1 Low SE"
  AJ1LSEMS[1] = "Basketball Shoes"
  AJ1LSEMS[2] = "4,109,000"
  AJ1LSEMS[11] = AJ1LSEMS[0];
  AJ1LSEMS[12] = AJ1LSEMS[1];
  AJ1LSEMS[13] = AJ1LSEMS[2];

  const CU3MS = new Array(14);
  CU3MS[0] = "Nike Full Force LowE"
  CU3MS[1] = "Men's shoes"
  CU3MS[2] = "2,649,000"
  CU3MS[11] = CU3MS[0];
  CU3MS[12] = CU3MS[1];
  CU3MS[13] = CU3MS[2];

  const NAF1071MS = new Array(14);
  NAF1071MS[0] = "Nike Air Max Solo"
  NAF1071MS[1] = "Men's shoes"
  NAF1071MS[2] = "2,929,000"
  NAF1071MS[11] = NAF1071MS[0];
  NAF1071MS[12] = NAF1071MS[1];
  NAF1071MS[13] = NAF1071MS[2];

  const NAM90MS = new Array(14);
  NAM90MS[0] = "Giannis Immortality 3"
  NAM90MS[1] = "Men's shoes"
  NAM90MS[2] = "2,349,000"
  NAM90MS[11] = NAM90MS[0];
  NAM90MS[12] = NAM90MS[1];
  NAM90MS[13] = NAM90MS[2];

  const NAM971MS = new Array(14);
  NAM971MS[0] = "Nike Waffle Debut"
  NAM971MS[1] = "Men's shoes"
  NAM971MS[2] = "2,189,000"
  NAM971MS[11] = NAM971MS[0];
  NAM971MS[12] = NAM971MS[1];
  NAM971MS[13] = NAM971MS[2];

  const NAMSMS = new Array(14);
  NAMSMS[0] = "Air Jordan 1 Low"
  NAMSMS[1] = "Men's shoes"
  NAMSMS[2] = "3,239,000"
  NAMSMS[11] = NAMSMS[0];
  NAMSMS[12] = NAMSMS[1];
  NAMSMS[13] = NAMSMS[2];


  const NCVLNNMS = new Array(14);
  NCVLNNMS[0] = "Nike Court Vision Low Next Nature"
  NCVLNNMS[1] = "Men's shoes"
  NCVLNNMS[2] = "1,909,000"
  NCVLNNMS[11] = NCVLNNMS[0];
  NCVLNNMS[12] = NCVLNNMS[1];
  NCVLNNMS[13] = NCVLNNMS[2];

  

  const GI3EPMS = new Array(14);
  GI3EPMS[0] = "Nike Low Next Nature"
  GI3EPMS[1] = "Men's shoes"
  GI3EPMS[2] = "2,909,000"
  GI3EPMS[11] = GI3EPMS[0];
  GI3EPMS[12] = GI3EPMS[1];
  GI3EPMS[13] = GI3EPMS[2];

  const NDLMS = new Array(14);
  NDLMS[0] = "Sabrina 1 'Spark' EP"
  NDLMS[1] = "Men's shoes"
  NDLMS[2] = "3,519,000"
  NDLMS[11] = NDLMS[0];
  NDLMS[12] = NDLMS[1];
  NDLMS[13] = NDLMS[2];

  const NDLRPMS = new Array(14);
  NDLRPMS[0] = "Cosmic Unity 3"
  NDLRPMS[1] = "Men's shoes"
  NDLRPMS[2] = "4,409,000"
  NDLRPMS[11] = NDLRPMS[0];
  NDLRPMS[12] = NDLRPMS[1];
  NDLRPMS[13] = NDLRPMS[2];

  const NFFLMS = new Array(14);
  NFFLMS[0] = "Nike Air Max 97"
  NFFLMS[1] = "Men's shoes"
  NFFLMS[2] = "4,699,000"
  NFFLMS[11] = NFFLMS[0];
  NFFLMS[12] = NFFLMS[1];
  NFFLMS[13] = NFFLMS[2];

  const NWDMS = new Array(14);
  NWDMS[0] = "Nike Dunk Low "
  NWDMS[1] = "Men's shoes"
  NWDMS[2] = "2,489,649"
  NWDMS[11] = NWDMS[0];
  NWDMS[12] = NWDMS[1];
  NWDMS[13] = NWDMS[2];

  const S1SEPMS = new Array(14);
  S1SEPMS[0] = "Nike Dunk Low "
  S1SEPMS[1] = "Men's shoes"
  S1SEPMS[2] = "2,489,649"
  S1SEPMS[11] = S1SEPMS[0];
  S1SEPMS[12] = S1SEPMS[1];
  S1SEPMS[13] = S1SEPMS[2];

  const SC3FEMS = new Array(14);
  SC3FEMS[0] = "Nike Dunk Low "
  SC3FEMS[1] = "Men's shoes"
  SC3FEMS[2] = "2,489,649"
  SC3FEMS[11] = SC3FEMS[0];
  SC3FEMS[12] = SC3FEMS[1];
  SC3FEMS[13] = SC3FEMS[2];


for(let i = 3; i < 11; i++){
  AJ1LMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/AJ1L/AJ1L-" + i + ".png";
  AJ1LSEMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/AJ1LSE/AJ1LSE-" + i + ".png";
  CU3MS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/CU3/CU3-" + i + ".png";
  GI3EPMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/GI3EP/GI3EP-" + i + ".png";
  NAF1071MS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NAF107/NAF107-" + i + ".png";
  NAM90MS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NAM90/NAM90-" + i + ".png";
  NAM971MS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NAM97/NAM97-" + i + ".png";
  NAMSMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NAMS/NAMS-" + i + ".png";
  NCVLNNMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NCVLNN/NCVLNN-" + i + ".png";
  NDLMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NDL/NDL-" + i + ".png";
  NDLRPMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NDLRP/NDLRP-" + i + ".png";
  NFFLMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NFFL/NFFL-" + i + ".png";
  NWDMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/NWD/NWD-" + i + ".png";
  S1SEPMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/S1SEP/S1SEP-" + i + ".png";
  SC3FEMS[i] = "assets/imgs/chi-tiet-san-pham/MenShoes/SC3FE/SC3FE-" + i + ".png";
}

const Men = new Array();

Men[0] = AJ1LMS;
Men[1] = AJ1LSEMS;
Men[2] = CU3MS;
Men[3] = GI3EPMS;
Men[4] = NAF1071MS;
Men[5] = NAM90MS;
Men[6] = NAM971MS;
Men[7] = NAMSMS;
Men[8] = NCVLNNMS;
Men[9] = NDLMS;
Men[10] = NDLRPMS;
Men[11] = NFFLMS;
Men[12] = NWDMS;
Men[13] = SC3FEMS;
Men[14] = S1SEPMS;


const J1AKS = new Array(14);
  J1AKS[0] = "Jordan 23/7"
  J1AKS[1] = "Baby/Toddler Shoes"
  J1AKS[2] = "1,399,000"
  J1AKS[11] = J1AKS[0];
  J1AKS[12] = J1AKS[1];
  J1AKS[13] = J1AKS[2];

  const J1LAKS = new Array(14);
  J1LAKS[0] = "Jordan 1 Low Alt"
  J1LAKS[1] = "Baby/Toddler Shoes"
  J1LAKS[2] = "1,399,000"
  J1LAKS[11] = J1LAKS[0];
  J1LAKS[12] = J1LAKS[1];
  J1LAKS[13] = J1LAKS[2];

  const J1LASEKS = new Array(14);
  J1LASEKS[0] = "Jordan 1 Low Alt"
  J1LASEKS[1] = "Baby/Toddler Shoes"
  J1LASEKS[2] = "1,399,000"
  J1LASEKS[11] = J1LASEKS[0];
  J1LASEKS[12] = J1LASEKS[1];
  J1LASEKS[13] = J1LASEKS[2];

  const JA1LKS = new Array(14);
  JA1LKS[0] = "Nike Air Max 1"
  JA1LKS[1] = "Baby/Toddler Shoes"
  JA1LKS[2] = "2,809,000"
  JA1LKS[11] = JA1LKS[0];
  JA1LKS[12] = JA1LKS[1];
  JA1LKS[13] = JA1LKS[2];

  const JD27KS = new Array(14);
  JD27KS[0] = "Nike Air Max 90 LTR"
  JD27KS[1] = "Baby/Toddler Shoes"
  JD27KS[2] = "2,549,000"
  JD27KS[11] = JD27KS[0];
  JD27KS[12] = JD27KS[1];
  JD27KS[13] = JD27KS[2];

  const JNR1LKS = new Array(14);
  JNR1LKS[0] = "Nike Dunk Low SE"
  JNR1LKS[1] = "Baby/Toddler Shoes"
  JNR1LKS[2] = "2,679,000"
  JNR1LKS[11] = JNR1LKS[0];
  JNR1LKS[12] = JNR1LKS[1];
  JNR1LKS[13] = JNR1LKS[2];

  const JO1LAKS = new Array(14);
  JO1LAKS[0] = "Nike Blazer Low '77"
  JO1LAKS[1] = "Baby/Toddler Shoes"
  JO1LAKS[2] = "1,659,000"
  JO1LAKS[11] = JO1LAKS[0];
  JO1LAKS[12] = JO1LAKS[1];
  JO1LAKS[13] = JO1LAKS[2];

  const NAF1KS = new Array(14);
  NAF1KS[0] = "Nike Air Force 1 LV8"
  NAF1KS[1] = "Baby/Toddler Shoes"
  NAF1KS[2] = "2,679,000"
  NAF1KS[11] = NAF1KS[0];
  NAF1KS[12] = NAF1KS[1];
  NAF1KS[13] = NAF1KS[2];

  const NAF1LEKS = new Array(14);
  NAF1LEKS[0] = "Jordan 1 Mid Alt"
  NAF1LEKS[1] = "Baby/Toddler Shoes"
  NAF1LEKS[2] = "1,909,000"
  NAF1LEKS[11] = NAF1LEKS[0];
  NAF1LEKS[12] = NAF1LEKS[1];
  NAF1LEKS[13] = NAF1LEKS[2];

  const NAM1KS = new Array(14);
  NAM1KS[0] = "Nike Air More Uptempo"
  NAM1KS[1] = "Baby/Toddler Shoes"
  NAM1KS[2] = "3,569,000"
  NAM1KS[11] = NAM1KS[0];
  NAM1KS[12] = NAM1KS[1];
  NAM1KS[13] = NAM1KS[2];

  const NAM90KS = new Array(14);
  NAM90KS[0] = "Nike Air Force 1 LE"
  NAM90KS[1] = "Baby/Toddler Shoes"
  NAM90KS[2] = "2,419,000"
  NAM90KS[11] = NAM90KS[0];
  NAM90KS[12] = NAM90KS[1];
  NAM90KS[13] = NAM90KS[2];

  const NAMUKS = new Array(14);
  NAMUKS[0] = "Nike Dunk High"
  NAMUKS[1] = "Baby/Toddler Shoes"
  NAMUKS[2] = "2,549,000"
  NAMUKS[11] = NAMUKS[0];
  NAMUKS[12] = NAMUKS[1];
  NAMUKS[13] = NAMUKS[2];

  const NBL77KS = new Array(14);
  NBL77KS[0] = "Air Jordan 1 Low"
  NBL77KS[1] = "Baby/Toddler Shoes"
  NBL77KS[2] = "2,549,000"
  NBL77KS[11] = NBL77KS[0];
  NBL77KS[12] = NBL77KS[1];
  NBL77KS[13] = NBL77KS[2];

  const NDHKS = new Array(14);
  NDHKS[0] = "Jordan 1 Low Alt"
  NDHKS[1] = "Baby/Toddler Shoes"
  NDHKS[2] = "1,659,000"
  NDHKS[11] = NDHKS[0];
  NDHKS[12] = NDHKS[1];
  NDHKS[13] = NDHKS[2];

  const NDLSEKS = new Array(14);
  NDLSEKS[0] = "Jordan Nu Retro 1 Low"
  NDLSEKS[1] = "Baby/Toddler Shoes"
  NDLSEKS[2] = "2,299,000"
  NDLSEKS[11] = NDLSEKS[0];
  NDLSEKS[12] = NDLSEKS[1];
  NDLSEKS[13] = NDLSEKS[2];

for (let i = 3; i < 11; i++) {
  J1AKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/J1A/J1A-" + i + ".png";
  J1LAKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/J1LA/J1LA-" + i + ".png"; 
  J1LASEKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/J1LASE/J1LASE-" + i + ".png"; 
  JA1LKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/JA1L/JA1L-" + i + ".png"; 
  JD27KS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/JD27/JD27-" + i + ".png"; 
  JNR1LKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/JNR1L/JNR1L-" + i + ".png"; 
  JO1LAKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/JO1LA/JO1LA-" + i + ".png"; 
  NAF1KS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NAF1/NAF1-" + i + ".png"; 
  NAF1LEKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NAF1LE/NAF1LE-" + i + ".png"; 
  NAM1KS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NAM1/NAM1-" + i + ".png"; 
  NAM90KS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NAM90/NAM90-" + i + ".png"; 
  NAMUKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NAMU/NAMU-" + i + ".png"; 
  NBL77KS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NBL77/NBL77-" + i + ".png"; 
  NDHKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NDH/NDH-" + i + ".png"; 
  NDLSEKS[i] = "assets/imgs/chi-tiet-san-pham/KidsShoes/NDLSE/NDLSE-" + i + ".png"; 
}


const Kids = new Array();
Kids[0] = J1AKS;
Kids[1] = J1LAKS;
Kids[2] = J1LASEKS;
Kids[3] = JA1LKS;
Kids[4] = JD27KS;
Kids[5] = JNR1LKS;
Kids[6] = JO1LAKS;
Kids[7] = NAF1KS;
Kids[8] = NAF1LEKS;
Kids[9] = NAM1KS;
Kids[10] = NAM90KS;
Kids[11] = NAMUKS;
Kids[12] = NBL77KS;
Kids[13] = NDHKS;
Kids[14] = NDLSEKS;




