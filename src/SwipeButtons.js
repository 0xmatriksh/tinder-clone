import React from 'react'
import './SwipeButton.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite'
import StarRateIcon from '@material-ui/icons/StarRate'
import FlashOnIcon from '@material-ui/icons/FlashOn'

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipe__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipe__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
