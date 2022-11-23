const templatesButtonLike = () => `
    <button arial-label="Tombol untuk menambahkan restaurant ke daftar favorite"
    id="loveButtonElement" class="loveButton"><i arial-hidden="true" class="fa fa-heart-o"></i></button>
    `;

const templatesButtonLiked = () => `
    <button arial-label="Tombol untuk menghapus restoran dari daftar favorite"
    id="loveButtonElement" class="loveButton"><i arial-hidden="true" class="fa fa-heart"></i></button>
    `;

export {
  templatesButtonLike,
  templatesButtonLiked,
};
