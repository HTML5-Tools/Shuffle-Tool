function randomize(arr){
    for (let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};


const listItems = document.querySelector("#list-items");
const shuffleBtn = document.querySelector("#shuffleButton");
const resultElem = document.querySelector("#result");
const saveSetsBtn = document.querySelector("#saveSettingsButton");

function shuffleList() {
    const listArr = listItems.value.split("\n");
    const shuffledArr = randomize(listArr);
    resultElem.value = shuffledArr.join("\n");
}

function saveSettings() {
    localStorage.setItem("listItems", listItems.value);
    localStorage.setItem("result", resultElem.value);
    window.alert("設定を保存しました。");
}
function loadSettings() {
    listItems.value = localStorage.getItem("listItems") || "";
    resultElem.value = localStorage.getItem("result") || "";
}
loadSettings();

shuffleBtn.addEventListener("click", () => {
    if(listItems.value == ""){
        window.alert("リストが入力されていません。");
        return;
    }
    shuffleList();
});
saveSetsBtn.addEventListener("click", saveSettings);