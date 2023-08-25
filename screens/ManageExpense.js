import { Text } from "react-native";

function ManageExpense({ route }) {
  const editedExpensesId = route.params?.expenseId;
  const isEditing = !!editedExpensesId;

  return <Text>Manage Expense</Text>;
}

export default ManageExpense;
