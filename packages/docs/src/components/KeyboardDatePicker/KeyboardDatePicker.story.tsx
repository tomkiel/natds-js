import React, { useState } from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  boolean,
  select,
  text,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  TextField,
  PickersUtilProvider,
  IconButton,
  Icon
} from '@naturacosmeticos/natds-web';

import KeyboardDatePickerDocs from './KeyboardDatePicker.docs.mdx';

export default {
  title: 'Components|Picker/KeyboardDatePicker',
  component: KeyboardDatePicker,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['KeyboardDatePicker'],
    theme: {
      context: 'web',
    },
    docs: {
      page: KeyboardDatePickerDocs,
    },
  },
};

const variants: any = {
  dialog: 'dialog',
  inline: 'inline',
};

const formats: any = {
  'dd/MM': 'dd/MM',
  'dd/MM/yyyy': 'dd/MM/yyyy',
  'dd/MM/yy': 'dd/MM/yy',
  'MM/yy': 'MM/yy',
};

const valuesInlineCheck = {
  Year: 'year',
  Date: 'date',
  Month: 'month',
};

const openTos: any = {
  date: 'date',
  year: 'year',
  month: 'month',
};

export const Interactive = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const textField = (textFieldProps: any) => (
    <TextField
      {...textFieldProps}
      id="random-prop-id"
      type="text"
      icon={<Icon name="outlined-action-calendar" size="tiny"/>}
      onIconPress={() => { setOpen(!isOpen); }}
    />
  );

  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <PickersUtilProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          open={isOpen}
          clearable
          allowKeyboardControl
          keyboardIcon
          placeholder="10/10/2018"
          value={selectedDate}
          label="Only calendar"
          TextFieldComponent={textField}
          variant={select('Variant', variants, variants.dialog)}
          openTo={select('OpenTo', openTos, openTos.date)}
          format={select('Formats', formats, formats['dd/MM/yyyy'])}
          // disableToolbar={boolean('Disabled Toolbar', false)}
          // disableFuture={boolean('Disabled Future', false)}
          // disablePast={boolean('Disabled Past', false)}
          // animateYearScrolling={boolean('Animate Year Scrolling', false)}
          // autoOk={boolean('Auto Ok', false)}
          // disabled={boolean('Disabled', false)}
          // clearable={boolean('Clearable', false)}
          // views={options('Views Check', valuesInlineCheck, ['year'], {
          //   display: 'inline-check',
          // })}
          onChange={setSelectedDate}
          // cancelLabel={text('Cancel Label', 'Cancel')}
          // clearLabel={text('Clear Label', 'Clear')}
          // okLabel={text('OK Label', 'OK')}
        />
      </PickersUtilProvider>
    </div>
  );
};
