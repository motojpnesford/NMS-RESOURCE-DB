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

// --------------------
// おすすめ手順
// --------------------

function showGuide(item){

    if(!item.guide || item.guide.length === 0){
        return "";
    }

    let body = "";

    item.guide.forEach(text => {

        body += `
            <p>${escapeHtml(text)}</p>
        `;

    });

    return createSection("おすすめ増殖手順", body);

}
// --------------------
// 精製レシピ
// --------------------

function showRecipes(item){

    if(!item.recipes || item.recipes.length === 0){

        return "";

    }

    let body = "";

    item.recipes.forEach(recipe => {

        // 材料
        recipe.ingredients.forEach(material => {

            body += `
                ${escapeHtml(material.item)} × ${material.amount}<br>
            `;

        });

        // 精製機
        body += `
            <br>
            ↓<br>
            <small>${escapeHtml(recipe.machine)}</small>
            <br><br>
        `;

        // 完成品
        body += `
            ${escapeHtml(recipe.result.item)} × ${recipe.result.amount}
            <br><br>
        `;

    });

    return createSection("精製レシピ", body);

}


// --------------------
// 変換
// --------------------

function showConvert(item){

    if(!item.convert || item.convert.length === 0){
        return "";
    }

    let body = "";

    item.convert.forEach(text => {

        body += `
            <p>${escapeHtml(text)}</p>
        `;

    });

    return createSection("変換", body);

}
// --------------------
// 採取
// --------------------

function showCollect(item){

    if(!item.collect || item.collect.length === 0){
        return "";
    }

    let body = "";

    item.collect.forEach(text => {

        body += `
            <p>${escapeHtml(text)}</p>
        `;

    });

    return createSection("採取", body);

}

// --------------------
// 用途
// --------------------

function showUse(item){

    if(!item.use || item.use.length === 0){
        return "";
    }

    let body = "";

    item.use.forEach(text => {

        body += `
            <p>${escapeHtml(text)}</p>
        `;

    });

    return createSection("用途", body);

}

// --------------------
// 補足
// --------------------

function showNote(item){

    if(!item.note || item.note.length === 0){
        return "";
    }

    let body = "";

    item.note.forEach(text => {

        body += `
            <p>${escapeHtml(text)}</p>
        `;

    });

    return createSection("補足", body);

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

// --------------------
// セクション作成
// --------------------

function createSection(title, body){

    if(body === ""){

        return "";

    }

    return `
        <hr>
        <h3>${title}</h3>
        ${body}
    `;

}
