// =====================================================
// やすもち担当：スポット詳細データベース
// =====================================================
// 各スポットの詳細（見出し・オススメポイント・乳幼児設備・予算・DATA・公式）を定義。
// course-data-yasumochi.js の steps[] の文字列に含まれるキーワードで
// このDBを引けば、スポットごとに正しい本文・画像を表示できます。
//
// 使い方の例（こうきママさんサイト側）:
//   const spot = window.YASUMOCHI_SPOTS.find(s => stepName.includes(s.key));
//   spot.name / spot.image / spot.headline / spot.points / ...
//
// img のベースパス: /images/yasumochi/
// =====================================================

window.YASUMOCHI_SPOTS = [

  {
    key: "新千歳空港",
    name: "新千歳空港",
    image: "/images/yasumochi/airport.png",
    headline: "新千歳空港から札幌へは「JR快速エアポート」が最速！未就学児は運賃無料、ベビーカーもそのまま乗れて乳幼児連れも安心",
    points: [
      "札幌へは「JR快速エアポート」が一番ラク。到着ロビーから地下のJR駅まで徒歩約5分、札幌駅まで約40分・約15分間隔",
      "指定席「Uシート」（+840円）を予約すれば3家族でも座席を確保できて安心",
      "未就学児は運賃無料・ベビーカーもそのまま乗車OK・大きな荷物棚あり"
    ],
    baby: { nursing: "あり（2階以上のフロアに複数）", diaper: "あり（多数）", stroller: "あり（空港内・無料貸出）" },
    voice: "道外から赤ちゃん連れの長旅、おつかれさまです。まずはJRで座って一息。Uシートを予約すると3家族でも確実に座れますよ。",
    budget: "JR快速エアポート 大人1,150円／小学生580円／未就学児無料（Uシート+840円）",
    address: "北海道千歳市美々",
    tel: "0123-23-0111（総合案内）",
    hours: "JR始発〜最終 約15分間隔（時期により変動）",
    official: "https://www.new-chitose-airport.jp/ja/",
    map: "https://www.google.com/maps/search/?api=1&query=新千歳空港"
  },

  {
    key: "札幌駅",
    name: "JR札幌駅",
    image: "/images/yasumochi/sapporo-station.png",
    headline: "3家族の集合は南口「北海道四季彩館前」が分かりやすい！駅直結でベビーカー移動もラクラク",
    points: [
      "南口「北海道四季彩館前」は広くて目印になり、3家族の集合に最適",
      "コインロッカー（東・西改札外）に荷物を預けて身軽に",
      "パセオ地下1階のベビールームで授乳・おむつ替えができる"
    ],
    baby: { nursing: "あり（パセオ地下1階ベビールーム）", diaper: "あり", stroller: "周辺商業施設で貸出あり" },
    voice: "まず四季彩館前に集合と決めておくと、到着便がバラついても合流しやすいです。",
    budget: "－（集合場所）",
    address: "札幌市北区北6条西4丁目",
    tel: "－",
    hours: "店舗により異なる",
    official: "https://www.jr-tower.com/",
    map: "https://www.google.com/maps/search/?api=1&query=JR札幌駅"
  },

  {
    key: "丸海屋",
    name: "北海道食市場 丸海屋 日本生命札幌ビル店",
    image: "/images/yasumochi/maruumi.png",
    headline: "チ・カ・ホ直結！12〜18名の個室で3家族合同ランチ。北海道の海鮮を子連れでもゆったり",
    points: [
      "12〜18名用の個室が2室あり、3家族10〜12名で1部屋にゆったり",
      "地下歩行空間（チ・カ・ホ）直結で雨でもベビーカー移動がラク",
      "お子様連れ歓迎を公式に明示・ランチ約1,500円とお手頃"
    ],
    baby: { nursing: "近隣ビル内・要確認", diaper: "店内トイレ・要確認", stroller: "入店OK（要予約時確認）" },
    voice: "個室なら赤ちゃんが泣いても気兼ねなし。海鮮はもちろん、子どもが食べやすいメニューもあります。",
    budget: "ランチ 約1,500円",
    address: "札幌市中央区北3条西4-1-1 日本生命札幌ビル1F",
    tel: "予約はHotPepper or 電話",
    hours: "ランチ 11:00〜15:00（LO 14:30）",
    official: "https://www.hotpepper.jp/strJ000678671/",
    map: "https://www.google.com/maps/search/?api=1&query=北海道食市場+丸海屋+日本生命札幌ビル店"
  },

  {
    key: "赤れんが",
    name: "北海道庁旧本庁舎（赤れんが庁舎）",
    image: "/images/yasumochi/akarenga.png",
    headline: "2025年7月リニューアル！中学生以下無料で、八角塔から札幌を一望。ベビーカーでも見学できる歴史建築",
    points: [
      "1888年築・2025年7月リニューアル直後＝最新の札幌を体験できる",
      "中学生以下は入館無料、家族3組10〜12名でも経済的",
      "スロープ・エレベーター・授乳室完備でベビーカーでも安心"
    ],
    baby: { nursing: "あり", diaper: "あり（多目的トイレ）", stroller: "入館OK・スロープあり" },
    voice: "八角塔から見下ろす札幌の街並みは家族写真にぴったり。赤レンガをバックに記念撮影を。",
    budget: "一般300円／大学・高校生200円／中学生以下無料",
    address: "札幌市中央区北3条西6丁目",
    tel: "－",
    hours: "8:45〜21:00（最終入館20:30）",
    official: "https://www.pref.hokkaido.lg.jp/ss/sum/akarenga/",
    map: "https://www.google.com/maps/search/?api=1&query=北海道庁旧本庁舎+赤れんが庁舎"
  },

  {
    key: "サッポロファクトリー",
    name: "サッポロファクトリー",
    image: "/images/yasumochi/factory.png",
    headline: "全館屋内でつながる複合施設！3条館2階の無料プレイルームで子どもがたっぷり遊べる",
    points: [
      "全館が屋内連結で、雨でも暑くてもベビーカーで快適に回れる",
      "3条館2階に無料プレイルーム＆ベビー休憩室（授乳室・おむつ替え）",
      "コインリターン式ベビーカー貸出あり・アトリウムで休憩も"
    ],
    baby: { nursing: "あり（3条館2階）", diaper: "あり（3条館2階）", stroller: "貸出あり（コインリターン式）" },
    voice: "子どもをプレイルームで遊ばせて、大人はアトリウムのカフェでひと息。分担できるのが助かります。",
    budget: "入場無料（店舗により別途）",
    address: "札幌市中央区北2条東4丁目",
    tel: "011-207-5000",
    hours: "店舗により異なる",
    official: "https://sapporofactory.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=サッポロファクトリー"
  },

  {
    key: "フォーシーズン",
    name: "レストラン フォーシーズン（ホテルニューオータニイン札幌）",
    image: "/images/yasumochi/hotel-dinner.png",
    headline: "地下鉄さっぽろ駅徒歩1分！個室4〜30名対応で3家族12名がゆったり。お子様メニューありの和洋コース",
    points: [
      "テーブル個室・座敷個室があり、3家族12名なら1部屋に余裕",
      "お子様メニューあり・ベビーカー入店OK・バリアフリー対応",
      "季節ごとに変わる和食・洋食のディナーコースを北海道食材で"
    ],
    baby: { nursing: "ホテル内・要確認", diaper: "あり（ホテル内）", stroller: "入店OK・バリアフリー" },
    voice: "ホテルの個室なら、赤ちゃんが泣いても周りを気にせずゆっくり。初日の夜のごほうびに。",
    budget: "ディナーコース（季節により変動）",
    address: "札幌市中央区北2条西1-1 ホテルニューオータニイン札幌内",
    tel: "予約は楽天ぐるなび/TableCheck/ホテル直接（3日前まで）",
    hours: "ディナー時間帯（要確認）",
    official: "https://www.newotani.co.jp/inn-sapporo/restaurant/",
    map: "https://www.google.com/maps/search/?api=1&query=ホテルニューオータニイン札幌+フォーシーズン"
  },

  {
    key: "北菓楼",
    name: "北菓楼 札幌本館",
    image: "/images/yasumochi/kitakaro.png",
    headline: "1926年築の旧道立図書館をリノベ！6,000冊の本棚カフェで北海道銘菓スイーツを",
    points: [
      "天井まで届く本棚に約6,000冊。吹き抜けの開放的な図書館風カフェ",
      "シュークリーム・バウムクーヘンなど北菓楼名物をその場で",
      "1階ショップでお土産もまとめ買いできる"
    ],
    baby: { nursing: "要確認", diaper: "あり（要確認）", stroller: "入店は予約時に要確認" },
    voice: "本棚に囲まれた特別な空間。子どもが絵本を眺めている間に、大人はゆっくりお茶できます。",
    budget: "カフェ 1,000〜1,500円程度",
    address: "札幌市中央区北1条西5丁目1-2",
    tel: "0800-500-0318",
    hours: "1Fショップ10:00〜18:00／2Fカフェ11:00〜16:00（LO14:00・火曜定休）",
    official: "https://www.kitakaro.com/ext/tenpo/sapporohonkan.html",
    map: "https://www.google.com/maps/search/?api=1&query=北菓楼+札幌本館"
  },

  {
    key: "大丸",
    name: "大丸札幌",
    image: "/images/yasumochi/shopping.png",
    headline: "JR札幌駅直結！地下1階で北海道のお土産が一気に揃う。4階にベビー休憩室あり",
    points: [
      "地下1階に白い恋人・六花亭・ロイズなど北海道銘菓が集約",
      "札幌駅直結でベビーカー移動がラク・雨でも濡れない",
      "4階にベビー休憩室・授乳室・おむつ替え台あり"
    ],
    baby: { nursing: "あり（4階）", diaper: "あり（4階）", stroller: "入店OK・貸出あり" },
    voice: "お土産は大丸の地下で一気に。帰りの荷物を最後にまとめられて効率的です。",
    budget: "お土産・軽食",
    address: "札幌市中央区北5条西4-7",
    tel: "011-828-1111",
    hours: "10:00〜20:00（フロアにより異なる）",
    official: "https://www.daimaru.co.jp/sapporo/",
    map: "https://www.google.com/maps/search/?api=1&query=大丸札幌"
  },

  {
    key: "海KAI",
    name: "海鮮食堂 海 KAI 札幌駅北口店",
    image: "/images/yasumochi/kaisen.png",
    headline: "全席掘りごたつで赤ちゃんを横に寝かせOK！最大54名対応、北海道海鮮をお手頃に",
    points: [
      "全席掘りごたつで、赤ちゃんを寝かせながら食事できる",
      "大小個室・最大54名対応で3家族12名でも個室確保しやすい",
      "JR札幌駅北口から徒歩2分の好アクセス"
    ],
    baby: { nursing: "要確認", diaper: "要確認", stroller: "入店OK（要確認）" },
    voice: "掘りごたつは赤ちゃんを寝かせられるので本当に助かります。海鮮丼が子どもにも好評でした。",
    budget: "ランチ手頃／ディナー中価格帯",
    address: "JR札幌駅 北口 徒歩2分",
    tel: "予約はHotPepper",
    hours: "ランチ11:30〜14:30／ディナー17:00〜23:00",
    official: "https://www.hotpepper.jp/SA41/Y505/X501/dncLT0096/U031/",
    map: "https://www.google.com/maps/search/?api=1&query=海鮮食堂+海+KAI+札幌駅北口店"
  },

  {
    key: "JRタワー",
    name: "JRタワー展望室T38",
    image: "/images/yasumochi/jrtower.png",
    headline: "地上160m・38階から札幌を360度一望！幼児300円、駅直結で家族の記念写真スポット",
    points: [
      "38階・地上160mから札幌の街並み・遠くの山々まで一望",
      "JR札幌駅直結（イースト6階で受付）でアクセス抜群",
      "幼児300円とお手頃、家族3組の集合写真スポットに"
    ],
    baby: { nursing: "周辺施設・要確認", diaper: "あり（要確認）", stroller: "入場OK（要確認）" },
    voice: "晴れた日のパノラマは圧巻。夕方なら夕焼けに染まる札幌も見られて、子どもも大人も大喜びです。",
    budget: "大人720円／中・高校生500円／小学生・幼児300円",
    address: "JR札幌駅直結（JRタワー イースト6階で受付、38階展望室）",
    tel: "011-209-5500",
    hours: "10:00〜22:00（最終入場21:30）",
    official: "https://www.jr-tower.com/t38",
    map: "https://www.google.com/maps/search/?api=1&query=JRタワー展望室T38"
  },

  {
    key: "じぶんどき",
    name: "全席個室 じぶんどき 札幌駅前店",
    image: "/images/yasumochi/hotel-dinner.png",
    headline: "全席完全個室の京風和食！赤ちゃんの泣き声を気にせず3家族で一部屋に",
    points: [
      "全席完全個室で、赤ちゃんが泣いても周りを気にせず食事できる",
      "京風創作和食の落ち着いた雰囲気で、初日の夜を上品に",
      "3家族12名でも対応可・飲み放題プランも豊富"
    ],
    baby: { nursing: "要確認", diaper: "要確認", stroller: "入店は要確認" },
    voice: "完全個室は乳幼児連れの強い味方。泣いても大丈夫という安心感で、親もリラックスできます。",
    budget: "ディナー 4,000円前後〜",
    address: "札幌駅前エリア（予約時に確認）",
    tel: "予約はHotPepper",
    hours: "ランチ・ディナー（要確認）",
    official: "https://www.hotpepper.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=じぶんどき+札幌駅前店"
  },

  {
    key: "中島公園",
    name: "中島公園・中島児童会館",
    image: "/images/yasumochi/nakajima.png",
    headline: "緑豊かな都市公園でベビーカー散策！日本最古の公立児童会館で子どもも遊べる",
    points: [
      "池や緑が美しく、舗装路でベビーカー散策・芝生でピクニックも",
      "中島児童会館は日本最古の公立児童会館で、子どもが遊べる",
      "観光客が少なく、地元の静かな札幌を体感できる"
    ],
    baby: { nursing: "児童会館内・要確認", diaper: "あり（要確認）", stroller: "OK・舗装路で歩きやすい" },
    voice: "観光地の喧騒を離れて、家族でのんびり。芝生にレジャーシートを広げてピクニックも気持ちいいです。",
    budget: "無料",
    address: "札幌市中央区中島公園（地下鉄南北線「中島公園駅」すぐ）",
    tel: "－",
    hours: "公園は常時／児童会館9:00〜17:00",
    official: "https://www.sapporo-park.or.jp/nakajima/",
    map: "https://www.google.com/maps/search/?api=1&query=中島公園+札幌"
  },

  {
    key: "北大",
    name: "北海道大学キャンパス・北大総合博物館",
    image: "/images/yasumochi/hokudai.png",
    headline: "札幌駅北口徒歩5分！ポプラ並木をベビーカー散歩、無料の博物館は雨でも安心",
    points: [
      "ポプラ並木・クラーク像など、整備された道でベビーカー散歩◎",
      "北大総合博物館は入館無料＋屋内で、雨でもコスパも安心",
      "緑陰が多く、乳幼児の外気浴・休憩にぴったり"
    ],
    baby: { nursing: "博物館内・要確認", diaper: "あり（博物館）", stroller: "OK・整備された道" },
    voice: "広いキャンパスをベビーカーでのんびり。緑の中を歩くだけで気持ちよく、博物館は無料なのも嬉しいです。",
    budget: "無料（キャンパス・博物館とも）",
    address: "札幌市北区北8条西5丁目（JR札幌駅 北口から徒歩5分）",
    tel: "－",
    hours: "博物館10:00〜17:00（金曜〜21:00・月曜休館）",
    official: "https://www.museum.hokudai.ac.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=北海道大学+札幌キャンパス"
  },

  {
    key: "二条市場",
    name: "二条市場",
    image: "/images/yasumochi/nijoichiba.png",
    headline: "約128年の歴史を持つ市場で朝海鮮丼！「これぞ北海道」の活気を家族で体感",
    points: [
      "海鮮丼店は朝8時前から営業、新鮮な北海道の朝を味わえる",
      "約60店舗が並び、市場の活気を家族で体感できる",
      "大通・すすきの・バスセンター前駅から徒歩10分以内"
    ],
    baby: { nursing: "なし（周辺施設利用）", diaper: "なし（周辺施設利用）", stroller: "通路が狭め・要現地確認" },
    voice: "早起きして市場の朝ごはん。子どもには白ごはんにいくらを少しのせると喜びますよ。",
    budget: "海鮮丼 1,500〜3,000円程度",
    address: "札幌市中央区南3条東1丁目",
    tel: "－",
    hours: "市場7:00〜18:00／飲食6:00〜21:00（店舗による）",
    official: "https://nijomarket.com/",
    map: "https://www.google.com/maps/search/?api=1&query=二条市場+札幌"
  },

  {
    key: "ディンタイフォン",
    name: "鼎泰豊（ディンタイフォン）札幌ステラプレイス店",
    image: "/images/yasumochi/factory.png",
    headline: "世界的に有名な台湾点心の名店！キッズメニューあり・ネット予約OKで子連れに最適",
    points: [
      "小籠包・チャーハン・担々麺など取り分けやすいメニューが豊富",
      "キッズメニューあり・「子連れに最適」と評判",
      "ネット予約OK（コース・最大8名）、3家族なら2部屋に分けて予約"
    ],
    baby: { nursing: "ステラプレイス6Fベビーケアルーム", diaper: "あり（6F）", stroller: "入店は予約時に要確認" },
    voice: "有名チェーンの安心感。小籠包を家族でシェアでき、はじめての札幌の1食目にぴったりです。",
    budget: "ランチ 1,500〜2,500円程度",
    address: "札幌市中央区北5条西2丁目 札幌ステラプレイス センター6F",
    tel: "011-209-5274",
    hours: "11:00〜22:30（LO21:00）",
    official: "https://yoyaku.toreta.in/dintaifung-sapporo",
    map: "https://www.google.com/maps/search/?api=1&query=鼎泰豊+札幌ステラプレイス店"
  },

  {
    key: "みのるダイニング",
    name: "みのるダイニング 札幌ステラプレイス",
    image: "/images/yasumochi/shopping.png",
    headline: "道産食材の和洋食ビュッフェ！少しずつ取り分けられて、離乳食卒業期〜の機嫌取りに最強",
    points: [
      "北広島「くるるの杜」の野菜など道産食材のビュッフェ",
      "好きなものを少しずつ取れて、幅広い年齢の子どもに対応",
      "ステラプレイス6Fベビーケアルームが同フロアで安心"
    ],
    baby: { nursing: "あり（6Fベビーケアルーム）", diaper: "あり（6F）", stroller: "店内が広くないため要確認" },
    voice: "子どもが「これ食べたい」を選べるビュッフェは本当に便利。お年寄りも自分のペースで食べられます。",
    budget: "ランチ 1,500〜2,000円程度",
    address: "札幌ステラプレイス センター6F",
    tel: "－（ランチは予約不可、11:30開店直後推奨）",
    hours: "11:00〜（LO・閉店は要確認）",
    official: "https://www.minoriminoru.jp/sappolo/",
    map: "https://www.google.com/maps/search/?api=1&query=みのるダイニング+札幌ステラプレイス"
  },

  {
    key: "SKY J",
    name: "SKY J（JRタワーホテル日航札幌・35F）",
    image: "/images/yasumochi/hotel-dinner.png",
    headline: "35階の絶景パノラマビュッフェ！個室もあり、3家族の特別な日の演出に",
    points: [
      "35階からの絶景を眺めながらのパノラマビュッフェ",
      "個室あり（最大10名・個室料別途）でゆったり",
      "記念日や久しぶりの集まりにふさわしい上質感"
    ],
    baby: { nursing: "ホテル内・要確認", diaper: "あり（ホテル内）", stroller: "入店は要確認" },
    voice: "35階の景色を見ながらの食事は、子どもも大人も大興奮。特別な思い出になります。",
    budget: "大人3,200円／小学生1,600円／幼児（4歳以上）600円",
    address: "札幌市中央区北5条西2丁目5 JRタワーホテル日航札幌35F",
    tel: "011-251-2222（完全予約制）",
    hours: "ランチ・ディナー（要確認）",
    official: "https://www.jrhotels.co.jp/tower/restaurant/skyj/",
    map: "https://www.google.com/maps/search/?api=1&query=SKY+J+JRタワーホテル日航札幌"
  },

  {
    key: "ひゃくや",
    name: "刺身と焼物 ひゃくや 札幌駅北口店",
    image: "/images/yasumochi/kaisen.png",
    headline: "全席個室の海鮮居酒屋！小学生以下無料、掘りごたつ完全個室で3家族夜の海鮮を満喫",
    points: [
      "掘りごたつの完全個室（扉・壁つき）で3家族でもゆったり",
      "小学生以下無料でお財布にやさしい",
      "JR札幌駅北口から徒歩2分・北海道の海鮮を夜に"
    ],
    baby: { nursing: "要確認", diaper: "あり（要確認）", stroller: "入店は要確認" },
    voice: "完全個室で小学生以下無料はありがたい。掘りごたつなので赤ちゃんを寝かせられます。",
    budget: "ディナー 3,000〜5,000円程度（小学生以下無料）",
    address: "札幌市北区北9条西3丁目 ノルテプラザ1F",
    tel: "予約はHotPepper",
    hours: "17:00〜23:30（ディナーのみ）",
    official: "https://www.hotpepper.jp/strJ001146377/",
    map: "https://www.google.com/maps/search/?api=1&query=刺身と焼物+ひゃくや+札幌駅北口店"
  },

  {
    key: "六花亭",
    name: "六花亭 札幌本店",
    image: "/images/yasumochi/sweets.png",
    headline: "北海道老舗菓子店の本店！2階喫茶室では来店者限定スイーツが楽しめる",
    points: [
      "マルセイバターサンド・ストロベリーチョコなど名物がずらり",
      "2階喫茶室は来店者限定の特別メニューあり",
      "JR札幌駅 南口から徒歩約3分の好アクセス"
    ],
    baby: { nursing: "要確認", diaper: "あり（要確認）", stroller: "入店は要確認" },
    voice: "喫茶室限定のスイーツは札幌に来たら一度は味わってほしい逸品。お土産もここで揃います。",
    budget: "喫茶 600〜1,200円程度",
    address: "札幌市中央区北4条西6丁目3-3",
    tel: "0120-12-6666",
    hours: "1Fショップ9:30〜19:00／2F喫茶室10:30〜17:30（LO17:00）",
    official: "https://www.rokkatei.co.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=六花亭+札幌本店"
  },

  {
    key: "四季花まる",
    name: "四季 花まる すすきの店",
    image: "/images/yasumochi/kaisen.png",
    headline: "北海道の人気回転寿司！すすきの店は個室の小上がりがあり、授乳しやすく乳幼児連れも安心",
    points: [
      "「根室花まる」の姉妹店で、ネタは本格派の回転寿司",
      "すすきの店は個室の小上がり席あり、授乳ケープでの授乳もしやすい",
      "全店舗ベビーカー入店OK・店内トイレにおむつ交換台"
    ],
    baby: { nursing: "個室の小上がりで対応可", diaper: "あり（店内トイレ）", stroller: "入店OK" },
    voice: "小上がりの個室は赤ちゃんを寝かせられて本当にラク。回転寿司なので子どもも喜びます。18時入店なら混雑前で安心。",
    budget: "ディナー 1人2,000〜3,500円程度",
    address: "札幌市中央区南4条西2丁目2-4 レコルトサッポロ2F（地下鉄豊水すすきの駅すぐ）",
    tel: "011-520-0870（ネット予約 or 電話）",
    hours: "11:00〜22:00頃（要確認）",
    official: "https://www.sushi-hanamaru.com/store/details/s07.html",
    map: "https://www.google.com/maps/search/?api=1&query=四季+花まる+すすきの店"
  },

  {
    key: "狸小路",
    name: "狸小路商店街",
    image: "/images/yasumochi/shopping.png",
    headline: "全長約900mのアーケード商店街！全天候型で雨でもベビーカーOK、お土産・食べ歩きも",
    points: [
      "アーケードで雨でも濡れず、ベビーカーでゆっくり歩ける",
      "お土産店・ドラッグストア・飲食店が集まり、買い忘れ調達に便利",
      "札幌の下町情緒も味わえる、地元感のあるスポット"
    ],
    baby: { nursing: "周辺商業施設利用", diaper: "周辺商業施設利用", stroller: "アーケードで歩きやすい" },
    voice: "アーケードだから天気を気にせず歩けます。お土産の買い忘れもここで調達。子どものおやつ探しも楽しいですよ。",
    budget: "お買い物・食べ歩き",
    address: "札幌市中央区南2・3条西1〜7丁目（大通駅・すすきの駅すぐ）",
    tel: "－",
    hours: "店舗により異なる",
    official: "https://www.tanukikoji.or.jp/",
    map: "https://www.google.com/maps/search/?api=1&query=狸小路商店街"
  },

  {
    key: "札幌三越",
    name: "札幌三越",
    image: "/images/yasumochi/shopping.png",
    headline: "大通駅直結の老舗百貨店！地下food売り場で北海道銘菓、ベビー休憩室も完備",
    points: [
      "地下food売り場で北海道のお土産・スイーツが揃う",
      "大通駅直結で雨でもベビーカー移動がラク",
      "ベビー休憩室・授乳室あり、買い物の合間に休憩できる"
    ],
    baby: { nursing: "あり（ベビー休憩室）", diaper: "あり", stroller: "入店OK・貸出あり" },
    voice: "大通駅直結なので雨でも安心。大丸とはまた違う品揃えで、お土産選びの選択肢が広がります。",
    budget: "お土産・軽食",
    address: "札幌市中央区南1条西3丁目8（地下鉄大通駅直結）",
    tel: "011-271-3311",
    hours: "10:00〜19:00（フロアにより異なる）",
    official: "https://www.mitsukoshi.mistore.jp/sapporo.html",
    map: "https://www.google.com/maps/search/?api=1&query=札幌三越"
  },

  {
    key: "さとらんど",
    name: "さっぽろ さとらんど（札幌市農業体験交流施設）",
    image: "/images/yasumochi/main.png",
    headline: "【なのぱぱさんおすすめ】入園無料の農業体験施設！ヒツジ・ヤギのエサやりや芝生ピクニック",
    points: [
      "入園無料で、ヒツジ・ヤギへのエサやり・野菜収穫体験ができる",
      "屋内キッズコーナー（食育×木育）で雨でも安心",
      "広大な芝生でピクニック、3家族の待ち合わせにもピッタリ"
    ],
    baby: { nursing: "あり（さとらんどセンター）", diaper: "あり", stroller: "利用OK" },
    voice: "（なのぱぱさん）ヒツジにエサやりするうちの子の笑顔が忘れられません！入園無料で3家族の集合にも便利です。",
    budget: "入園無料（体験プログラムは別途）",
    address: "札幌市東区丘珠町584-2（中心部から車で約30分）",
    tel: "011-787-0223",
    hours: "概ね9:00〜18:00（夏期・時期により変動）",
    official: "https://www.satoland.com/",
    map: "https://www.google.com/maps/search/?api=1&query=さとらんど+札幌市農業体験交流施設"
  }

];
