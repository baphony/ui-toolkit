import * as React from 'react';
import Select from 'react-select';
import { ClearIndicator, Control, DefaultOptionRenderer, DefaultTagRenderer, DropdownIndicator, MultiValueContainerOverride, MultiValueRemove, SingleValue } from './CustomRender';
import { DropdownOption, LabelValue, OptionRendererProps, TagRendererProps } from './interfaces';

// css baseclass prefix
const prefix = 'tk-select';

export type DropdownProps<T> = {
  options: DropdownOption<T>[];
  defaultValue?: T;
  /** Enables the indicator to expand the Dropdown */
  displayArrowIndicator?: boolean;
  isDisabled?: boolean;
  id?: string;
  placeHolder?: string;
  label?: string
  onBlur?: (e)=>any;
  className?: string;
  /** Used to override the default appearance of the list items. */
  optionRenderer?: React.Component<OptionRendererProps<T>, any> | React.FunctionComponent<OptionRendererProps<T>>;
  /** Used to override the default appearance of the dropdown select input item/s */
  tagRenderer?: React.Component<TagRendererProps<T>, any> | React.FunctionComponent<TagRendererProps<T>>;
  /* It renders an icon on the left side of the dropdown input*/
  iconName?: string;
  /** Close the expanded menu when the user selects an option */
  closeMenuOnSelect?: boolean;
  /** Hide the selected option from the list */
  hideSelectedOptions?: boolean;
  /** Enables the indicator to fully clear the selected content */
  isInputClearable?: boolean;
  /** Allows the usage of the component in controlled value mode */
  value?: T
} & (OnChangeMultiProps<T> | OnChangeSingleProps<T>);

type OnChangeMultiProps<T> = {
  isMultiSelect:true;
  onChange?: (value:T[])=>any;
}
type OnChangeSingleProps<T> = {
  isMultiSelect?:false;
  onChange?: (value:T)=>any;
}

type DropdownState<T> = {
  selectedOption: T;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  displayArrowIndicator?: boolean;
}

class Dropdown<T=LabelValue> extends React.Component<DropdownProps<T>, DropdownState<T>> {

  state = {
    selectedOption: null,
    hideSelectedOptions: (this.props?.isMultiSelect || !!this.props?.hideSelectedOptions),
    closeMenuOnSelect: !!(!this.props?.isMultiSelect || this.props?.closeMenuOnSelect),
    displayArrowIndicator: !!(!this.props?.isMultiSelect || this.props?.displayArrowIndicator)
  };

  handleChange = (selectedOption) => {
    if(this.props.onChange){
      this.props.onChange(selectedOption);
    }
  };

  render() {
    const { hideSelectedOptions, closeMenuOnSelect, displayArrowIndicator } = this.state;
    const { isMultiSelect, isDisabled, placeHolder, options, id, defaultValue, onBlur, isInputClearable, label, optionRenderer, iconName,tagRenderer, value} = this.props;

    return (
      <div>
        <Select
          displayArrowIndicator={displayArrowIndicator}
          optionRenderer={optionRenderer}
          tagRenderer={tagRenderer}
          isClearable={isInputClearable}
          label={label}
          components={{ 
            DropdownIndicator, 
            Control, 
            SingleValue, 
            Option: DefaultOptionRenderer, 
            MultiValueContainer: MultiValueContainerOverride,
            MultiValue: DefaultTagRenderer, 
            ClearIndicator, 
            MultiValueRemove
          }}
          defaultValue={defaultValue}
          id={id}
          className={prefix}
          closeMenuOnSelect={closeMenuOnSelect}
          classNamePrefix={prefix}
          value={value}
          onChange={this.handleChange}
          onBlur={onBlur}
          options={options}
          hideSelectedOptions={hideSelectedOptions}
          placeholder={placeHolder}
          isMulti={isMultiSelect}
          isDisabled={isDisabled}
          iconName={iconName}
        />
      </div>
    );
  }
  
  static defaultProps = {
    isDisabled: false,
    isMultiSelect: false,
    isInputClearable: false
  }
}

export default Dropdown;