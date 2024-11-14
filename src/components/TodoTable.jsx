import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { TodoEditableInput } from "./TodoEditableinput";
import { RadioButtonList } from "./RadioButtonList";

export function TodoTable({ todoList, onChange }){
    return (
        <TableContainer>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>タイトル</Th>
                        <Th>ステータス</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {todoList.map((todo)=> (
                    <Tr key={todo.id}>
                        <Td>
                            <TodoEditableInput 
                            title={todo.title}
                            onChangeText={(text) =>
                                onChange(todo.id, { ...todo, title:text})
                             } 
                        />
                        </Td>
                        <Td>
                            <RadioButtonList
                             defaultValue={todo.status}
                             onChangeStatus={(status) =>
                                onChange(todo.id, { ...todo, status: status})
                             } 
                        />
                        </Td>
                    </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
        
    
