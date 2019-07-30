import { useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { useInjectReducer } from 'utils/injectReducer';

import reducer from './reducer';

const key = 'notifier';

export function Notifier({
  notifications,
  enqueueSnackbar,
  removeSnackbar,
  closeSnackbar
}) {
  useInjectReducer({ key, reducer });
  const displayed = useRef([]);

  useEffect(() => {
    if (!notifications.length) {
      displayed.current = [];
      return;
    }

    notifications.forEach(({ key, message, dismissed, options = {} }) => {
      if (displayed.current.includes(key)) return;

      if (dismissed) {
        closeSnackbar(key);
        removeSnackbar(key);
      } else {
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, key) => {
            if (options.onClose) {
              options.onClose(event, reason, key);
            }
            removeSnackbar(key);
          }
        });

        storeDisplayed(key);
      }
    });
  });

  const storeDisplayed = id => {
    displayed.current = [...displayed.current, id];
  };

  return null;
}

Notifier.propTypes = {
  notifications: PropTypes.array,
  removeSnackbar: PropTypes.func,
  enqueueSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func
};

export default memo(Notifier);
