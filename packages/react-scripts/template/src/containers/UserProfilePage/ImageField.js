import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { deepOrange } from '@material-ui/core/colors';
import {
  usePopupState,
  bindTrigger,
  bindMenu
} from 'material-ui-popup-state/hooks';

import config from 'config';

const useStyles = makeStyles(theme => ({
  avatarButton: {
    borderRadius: 9999,
    boxShadow: theme.shadows[1]
  },
  avatar: {
    width: 80,
    height: 80,
    color: '#fff',
    backgroundColor: deepOrange[500]
  },
  avatarImg: {
    width: 80,
    height: 80
  }
}));

export default function ImageField({ value, setFieldValue, name, user }) {
  const menuState = usePopupState({
    variant: 'popover',
    popupId: 'image-upload-menu'
  });

  const classes = useStyles();

  function handleOnFileUpload(event) {
    setFieldValue(name, event.currentTarget.files[0]);
  }

  function handleRemove() {
    setFieldValue(name, null);
    menuState.close();
  }

  return (
    <>
      <ButtonBase className={classes.avatarButton} {...bindTrigger(menuState)}>
        {value ? (
          <Avatar
            alt="User avatar"
            src={
              typeof value === 'string'
                ? `${config.api.cdn}${value}`
                : URL.createObjectURL(value)
            }
            className={classes.avatarImg}
          />
        ) : (
          <Avatar alt="User avatar" className={classes.avatar}>
            {user.firstName[0]}
            {user.lastName[0]}
          </Avatar>
        )}
      </ButtonBase>
      <Menu keepMounted {...bindMenu(menuState)}>
        <MenuItem component="label" onClick={menuState.close}>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleOnFileUpload}
          />
          Upload
        </MenuItem>
        {value && <MenuItem onClick={handleRemove}>Remove</MenuItem>}
      </Menu>
    </>
  );
}

ImageField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  setFieldValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};
