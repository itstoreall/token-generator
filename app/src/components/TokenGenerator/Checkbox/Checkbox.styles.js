import s from 'styled-components';

export const BaseCheckboxLabel = s.label`
  display: flex;
  align-items: top;
  font-size: 16px;
`;
export const BaseCheckboxInput = s.input`
  margin-right: 8px;
  cursor: pointer;

  &:focus {
    outline: 3px solid rgb(0 123 255 / 25%);
  }
`;

export const BaseCheckboxDescriptionWrap = s.div``;

export const BaseCheckboxDescription = s.span``;

export const BaseCheckboxLink = s.a`
  color: darkcyan;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
