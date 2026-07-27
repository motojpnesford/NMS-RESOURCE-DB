// ================================
// NMS RESOURCE DB
// Ver.0.2
// ================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultArea = document.getElementById("resultArea");

let database = [];

// JSONを読み込む
fetch("recipes.json")
    .then(response => response.json())
    .then(data => {
        database = data;
        console.log("データベース読込完了");
    })
    .catch(error => {
        console.error("JSON読込エラー", error);
    });

// ボタンクリック
searchButton.addEventListener("click", searchResource);

// Enterキー
searchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        searchResource();
    }

});

// 検索
function searchResource(){

    const keyword = searchInput.value.trim();

    if(keyword === ""){
        resultArea.innerHTML = "資源名を入力してください。";
        return;
    }

    const item = database.find(data => data.name === keyword);

    if(!item){
        resultArea.innerHTML = "見つかりませんでした。";
        return;
    }

    showResult(item);

}

// 結果表示
function showResult(item){

    let html = `<h2>${item.name}</h2>`;

    // レシピがある場合だけ表示
    if(item.recipes.length > 0){

        item.recipes.forEach((recipe, index) => {

            html += `<h3>増やし方 ${index + 1}</h3>`;

            recipe.ingredients.forEach(material => {

                html += `${material.item} × ${material.amount}<br>`;

            });

            html += "↓<br>";

            html += `${item.name} × ${recipe.result.amount}<br>`;

            html += `<small>${recipe.machine}</small><br><br>`;

        });

    }

    // メッセージは必ず表示
    html += `<hr>`;
    html += `<p>${item.message}</p>`;

    resultArea.innerHTML = html;

}
