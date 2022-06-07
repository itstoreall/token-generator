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
  BaseSelectInfoBlock,
} from './Select.styles.js';
import SelectArrow from './SelectArrow.tsx';
import SelectCheckMark from './SelectCheckMark.tsx';

const Select = ({ subtitle, name, options, description, disable, bg }) => {
  console.log('Select render');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: String) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  selectedOption && console.log(selectedOption);
  selectedOption && console.log('name', name);

  return (
    <BaseSelectWrap className={`BaseSelectWrap-${name}`}>
      <BaseSelectSubtitle className={`BaseSelectSubtitle-${name}`}>
        {subtitle}
      </BaseSelectSubtitle>

      <BaseSelect className={`BaseSelect-${name}`} disable={disable} bg={bg}>
        <BaseSelectHeader
          className={`BaseSelectHeader-${name}`}
          onClick={disable === false ? toggling : null}
        >
          {selectedOption || options[0]}
          <SelectArrow className={`SelectArrow-${name}`} disable={disable} />
        </BaseSelectHeader>

        {isOpen && (
          <ListContainer className={`ListContainer-${name}`}>
            <List className={`List-${name}`}>
              {options.map((option: String) => (
                <Option
                  className={`Option-${name}`}
                  onClick={onOptionClicked(option)}
                  key={Math.random()}
                >
                  {option === selectedOption && (
                    <SelectCheckMark className='SelectCheckMark' />
                  )}
                  {option}
                </Option>
              ))}
            </List>
          </ListContainer>
        )}
      </BaseSelect>

      <BaseSelectDescription
        className={`BaseSelectDescription-${name}`}
        mb={
          name === 'select_network' && selectedOption !== 'Mainnet Beta Network'
            ? 20
            : 0
        }
      >
        {description}
      </BaseSelectDescription>

      {name === 'select_network' &&
        (selectedOption === 'Testnet Network' ||
          selectedOption === 'Devnet Network') && (
          <BaseSelectInfoBlock className={`BaseSelectInfoBlock-${name}`}>
            <b>{`You selected a ${selectedOption}.`}</b>
            <hr color='#ffe8a1' size='1' />
            {
              <p>
                To deploy on Mainnet Network you must select Mainnet Beta
                Network.
              </p>
            }
          </BaseSelectInfoBlock>
        )}
    </BaseSelectWrap>
  );
};

export default Select;
