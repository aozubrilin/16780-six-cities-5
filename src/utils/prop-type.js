import PropTypes from "prop-types";

export const offerPropTypes = PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      city: PropTypes.shape(
          {
            name: PropTypes.string.isRequired,
            coordinates: PropTypes.array.isRequired,
            zoom: PropTypes.number.isRequired,
          }
      ).isRequired,
      description: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      rating: PropTypes.number.isRequired,
      bedroomsCount: PropTypes.number.isRequired,
      adultsCount: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.array.isRequired,
      host: PropTypes.shape(
          {
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isProUser: PropTypes.bool.isRequired,
          }
      ).isRequired,
      previewImage: PropTypes.string.isRequired,
      coordinates: PropTypes.array.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    }
).isRequired;

export const reviewPropTypes = PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isProUser: PropTypes.bool.isRequired,
          }
      ).isRequired,
    }
).isRequired;
