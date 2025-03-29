export interface Game {
    id: string;
    title: string;
    thumbnail: string;
    iframeUrl: string;
    category: string[];
  }
  
  export const games: Game[] = [
    {
      id: 'jogo1',
      title: 'SuperMarket Simulator',
      thumbnail: '/images/supermarketmanagersimulator.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/5dff4319bd2845c781cd3378d86735ed/?gd_sdk_referrer_url=https://www.example.com/games/jogo1',
      category: ['simulacao',]
    },
    {
      id: 'jogo2',
      title: 'Moto Road Rash 3D 2',
      thumbnail: '/images/motoroadrash3d2.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/0d6c422de82f4f6b832697ed1da3c0b7/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-road-rash-3d-2/',
      category: ['racing', 'aventura'],
    },
    {
      id: 'jogo3',
      title: 'Stickman The Flash',
      thumbnail: '/images/stickmantheflash.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/fe6d167676a7450da8d819b6edc607f9/?gd_sdk_referrer_url=https://gamedistribution.com/games/stickman-the-flash/',
      category: ['acao', 'aventura'],
    },
    {
      id: 'jogo4',
      title: 'Idle Firefighter 3D',
      thumbnail: '/images/idlefirefighter3d.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a2e511cd27e74371b61d3cfbca6f3f33/?gd_sdk_referrer_url=https://gamedistribution.com/games/idle-firefighter-3d/',
      category: ['acao', 'aventura'],
    },
    {
      id: 'jogo5',
      title: 'Bubble Shooter Pro',
      thumbnail: '/images/bubbleshooterpro4.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a2cd0ba0848b49b98ade7d2b8553f09d/?gd_sdk_referrer_url=https://gamedistribution.com/games/bubble-shooter-pro-4/',
      category: ['puzzle', 'shooter'],
    },
    {
      id: 'jogo6',
      title: 'Guess Word',
      thumbnail: '/images/guessword.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/fdf1b9b4c4cf49048c02314500360a9d/?gd_sdk_referrer_url=https://gamedistribution.com/games/guess-word-1/',
      category: ['puzzle', 'mobile'],
    },
    {
      id: 'jogo7',
      title: 'Hungry Snake IO',
      thumbnail: '/images/hungrysnakeio.jpg', 
      iframeUrl: 'https://html5.gamedistribution.com/a6195768e1d945678a79772c2e5dfc1f/?gd_sdk_referrer_url=https://gamedistribution.com/games/hungry-snake-io/',
      category: ['aventura']
    },
    {
      id: 'jogo8',
      title: 'Jump Ball Classic',
      thumbnail: '/images/jumpballclassic.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a42d91608d7d44b9bb3722ea9ca55a5a/?gd_sdk_referrer_url=https://gamedistribution.com/games/jump-ball-classic/',
      category: ['puzzle',]
    },
    {
      id: 'jogo9',
      title: 'Alien Hunter',
      thumbnail: '/images/alienhunter.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/cf59e43efe374ec8b434aa872a24b68d/?gd_sdk_referrer_url=https://gamedistribution.com/games/alien-hunters/',
      category: ['acao',]
    },
    {
      id: 'jogo10',
      title: 'Dynamons 8',
      thumbnail: '/images/dynamons8.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/5fd7ae34b61c42649aecb9a0ea44e572/?gd_sdk_referrer_url=https://gamedistribution.com/games/dynamons-8/',
      category: ['aventura',]
    },
    {
      id: 'jogo11',
      title: 'Hexagon',
      thumbnail: '/images/hexagon.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/882e8405283041b7922818fa6ff892b6/?gd_sdk_referrer_url=https://gamedistribution.com/games/hexagon-3/',
      category: ['puzzle',]
    },
    {
      id: 'jogo12',
      title: 'Last Day on Earth Survival',
      thumbnail: '/images/lastdayonearthsurvival.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/b25cc9c430f74911a7b21254965dbee5/?gd_sdk_referrer_url=https://gamedistribution.com/games/last-day-on-earth-survival/',
      category: ['aventura',]
    },
    {
      id: 'jogo13',
      title: 'Mustang City Driver',
      thumbnail: '/images/mustangcitydriver.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/61c083cddba04c11b2262b0530aad11b/?gd_sdk_referrer_url=https://gamedistribution.com/games/mustang-city-driver/',
      category: ['racing',]
    },
    {
      id: 'jogo14',
      title: 'Griddlers Deluxe',
      thumbnail: '/images/griddlersdeluxe.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/1774ba2881034249bff4afac210d6e69/?gd_sdk_referrer_url=https://gamedistribution.com/games/griddlers-deluxe-1/',
      category: ['puzzle',]
    },
    {
      id: 'jogo15',
      title: 'Donut Box',
      thumbnail: '/images/donutbox.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/4fd719ef94a1477d95e578da2c97088e/?gd_sdk_referrer_url=https://gamedistribution.com/games/donut-box/',
      category: ['casual',]
    },
    {
      id: 'jogo16',
      title: 'Mental Hospital Scape',
      thumbnail: '/images/mentalhospitalscape.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/4b8288b531524537947ee106a12baee8/?gd_sdk_referrer_url=https://gamedistribution.com/games/mental-hospital-escape-1/',
      category: ['casual',]
    },
    {
      id: 'jogo17',
      title: 'Underwater Survival Deep Dive',
      thumbnail: '/images/underwatersurvivaldeepdive.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a454e80774aa42528b0eb8809088dee4/?gd_sdk_referrer_url=https://gamedistribution.com/games/underwater-survival-deep-dive/',
      category: ['aventura',]
    },
    {
      id: 'jogo18',
      title: 'Zombie Highway Rampage',
      thumbnail: '/images/zombiehighwayrampage.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/755f4af98e77469aa7733336ea8acea1/?gd_sdk_referrer_url=https://gamedistribution.com/games/zombie-highway-rampage/',
      category: ['shooter',]
    },
    {
      id: 'jogo19',
      title: 'Fireboy and Watergirl 1 Forest Temple',
      thumbnail: '/images/fireboyandwatergirl1foresttemple.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-and-watergirl-1-forest-temple/',
      category: ['aventura',]
    },
    {
      id: 'jogo20',
      title: 'Bubble Game 3',
      thumbnail: '/images/bubblegame3.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/27673bc45d2e4b27b7cd24e422f7c257/?gd_sdk_referrer_url=https://gamedistribution.com/games/Bubble-Game-3/',
      category: ['shooter',]
    },
    {
      id: 'jogo21',
      title: 'Moto X3M Bike Race Game',
      thumbnail: '/images/motox3mbikeracegame.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-x3m-bike-race-game/',
      category: ['racing',]
    },
    { 
      id: 'jogo22',
      title: 'Traffic Jam 3D',
      thumbnail: '/images/trafficjam3d.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-jam-3d/',
      category: ['racing',]
    },
    {
      id: 'jogo23',
      title: 'Four Colors Multiplayer',
      thumbnail: '/images/fourcolorsmultiplayer.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/f2520bae00624e93a4f4614732fa259e/?gd_sdk_referrer_url=https://gamedistribution.com/games/four-colors-multiplayer/',
      category: ['puzzle',]
    },
    {
      id: 'jogo24',
      title: 'Penalty Shooters 2',
      thumbnail: '/images/penaltyshooters2.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/571b9df027e449f78e3869ba19658754/?gd_sdk_referrer_url=https://gamedistribution.com/games/Penalty-Shooters-2/',
      category: ['acao',]
    },
    {
      id: 'jogo25',
      title: 'Apple Shooter 1',
      thumbnail: '/images/appleshooter1.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/f85e3e02194545208fa52da0c0992362/?gd_sdk_referrer_url=https://gamedistribution.com/games/Apple-Shooter/',
      category: ['shooter',]
    },
    {
      id: 'jogo26',
      title: '8 Ball Pool Challenge',
      thumbnail: '/images/8ballpoolchallenge.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/50a8e5775cf8476992f756811468bcbd/?gd_sdk_referrer_url=https://gamedistribution.com/games/8-ball-pool-challenge/',
      category: ['casual',]
    },
    {
      id: 'jogo27',
      title: 'Tomb Runner',
      thumbnail: '/images/tombrunner.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/?gd_sdk_referrer_url=https://gamedistribution.com/games/Tomb-Runner/',
      category: ['aventura',]
    },
    {
      id: 'jogo28',
      title: 'Head Soccer 2023',
      thumbnail: '/images/headsoccer2023.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/30d4a2b0a84242ba9844124d1b2401d2/?gd_sdk_referrer_url=https://gamedistribution.com/games/head-soccer-2023/',
      category: ['casual',]
    },
    {
      id: 'jogo29',
      title: 'Pou',
      thumbnail: '/images/pou.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/d1362abc246f43bdb5c26643aec2b61b/?gd_sdk_referrer_url=https://gamedistribution.com/games/pou/',
      category: ['aventura',]
    },
    {
      id: 'jogo30',
      title: 'Traffic Tour',
      thumbnail: '/images/traffictour.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/ce3d2279ff684021a68b534e397f1122/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-tour/',
      category: ['racing',]
    },
    {
      id: 'jogo31',
      title: 'Kris Mahjong',
      thumbnail: '/images/krismahjong.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/5ed3b1c510c3400db0ef580c60cbcdca/?gd_sdk_referrer_url=https://gamedistribution.com/games/Kris-Mahjong/',
      category: ['puzzle',]
    },
    {
      id: 'jogo32',
      title: 'Fireboy and Watergirl 2 Light Temple',
      thumbnail: '/images/fireboyandwatergirl2lighttemple.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/383ad09b92c7446b9113cccc29630517/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-and-watergirl-2-light-temple/',
      category: ['aventura',]
    },
    {
      id: 'jogo33',
      title: 'Fireboy and Watergirl 3 Ice Temple',
      thumbnail: '/images/fireboyandwatergirl3icetemple.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/f3a6e1ac0a77412289cbac47658b2b68/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-and-watergirl-3-ice-temple/',
      category: ['aventura',]
    },
    {
      id: 'jogo34',
      title: 'Fireboy and Watergirl 4 Crystal Temple',
      thumbnail: '/images/fireboyandwatergirl4crystaltemple.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/3790681b69584409b7f681a8e400102d/?gd_sdk_referrer_url=https://gamedistribution.com/games/fireboy-and-watergirl-4-crystal-temple/',
      category: ['aventura',]
    },
    {
      id: 'jogo35',
      title: 'Geometry Jump',
      thumbnail: '/images/geometryjump.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/9b634d67ddd6407c95effd409b947a76/?gd_sdk_referrer_url=https://gamedistribution.com/games/geometry-jump-2/',
      category: ['aventura',]
    },
    {
      id: 'jogo36',
      title: 'Flip Bottle',
      thumbnail: '/images/flipbottle.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/95c4932d8f6d42688b0fa38274282a86/?gd_sdk_referrer_url=https://gamedistribution.com/games/flip-bottle/',
      category: ['casual',]
    },
    {
      id: 'jogo37',
      title: 'Garden Tales 3',
      thumbnail: '/images/gardentales3.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/2c9eb8a0858644519edea67f69a65a59/?gd_sdk_referrer_url=https://gamedistribution.com/games/garden-tales-3/',
      category: ['puzzle',]
    },
    {
      id: 'jogo38',
      title: 'Park Me',
      thumbnail: '/images/parkme.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/e04cf86d9ac5483a9ac844c89fccca8d/?gd_sdk_referrer_url=https://gamedistribution.com/games/park-me/',
      category: ['puzzle',]
    },
    {
      id: 'jogo39',
      title: 'Tris Fashionista Dolly Dress up H5',
      thumbnail: '/images/trisfashionistadollydressuph5.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/d7e4cdde82a894b8f633e6d61a01ef15/?gd_sdk_referrer_url=https://gamedistribution.com/games/Tris-Fashionista-Dolly-Dress-up-H5/',
      category: ['casual',]
    },
    {
      id: 'jogo40',
      title: 'Infinite Road',
      thumbnail: '/images/infiniteroad.jpg',
      iframeUrl: 'http://html5.gamedistribution.com/3078a1155d904eec84f2b6f8116603cf/?gd_sdk_referrer_url=https://gamedistribution.com/games/infinite-road/',
      category: ['aventura',]
    },
    {
      id: 'jogo41',
      title: 'Basket Fall',
      thumbnail: '/images/basketfall.jpg',
      iframeUrl: 'http://html5.gamedistribution.com/d9a7d331441c4c7cba990bbe7869ed86/?gd_sdk_referrer_url=https://gamedistribution.com/games/basket-fall/',
      category: ['casual',]
    },
    {
      id: 'jogo42',
      title: 'Brain puzzles-Quests',
      thumbnail: '/images/brainpuzzlesquests.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/b031b8f60a614bfba9246610fcbccb8a/?gd_sdk_referrer_url=https://gamedistribution.com/games/brain-puzzles-quests/',
      category: ['puzzle',]
    },
    {
      id: 'jogo43',
      title: 'Landmine Cube',
      thumbnail: '/images/landminecube.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/fbe2045a5fab4fc0beb7331920a07641/?gd_sdk_referrer_url=https://gamedistribution.com/games/landmine-cube/',
      category: ['mobile',]
    },
    {
      id: 'jogo44',
      title: 'Transformers Battle For The City',
      thumbnail: '/images/transformersbattleforthecity.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/284f0df3cc504fd3a36b5093698c8e41/?gd_sdk_referrer_url=https://gamedistribution.com/games/transformers-battle-for-the-city/',
      category: ['mobile',]
    },
    {
      id: 'jogo45',
      title: 'COINs',
      thumbnail: '/images/coins.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/7ea5afdd37a64eac95cb0d7600d46065/?gd_sdk_referrer_url=https://gamedistribution.com/games/coins/',
      category: ['mobile',]
    },
    {
      id: 'jogo46',
      title: 'Cat Cut',
      thumbnail: '/images/catcut.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/df15bf88e85a4917bc16e6c55710fe43/?gd_sdk_referrer_url=https://gamedistribution.com/games/cat-cut/',
      category: ['mobile',]
    },
    {
      id: 'jogo47',
      title: 'Idle Airport CEO',
      thumbnail: '/images/idleairportceo.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/9790dd84717e4cbf92722eb21c4fd891/?gd_sdk_referrer_url=https://gamedistribution.com/games/idle-airport-ceo/',
      category: ['mobile',]
    },
    {
      id: 'jogo48',
      title: 'Seek & Find',
      thumbnail: '/images/seekandfind.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/a2253a48a7c442138467e809d61cbfcc/?gd_sdk_referrer_url=https://gamedistribution.com/games/seek-and-find/',
      category: ['mobile',]
    },
    {
      id: 'jogo49',
      title: 'Tower Defense Dragon Merge',
      thumbnail: '/images/towerdefensedragonmerge.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/df4a9319aac14e4e8244757dc9430b9b/?gd_sdk_referrer_url=https://gamedistribution.com/games/tower-defense-dragon-merge/',
      category: ['mobile',]
    },
    {
      id: 'jogo50',
      title: 'GTA: Grand Vegas Crime',
      thumbnail: '/images/gtagrandvegascrime.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/828864726be944c2bff67fa68d505e96/?gd_sdk_referrer_url=https://gamedistribution.com/games/gta:-grand-vegas-crime/',
      category: ['shooter',]
    },
    {
      id: 'jogo51',
      title: 'Lambo Traffic Racer',
      thumbnail: '/images/lamboTrafficracer.jpg',
      iframeUrl: 'https://html5.gamedistribution.com/ab3a6a3d3c534770b4a3a91fff18df2b/?gd_sdk_referrer_url=https://gamedistribution.com/games/lambo-traffic-racer/',
      category: ['racing',]
    }
    

    // Outros jogos...
  ];
  
  