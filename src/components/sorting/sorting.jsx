import React from "react";
import PropTypes from "prop-types";
import {SortType} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";


const Sorting = ({isOpen, onOpenChange, onChangeSortedType, currentSortType}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type"
        tabIndex="0"
        onClick={() => {
          onOpenChange(isOpen);
        }}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && `places__options--opened`}`}>
        {
          Object.values(SortType).map((type, i) => (
            <li key={`${type}-${i}`}
              className={`places__option ${currentSortType === type && `places__option--active`}`}
              onClick={() => {
                onChangeSortedType(type);
                onOpenChange(isOpen);
              }}
              tabIndex={i}>
              {type}
            </li>))
        }
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  onOpenChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onChangeSortedType: PropTypes.func.isRequired,
};

const mapStateToProps = ({currentSortType}) => ({
  currentSortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSortedType(sortedType) {
    dispatch(ActionCreator.setSortedType(sortedType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);