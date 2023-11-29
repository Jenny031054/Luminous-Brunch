if (window.location.href.includes('4_menu.html')) {
  let menuData = {
    Salad: [
      {
        id: 1,
        title: '香煎骰子牛沙拉',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        title: '南瓜膺嘴豆溫沙拉',
        price: 80,
        imgUrl:
          'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        title: '舒肥雞胸沙拉',
        price: 100,
        imgUrl: '../assets/images/menuImg/tunasalad.jpg',
      },
      {
        id: 4,
        title: '季節水果沙拉 ',
        price: 90,
        imgUrl:
          'https://images.unsplash.com/photo-1688923130928-8468d6af8d7e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        title: '泰式青木瓜絲沙拉',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1616176673711-1673690c021f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        title: '番茄乾酪季節沙拉',
        price: 80,
        imgUrl:
          'https://images.unsplash.com/photo-1549745708-fa4a8423a0b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        title: '酪梨穀物能量沙拉',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    Burger: [
      {
        id: 1,
        title: '經典花生培根牛肉堡',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        title: '培根起司太陽蛋漢堡',
        price: 180,
        imgUrl:
          'https://images.unsplash.com/photo-1601894087104-0c18bc34dbd6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        title: '酥炸嫩雞起司堡',
        price: 180,
        imgUrl:
          'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        title: '松露蕈菇牛肉堡',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        title: '青檸嫩雞鮮蔬堡',
        price: 150,
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1668618294318-6452e93c6802?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        title: '酥脆洋蔥圈牛肉堡',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1585238341710-4d3ff484184d?q=80&w=1104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    Sandwich: [
      {
        id: 1,
        title: '燻鮭魚酪梨開放三明治',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1627308595216-439c00ade0fe?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        title: '莓果奶酪法式蜂蜜吐司',
        price: 180,
        imgUrl:
          'https://images.unsplash.com/photo-1676037150606-ce6df635189e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        title: '酪梨太陽蛋酸種吐司',
        price: 180,
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1672639601612-4fcf7dab1ae6?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        title: '香料起司牛肉熱壓',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        title: '檸檬嫩雞三明治',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1576194555759-22b1e99820f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        title: '香煎牛肉培根蛋吐司',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1608847569619-b5602f65ffa0?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        title: '黑胡椒牛肉潛艇堡',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1554433607-66b5efe9d304?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 8,
        title: '羅勒番茄蛋開放式吐司',
        price: 120,
        imgUrl: '../assets/images/menuImg/tomatoSandwich.jpg',
      },
      {
        id: 9,
        title: '酪梨火腿鮮蔬三明治',
        price: 120,
        imgUrl: '../assets/images/menuImg/avocadoSandwich.jpg',
      },
    ],
    Brunch: [
      {
        id: 1,
        title: '巴西野莓優格燕麥碗',
        price: 150,
        imgUrl: '../assets/images/menuImg/yogret.jpg',
      },
      {
        id: 2,
        title: '燻鮭魚乾酪班尼迪克蛋',
        price: 250,
        imgUrl: '../assets/images/menuImg/BenedictEggs.jpg',
      },
      {
        id: 3,
        title: '培根太陽蛋早午餐',
        price: 230,
        imgUrl: '../assets/images/menuImg/bacon.jpg',
      },
      {
        id: 4,
        title: '焗烤酪梨班尼迪克蛋',
        price: 220,
        imgUrl:
          'https://images.unsplash.com/photo-1618669377018-23ea391e58dd?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        title: '莓果優格厚鬆餅',
        price: 150,
        imgUrl:
          'https://images.unsplash.com/photo-1499638309848-e9968540da83?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        title: '漢堡排佐嫰蛋早餐盤',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        title: '鮭魚鮮蔬沙拉碗',
        price: 230,
        imgUrl:
          'https://images.unsplash.com/photo-1604259597308-5321e8e4789c?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 8,
        title: '鮮蔬起司雙拼貝果',
        price: 220,
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    Pasta: [
      {
        id: 1,
        title: '番茄肉醬斜管麵',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        title: '松露奶油培根義大利麵',
        price: 250,
        imgUrl: '../assets/images/menuImg/baconPasta.jpg',
      },
      {
        id: 3,
        title: '白酒蛤俐蒜香義大利麵',
        price: 280,
        imgUrl:
          'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        title: '青醬海鮮筆管麵',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1616299908398-9af1134ad522?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 5,
        title: '義式牛肉寬管麵',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 6,
        title: '奶油燻雞寬管麵',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        title: '德腸奶香通心粉',
        price: 250,
        imgUrl:
          'https://images.unsplash.com/photo-1607546965882-e025ff0edc61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    Drink: [
      {
        id: 1,
        title: '莊園美式咖啡',
        price: 80,
        imgUrl:
          'https://images.unsplash.com/photo-1494314671902-399b18174975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hcmljYW5vJTIwY29mZmVlfGVufDB8fDB8fHww',
      },
      {
        id: 2,
        title: '醇濃厚乳拿鐵',
        price: 100,
        imgUrl:
          'https://images.unsplash.com/photo-1564707967-342059441709?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        title: '黑糖拿鐵',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1622240506921-042a4e71c172?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 4,
        title: '藍莓香蕉果昔',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/photo-1588929473475-d16ffd5d068c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
      },
      {
        id: 5,
        title: '鳳梨柳橙鮮果汁',
        price: 150,
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1666262370578-59f5736c0202?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGp1aWNlfGVufDB8fDB8fHww',
      },
      {
        id: 6,
        title: '鮮果綠拿鐵',
        price: 120,
        imgUrl:
          'https://images.unsplash.com/flagged/photo-1557753478-b9fb74f39eb5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 7,
        title: '沁涼薄荷茶',
        price: 80,
        imgUrl:
          'https://images.unsplash.com/photo-1593487806527-40dcc19864bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYXxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 8,
        title: '南非國寶茶',
        price: 80,
        imgUrl:
          'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 9,
        title: '伯爵鮮奶茶',
        price: 120,
        imgUrl: '../assets/images/menuImg/milktea.jpg',
      },
    ],
  };

  //選定元素
  const menuContainer = document.querySelector('.menu-container');
  const menuList = document.querySelector('#menuList');
  const Salad = document.querySelector('#Salad');
  const Burger = document.querySelector('#Burger');
  const Sandwich = document.querySelector('#Sandwich');
  const Brunch = document.querySelector('#Brunch');
  const Pasta = document.querySelector('#Pasta');
  const Drink = document.querySelector('#Drink');
  const Title = document.querySelector('#Title');
  function renderMenu(data) {
    let str = '';
    data.forEach(function (item) {
      str += `
        <div class="col-lg-4 mb-6">
            <div class="card-menu">
                <div class="card-img">
                    <img src="${item.imgUrl}" alt="" class="card-img">
                </div>
                <div class="menu-title font-NotoSerif d-flex justify-content-between">
                    <span class="menu-name">${item.title}</span>
                    <span class="menu-price">${item.price}$</span>
                </div>
            </div>
        </div>
        `;
    });
    menuContainer.innerHTML = str;
  }
  // menuBurgerBtn.addEventListener("click", function(e){
  //     e.preventDefault();
  //     renderMenu(menuData.burger);
  //     menuTitle.textContent = "| Burger |";
  //     console.log("成功")

  // });
  menuList.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.getAttribute('id'));
    let menuId = e.target.getAttribute('id');
    // if(menuId == "menuSaladBtn"){
    //     renderMenu(menuData.salad);
    //     menuTitle.textContent = "| Salad |";
    // }
    renderMenu(menuData[menuId]);
    menuTitle.textContent = `| ${menuId} |`;
  });
}
