// @ts-nocheck
import { useState } from 'react';
import {
  BaseSelectWrap,
  BaseSelectSubtitle,
  BaseSelect,
  BaseSelectHeader,
  ListContainer,
  List,
  Option,
  BaseSelectDescription,
} from './Select.styles.js';
import SelectArrow from './SelectArrow.tsx';
import SelectCheckMark from './SelectCheckMark.tsx';

const Select = ({ subtitle, options, description }) => {
  console.log('Select render');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  selectedOption && console.log(selectedOption);

  return (
    <BaseSelectWrap className='BaseSelectWrap'>
      <BaseSelectSubtitle className='BaseSelectSubtitle'>
        {subtitle}
      </BaseSelectSubtitle>
      <BaseSelect className='BaseSelect'>
        <BaseSelectHeader className='BaseSelectHeader' onClick={toggling}>
          {selectedOption || options[0]}
          <SelectArrow />
        </BaseSelectHeader>

        {isOpen && (
          <ListContainer className='ListContainer'>
            <List className='List'>
              {options.map(option => (
                <Option
                  className='Option'
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option === selectedOption && <SelectCheckMark />}
                  {option}
                </Option>
              ))}
            </List>
          </ListContainer>
        )}
      </BaseSelect>
      <BaseSelectDescription className='BaseSelectDescription'>
        {description}
      </BaseSelectDescription>
    </BaseSelectWrap>
  );
};

export default Select;
