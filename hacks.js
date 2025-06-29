document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk tampilkan gambar & suara lalu redirect
  function showWarningImageAndRedirect() {
    // Buat elemen latar belakang
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "black";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    // Tambahkan gambar
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/OGg8UQQ.gif";
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    overlay.appendChild(img);

    // Tambahkan audio alarm
    const audio = document.createElement("audio");
    audio.src = "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"; // URL alarm, bisa diganti
    audio.autoplay = true;
    audio.loop = true;
    overlay.appendChild(audio);

    document.body.appendChild(overlay);

    // Redirect setelah 5 detik
    setTimeout(function () {
      window.location.href = "https://www.theongersmovie.com";
    }, 5000);
  }

  // Cegah salin kecuali di input link download
  document.addEventListener("copy", function (e) {
    const activeElement = document.activeElement;
    const isException = activeElement && activeElement.id === "manualDownloadLink";

    if (!isException) {
      e.preventDefault();
      const tambahan = "Dilarang keras menyalin konten ini tanpa izin. The Ongers - https://www.theongersmovie.com";
      const clipboardData = e.clipboardData || window.clipboardData;
      if (clipboardData) {
        clipboardData.setData("text/plain", tambahan);
      }
    }
  });

  // Blokir kombinasi tombol & tampilkan gambar dan suara
  document.addEventListener("keydown", function (e) {
    const isF12 = e.key === "F12" || e.keyCode === 123;
    const isCtrlU = e.ctrlKey && e.key.toLowerCase() === "u";
    const isCtrlShiftI = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i";

    if (isF12 || isCtrlU || isCtrlShiftI) {
      e.preventDefault();
      showWarningImageAndRedirect();
      return false;
    }
  });

  // Blokir klik kanan
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
});
