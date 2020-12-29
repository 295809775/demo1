import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowuser: null,
    aa: [
      {
        username: 'aaa',
        password: '123'
      }
    ],
    a: [
      {
        name: 'Nike AF1/1',
        price: 999,
        img: 'static/img/nike2.jpg'
      },
      {
        name: 'Air Jordan Adapt CH',
        price: 2899,
        img: 'static/img/aj1.jpg'
      },
      {
        name: "Nike Blazer Mid '77 Infinite",
        price: 849,
        img: 'static/img/nike4.jpg'
      },
      {
        name: 'Nike SB Dunk Low Pro QS',
        price: 5259,
        img: 'static/img/nike1.jpg'
      },
      {
        name: 'Air Jordan 4 Retro SE',
        price: 1599,
        img: 'static/img/aj3.jpg'
      },
      {
        name: 'Air Jordan 6 Retro',
        price: 1399,
        img: 'static/img/aj5.jpg'
      },
      {
        name: 'Chuck Taylor All Star白',
        price: 499,
        img: 'static/img/converse1.png'
      },
      {
        name: 'RALPH SAMPSON MID ROYAL',
        price: 899,
        img: 'static/img/puma3.jpg'
      },
      {
        name: '男士UA HOVR Phantom 2 Glow跑鞋',
        price: 1299,
        img: 'static/img/adm3.png'
      }
    ],
    b: [
      {
        name: 'Nike SB Dunk Low Pro QS',
        price: 5259,
        img: 'static/img/nike1.jpg'
      },
      {
        name: 'Nike AF1/1',
        price: 999,
        img: 'static/img/nike2.jpg'
      },
      {
        name: 'LeBron XVIII EP',
        price: 1599,
        img: 'static/img/nike3.jpg'
      },
      {
        name: "Nike Blazer Mid '77 Infinite",
        price: 849,
        img: 'static/img/nike4.jpg'
      },
      {
        name: 'Nike Air Force 1 Low Retro SP',
        price: 999,
        img: 'static/img/nike5.jpg'
      }
    ],
    c: [
      {
        name: 'Air Jordan Adapt CH',
        price: 2899,
        img: 'static/img/aj1.jpg'
      },
      {
        name: 'Air Jordan 1 Retro High OG J',
        price: 3189,
        img: 'static/img/aj2.jpg'
      },
      {
        name: 'Air Jordan 4 Retro SE',
        price: 1599,
        img: 'static/img/aj3.jpg'
      },
      {
        name: 'Air Jordan 5 Retro SE',
        price: 1599,
        img: 'static/img/aj4.jpg'
      },
      {
        name: 'Air Jordan 6 Retro',
        price: 1399,
        img: 'static/img/aj5.jpg'
      },
      {
        name: 'Air Jordan 1 Zoom Air CMFT',
        price: 1199,
        img: 'static/img/aj6.jpg'
      }
    ],
    d: [
      {
        name: 'SUPERSTAR 50 CLN 万圣节限',
        price: 1299,
        img: 'static/img/adidas1.jpg'
      },
      {
        name: 'ULTRABOOST 20 LAB 跑步运动鞋',
        price: 1499,
        img: 'static/img/adidas2.jpg'
      },
      {
        name: 'ULTRABOOST 20 跑步运动鞋',
        price: 1399,
        img: 'static/img/adidas3.jpg'
      },
      {
        name: 'SUPERSTAR W 经典运动鞋',
        price: 799,
        img: 'static/img/adidas4.jpg'
      },
      {
        name: 'ULTRABOOST 19 M 跑步鞋',
        price: 559,
        img: 'static/img/adidas5.jpg'
      }
    ],
    e: [
      {
        name: 'RS-FAST 男女同款休闲鞋',
        price: 899,
        img: 'static/img/puma1.jpg'
      },
      {
        name: 'CARACAL 男女同款休闲鞋',
        price: 369,
        img: 'static/img/puma2.jpg'
      },
      {
        name: 'RALPH SAMPSON MID ROYAL',
        price: 899,
        img: 'static/img/puma3.jpg'
      },
      {
        name: 'RS-DREAMER SUNSHINE',
        price: 899,
        img: 'static/img/puma4.jpg'
      },
      {
        name: 'PERFORMER CORE',
        price: 799,
        img: 'static/img/puma5.jpg'
      },
      {
        name: 'PUMA X HELLY HANSEN',
        price: 969,
        img: 'static/img/puma6.jpg'
      }
    ],
    f: [
      {
        name: 'SK8-HI MTE 2.0 DX',
        price: 895,
        img: 'static/img/vans1.jpg'
      },
      {
        name: 'SK8-MID REISSUE GHILLIE MTE',
        price: 835,
        img: 'static/img/vans2.jpg'
      },
      {
        name: 'SK8-HI REISSUE CAP',
        price: 795,
        img: 'static/img/vans3.jpg'
      },
      {
        name: 'BOLD NI 男女款板鞋',
        price: 595,
        img: 'static/img/vans4.jpg'
      },
      {
        name: 'COMFYCUSH OLD SKOOL',
        price: 735,
        img: 'static/img/vans5.jpg'
      },
      {
        name: 'OLD SKOOL男女板鞋',
        price: 635,
        img: 'static/img/vans6.jpg'
      }
    ],
    g: [
      {
        name: '827系列男女同款复古休闲老爹鞋',
        price: 799,
        img: 'static/img/nb1.jpg'
      },
      {
        name: '574系列男女同款复古休闲鞋',
        price: 659,
        img: 'static/img/nb2.jpg'
      },
      {
        name: 'Numeric 1010 系列男女同款休闲板鞋',
        price: 899,
        img: 'static/img/nb3.jpg'
      },
      {
        name: '410 V5系列男女同款复古运动鞋',
        price: 559,
        img: 'static/img/nb4.jpg'
      },
      {
        name: 'Pro Court男女同款休闲滑板鞋板鞋',
        price: 799,
        img: 'static/img/nb5.jpg'
      }
    ],
    h: [
      {
        name: '库里Curry 8 Golden篮球鞋',
        price: 1399,
        img: 'static/img/adm1.png'
      },
      {
        name: '男女同款UA HOVR Summit运动鞋',
        price: 1099,
        img: 'static/img/adm2.png'
      },
      {
        name: '男士UA HOVR Phantom 2 Glow跑鞋',
        price: 1299,
        img: 'static/img/adm3.png'
      },
      {
        name: 'UA HOVR STRT新春系列运动休闲鞋',
        price: 899,
        img: 'static/img/adm4.png'
      },
      {
        name: '男士UA Ansa Getaway拖鞋',
        price: 229,
        img: 'static/img/adm5.png'
      }
    ],
    i: [
      {
        name: 'CLUB C REVENGE',
        price: 699,
        img: 'static/img/rb1.jpg'
      },
      {
        name: 'QUESTION LOW',
        price: 1099,
        img: 'static/img/rb2.jpg'
      },
      {
        name: 'QUESTION MID',
        price: 1199,
        img: 'static/img/rb3.jpg'
      },
      {
        name: 'INTV 96',
        price: 599,
        img: 'static/img/rb4.jpg'
      },
      {
        name: 'Nano X Pride',
        price: 899,
        img: 'static/img/rb5.jpg'
      },
      {
        name: 'BB 4600 MU',
        price: 749,
        img: 'static/img/rb6.jpg'
      }
    ],
    j: [
      {
        name: 'Chuck Taylor All Star白',
        price: 499,
        img: 'static/img/converse1.png'
      },
      {
        name: 'Chuck 70162050C001黑色',
        price: 569,
        img: 'static/img/converse2.png'
      },
      {
        name: 'Chuck 70162062C247米白色',
        price: 485,
        img: 'static/img/converse3.png'
      },
      {
        name: 'Jack Purcell 黑/深棕色',
        price: 599,
        img: 'static/img/converse4.png'
      },
      {
        name: 'Pro Leather 白/红/米白',
        price: 699,
        img: 'static/img/converse5.png'
      },
      {
        name: 'Chuck 70171064C400蓝',
        price: 599,
        img: 'static/img/converse6.png'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }

})
