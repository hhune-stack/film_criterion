type BodyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

type Article = {
  number: string;
  category: string;
  date: string;
  title: string;
  film: string;
  originalTitle: string;
  director: string;
  country: string;
  year: string;
  releaseNote: string;
  duration: string;
  image?: string;
  officialSite?: string;
  body: BodyBlock[];
  references: string[];
  author: {
    name: string;
    bio: string;
  };
  related: string[];
  themes: string[];
};

export const articles: Article[] = [
  {
    number: "#0001",
    category: "批評",
    date: "2026.09.05",
    title: "二人はどこで出会ったか",
    film: "死刑台のエレベーター",
    originalTitle: "Ascenseur pour l'échafaud",
    director: "ルイ・マル",
    country: "フランス",
    year: "1958",
    releaseNote: "",
    duration: "92",
    officialSite: "",
    themes: ["都市", "孤独", "時間"],
    image: "/images/0001.jpeg",

    body: [
      {
        type: "paragraph",
        text: "あまりにも完璧なシナリオ。このサスペンス映画よりも完璧な映画を自分は知らない。",
      },
      {
        type: "paragraph",
        text: "久しぶりに観返し、一番書くのに苦労した作品でもある。結論付けるのは時期尚早であると判断したので、一つの提案として読んでいただければ幸いである。",
      },
      {
        type: "paragraph",
        text: "ルイ･マルの長編デビュー作且つ最高傑作だ。『地下鉄のザジ』や『鬼火』、『さよなら子供たち』も悪くないが、『死刑台のエレベーター』には及ばず。そういった意味で彼はあまりにも早熟だったのだが、それはこの映画のシナリオが素晴らしすぎてしまったが故の弊害かもしれない。ジャンヌ･モローとモーリス･ロネが出演し、サウンドはマイルス･デイヴィス、カメラマンはアンリ･ドカエ。いやいや一本目でこれはあまりにも贅沢です。ルイ･マルに弱み握られていたんかってくらい豪華。",
      },

      {
        type: "heading",
        text: "あらすじ",
      },

      {
        type: "paragraph",
        text: "フロランス(モロー)とジュリアン(ロネ)は恋人関係であり、ジュリアンはフロランスの夫が社長を務める会社の社員である。二人は「邪魔者」を排除すべく、自殺と見せかけた殺人を画策する。殺害後カフェで落ち合う予定を立て、計画はうまくいく。が、犯行の際に使ったロープを忘れたことに気付き、会社に戻るジュリアン。エレベーターに乗った時に、電気を切られ(この日は金曜で警備人が平日最後の業務として行う。決してハプニングではない)、エレベーターに閉じ込められてしまう。",
      },

      {
        type: "heading",
        text: "二人はどこで出会ったか",
      },

      {
        type: "paragraph",
        text: "鑑賞する時のポイントは、「二人がどこで同じフレームの中に収まるか」である。同じフレームに入るためには二人の距離は近くなければいけない。しかし映画は二人を引き剥がし続ける。",
      },

      {
        type: "paragraph",
        text: "「電話」シーンからから始まる映画、二人は離れ離れの場所から愛を伝えあっているのだ(電話機はフロランスにとってはロネであり、顔に近づけて言葉を交わすショットはまるで愛撫しているかのようだ)。この「早く会いたい」という動機が90分通底すると、殺人にまつわるサスペンスは雲散霧消する。",
      },

      {
        type: "paragraph",
        text: "犯人は既に分かっているから、ここで起こるサスペンスは二人が捕まるかどうか であるが、本当にどうでも良くなってくる。どうでも良くなるというのは、サスペンスが弛緩してくるからなのだが、その弛緩した空隙にぬるっと闖入してくるのが、純粋性を獲得した単純なエモーションに他ならない。",
      },

      {
        type: "paragraph",
        text: "となると、この映画が目指している到達点は、サスペンスの非日常性によって観客を別世界へ連れ出すことよりも、特別な状況設定を始点とした普遍的なロマンスであるのが次第に判明してくる。",
      },

      {
        type: "heading",
        text: "世界とのチューニング",
      },

      {
        type: "paragraph",
        text: "『死刑台のエレベーター』におけるカメラは全知である。この二人が知らない出来事はカメラが映してくれるため、映画は人物に先立って世界を構築していく。しかし、この二人は何も知らない。",
      },

      {
        type: "paragraph",
        text: "エレベーターに閉じ込められているジュリアンはもとより、待ち合わせ場所に愛人が来ない以上、殺人が遂行されたのかすらも分からないフロランス。分からなさは、夜のパリの街を彷徨う時に最大化する。",
      },

      {
        type: "paragraph",
        text: "夜が明けると同時に新聞記事や周囲の眼によって徐々に状況が分かりはじめ、先だったカメラの情報に追いつこうと(別々に)行動をする。フロランスとジュリアンが互いに行っている行為は、世界とのチューニングだ。",
      },

      {
        type: "paragraph",
        text: "このチューニングこそが「知らないことを知ろうとする」行為そのものである。犯人が捕まるか、二人の愛は成就するかなどの結果はこの映画での興味の対象外で(サスペンス映画は上映時間全てが結果に従属する)、起きた出来事に対するリアクションやそれを受け入れていく過程での葛藤や停滞、従属と反抗が、若干25歳のルイ･マルが提示した世界との交流である。",
      },

      {
        type: "quote",
        text: "お前たち、世界って全然ままならないよな",
      },

      {
        type: "paragraph",
        text: "同じフレームの中に収まった二人をついぞ確認する時、我々はイメージのメディウム性について考えずにはいられない。",
      },

      {
        type: "paragraph",
        text: "過去を反芻しながら絶望の未来を憂いたフロランスが呟く「10年は長い……」はどれほど重みのあるモノローグであるか。",
      },
    ],

    references: [],

    author: {
      name: "著者名",
      bio: "映画について批評を書いています。",
    },

    related: ["#0002", "#0003"],
  },

  {
    number: "#0002",
    category: "批評",
    date: "2026.09.05",
    title: "都市のなかの孤独",
    film: "夜と霧",
    originalTitle: "Nuit et brouillard",
    director: "アラン・レネ",
    country: "フランス",
    year: "1955",
    releaseNote: "",
    duration: "32",
    officialSite: "",
    themes: ["記憶", "時間"],

    body: [
      {
        type: "paragraph",
        text: "ここに『夜と霧』についての批評本文が入ります。",
      },
      {
        type: "paragraph",
        text: "ここに二つ目の段落が入ります。",
      },
    ],

    references: [
      "参考文献がここに入ります。",
    ],

    author: {
      name: "著者名",
      bio: "映画について批評を書いています。",
    },

    related: ["#0001", "#0003"],
  },

  {
    number: "#0003",
    category: "批評",
    date: "2026.09.05",
    title: "見ることについて",
    film: "東京物語",
    originalTitle: "東京物語",
    director: "小津安二郎",
    country: "日本",
    year: "1953",
    releaseNote: "",
    duration: "136",
    officialSite: "",
    themes: ["身体", "視線", "孤独"],

    body: [
      {
        type: "paragraph",
        text: "ここに『東京物語』についての批評本文が入ります。",
      },
      {
        type: "paragraph",
        text: "ここに二つ目の段落が入ります。",
      },
    ],

    references: [
      "参考文献がここに入ります。",
    ],

    author: {
      name: "著者名",
      bio: "映画について批評を書いています。",
    },

    related: ["#0001", "#0002"],
  },
];