// Members
const members = [
  {
    id: 1,
    photo: '/images/photo/mengqian.png',
    name: 'Mengqian Lu',
    intro: 'Director of CCRS, Earth Engineering',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/mengqian-lu',
  },
  {
    id: 2,
    photo: '/images/photo/peiyuan.png',
    name: 'Peiyuan Qian',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=peiyuan-qian-boqianpy',
  },
  {
    id: 3,
    photo: '/images/photo/alexis.png',
    name: 'Alexis Lau',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=alexis-kai-hon-lau-alau',
  },
  {
    id: 4,
    photo: '/images/photo/jimmy.png',
    name: 'Jimmy Fung',
    intro: 'Earth Engineering',
    homePage:
      'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jimmy-chi-hung-fung-majfung',
  },
  {
    id: 5,
    photo: '/images/photo/yike.png',
    name: 'Yike Guo',
    intro: 'Earth Engineering and AI',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=yike-guo-yikeguo',
  },
  {
    id: 6,
    photo: '/images/photo/hong.png',
    name: 'Hong K. Lo',
    intro: 'Sustainable Urban',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/hong-kam-lo',
  },
  {
    id: 7,
    photo: '/images/photo/guanghao.png',
    name: 'Guanghao Chen',
    intro: 'Water Technology, Sustainable Urban',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/guanghao-chen',
  },
  {
    id: 8,
    photo: '/images/photo/qingping.png',
    name: 'Qingping Sun',
    intro: 'Renewable Energy',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/qingping-sun',
  },
  {
    id: 9,
    photo: '/images/photo/minhua.png',
    name: 'Minhua Shao',
    intro: 'Renewable Energy',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=minhua-shao-kemshao',
  },
  {
    id: 10,
    photo: '/images/photo/dong.png',
    name: 'Dong Lou',
    intro: 'Weather Derivatives and Finance',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=dong-lou-dlou',
  },
  {
    id: 11,
    photo: '/images/photo/mo.png',
    name: 'Mo Li',
    intro: 'AI for SDGs',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/mo-li',
  },
  {
    id: 12,
    photo: '/images/photo/ilias.png',
    name: 'Ilias Dimitrakopoulos',
    intro: 'Sustainable Urban',
    homePage:
      'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=ilias-dimitrakopoulos-ilias',
  },
  {
    id: 13,
    photo: '/images/photo/jin.png',
    name: 'Jin Qi',
    intro: 'AI for SDGs',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/jin-qi',
  },
  {
    id: 14,
    photo: '/images/photo/qing.png',
    name: 'Qing Chen',
    intro: 'Renewable Energy',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/qing-chen',
  },
  {
    id: 15,
    photo: '/images/photo/yuanyuan.png',
    name: 'Yuanyuan Zhou',
    intro: 'Renewable Energy',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/yuanyuan-zhou',
  },
  {
    id: 16,
    photo: '/images/photo/sisi.png',
    name: 'Sisi Jian',
    intro: 'Sustainable Urban',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/sisi-jian',
  },
  {
    id: 17,
    photo: '/images/photo/yantao.png',
    name: 'Yantao Yu',
    intro: 'Sustainable Urban',
    homePage: 'https://seng.hkust.edu.hk/about/people/faculty/yantao-yu',
  },
  {
    id: 18,
    photo: '/images/photo/binhang.png',
    name: 'Binhang Yuan',
    intro: 'AI for SDGs',
    homePage: 'https://cse.hkust.edu.hk/admin/people/faculty/profile/biyuan',
  },
  {
    id: 19,
    photo: '/images/photo/chen.png',
    name: 'Chen Cheng',
    intro: 'Social and Human Science',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=chen-cheng-chencheng',
  },
  {
    id: 20,
    photo: '/images/photo/ding.png',
    name: 'Ding He',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=ding-he-dinghe',
  },
  {
    id: 21,
    photo: '/images/photo/longjun.png',
    name: 'Longjun Wu',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=longjun-wu-longjunwu',
  },
  {
    id: 22,
    photo: '/images/photo/jiying.png',
    name: 'Jiying Li',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jiying-li-jiyingli',
  },
  {
    id: 23,
    photo: '/images/photo/qiong.png',
    name: 'Qiong Zhang',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=qiong-zhang-qiongz',
  },
  {
    id: 24,
    photo: '/images/photo/keith.png',
    name: 'Keith Chan',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=keith-chan-keithchan',
  },
  {
    id: 25,
    photo: '/images/photo/jize.png',
    name: 'Jize Zhang',
    intro: 'Sustainable Urban',
    homePage: 'https://ce.hkust.edu.hk/people/jize-zhang-zhangjize',
  },
  {
    id: 26,
    photo: '/images/photo/christine.png',
    name: 'Christine Loh',
    intro: 'Earth Engineering',
    homePage: 'https://www.envr.ust.hk/our-division/people/faculty-staff/cloh.html',
  },
  {
    id: 27,
    photo: '/images/photo/lun.png',
    name: 'Lun Dai',
    intro: 'Earth Engineering',
    homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=lun-dai-dailun',
  },
  {
    id: 28,
    photo: '/images/photo/huijuan.png',
    name: 'Huijuan Xiao',
    intro: 'Sustainable Urban',
    homePage: 'https://ce.hkust.edu.hk/people/huijuan-xiao-xiaohuijuan',
  },
  {
    id: 29,
    photo: '/images/photo/songfan.png',
    name: 'Songfan Li',
    intro: 'AI for SDGs',
    homePage: 'https://lisongfan.people.ust.hk/',
  },
  {
    id: 30,
    photo: '/images/photo/guoan.png',
    name: 'Guoan Zhou',
    intro: 'Renewable Energy',
    homePage: '',
  },
  {
    id: 31,
    photo: '/images/photo/joanne.png',
    name: 'Joanne Huang',
    intro: 'Earth Engineering',
    homePage: 'https://www.linkedin.com/in/jiayue-huang/',
  },
  {
    id: 32,
    photo: '/images/photo/tat.png',
    name: 'Tat Fan Cheng',
    intro: 'Earth Engineering',
    homePage: 'https://cemlu.people.ust.hk/individual/tatfancheng.html',
  },
]

export const getMembers = () => {
  return members
}

export const getWorkingGroups = () => {
  return Promise.resolve({ data: members })
}

// External Advisors
const externalAdvisors = [
  {
    id: 1,
    photo: '/images/photo/pak.png',
    name: 'Pak Wai Chan, JP',
    intro: 'Dir of the HK Observatory',
    homePage:
      'https://www.directory.gov.hk/details.jsp?lang=eng&dn=cn%3D1262000109%2Cou%3DHKO%2Cou%3DPeople%2Co%3DGOVERNMENT%2Cc%3DHK',
  },
]
export const getExternalAdvisors = () => {
  return externalAdvisors
}
