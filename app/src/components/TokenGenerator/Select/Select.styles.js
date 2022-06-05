import s from 'styled-components';

export const BaseSelectWrap = s.div`
  margin-bottom: 20px;
`;

export const BaseSelectSubtitle = s.h3`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #343a40;
`;

export const BaseSelect = s.div`
  position: relative;
  margin-bottom: 7px;
  font-size: 15px;
  background-color: ${({ disabled }) => disabled && '#e9ecef'};
  border: 1px solid #ced4da;
  border-radius: 4px;

  &:hover {
    border: 1px solid #80bdff;
    outline: 3px solid rgb(0 123 255 / 25%);
    cursor: pointer;
  }
`;

export const BaseSelectHeader = s.div`
  padding: 7px 10px;
`;

export const BaseSelectArrow = s.div`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 18px;
  height: 18px;
`;

export const ListContainer = s.div`
`;

export const List = s.ul`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  margin: 0;
  width: calc(100% - 10px);
  color: #fff;
  list-style: none;
  border-radius: 3px;
  background-color: #696969;
`;

export const Option = s.li`
  position: relative;
  padding: 3px 20px;
  border-radius: 2px;

  &:hover {
    background-color: #6495ED;
  }
`;

export const BaseSelectCheckMark = s.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 14px;
  height: 14px;
`;

export const BaseSelectDescription = s.p`
  font-size: 12px;
  font-weight: 500;
  color: #6c757d;
`;
