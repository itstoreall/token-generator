import s from 'styled-components';

export const BaseSwitchWrap = s.div`
  margin-bottom: 20px;
`;

export const BaseSwitchCheckboxWrap = s.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ description }) => (description ? 10 : 0)}px;
`;

export const BaseSwitch = s.div`
  position: relative;
  margin-right: 5px;
  width: 24px;
  height: 14px;
`;

export const CheckboxLabel = s.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  background-color: #e9ecef;
  border: 1px solid #adb5bd;
  border-radius: 15px;
  transition: 0.2s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 1px;
    background-color: #adb5bd;
    transition: 0.2s;
  }
`;

export const Checkbox = s.input`
  position: absolute;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  &:checked + ${CheckboxLabel} {
    background-color: rgba(0,123,255,.5);
    border-color: #007bff;
    transition: 0.2s;

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      margin-left: 11px;
      background-color: #ffffff;
      transition: 0.2s;
    }
  }
`;

export const BaseSwitchText = s.span`
  font-size: 14px;
  font-weight: 500;
  color: #6c757d;
`;

export const BaseSwitchDescription = s.span`
  font-size: 12px;
  font-weight: 500;
  color: #6c757d;
`;
