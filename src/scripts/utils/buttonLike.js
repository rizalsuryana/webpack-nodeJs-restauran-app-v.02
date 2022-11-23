import { templatesButtonLike, templatesButtonLiked } from '../view/templates/template-button';
import favoritesResto from '../data/favorite-resto';

const like = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton;
    this._restaurant = restaurant;

    await this.rederLikeButton();
  },

  async rederLikeButton() {
    const { id } = this._restaurant;

    if (await this.isRestoLiked(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoLiked(id) {
    const restaurant = await favoritesResto.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this._likeButton.innerHTML = templatesButtonLike();

    const buttonLike = document.querySelector('#loveButtonElement');
    buttonLike.addEventListener('click', async () => {
      await favoritesResto.putRestaurant(this._restaurant);
      this.rederLikeButton();
    });
  },

  renderLiked() {
    this._likeButton.innerHTML = templatesButtonLiked();

    const buttonLike = document.querySelector('#loveButtonElement');
    buttonLike.addEventListener('click', async () => {
      await favoritesResto.deleteRestaurant(this._restaurant.id);
      this.rederLikeButton();
    });
  },
};

export default like;
