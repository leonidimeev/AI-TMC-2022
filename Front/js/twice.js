const TwiceMembers = [
  "Jihyo",
  "Mina",
  "Tzuyu",
  "Nayeon",
  "Sana",
  "Dahyun",
  "Momo",
  "Chaeyoung",
  "Jeongyeon",
];

const TwiceMemberInfo = {
  "Nayeon": {
    "birthName": "Im Nayeon (임나연)",
    "dateOfBirth": "September 22, 1995",
    "nationality": "South Korean",
    "birthplace": "Seoul, South Korea",
  },
  "Jeongyeon": {
    "birthName": "Yoo Kyung Wan (유경완)",
    "legalName": "Yoo Jung Yeon (유정연)",
    "dateOfBirth": "November 1, 1996",
    "nationality": "South Korean",
    "birthplace": "Suwon, South Korea",
  },
  "Momo": {
    "birthName": "Hirai Momo (히라이 모모)",
    "dateOfBirth": "November 9, 1996",
    "nationality": "Japanese",
    "birthplace": "Kyōtanabe, Kyoto, Japan",
  },
  "Sana": {
    "birthName": "Minatozaki Sana (미나토자키 사나)",
    "dateOfBirth": "December 29, 1996",
    "nationality": "Japanese",
    "birthplace": "Tennōji-ku, Osaka, Japan",
  },
  "Jihyo": {
    "birthName": "Park Ji Soo (박지수)",
    "legalName": "Park Ji Hyo (박지효)",
    "dateOfBirth": "February 1, 1997",
    "nationality": "South Korean",
    "birthplace": "Guri, Gyeonggi-do, South Korea",    
  },
  "Mina": {
    "birthName": "Myoui Mina (묘이 미나)",
    "englishName": "Sharon Myoui",
    "dateOfBirth": "March 24, 1997",
    "nationality": "Japanese",
    "birthplace": "San Antonio, Texas, United States",
  },
  "Dahyun": {
    "birthName": "Kim Dahyun (김다현)",
    "dateOfBirth": "May 28, 1998",
    "nationality": "South Korean",
    "birthplace": "Seongnam, Gyeonggi-do, South Korea",
  },
  "Chaeyoung": {
    "birthName": "Son Chae Young (손채영)",
    "dateOfBirth": "April 23, 1999",
    "nationality": "South Korean",
    "birthplace": "Seoul, South Korea",
  },
  "Tzuyu": {
    "birthName": "Chou Tzuyu (저우쯔위)",
    "dateOfBirth": "June 14, 1999",
    "nationality": "Taiwanese",
    "birthplace": "East District, Tainan, Taiwan",
  },
}

function calculateAge(birthday) {
  let birthDate = new Date(birthday);
  let ageDifMs = Date.now() - birthDate.getTime();
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Section(id = "Twice", tabIndex = -1) {
  let section = document.createElement("section");
  section.id = id;
  if (tabIndex === 0) {
    section.tabIndex = tabIndex;
  }
  return section;
}

function Link(href = "", id = "") {
  let a = document.createElement("a");
  a.href = "#" + href;
  a.id = id;
  return a;
}

function Title(title = "TWICE", href = "Home", id = "TwiceTitle") {
  let h2 = document.createElement("h2");
  let h2Link = Link(href, id);
  h2Link.innerHTML = title;
  h2.appendChild(h2Link);
  return h2;
}

function Picture(fileName = "Twice") {
  let img = document.createElement("img");
  img.setAttribute("data-src", "./img/webp/" + fileName + ".webp");
  img.setAttribute("alt", fileName);
  img.tabIndex = 0;

  img.onerror = () => {
    img.onerror = () => {
      img.onerror = () => {
        console.log("Error: Could not find image of " + fileName + ".");
      };
      img.src = "./img/png/" + fileName + ".png";
    };
    img.src = "./img/jpg/" + fileName + ".jpg";
  }

  img.className = "lazyload";
  return img;
}

function Div(className = "") {
  let div = document.createElement("div");
  div.className = className;
  return div;
}

function PictureSide(memberName = "Nayeon") {
  let pictureSide = Div("picture-side");
  let img = Picture(memberName);
  pictureSide.appendChild(img);
  return pictureSide;
}

function Span(className = "", text = "") {
  let span = document.createElement("span");
  span.className = className;
  span.innerHTML = text;
  return span;
}

function Info(memberName = "Nayeon", infoList = TwiceMemberInfo) {
  let memberInfo = infoList[memberName];
  memberInfo["age"] = calculateAge(memberInfo["dateOfBirth"]);
  let div = Div("info");
  for (let info in memberInfo) {
    let p = document.createElement("p");
    let property = Span("property");

    property.innerHTML = info.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1").replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }) + ": ";

    let value = Span("value", memberInfo[info]);
    value.tabIndex = 0;
    p.appendChild(property);
    p.appendChild(value);
    div.appendChild(p);
  }
  return div;
}

function InfoSide(memberName = "Nayeon") {
  let infoSide = Div("info-side");
  infoSide.appendChild(Title(memberName, "Twice", memberName + "Link", memberName + "Title"));
  infoSide.appendChild(Info(memberName));
  return infoSide;
}

function Profile(memberName = "Nayeon", swapSides = true) {
  let section = Section(memberName);
  section.id = memberName;
  section.className += swapSides ? " left" : "";
  let pictureSide = PictureSide(memberName);
  let infoSide = InfoSide(memberName);
  if (swapSides) {
    section.appendChild(infoSide);
    section.appendChild(pictureSide);
  } else {
    section.appendChild(pictureSide);
    section.appendChild(infoSide);
  }
  return section;
}

function Profiles(members = TwiceMembers, swapSides = (i) => i % 2 === 1) {
  let profiles = document.createElement("article");
  for (let i = 0; i < members.length; i++) {
    let profile = Profile(members[i], swapSides(i));
    profiles.appendChild(profile);
  }
  return profiles;
}

function TwicePictureList(members = TwiceMembers) {
  let p = document.createElement("p");
  p.className = "ignore";
  for (let i = 0; i < members.length; i++) {
    let memberLink = Link(members[i], members[i] + "Title", members[i] + "Link");
    memberLink.innerHTML = members[i];
    p.appendChild(memberLink);
    if (i < members.length - 1) {
      p.appendChild(document.createTextNode(", "));
    }
  }
  return p;
}

function TwicePicture() {
  let section = Section(title = "Twice", tabIndex = 0);
  section.appendChild(Title());
  section.appendChild(Picture());
  section.appendChild(TwicePictureList());
  return section;
}

function TwiceProfiles() {
  let profiles = Profiles();
  profiles.insertBefore(TwicePicture(), profiles.firstChild);
  return profiles;
}