// /youtube\.com.*(\?v=|\/embed\/)(.{11})/
// http://img.youtube.com/vi/[video-id]/maxresdefault.jpg
// maxresdefault sddefault hqdefault mqdefault
// https://www.youtube.com/watch?v=i_yr6-FLMKs

function getThumbnails(e) {
    e.preventDefault();
    const link = document.getElementById("input-link").value;
    if (link && new RegExp(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).test(link)){
        messageBox.style.display = "none";
        const videoId = link.slice(-11);
        loadThumbnails(videoId);
        return;
    }
    messageBox.style.display = "flex";
}

function loadThumbnails(videoId){
    const maxContainer = document.getElementById("maxContainer");
    const maxImg = document.createElement("img");
    maxImg.src = `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    maxImg.alt = "Max resolution thumbnail";
    maxContainer.innerHTML = null;
    maxContainer.appendChild(maxImg);
    maxContainer.addEventListener("click", () => window.open(`http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, "_blank"));

    const hqContainer = document.getElementById("hqContainer");
    const hqImg = document.createElement("img");
    hqImg.src = `http://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    hqImg.alt = "Hight quality thumbnail";
    hqContainer.innerHTML = null;
    hqContainer.appendChild(hqImg);
    hqContainer.addEventListener("click", () => window.open(`http://img.youtube.com/vi/${videoId}/hqdefault.jpg`, "_blank"));

    const mqContainer = document.getElementById("mqContainer");
    const mqImg = document.createElement("img");
    mqImg.src = `http://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    mqImg.alt = "Medium quality thumbnail";
    mqContainer.innerHTML = null;
    mqContainer.appendChild(mqImg);
    mqContainer.addEventListener("click", () => window.open(`http://img.youtube.com/vi/${videoId}/mqdefault.jpg`, "_blank"));

    const sdContainer = document.getElementById("sdContainer");
    const sdImg = document.createElement("img");
    sdImg.src = `http://img.youtube.com/vi/${videoId}/sddefault.jpg`;
    sdImg.alt = "Standard quality thumbnail";
    sdContainer.innerHTML = null;
    sdContainer.appendChild(sdImg);
    sdContainer.addEventListener("click", () => window.open(`http://img.youtube.com/vi/${videoId}/sddefault.jpg`, "_blank"));
}

const messageBox = document.getElementById("message-box");
const formElement = document.getElementById("search-form");

messageBox.style.display = "none";
formElement.addEventListener('submit', getThumbnails);
