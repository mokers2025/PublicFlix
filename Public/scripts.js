document.addEventListener('DOMContentLoaded', () => {
    const listEl = document.getElementById('videosList');
    fetch('/videos')
      .then(res => res.json())
      .then(videos => {
        if (!videos.length) {
          listEl.innerHTML = '<div class="alert alert-info">No movies uploaded yet.</div>';
          return;
        }
        listEl.innerHTML = videos.map(({name, url, downloadUrl}) =>
          `<div class="col-md-6 col-lg-4">
             <div class="card shadow-sm">
               <div class="card-video">
                 <video controls src="${url}" preload="metadata"></video>
               </div>
               <div class="card-body">
                 <h6 class="card-title text-truncate">${name}</h6>
                 <a href="${downloadUrl}" class="btn btn-outline-secondary btn-sm">Download</a>
               </div>
             </div>
           </div>`
        ).join('');
      })
      .catch(err => console.error(err));
  });
  