document.addEventListener("DOMContentLoaded", function () {
        const videoPlayer = document.getElementById("videoPlayer");
        const episodeTitle = document.getElementById("episodeTitle");
        const episodeButtonsContainer = document.getElementById("episodeButtons");
        const downloadBtn = document.getElementById("downloadBtn");
        const lowerThird = document.getElementById("lowerThird");

        const adLinks = window.adLinks || ["#"];
        const episodes = window.episodes || [];
        let currentEpisode = episodes[0];
        let downloadClickCount = 0;

        function bukaIklan() {
            const adUrl = adLinks[Math.floor(Math.random() * adLinks.length)];
            window.open(adUrl, "_blank");
        }

        function setEpisode(episode, index) {
            bukaIklan();

            document.querySelectorAll(".episode-button").forEach(b => b.classList.remove("active"));
            episodeButtonsContainer.children[index].classList.add("active");

            videoPlayer.src = episode.url;
            episodeTitle.textContent = episode.title;
            currentEpisode = episode;

            downloadBtn.href = episode.url;
            downloadBtn.setAttribute("download", "");
            videoPlayer.play();
        }

        if (currentEpisode) {
            videoPlayer.src = currentEpisode.url;
            episodeTitle.textContent = currentEpisode.title;
            downloadBtn.href = currentEpisode.url;
            downloadBtn.setAttribute("download", "");
        }

        episodes.forEach((episode, index) => {
            const btn = document.createElement("button");
            btn.textContent = index + 1;
            btn.classList.add("episode-button");
            if (index === 0) btn.classList.add("active");

            btn.addEventListener("click", () => setEpisode(episode, index));
            episodeButtonsContainer.appendChild(btn);
        });

        videoPlayer.addEventListener("play", () => {
            lowerThird.style.display = "block";
        });

        // Fungsi untuk klik tombol download
        downloadBtn.addEventListener("click", function (e) {
            e.preventDefault();
            downloadClickCount++;

            if (downloadClickCount < 3) {
                bukaIklan(); // klik 1 & 2 = iklan
            } else {
                const konfirmasi = confirm("Download sekarang?");
                if (konfirmasi) {
                    const a = document.createElement("a");
                    a.href = currentEpisode.url;
                    a.setAttribute("download", "");
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                } else {
                    window.history.back(); // klik batal = kembali
                }
                downloadClickCount = 0; // reset ulang
            }
        });
    });
