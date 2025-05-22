const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(cors());

// 👉 Trỏ tới thư mục dist của Vue
app.use(express.static(path.join(__dirname, '../client/dist')));
// 
app.use('/public', express.static(path.join(__dirname, 'public')));

const headerData = [
  {
    'img': '/img/logo.svg', // Đảm bảo ảnh có trong thư mục public/img/
    'list': [
      { 'text': '制御盤製作・修理' },
      { 'text': 'その他電気工事' },
      { 'text': 'ご依頼の流れ' },
      { 'text': '施工実績' },
      { 'text': 'お客様の声' },
      { 'text': 'お問い合わせ' }
    ]
  }
];
const purpoiseData = [
    {
        'list':[
            {'text':'誤作動やトラブルがある'},
            {'text':'省エネ・コスト削減'},
        ],
        'title':'制御システム・制御盤製作',
        'titlespan':'お客様の目的に合わせて設計する',
        'text':'当社は「安全第 一」と「確実な工事」をモットーに、70年以上にわたって島根の企業様の課題解決と業務の効率化をサポートしています。\n手動で行う作業の自動化や省力化装置、各種監視制御システムの制御盤製作と修理はもちろん、トラブル対応やアフターサポートも安心です。\n地域密着ならではの信頼と豊富な実績で、多くのお客様にご満足いただいています。どんな小さなご相談も、お気軽にお問合せください。お客様のビジネスに合わせた柔軟な対応と迅速なサポートで、信頼をお届けします。',
'bgtitle':'一貫対応で手厚いサポートが強みです',
'dl':[
    {'img':'/img/index_img01.svg','dt':'設計･製作'},
     {'img':'/img/index_img02.svg','dt':'修理'},
      {'img':'/img/index_img03.svg','dt':'設置'},
       {'img':'/img/index_img04.svg','dt':' アフター\nサポート'},
],
'btn':'制御盤製作・修理について詳しく'
    }
]
const reasonsData = [
    {
'att':'島根県の制御盤製作・修理で',
'bgtitle':'が選ばれる理由',
'bgtitlespan':'知野見電気',
'note':'chinomidenki',
'article':[
    {'img':'/img/index_img15.svg','title':'70年以上の確かな技術力',
        'text':'知野見電気は70年以上にわたり、島根県のお客様を電気でサポートしてまいりました。\n歴史の中で培った技術力とノウハウは、多様なお客様のニーズに応え、信頼を築いています。制御盤や制御システムの製作・修理も得意分野。精密な電気基板やプログラム制御の知識を活かし、複雑な案件も柔軟に解決します。地域密着型で築いてきた豊富な実績があるからこそ、安心してお任せいただけます。'
   , 'img02':'/img/index_img12.jpg'
    },
     {'img':'/img/index_img16.svg','title':'緊急時も迅速に対応',
        'text':' 制御盤のトラブルやシステムの不具合は急に発生します。当社は夜間・休日の突然の不具合にもスピーディーに対応し、お客様の業務への影響を最小限に抑えます。\n地域のお客様からは「困ったときにすぐ来てくれる」と、高い評価をいただいております。緊急対応のフットワークの軽さが、知野見電気の大きな強み。どんな些細なトラブルでも迅速・丁寧に解決いたします。'
   , 'img02':'/img/index_img13.jpg'
    },
     {'img':'/img/index_img17.svg','title':'お客様に適した柔軟なご提案',
        'text':'知野見電気では、お客様のビジネスの課題やご要望を丁寧にヒアリングし、最適な提案を行います。\n自社で対応が難しい場合は、信頼できる外部企業と連携することで、幅広いニーズに応える体制を整えています。お客様目線での柔軟な対応が、リピーターやご紹介をいただく理由のひとつ。島根県の中小企業や個人事業主様のビジネス効率化を全力でサポートする、頼れるパートナーです。'
   , 'img02':'/img/index_img14.jpg'
    },
]
    }
]
const ctaData = [
    {'titlespan':' 制御盤製作・修理のお問い合わせはこちら',
        'title':'メンテナンスやアフターフォローもお任せください！',
        'note':' 急ぎは \nお電話で',
        'list':[
            {'text':'電話で問い合わせる'},
             {'text':'メールで問い合わせる'},
        ],
        'btn':'LINEで問い合わせる',
        'att':'対応エリア',
        'img':'/img/cta01.svg',
        'bgtitle':'島根県出雲市の周辺地域',
        'text':'出雲市、大田市、雲南市、川本町、美郷町、飯南町、邑南町、安来市、奥出雲町、松江市'
    }
]
const indexelecticialData = [
    {
        'articles':
        [
        { 'img':'/img/index_img18.svg',
        'title':'ご家庭向け電気工事',
        'text':'新築やリフォームに伴う電気配線工事からエアコンやエコキュートの設置、\nTVアンテナ工事など、幅広く対応いたします。',
        'btn':'/img/icon_arrow.svg'},
        { 'img':'/img/index_img19.svg',
        'title':'船舶向け電気工事',
        'text':'漁船や船舶の無線機器やレーダー、集魚灯の設置・修理も対応。商品のご提案から、\n設置、アフターフォローまで安心の一貫対応。',
        'btn':'/img/icon_arrow.svg'},
    ],
    'btnbottom':'コーポレートサイトを見る'
       
    }
]
const footerData = [
    {'span':'知野見電気',
      'info':'〒699-0904 島根県出雲市多伎町口田儀855-1 \n営業時間｜8:00～17:00 \n定休日｜日曜'  ,
      'nav':[
        {'text':'ホーム'},
        {'text':'制御盤の製作・修正'},
        {'text':'ご依頼の流れ'},
        {'text':'その他電気工事'},
        {'text':'お客様の声'},
        {'text':'よくある質問'},
        {'text':'会社概要'},
        {'text':'お問い合わせ'},
      ],
      'copyright':'  © 知野見電気. All Rights Reserved.'
    }
]

// API trả về dữ liệu header
app.get('/api', (req, res) => {
  res.json({ headerData ,footerData,indexelecticialData,ctaData,purpoiseData,reasonsData});
});

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
