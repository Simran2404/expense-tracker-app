import { FlatList } from "react-native";
function renderExpenseItem(itemData) {
  return <Text>{itemData.item}</Text>;
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
}

export default ExpensesList;
