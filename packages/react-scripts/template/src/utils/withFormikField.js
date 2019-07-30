import React from 'react';

export function withFormikField(Component) {
  return ({ field, form, ...props }) => (
    <Component
      error={!!(form.touched[field.name] && form.errors[field.name])}
      {...field}
      {...props}
    />
  );
}
