import CONFIG from '../../globals/config';

class templatesFavoriteResto extends HTMLElement {
  set restaurantFavorite(restaurant) {
    this._restaurantFavorite = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="mainContent">
        <div tabindex="0" class="explore">
        <h2 class="hExplore">List Restaurant Favorite Kamu</h2>
        <p class="pExplore">Jangan Lupa Healing Bestiieee</p>
        </div>
        <div id="contentArea">
        <div id="hasil" class="listRestaurant"></div>
        </div>
        </div>
        `;

    const listRestaurantFavorite = this.querySelector('#hasil');
    listRestaurantFavorite.innerHTML = '';
    this._restaurantFavorite.forEach((restaurant) => {
      listRestaurantFavorite.innerHTML += `
            <div tabindex="0" id="${restaurant.id}"
            class="katalog">
            <div class="detailResto">
            <p class="kota">Kota ${restaurant.city}</p>
            <img class="fotoResto" src="${CONFIG.LARGE_PICTURE}/${restaurant.pictureId}"
            alt="Gambar Restaurant ${restaurant.name}
            yang berlokasi di Kota ${restaurant.city}"/>
            <p class="rating"><b>Rating</b> : ${restaurant.rating}</p>
            <h3 class="namaRestaurant">${restaurant.name}</h3>
            <p class="keterangan">${restaurant.description.slice(0, 300)}</p>
            </div>
            <button onclick="window.location.href='#/detail/${restaurant.id}'" class="tombolDetail" id="tombolDetail">Lihat Detail</button>
            </div>
            `;
    });
    console.log(this.restaurantFavorite);
  }
}

customElements.define('favorite-restaurant', templatesFavoriteResto);
