function bukaIklan() {
    const adUrl = adLinks[Math.floor(Math.random() * adLinks.length)];

    // Buat overlay iklan
    const adOverlay = document.createElement("div");
    adOverlay.style.position = "fixed";
    adOverlay.style.top = "0";
    adOverlay.style.left = "0";
    adOverlay.style.width = "100%";
    adOverlay.style.height = "100%";
    adOverlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    adOverlay.style.zIndex = "9999";
    adOverlay.style.display = "flex";
    adOverlay.style.justifyContent = "center";
    adOverlay.style.alignItems = "center";

    // Buat iframe iklan
    const iframe = document.createElement("iframe");
    iframe.src = adUrl;
    iframe.style.width = "80%";
    iframe.style.height = "80%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "8px";
    adOverlay.appendChild(iframe);

    // Buat tombol close
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "20px";
    closeBtn.style.right = "20px";
    closeBtn.style.padding = "10px 15px";
    closeBtn.style.fontSize = "18px";
    closeBtn.style.border = "none";
    closeBtn.style.backgroundColor = "#f00";
    closeBtn.style.color = "#fff";
    closeBtn.style.borderRadius = "5px";
    closeBtn.style.cursor = "not-allowed";
    closeBtn.disabled = true;
    adOverlay.appendChild(closeBtn);

    // Tambahkan ke body
    document.body.appendChild(adOverlay);

    // Aktifkan tombol close setelah 15 detik
    setTimeout(() => {
        closeBtn.disabled = false;
        closeBtn.style.cursor = "pointer";
    }, 15000); // 15000ms = 15 detik

    // Event tombol close
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(adOverlay);
    });
}
