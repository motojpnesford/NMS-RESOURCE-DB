// ================================
// NMS RESOURCE DB
// Ver.0.1
// ================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultArea = document.getElementById("resultArea");

// 検索ボタン
searchButton.addEventListener("click", searchResource);

// Enterキーでも検索
searchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        searchResource();
    }

});

// 検索処理
function searchResource(){

    const keyword = searchInput.value.trim();

    if(keyword === ""){

        resultArea.innerHTML = "資源名を入力してください。";
        return;

    }

    // Ver.0.1ではまだ検索機能は未実装
    resultArea.innerHTML =
    `
    <h2>${keyword}</h2>
    <p>検索機能は次回実装します。</p>
    `;

}
