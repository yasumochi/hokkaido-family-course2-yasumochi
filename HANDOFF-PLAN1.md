# 🏛️ プラン①「札幌レトロ建築コース」ハンドオフ資料

> このファイルは、こうきママさんが旅のしおりサイトに掲載するための「やすもちプラン①」の完全パッケージです。

---

## 🛠️ こうきママさんへ：実装手順（5ステップ）

サイトへの反映方法をシンプルにまとめました。所要時間 約10〜15分。

### ステップ1：course-data-yasumochi.js を取得（または更新）

以下のいずれかで最新の course-data-yasumochi.js を入手してください👇

**A. 既にこうきママさんのサイトリポジトリ内に course-data-yasumochi.js がある場合**
→ ファイル全体をGitHubの最新版で上書き：
```
https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/course-data-yasumochi.js
```

**B. 部分的に stay-01 だけ取り込む場合**
→ 下記「📦 course-data-yasumochi.js のエントリ」セクションのオブジェクトをコピーして、既存ファイルに追加（または既存の stay-01 を置き換え）

### ステップ2：image URL の参照方法を確認

各コースに以下のフィールドが含まれています：

- `image`：ヒーロー画像（メイン）1枚のURL
- `images`：カルーセル用画像 5枚の配列（各要素は `{step, url}`）

サイトのテンプレートで `course.image` と `course.images` を参照すれば、画像はGitHubから自動配信されます。
**画像ファイルをこうきママさん側のサイトにコピーする必要はありません**（外部参照でOK）。

> 💡 もし「自分のサイト内に画像を置きたい」場合：
> 上記URLから画像をダウンロード → こうきママさんサイトの `images/` フォルダに配置 → course-data の URL をローカルパス（例：`/images/yasumochi-course1.png`）に書き換え

### ステップ3：「プラン詳細を見る」ボタンの遷移先設定

プラン①の詳細ページボタンは、こちらに遷移する設定にしてください：

```
https://hokkaido-family-course2-yasumochi.pages.dev/#plan1
```

このページには、詳細スケジュール（時刻＋スポット名＋Google Maps地図リンク）、店舗詳細情報、空港アクセス、3家族の段取りガイドなどフル情報が掲載されています。

### ステップ4：プレビューで確認

ローカルプレビュー（または開発環境）で、プラン①が下記の通り表示されることをご確認ください：

- ✅ タイトル：「1泊-01 札幌レトロ建築コース」
- ✅ サブタイトル：「乳幼児3家族10〜12名で巡る、札幌の歴史と建築」
- ✅ バッジ：1泊2日・一泊・公共交通機関・標準・札幌市内・乳幼児・室内派
- ✅ ヒーロー画像：赤れんが庁舎の前で家族散歩（油絵タッチ）
- ✅ カルーセル：5枚（札幌駅 → 赤れんが → ファクトリー → ディナー → 北菓楼）
- ✅ POINT：おすすめポイント 5つ（note フィールドより）
- ✅ ステップ表示：11ステップ（時刻付き）
- ✅ 「プラン詳細を見る」ボタン → やすもちpages.devに遷移

### ステップ5：本番デプロイ＆ご連絡

本番反映が完了したら、やすもちまでひと言いただけると嬉しいです🙏
（その後の修正・他プラン追加のスケジュール調整にも役立ちます）

---

## ❓ よくある質問

**Q1: image / images フィールドは必須ですか？**
A: image（ヒーロー）は必須ですが、images（カルーセル）はサイトが対応していれば使用、対応してなければ image だけ使えばOKです。

**Q2: 画像をローカルに置きたい / GitHubの外部参照では遅い**
A: 上記URLから画像をダウンロードして、こうきママさんサイトの `images/` に配置してください。その場合、course-data の URL をローカルパスに書き換えれば動作します。

**Q3: stay-01 だけでなく全コース（stay-01〜stay-10 + bonus-01）も反映したい**
A: course-data-yasumochi.js の全体（GitHub上の最新版）をそのまま使えば、すべての17コースが反映されます。

**Q4: POINTバッジの色やレイアウトを変えたい**
A: こうきママさんサイト側のテンプレートで自由に調整いただいて構いません。やすもち側でこだわりはありません。

**Q5: 修正・追加リクエストはどこへ？**
A: やすもちのリベシティDM、または LINE までお願いします。

---

---

## 📋 基本情報

| 項目 | 内容 |
|---|---|
| **コースID** | `stay-01` |
| **作者** | やすもち（札幌在住・一児の父） |
| **タイトル** | 1泊-01 札幌レトロ建築コース |
| **サブタイトル** | 乳幼児3家族10〜12名で巡る、札幌の歴史と建築 |
| **期間** | 1泊2日（2026年7月10日金〜11日土） |
| **対象年齢** | 乳幼児（0〜3歳） |
| **エリア** | 札幌市内 |
| **交通手段** | 公共交通機関 |
| **予算感** | 標準 |
| **スタイル** | 室内派 |
| **タイミング** | 交流会本番前日＋本番日 |

---

## 🌟 おすすめポイント（POINT 5つ）

1. **札幌の歴史を象徴する2大建築**（赤れんが庁舎・サッポロファクトリー）を1日で巡れる
2. **2025年7月リニューアル直後**の赤れんが庁舎で最新の札幌を体験
3. **中学生以下入館無料**で家族3組10〜12名でも経済的
4. **全観光スポット屋内＋授乳室完備**で雨でも安心
5. **ホテルレストラン個室（4〜30名対応）**で3家族12名がゆったり食事可能

---

## 🗓️ スケジュール

### 1日目（7/10 金）

| 時刻 | 内容 | 移動 |
|---|---|---|
| 9:30 | 新千歳空港着 | JR快速エアポート 40分 |
| 11:00 | 札幌駅集合（南口） | チ・カ・ホ徒歩5分 |
| 11:30 | ランチ：北海道食市場 丸海屋 日本生命札幌ビル店（12〜18名個室） | 徒歩2〜3分 |
| 13:30 | 赤れんが庁舎見学（中学生以下無料・八角塔特別観覧） | タクシー5分 |
| 15:00 | サッポロファクトリー（屋内アトリウム＆プレイルーム） | 各家族ホテルへ |
| 16:30 | 各家族ホテル休憩・お昼寝 | 18:00集合 |
| 18:00 | ディナー：フォーシーズン（ホテルニューオータニイン札幌・和洋コース） | 解散 |
| 20:00 | 解散 | – |

### 2日目（7/11 土・交流会本番）

| 時刻 | 内容 | 移動 |
|---|---|---|
| 8:00 | ホテル朝食 | 9:30集合 |
| 9:30 | 集合（北菓楼前） | – |
| 10:00 | 北菓楼 札幌本館（図書館風カフェ＆お土産） | 徒歩2分 |
| 11:30 | 大丸札幌で軽ランチ＆お土産買い足し | 12:30会場 |
| 12:30 | 交流会会場へ | – |

---

## 🎨 ヒーロー画像（メインビジュアル）

**URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course1.png

- 油絵タッチ・赤れんが庁舎の前で家族散歩シーン
- 複数のベビーカー・小さな子どもが描かれていて、まさに「乳幼児3家族」のイメージ
- 1280px幅・PNG形式

---

## 🖼️ カルーセル画像（全5枚・スポット別）

カルーセル表示用の画像セットです。各スポットに最適な画像を割り当てています。

### 1. 札幌駅集合
- **URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course5.png
- **キャプション**: 札幌駅集合
- 内容: 札幌駅前の家族風景（油絵タッチ）

### 2. 赤れんが庁舎（メイン）
- **URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course1.png
- **キャプション**: 赤れんが庁舎
- 内容: 赤れんが庁舎前で複数家族がベビーカー散歩

### 3. サッポロファクトリー
- **URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course3.png
- **キャプション**: サッポロファクトリー
- 内容: サッポロファクトリーのガラス屋根アトリウム

### 4. フォーシーズン ディナー
- **URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course6.png
- **キャプション**: フォーシーズン ディナー
- 内容: 高層ホテルレストランで家族食事

### 5. 北菓楼 札幌本館
- **URL**: https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course9.png
- **キャプション**: 北菓楼 札幌本館
- 内容: カフェで家族スイーツタイム

> 💡 すべて油絵タッチ・統一感のあるスタイルです。

> 📦 **course-data 内の `images` 配列**として上記URLを構造化済みです。
> kokimama さんサイトで `images` フィールドを参照すれば、カルーセル表示にそのまま使えます。

---

## 📦 course-data-yasumochi.js のエントリ

下記のオブジェクトが `course-data-yasumochi.js` 内の stay-01 エントリです。
そのままコピペ or 既存ファイル全体を取得可能です。

```javascript
{
  id: "stay-01",
  image: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course1.png",
  images: [
    { step: "札幌駅集合", url: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course5.png" },
    { step: "赤れんが庁舎", url: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course1.png" },
    { step: "サッポロファクトリー", url: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course3.png" },
    { step: "フォーシーズン ディナー", url: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course6.png" },
    { step: "北菓楼 札幌本館", url: "https://raw.githubusercontent.com/yasumochi/hokkaido-family-course2-yasumochi/main/images/course9.png" }
  ],
  creator: "やすもち",
  title: "1泊-01 札幌レトロ建築コース",
  subtitle: "乳幼児3家族10〜12名で巡る、札幌の歴史と建築",
  timing: "1泊2日",
  duration: "一泊",
  transport: "公共交通機関",
  budget: "標準",
  area: "札幌市内",
  age: "乳幼児",
  style: "室内派",
  note: "🌟 おすすめポイント | 札幌の歴史を象徴する2大建築（赤れんが庁舎・サッポロファクトリー）を1日で巡れる／2025年7月リニューアル直後の赤れんが庁舎で最新の札幌を体験／中学生以下入館無料で家族3組10〜12名でも経済的／全観光スポット屋内＋授乳室完備で雨でも安心／ホテルレストラン個室（4〜30名対応）で3家族12名がゆったり食事可能。",
  steps: [
    "9:30 新千歳空港着",
    "11:00 札幌駅集合",
    "11:30 丸海屋ランチ(12〜18名個室)",
    "13:30 赤れんが庁舎(中学生以下無料)",
    "15:00 サッポロファクトリー(屋内)",
    "16:30 ホテル休憩",
    "18:00 フォーシーズン ディナー",
    "翌8:00 ホテル朝食",
    "翌10:00 北菓楼 札幌本館",
    "翌11:30 大丸札幌 軽ランチ＆お土産",
    "翌12:30 交流会会場へ"
  ],
  legs: [
    "JR快速40分",
    "チ・カ・ホ徒歩5分",
    "徒歩2〜3分",
    "タクシー5分",
    "16:30ホテル",
    "18:00集合",
    "翌朝",
    "9:30集合",
    "徒歩2分",
    "12:30会場"
  ]
}
```

---

## 🔗 詳細ページ（プラン詳細を見る用）

**URL**: https://hokkaido-family-course2-yasumochi.pages.dev/#plan1

このページには下記が掲載されています👇

- 詳細スケジュール（時刻＋スポット名＋Google Maps地図リンク）
- 店舗詳細情報（住所・営業時間・予約方法）
- 新千歳空港からのアクセス・フライト目安
- 3家族で動くときの段取りガイド

「プラン詳細を見る」ボタンのリンク先として、このURLを使えば豊富な情報が見られます。

---

## 📨 こうきママさんへのお願い

1. **course-data-yasumochi.js** をご自身のサイトの該当場所に反映いただけますか？
2. プラン①の表示には、上記の **image URL（course1.png）** を使用してください
3. 「プラン詳細を見る」ボタンは、上記の**詳細ページURL**（#plan1）に飛ばしていただけると、ユーザーがフル情報を見られます
4. もし他のステップ用の画像（赤れんが・サッポロファクトリーの画像など）も必要であれば、リクエストください。追加で生成・提供します

---

## 🙏 質問・カスタマイズについて

- **「データ形式を変えたい」** → やすもちまでDM／LINEでご連絡ください
- **「他の画像が欲しい」** → リクエストいただければAI画像生成して追加します
- **「POINT を3つに絞りたい」「文章を短く」など** → 修正対応します

---

最終更新: 2026-06-11  
やすもち（札幌在住・一児の父）
リベシティプロフィール: https://libecity.com/user_profile/U3WQpbLkGEWoklxVk2Eji5hVZrP2
