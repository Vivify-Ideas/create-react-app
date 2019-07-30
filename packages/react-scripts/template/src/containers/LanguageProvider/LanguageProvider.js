import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

export default function LanguageProvider({ locale, messages, children }) {
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      massages={messages[locale]}
      textComponent={React.Fragment}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};
