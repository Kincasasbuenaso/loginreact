import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/_description.scss';

export const Description = ({description = "this product not have description."}) => {
    return (
        <div className="description__container container mt-4">
            <h4 className="description__title">Description</h4>
            <p className="description__details">
                {description}
            </p>
        </div>
    )
}

Description.propTypes = {
    description: PropTypes.string
}