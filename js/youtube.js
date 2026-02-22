const API_KEY = "TU_API_KEY_ACA";
const VIDEO_URL = "https://www.youtube.com/watch?v=cHfrfyDLfgw";

const videoId = new URL(VIDEO_URL).searchParams.get("v");

async function loadYouTubeVideo() {
  const container = document.getElementById("youtube-card");

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );

    const data = await res.json();
    const video = data.items[0].snippet;

    container.innerHTML = `
      <div class="youtube-frame">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}"
          allowfullscreen
        ></iframe>
      </div>

      <div class="youtube-title">${video.title}</div>
      <div class="youtube-description">${video.description}</div>
    `;

  } catch (err) {
    container.innerHTML = "<p>Error cargando el video</p>";
    console.error(err);
  }
}

loadYouTubeVideo();
