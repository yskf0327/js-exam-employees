// 社員データ（このデータは変更しないこと）
const employees = [
  { id: 1001, name: { last: "佐藤", first: "一郎" }, birthDate: "1985-05-20", department: "開発部", licenses: ["応用情報技術者", "AWS SAA"], basicSalary: 4, image: "1001.jpg" },
  { id: 1002, name: { last: "鈴木", first: "花子" }, birthDate: "1992-08-15", department: "インフラ部", licenses: ["LinuC Level2", "CKA"], basicSalary: 4, image: "1002.jpg" },
  { id: 1003, name: { last: "田中", first: "次郎" }, birthDate: "1998-12-01", department: "デザイン部", licenses: ["ウェブデザイン技能検定1級"], basicSalary: 3, image: "1003.jpg" },
  { id: 1004, name: { last: "高橋", first: "美咲" }, birthDate: "2001-03-10", department: "デザイン部", licenses: ["色彩検定1級", "アドビ認定プロフェッショナル"], basicSalary: 2, image: "1004.jpg" },
  { id: 1005, name: { last: "伊藤", first: "健太" }, birthDate: "1990-11-25", department: "開発部", licenses: ["Java Gold", "基本情報技術者"], basicSalary: 3, image: "1005.jpg" },
  { id: 1006, name: { last: "渡辺", first: "恵" }, birthDate: "1988-07-14", department: "UI/UX部", licenses: ["人間中心設計スペシャリスト"], basicSalary: 4, image: "1006.jpg" },
  { id: 1007, name: { last: "中村", first: "拓也" }, birthDate: "1995-02-28", department: "開発部", licenses: ["Scrum Master", "PMP"], basicSalary: 5, image: "1007.jpg" },
  { id: 1008, name: { last: "小林", first: "優子" }, birthDate: "1999-09-09", department: "デザイン部", licenses: [], basicSalary: 2, image: "1008.jpg" },
  { id: 1009, name: { last: "加藤", first: "浩" }, birthDate: "1982-04-18", department: "R&D部", licenses: ["データベーススペシャリスト", "Pythonエンジニア認定"], basicSalary: 5, image: "1009.jpg" },
  { id: 1010, name: { last: "吉田", first: "麻衣" }, birthDate: "2000-06-30", department: "インフラ部", licenses: ["AWS SAP", "Azure Expert"], basicSalary: 4, image: "1010.jpg" },
  { id: 1011, name: { last: "山田", first: "隆" }, birthDate: "1978-12-12", department: "デザイン部", licenses: ["ウェブデザイン技能検定2級"], basicSalary: 3, image: "1011.jpg" },
  { id: 1012, name: { last: "佐々木", first: "彩" }, birthDate: "1993-10-05", department: "開発部", licenses: [], basicSalary: 3, image: "" },
  { id: 1013, name: { last: "松本", first: "大輔" }, birthDate: "1997-01-22", department: "モバイル部", licenses: ["Google Professional Android Dev"], basicSalary: 3, image: "1013.jpg" },
  { id: 1014, name: { last: "井上", first: "亮" }, birthDate: "1991-05-15", department: "UI/UX部", licenses: ["人間中心設計スペシャリスト", "色彩検定2級"], basicSalary: 3, image: "1014.jpg" },
  { id: 1015, name: { last: "木村", first: "さくら" }, birthDate: "2002-08-08", department: "開発部", licenses: ["基本情報技術者"], basicSalary: 1, image: "" }
];

// 基本給テーブル (グレード: 金額)
const SALARY_TABLE = {
  1: 180000,
  2: 260000,
  3: 340000,
  4: 420000,
  5: 520000
};

// 初期化処理
document.addEventListener('DOMContentLoaded', () => {

  // 一覧表示 (最初は全員)
  renderTable();

  // TODO: 部署フィルターのイベント処理を実装する
  // 1. select要素を取得
  // 2. changeイベントを監視
  // 3. 選択された部署でemployeesをfilterする
  // 4. filterした配列をrenderTableに渡して再描画

  // モーダル閉じるボタンのイベント設定（未実装）
  const dialog = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      // TODO: モーダルを閉じる処理を実装する
    });
  }
});

/**
 * 社員一覧テーブルを描画する
 * @param {Array} list - 表示する社員リスト (引数がない場合は全社員)
 */
function renderTable(list = employees) {
  const listBody = document.getElementById('employee-list');
  listBody.innerHTML = '';

  // TODO: 引数で受け取ったlist配列をループして、テーブルに行を追加する処理を実装する
  // calculateAge関数を使って年齢を表示すること
  // 詳細ボタンには onclick="showDetail(社員ID)" を設定すること
}

/**
 * 詳細モーダルを表示する
 * @param {number} id - 社員ID
 */
function showDetail(id) {
  // TODO: 以下の処理を実装する
  // 1. 引数のidと一致する社員データをemployees配列から検索する
  // 2. 検索した社員データをモーダル内の各HTML要素にセットする
  //    - 名前、部署、生年月日など
  //    - 年齢は calculateAge関数で計算
  //    - 総支給額は calculateTotalSalary関数で計算
  //    - 資格リストはループしてliタグを生成
  // 3. モーダルを表示する (dialog.showModal())
}

/**
 * 年齢を計算する
 * @param {string} birthDateString - YYYY-MM-DD
 * @returns {number} 年齢
 */
function calculateAge(birthDateString) {
  // TODO: 生年月日から現在の年齢を計算して返す
  return 0; // 仮の戻り値
}

/**
 * 総支給額を計算する
 * @param {number} grade - 基本給グレード (1-5)
 * @param {number} licenseCount - 資格数
 * @returns {number} 総支給額
 */
function calculateTotalSalary(grade, licenseCount) {
  // TODO: 以下の計算式で支給額を求めて返す
  // 基本給 = SALARY_TABLEからgradeに対応する金額を取得
  // 資格手当 = licenseCount * 5000
  // 総支給額 = 基本給 + 資格手当
  return 0; // 仮の戻り値
}
