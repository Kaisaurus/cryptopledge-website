import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Button } from 'bloomer'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTrashAlt from '@fortawesome/fontawesome-free-regular/faTrashAlt'

const TrashButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Icon>
    </Button>
  )
}

TrashButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TrashButton
