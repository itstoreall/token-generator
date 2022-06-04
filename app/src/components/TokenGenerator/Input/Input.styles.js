import s from 'styled-components';

export const BaseInputWrap = s.div`
  margin-bottom: 20px;
`;

export const BaseInput = s.input`
  padding: 12px 15px;
  margin-bottom: 7px;
  width: calc(100% - 34px);
  font-size: 18px;
  background-color: ${({ disabled }) => disabled && '#e9ecef'};
  border: 1px solid #ced4da;
  border-radius: 4px;

  &:focus {
    border: 1px solid #80bdff;
    outline: 3px solid rgb(0 123 255 / 25%);
  }
`;

export const BaseInputSubtitle = s.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #343a40;
`;

export const BaseInputDescription = s.p`
  font-size: 12px;
  font-weight: 500;
  color: #6c757d;
`;
