const CONTAINER = document.querySelector('.container');



function makeHeader() {
  //header
  const header = document.createElement('div');
  header.classList.add('header');

  //logo-box
  const headerLogoBox = document.createElement('div');
  headerLogoBox.classList.add('header-logo-box');

    //header-logo
  const headerLogoAtag = document.createElement('a');
  headerLogoAtag.setAttribute('href', `#`);

  const headerLogo = document.createElement('img');
  headerLogo.setAttribute('src', `logo/logo_4.png`);
  headerLogo.classList.add('header-logo');

  headerLogoAtag.append(headerLogo);

  headerLogoBox.append(headerLogoAtag);

  // header-nav-box
  const headerNavBox = document.createElement('ul');
  headerNavBox.classList.add('header-nav-box');

    //header-nav-items1
  const headerNavItems1 = document.createElement('li');
  headerNavItems1.classList.add('header-nav-items');

    //home a tag
  const headerNavItemsHome = document.createElement('a')
  headerNavItemsHome.setAttribute('href', `#`);
  headerNavItemsHome.textContent = navItemData[0];
  headerNavItemsHome.classList.add('nav-target');

  headerNavItems1.append(headerNavItemsHome);

    //header-nav-items2
  const headerNavItems2 = document.createElement('li');
  headerNavItems2.classList.add('header-nav-items');
  
      //home a tag
  const headerNavItemsAboutUs = document.createElement('a')
  headerNavItemsAboutUs.setAttribute('href', `#`);
  headerNavItemsAboutUs.textContent = navItemData[1];
  headerNavItemsAboutUs.classList.add('nav-target');

  headerNavItems2.append(headerNavItemsAboutUs);

    //header-nav-items3
  const headerNavItems3 = document.createElement('li');
  headerNavItems3.classList.add('header-nav-items');

    //home a tag
  const headerNavItemsContactUs = document.createElement('a')
  headerNavItemsContactUs.setAttribute('href', `#`);
  headerNavItemsContactUs.textContent = navItemData[2];
  headerNavItemsContactUs.classList.add('nav-target');

  headerNavItems3.append(headerNavItemsContactUs);


  headerNavBox.append(headerNavItems1, headerNavItems2, headerNavItems3);

  header.append(headerLogoBox, headerNavBox);

  return CONTAINER.append(header);
}



function makeHome() {
  //home-main
  const homeMain = document.createElement('div');
  homeMain.classList.add('home-main');

  //main-text
  const mainText = document.createElement('div');
  mainText.classList.add('main-text');

  const mainTextVerse = document.createElement('div');
  mainTextVerse.classList.add('main-text-verse');
  mainTextVerse.textContent = homeData.textVerse;

  const mainTextTitle = document.createElement('div');
  mainTextTitle.classList.add('main-text-title');
  mainTextTitle.textContent = homeData.textTitle;

  mainText.append(mainTextVerse, mainTextTitle);

  //main-banner
  const mainBanner = document.createElement('div');
  mainBanner.classList.add('main-banner');

  const mainBannerImage = document.createElement('img');
  mainBannerImage.setAttribute('src', 'images/banner.png');
  mainBannerImage.classList.add('main-banner-image');

  mainBanner.append(mainBannerImage);
  homeMain.append(mainText, mainBanner);

  let HEADER = document.querySelector('.header');

  return HEADER.after(homeMain);
}



function makeAboutUs() {
  //about-main
  const aboutMain = document.createElement('div');
  aboutMain.classList.add('about-main');

  //about-main-container
  const aboutMainContainer = document.createElement('div');
  aboutMainContainer.classList.add('about-main-container');

  //about-text
  const aboutText = document.createElement('div');
  aboutText.classList.add('about-text');

  const aboutWord1 = document.createElement('div');
  aboutWord1.textContent = `선교단체`;
  const aboutWord2 = document.createElement('div');
  aboutWord2.textContent = `라이트 하우스`;

  aboutText.append(aboutWord1, aboutWord2);

  //about-content-box
  const aboutContentBox = document.createElement('div');
  aboutContentBox.classList.add('about-content-box');

  //about-content1
  const aboutContent1 = document.createElement('div');
  aboutContent1.classList.add('about-content')

  const aboutContentText1 = document.createElement('div');
  aboutContentText1.classList.add('about-content-text');

  const aboutContentImage1 = document.createElement('img');
  aboutContentImage1.setAttribute('src', 'images/happy-children.jpeg');
  aboutContentImage1.classList.add('about-content-image');

  const aboutContentTitle1 = document.createElement('div');
  aboutContentTitle1.classList.add('about-content-title');
  aboutContentTitle1.textContent = `ABOUT OUR`

  const aboutContentWord1 = document.createElement('div');
  aboutContentWord1.classList.add('about-content-word');
  aboutContentWord1.textContent = `국내,외 선교활동 ~`

  aboutContentText1.append(aboutContentTitle1, aboutContentWord1);
  aboutContent1.append(aboutContentText1, aboutContentImage1);

  //about-content2
  const aboutContent2 = document.createElement('div');
  aboutContent2.classList.add('about-content')

  const aboutContentText2 = document.createElement('div');
  aboutContentText2.classList.add('about-content-text');

  const aboutContentImage2 = document.createElement('img');
  aboutContentImage2.setAttribute('src', 'images/worship.jpeg');
  aboutContentImage2.classList.add('about-content-image');

  const aboutContentTitle2 = document.createElement('div');
  aboutContentTitle2.classList.add('about-content-title');
  aboutContentTitle2.textCont일nt = `OUR VISION`

  const aboutContentWord2 = document.createElement('div');
  aboutContentWord2.classList.add('about-content-word');
  aboutContentWord2.textContent = `라이트 하우스가 하는 일`

  aboutContentText2.append(aboutContentTitle2, aboutContentWord2);

  aboutContent2.append(aboutContentImage2, aboutContentText2);


  //about-content3
  const aboutContent3 = document.createElement('div');
  aboutContent3.classList.add('about-content')

  const aboutContentText3 = document.createElement('div');
  aboutContentText3.classList.add('about-content-text');

  const aboutContentTitle3 = document.createElement('div');
  aboutContentTitle3.classList.add('about-content-title');
  aboutContentTitle3.textContent = `LIGHT HOUSE`

  const aboutContentWord3 = document.createElement('div');
  aboutContentWord3.classList.add('about-content-word');
  aboutContentWord3.textContent = `대표님의 한말씀`
  aboutContentText3.append(aboutContentTitle3, aboutContentWord3);

  const aboutContentImage3 = document.createElement('img');
  aboutContentImage3.setAttribute('src', 'images/cross.jpeg');
  aboutContentImage3.classList.add('about-content-image');

  aboutContent3.append(aboutContentText3, aboutContentImage3);

  aboutContentBox.append(aboutContent1, aboutContent2, aboutContent3);

  aboutMainContainer.append(aboutText, aboutContentBox)

  aboutMain.append(aboutMainContainer);

  let HEADER = document.querySelector('.header');

  return HEADER.after(aboutMain);

}



function makeContactUs() {
  //contact-main
  const contactMain = document.createElement('div');
  contactMain.classList.add('contact-main');

  //contact-title
  const contactTitle = document.createElement('div');
  contactTitle.classList.add('contact-title');
  contactTitle.textContent = `CONTACT US`


  //contact-text
  const contactText = document.createElement('div');
  contactText.classList.add('contact-text');
  contactText.textContent = `SNS에서 라이트 하우스를 만나보세요.`
  
  //contact-sns-icons
  const contactSnsIcons = document.createElement('div');
  contactSnsIcons.classList.add('contact-sns-icons');

  //insta a 태그
  const instaIcon = document.createElement('a');
  instaIcon.setAttribute('href', snsData.insta);
  instaIcon.setAttribute('target', "_blank");

  //insta i태그
  const instaImg = document.createElement('i');
  instaImg.classList.add('fab', 'fa-instagram', 'fa-4x', 'contact-sns-icon');


  //youtube a태그
  const youtubeIcon = document.createElement('a');
  youtubeIcon.setAttribute('href', snsData.youtube);
  youtubeIcon.setAttribute('target', "_blank");

  //youtube i태그
  const youtubeImg = document.createElement('i');
  youtubeImg.classList.add('fab', 'fa-youtube', 'fa-4x', 'contact-sns-icon');

  instaIcon.append(instaImg);
  youtubeIcon.append(youtubeImg);

  contactSnsIcons.append(instaIcon, youtubeIcon);

  contactMain.append(contactTitle, contactText, contactSnsIcons);

  let HEADER = document.querySelector('.header')
  return HEADER.after(contactMain);


}


function makeFooter() {
  //footer
  const footer = document.createElement('div');
  footer.classList.add('footer');

  //footer-sns-icons
  const footerSnsIcons = document.createElement('li');
  footerSnsIcons.classList.add('footer-sns-icons');

    //insta a & i tag
  const footerInstaA = document.createElement('a');
  footerInstaA.setAttribute('href', snsData.insta)
  footerInstaA.setAttribute('target', '_blank')

  const footerInstaI = document.createElement('i');
  footerInstaI.classList.add('fab', 'fa-instagram', 'footer-sns-icon');

    //youtube a & i tag
  const footerYoutubeA = document.createElement('a');
  footerYoutubeA.setAttribute('href', snsData.youtube)
  footerYoutubeA.setAttribute('target', '_blank')

  const footerYoutubeI = document.createElement('i');
  footerYoutubeI.classList.add('fab', 'fa-youtube', 'footer-sns-icon');
  
  footerInstaA.append(footerInstaI);
  footerYoutubeA.append(footerYoutubeI);

  footerSnsIcons.append(footerInstaA, footerYoutubeA);

  //footer title & words
  
  const footerTitle1 = document.createElement('div');
  footerTitle1.classList.add('footer-title');
  footerTitle1.textContent = footerData.orgname;

  const footerTitle2 = document.createElement('div');
  footerTitle2.classList.add('footer-title');
  footerTitle2.textContent = footerData.sponsorship;

  const footerWord1 = document.createElement('div');
  footerWord1.classList.add('footer-word');
  footerWord1.textContent = `대표 | ${footerData.name}`

  const footerWord2 = document.createElement('div');
  footerWord2.classList.add('footer-word');
  footerWord2.textContent = `주소 | ${footerData.address}`

  const footerWord3 = document.createElement('div');
  footerWord3.classList.add('footer-word');
  footerWord3.textContent = `${footerData.bank} | ${footerData.accountNumber}`;

  const footerWord4 = document.createElement('div');
  footerWord4.classList.add('footer-word');
  footerWord4.textContent = `${footerData.holder} | ${footerData.orgname}`;

  const footerSubWord = document.createElement('div');
  footerSubWord.classList.add('footer-sub-word');
  footerSubWord.textContent = footerData.subText;

  footer.append(footerSnsIcons, footerTitle1, footerWord1, footerWord2, footerTitle2, footerWord3, footerWord4, footerSubWord);


  return CONTAINER.append(footer);
}


function removeAll() {
  let home = document.querySelector('.home-main');
  if(home){
    home.remove()
  };

  let about = document.querySelector('.about-main');
  if(about){
    about.remove();
  };

  let contact = document.querySelector('.contact-main');
  if(contact){
    contact.remove();
  };
}
function logoNavEventHandler() {
  let logo = document.querySelector('.header-logo');
  let navTargets = document.querySelectorAll('.nav-target');

  for(let i = 0; i < navTargets.length; i ++) {
    navTargets[i].addEventListener('click', (event) => { 
      if (navTargets[i].textContent === 'Home') {
        removeAll();
        makeHome();
      }
      if (navTargets[i].textContent === 'About Us') {
        removeAll();
        makeAboutUs();
      }
      if (navTargets[i].textContent === 'Contact Us') {
        removeAll();
        makeContactUs();
      }
    })
    logo.addEventListener('click', (event) => {
      removeAll();
      makeHome();
    })
    
  };
}



//default
makeHeader();
makeHome()
makeFooter();
//default


logoNavEventHandler();