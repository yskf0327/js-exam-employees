// 社員データ（このデータは変更しないこと）
const employees = [
  { id: 1001, name: { last: "佐藤", first: "一郎" }, birthDate: "1985-05-20", department: "開発部", licenses: ["応用情報技術者", "AWS SAA"], basicSalary: 4 },
  { id: 1002, name: { last: "鈴木", first: "花子" }, birthDate: "1992-08-15", department: "インフラ部", licenses: ["LinuC Level2", "CKA"], basicSalary: 4 },
  { id: 1003, name: { last: "田中", first: "次郎" }, birthDate: "1998-12-01", department: "デザイン部", licenses: ["ウェブデザイン技能検定1級"], basicSalary: 3 },
  { id: 1004, name: { last: "高橋", first: "美咲" }, birthDate: "2001-03-10", department: "デザイン部", licenses: ["色彩検定1級", "アドビ認定プロフェッショナル"], basicSalary: 2 },
  { id: 1005, name: { last: "伊藤", first: "健太" }, birthDate: "1990-11-25", department: "開発部", licenses: ["Java Gold", "基本情報技術者"], basicSalary: 3 },
  { id: 1006, name: { last: "渡辺", first: "恵" }, birthDate: "1988-07-14", department: "UI/UX部", licenses: ["人間中心設計スペシャリスト"], basicSalary: 4 },
  { id: 1007, name: { last: "中村", first: "拓也" }, birthDate: "1995-02-28", department: "開発部", licenses: ["Scrum Master", "PMP"], basicSalary: 5 },
  { id: 1008, name: { last: "小林", first: "優子" }, birthDate: "1999-09-09", department: "デザイン部", licenses: [], basicSalary: 2 },
  { id: 1009, name: { last: "加藤", first: "浩" }, birthDate: "1982-04-18", department: "R&D部", licenses: ["データベーススペシャリスト", "Pythonエンジニア認定"], basicSalary: 5 },
  { id: 1010, name: { last: "吉田", first: "麻衣" }, birthDate: "2000-06-30", department: "インフラ部", licenses: ["AWS SAP", "Azure Expert"], basicSalary: 4 },
  { id: 1011, name: { last: "山田", first: "隆" }, birthDate: "1978-12-12", department: "デザイン部", licenses: ["ウェブデザイン技能検定2級"], basicSalary: 3 },
  { id: 1012, name: { last: "佐々木", first: "彩" }, birthDate: "1993-10-05", department: "開発部", licenses: [], basicSalary: 3 },
  { id: 1013, name: { last: "松本", first: "大輔" }, birthDate: "1997-01-22", department: "モバイル部", licenses: ["Google Professional Android Dev"], basicSalary: 3 },
  { id: 1014, name: { last: "井上", first: "亮" }, birthDate: "1991-05-15", department: "UI/UX部", licenses: ["人間中心設計スペシャリスト", "色彩検定2級"], basicSalary: 3 },
  { id: 1015, name: { last: "木村", first: "さくら" }, birthDate: "2002-08-08", department: "開発部", licenses: ["基本情報技術者"], basicSalary: 1 }
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

  // フィルター変更時のイベント
  const filter = document.getElementById('department-filter');
  filter.addEventListener('change', () => {
    const dept = filter.value;
    // 部署が選択されていればフィルタリング、空なら全員
    if (dept) {
      const filtered = employees.filter(emp => emp.department === dept);
      renderTable(filtered);
    } else {
      renderTable(employees);
    }
  });

  // モーダル閉じるボタンのイベント設定
  const dialog = document.getElementById('detail-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  closeBtn.addEventListener('click', () => {
    dialog.close();
  });
});

/**
 * 社員一覧テーブルを描画する
 * @param {Array} list - 表示する社員リスト (引数がない場合は全社員)
 */
function renderTable(list = employees) {
  const listBody = document.getElementById('employee-list');
  listBody.innerHTML = '';

  list.forEach(emp => {
    const age = calculateAge(emp.birthDate);
    const fullName = `${emp.name.last} ${emp.name.first}`;

    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${emp.id}</td>
            <td>${fullName}</td>
            <td>${emp.department}</td>
            <td>${age}歳</td>
            <td>
                <button onclick="showDetail(${emp.id})" class="btn btn-primary btn-sm">詳細</button>
            </td>
        `;
    listBody.appendChild(tr);
  });
}

/**
 * 詳細モーダルを表示する
 * @param {number} id - 社員ID
 */
function showDetail(id) {
  const emp = employees.find(e => e.id === id);
  if (!emp) return;

  const dialog = document.getElementById('detail-modal');

  // 年齢計算
  const age = calculateAge(emp.birthDate);
  // 給与計算
  const totalSalary = calculateTotalSalary(emp.basicSalary, emp.licenses.length);

  // データセット
  document.getElementById('modal-id').textContent = emp.id;
  document.getElementById('modal-name').textContent = `${emp.name.last} ${emp.name.first}`;
  document.getElementById('modal-birth').textContent = emp.birthDate;
  document.getElementById('modal-age').textContent = age;
  document.getElementById('modal-dept').textContent = emp.department;
  document.getElementById('modal-salary').textContent = totalSalary.toLocaleString();

  // 資格リスト
  const listEl = document.getElementById('modal-licenses');
  listEl.innerHTML = '';
  if (emp.licenses.length > 0) {
    emp.licenses.forEach(lic => {
      const li = document.createElement('li');
      li.textContent = lic;
      listEl.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = "なし";
    listEl.appendChild(li);
  }

  dialog.showModal();
}

/**
 * 年齢を計算する
 * @param {string} birthDateString - YYYY-MM-DD
 * @returns {number} 年齢
 */
function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

/**
 * 総支給額を計算する
 * @param {number} grade - 基本給グレード (1-5)
 * @param {number} licenseCount - 資格数
 * @returns {number} 総支給額
 */
function calculateTotalSalary(grade, licenseCount) {
  const baseSalary = SALARY_TABLE[grade];
  const bonus = licenseCount * 5000;
  return baseSalary + bonus;
}