import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import LanguageProvider from './LanguageProvider';

import { makeSelectLocale } from './selectors';

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale()
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(LanguageProvider);
