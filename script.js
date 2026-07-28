// ================================
// NMS RESOURCE DB
// Ver.1.0
// script.js
// ================================

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultArea = document.getElementById("resultArea");

let database = [];

// --------------------
// JSON読込
// --------------------

fetch("recipes.json")
    .then(response => response.json())
    .then(data => {

        database = data;

        console.log("データベース読込完了");

    })
    .catch(error => {

        console.error("JSON読込エラー", error);

    });


// --------------------
// イベント
// --------------------

searchButton.addEventListener("click", searchResource);

searchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchResource();

    }

});


// --------------------
// 検索
// --------------------

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


// --------------------
// 表示
// --------------------

function showResult(item){

    let html = "";

    html += `<h2>${escapeHtml(item.name)}</h2>`;

    html += showGuide(item);

    html += showRecipes(item);

    html += showConvert(item);

    html += showCollect(item);

    html += showUse(item);

    html += showNote(item);

    resultArea.innerHTML = html;

}

// --------------------
// ガイド
// --------------------

function showGuide(item){

    return "";

}


// --------------------
// レシピ
// --------------------

function showRecipes(item){

    return "";

}


// --------------------
// 変換
// --------------------

function showConvert(item){

    return "";

}


// --------------------
// 採取
// --------------------

function showCollect(item){

    return "";

}


// --------------------
// 用途
// --------------------

function showUse(item){

    return "";

}


// --------------------
// 補足
// --------------------

function showNote(item){

    return "";

}

// --------------------
// HTMLエスケープ
// --------------------

function escapeHtml(text){

    if(text == null){

        return "";

    }

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;");

}
