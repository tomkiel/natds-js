/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import { useState } from '@storybook/client-api'
import { Dialog } from '.'
import { DialogProps } from './Dialog.props'
import { DialogHeader } from './DialogHeader'
import { DialogBody } from './DialogBody'
import { DialogFooter } from './DialogFooter'

import { Button } from '../Button'
import { IconButton } from '../IconButton'

const componentStatus = `
---

Attribute status:

- ✅ **Divider**
- **Size**
    - ❌  \`small\`
    - ❌  \`medium\`
    - ❌  \`large\`

---
`

export default {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: { DialogTitle: DialogHeader, DialogBody, DialogAction: DialogFooter },
  parameters: {
    componentSubtitle: 'Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<DialogProps> = (args) => {
  const [showDialog, setShowDialog] = useState(args.openDialog)

  return (
    <>
      <Button text="open dialog" onClick={() => setShowDialog(!showDialog)} />
      <Dialog {...args} openDialog={showDialog} ariaLabelledBy="dialog-title" ariaDescribedBy="dialog-description">
        <DialogHeader title="Example" id="dialog-title" />
        <DialogBody showDivider>
          <p id="dialog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas nec imperdiet orci, quis facilisis erat.
            Vivamus ornare ipsum nunc, et dictum magna sollicitudin eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </DialogBody>
        <DialogFooter>
          <Button text="close" onClick={() => setShowDialog(false)} />
        </DialogFooter>
      </Dialog>
    </>
  )
}
Playground.args = { testID: 'ds-dialog', openDialog: false }