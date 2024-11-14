import { Editable, EditablePreview , EditableInput } from "@chakra-ui/react";

export function TodoEditableInput({ title, onChangeText }) {
    return (
        <Editable
        defaultValue={ title }
      value={title}
      placeholder="Click to edit"
    >
      <EditablePreview />
      <EditableInput onChange={(e) => onChangeText(e.target.value)} />
    </Editable>
    );
}