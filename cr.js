document.addEventListener("DOMContentLoaded", function () {
    // Cegah salin kecuali di input link download
    document.addEventListener("copy", function (e) {
      const activeElement = document.activeElement;
      const isException = activeElement && activeElement.id === "manualDownloadLink";

      if (!isException) {
        e.preventDefault();
        const tambahan = "Dilarang keras menyalin konten ini tanpa izin. [ THE ONGERS ] Securing Dreams";
        const clipboardData = e.clipboardData || window.clipboardData;
        if (clipboardData) {
          clipboardData.setData("text/plain", tambahan);
        }
      }
    });

    // Blokir kombinasi tombol tertentu dan redirect
    document.addEventListener("keydown", function (e) {
      const isF12 = e.key === "F12" || e.keyCode === 123;
      const isCtrlU = e.ctrlKey && e.key.toLowerCase() === "u";
      const isCtrlShiftI = e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i";

      if (isF12 || isCtrlU || isCtrlShiftI) {
        window.location.href = "https://heylink.me/TheOngers/";
        e.preventDefault();
        return false;
      }
    });
  });
