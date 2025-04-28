const members = [
    {
        id: 1,
        photo: '/images/photo/mengqian.png',
        name: 'Mengqian Lu',
        intro: 'Earth Systems Engineering',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/mengqian-lu'
    },
    {
        id: 2,
        photo: '/images/photo/qian.png',
        name: 'Qian Peiyuan',
        intro: 'Earth Systems Engineering',
        homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=peiyuan-qian-boqianpy'
    },
    {
        id: 3,
        photo: '/images/photo/alexis.png',
        name: 'Alexis Lau',
        intro: 'Earth Science',
        homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=alexis-kai-hon-lau-alau'
    },
    {
        id: 4,
        photo: '/images/photo/jimmy.png',
        name: 'Jimmy Fung',
        intro: 'Earth Science',
        homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jimmy-chi-hung-fung-majfung'
    },
    {
        id: 5,
        photo: '/images/photo/ilias.png',
        name: 'Ilias Dimitrakopoulos',
        intro: 'Sustainable Urban',
        homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=ilias-dimitrakopoulos-ilias'
    },
    {
        id: 6,
        photo: '/images/photo/sisi.png',
        name: 'Sisi Jian',
        intro: 'Sustainable Urban',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/sisi-jian'
    },
    {
        id: 7,
        photo: '/images/photo/yantao.png',
        name: 'Yantao Yu',
        intro: 'Sustainable Urban',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/yantao-yu'
    },
    {
        id: 8,
        photo: '/images/photo/hong.png',
        name: 'Hong K. Lo',
        intro: 'Sustainable Urban',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/hong-kam-lo'
    },
    {
        id: 9,
        photo: '/images/photo/mo.png',
        name: 'Mo Li',
        intro: 'Urban Computing',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/mo-li'
    },
    {
        id: 10,
        photo: '/images/photo/binhang.png',
        name: 'Binhang Yuan',
        intro: 'Urban Computing',
        homePage: 'https://cse.hkust.edu.hk/admin/people/faculty/profile/biyuan'
    },
    {
        id: 11,
        photo: '/images/photo/songfan.png',
        name: 'Songfan Li',
        intro: 'Urban Computing',
        homePage: 'https://lisongfan.people.ust.hk/'
    },
    {
        id: 12,
        photo: '/images/photo/yuanyuan.png',
        name: 'Yuanyuan Zhou',
        intro: 'Energy',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/yuanyuan-zhou'
    },
    {
        id: 13,
        photo: '/images/photo/qing.png',
        name: 'Qing Chen',
        intro: 'Energy',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/qing-chen'
    },
    {
        id: 14,
        photo: '/images/photo/shao.png',
        name: 'Shao Minhua',
        intro: 'Energy',
        homePage: 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=minhua-shao-kemshao'
    },
    {
        id: 15,
        photo: '/images/photo/qingping.png',
        name: 'Qingping Sun',
        intro: 'Energy',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/qingping-sun'
    },
    {
        id: 16,
        photo: '/images/photo/guoan.png',
        name: 'Guoan Zhou',
        intro: 'Energy',
        homePage: ''
    },
    {
        id: 17,
        photo: '/images/photo/jin.png',
        name: 'Jin QI',
        intro: 'IEDA',
        homePage: 'https://seng.hkust.edu.hk/about/people/faculty/jin-qi'
    }
]

export const getMembers = () => {
    return members;
}

export const getWorkingGroups = () => {
    return Promise.resolve({ data: members })
}
